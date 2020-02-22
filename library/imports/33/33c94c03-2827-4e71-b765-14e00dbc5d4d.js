"use strict";
cc._RF.push(module, '33c94wDKCdOcbdlFOANvF1N', 'hp');
// Script/hp.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            default: null,
            type: cc.ProgressBar
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},


    update: function update(dt) {
        this.hp.progress = Global.HP / 100;
    }
});

cc._RF.pop();