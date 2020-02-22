cc.Class({
    extends: cc.Component,

    properties: {
        hit_audio: {
            default: null,
            type: cc.AudioClip,
        },
        speed: 0,
        timer: 0,
        angle: 0,
        x_speed: 0,
        isShooted: 0,
        y_min: -280,
        wolfGet: 0,
        wolfUnder: 0,
        wolfEnd: 0,
        animPlay: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function(other, self) {
        cc.audioEngine.setEffectsVolume(0.05);
        cc.audioEngine.playEffect(this.hit_audio, false);
        var ball = this.node.getChildByName('ball');
        ball.destroy();
        this.angle = 6;
        this.x_speed++;
        this.isShooted = 1;
        this.y_min = -350;
    },

    wolfFire: function() {
        this.node.getChildByName('fire').getComponent(cc.Animation).play();
        this.animPlay = 1;
    },

    wolfAction: function() {
        if (!this.wolfGet) {
            var ball = this.node.getChildByName('ball');
            ball.destroy();
            this.wolfGet = 1;
            this.node.setSiblingIndex(5);
        }
        if (!this.wolfUnder && Global.wolfUnderLadder == 4)
            this.node.x += 3;
        else if (this.node.x >= 395 && !this.wolfEnd) {
            this.node.y++;
            if (!this.wolfUnder) {
                Global.wolfUnderLadder++;
                this.wolfUnder = 1;
            }
            if (this.node.y >= -200 + Global.wolfAtLadder * 90) {
                this.wolfEnd = 1;
                Global.wolfAtLadder++;
            }
        } else if (!this.wolfEnd)
            this.node.x += 3;
        if (this.wolfEnd == 1 && !this.animPlay)
            this.wolfFire();
    },

    updateNum: function() {
        if (this.node.x >= 450) {
            this.node.destroy();
            Global.number_wolf++;
        }
    },

    start() {

    },

    update: function(dt) {
        if (this.node.y >= this.y_min && this.wolfGet == 0) {
            this.timer += 1;
            this.node.y -= this.speed;
            this.node.x -= this.x_speed;
            this.node.angle += this.angle;
            this.timer = 0;
            if (this.node.y <= -320)
                this.node.destroy();
        } else
            this.wolfAction();
        this.updateNum();
    },
});