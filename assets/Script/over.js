cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onClickOk: function() {
        cc.director.loadScene('gameStart');
    },

    start() {

    },

    // update (dt) {},
});