"use strict";
cc._RF.push(module, '56e68iV4ctHd7UMTOS+Yfg2', 'game');
// Script/game.js

'use strict';

window.Global = {
    score: 0,
    number_wolf: 0,
    wolfAtLadder: 0,
    wolfUnderLadder: 0,
    HP: 100
};

cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefab: {
            default: null,
            type: cc.Prefab
        },
        wolfPrefab: {
            default: null,
            type: cc.Prefab
        },
        player: {
            default: null,
            type: cc.Node
        },
        shoot_audio: {
            default: null,
            type: cc.AudioClip
        },
        BGM: {
            default: null,
            type: cc.AudioClip
        },
        numLabel: {
            default: null,
            type: cc.Label
        },
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        alert: {
            default: null,
            type: cc.Node
        },
        gameOverMeg: {
            default: null,
            type: cc.Label
        },
        timer: 0,
        number_wolf: 0,
        wolf_timer: 0,
        tt: 0,
        gameOver: false,
        maxIndex: 10
    },

    spawnNewBullet: function spawnNewBullet() {
        var newBullet = cc.instantiate(this.bulletPrefab);
        newBullet.setPosition(this.getPlayerPosition());
        this.node.addChild(newBullet);
        cc.audioEngine.setEffectsVolume(0.2);
        cc.audioEngine.playEffect(this.shoot_audio, false);
    },

    spawnNewWolf: function spawnNewWolf() {
        var newWolf = cc.instantiate(this.wolfPrefab);
        newWolf.setPosition(-350 + Math.random() * 600, 350);
        this.node.addChild(newWolf);
        Global.number_wolf--;
        this.maxIndex++;
    },

    getPlayerPosition: function getPlayerPosition() {
        var mo_x = this.player.getComponent('control_mother').pos_x;
        var mo_y = this.player.getComponent('control_mother').pos_y;
        return cc.v2(mo_x - 50, mo_y - 15);
    },

    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.z:
                this.shoot = true;
                break;
        }
    },
    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.z:
                this.shoot = false;
                break;
        }
    },


    onLoad: function onLoad() {
        this.alert.opacity = 0;
        this.alert.scale = 0;

        this.shoot = false;
        cc.audioEngine.playMusic(this.BGM, true);
        Global.number_wolf = this.number_wolf;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },


    numberOfWolf: function numberOfWolf() {
        this.numLabel.string = "" + Global.number_wolf;
    },

    showScore: function showScore() {
        this.scoreLabel.string = "" + Global.score;
    },

    start: function start() {
        cc.director.resume();
    },


    gameControl: function gameControl() {
        if (Global.HP <= 0) this.gameOver = true;
    },

    FailedGame: function FailedGame() {
        this.alert.setSiblingIndex(this.maxIndex + 1);
        if (this.alert.scale == 0) {
            this.node.active = true;
            var f = cc.fadeTo(0.3, 255);
            this.alert.runAction(f);
            var s = cc.scaleTo(1, 1).easing(cc.easeBackOut());
            this.alert.runAction(s);
            this.gameOverMeg.string = "Your score:" + Global.score;
        } else if (this.alert.scale == 1) cc.director.pause();
    },

    update: function update(dt) {
        this.gameControl();
        if (this.gameOver) this.FailedGame();

        if (this.shoot) {
            if (this.timer % 20 == 0) {
                this.spawnNewBullet();
                this.timer = 0;
            }
            this.timer += 1;
        } else this.timer = 0;

        this.numberOfWolf();
        this.showScore();

        this.wolf_timer += 1;
        if (this.wolf_timer == 10 + this.tt && this.number_wolf != 0) {
            this.spawnNewWolf();
            this.tt = Math.ceil(Math.random() * 100);
            this.wolf_timer = 0;
        }
    }
});

cc._RF.pop();