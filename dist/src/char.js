"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Char_value;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
const utils_1 = require("./utils");
class Char {
    constructor(c) {
        _Char_value.set(this, void 0);
        (0, utils_1.assert)(c.length === 1, `Error: Invalid char, only one character is allowed, but got ${c.length} with value ${c}`);
        __classPrivateFieldSet(this, _Char_value, c.charCodeAt(0), "f");
    }
    get value() {
        return String.fromCharCode(__classPrivateFieldGet(this, _Char_value, "f"));
    }
    static fromString(s) {
        let result = [];
        for (let i = 0; i < s.length; i++) {
            result.push(new Char(s[i]));
        }
        return result;
    }
    static toString(cs) {
        let result = "";
        cs.forEach(c => result += c.value);
        return result;
    }
}
exports.Char = Char;
_Char_value = new WeakMap();
//# sourceMappingURL=char.js.map