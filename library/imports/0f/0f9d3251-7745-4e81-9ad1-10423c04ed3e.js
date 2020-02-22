"use strict";
cc._RF.push(module, '0f9d3JRd0VOgZrREEI8BO0+', 'start');
// Script/start.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onClickOK: function onClickOK() {
        cc.director.loadScene('game01');
    },

    start: function start() {}
}

//update(dt) {},
);

cc._RF.pop();