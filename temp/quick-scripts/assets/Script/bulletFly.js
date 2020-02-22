(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/bulletFly.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7bab56obidHfJBs82kDKT+D', 'bulletFly', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bulletFly.js.map
        