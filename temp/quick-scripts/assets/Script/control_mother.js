(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/control_mother.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9f1c9rLahZEoZz/oWUZzto1', 'control_mother', __filename);
// Script/control_mother.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        },

        pos_x: 0,
        pos_y: 0,
        moveSpeed: 0
    },

    onKeyDown: function onKeyDown(event) {
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
    onKeyUp: function onKeyUp(event) {
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


    setAcction: function setAcction() {
        if (this.accUp && this.node.y <= 155) {
            this.node.y += this.moveSpeed;
        }
        if (this.accDown && this.node.y >= -200) {
            this.node.y -= this.moveSpeed;
        }
        this.pos_x = this.node.x;
        this.pos_y = this.node.y;
    },

    onLoad: function onLoad() {
        this.accUp = false;
        this.accDown = false;

        cc.director.getCollisionManager().enabled = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        Global.HP -= 10;
    },

    start: function start() {},


    update: function update(dt) {
        this.setAcction();
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
        //# sourceMappingURL=control_mother.js.map
        