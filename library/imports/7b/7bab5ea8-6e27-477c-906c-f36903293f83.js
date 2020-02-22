"use strict";
cc._RF.push(module, '7bab56obidHfJBs82kDKT+D', 'bulletFly');
// Script/bulletFly.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        speed: 0
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        Global.score += 15;
        this.node.destroy();
    },

    start: function start() {},


    update: function update(dt) {
        this.node.x -= this.speed;
        if (this.node.x <= -800) this.node.destroy();
    }
});

cc._RF.pop();