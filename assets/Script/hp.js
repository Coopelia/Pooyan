cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            default: null,
            type: cc.ProgressBar,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update: function(dt) {
        this.hp.progress = Global.HP / 100;
    },
});