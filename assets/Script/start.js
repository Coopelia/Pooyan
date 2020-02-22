cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onClickOK: function() {
        cc.director.loadScene('game01');
    },

    start() {

    },

    //update(dt) {},
});