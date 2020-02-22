cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node,
        },

        pos_x: 0,
        pos_y: 0,
        moveSpeed: 0,
    },

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.accUp = true;
                break;
            case cc.macro.KEY.down:
                this.accDown = true;
                break;
            case cc.macro.KEY.shift:
                this.moveSpeed += 2;
                break;
        }
    },

    onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.accUp = false;
                break;
            case cc.macro.KEY.down:
                this.accDown = false;
                break;
            case cc.macro.KEY.shift:
                this.moveSpeed -= 2;
                break;
        }
    },

    setAcction: function() {
        if (this.accUp && this.node.y <= 155) {
            this.node.y += this.moveSpeed;
        }
        if (this.accDown && this.node.y >= -200) {
            this.node.y -= this.moveSpeed;
        }
        this.pos_x = this.node.x;
        this.pos_y = this.node.y;
    },

    onLoad: function() {
        this.accUp = false;
        this.accDown = false;

        cc.director.getCollisionManager().enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onCollisionEnter: function(other, self) {
        Global.HP -= 10;
    },

    start() {

    },

    update: function(dt) {
        this.setAcction();
    },
});