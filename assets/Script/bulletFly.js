cc.Class({
    extends: cc.Component,
    properties: {
        speed: 0,
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function() {
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function(other, self) {
        Global.score += 15;
        this.node.destroy();
    },

    start() {

    },

    update: function(dt) {
        this.node.x -= this.speed;
        if (this.node.x <= -800)
            this.node.destroy();
    },
});