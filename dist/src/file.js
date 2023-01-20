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
var _File_instances, _File_path, _File_checkDelete;
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const fs_1 = require("fs");
const error_1 = require("./error");
class File {
    constructor(path) {
        _File_instances.add(this);
        _File_path.set(this, void 0);
        __classPrivateFieldSet(this, _File_path, path, "f");
        this.log = ["Logged file: " + path];
        if (!(0, fs_1.existsSync)(__classPrivateFieldGet(this, _File_path, "f"))) {
            try {
                (0, fs_1.writeFileSync)(__classPrivateFieldGet(this, _File_path, "f"), "");
            }
            catch (e) {
                throw new error_1.InvalidFilePathError(path);
            }
            this.log.push("Created file: " + __classPrivateFieldGet(this, _File_path, "f"));
        }
    }
    getPath() {
        return __classPrivateFieldGet(this, _File_path, "f");
    }
    getContent() {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        return (0, fs_1.readFileSync)(__classPrivateFieldGet(this, _File_path, "f"), "utf8");
    }
    getMetadata() {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        try {
            const stats = (0, fs_1.statSync)(__classPrivateFieldGet(this, _File_path, "f"));
            this.log.push("Read metadata: " + stats);
            return stats;
        }
        catch (error) {
            this.log.push("Could not read metadata: " + error);
            throw error;
        }
    }
    updateContent(content) {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        (0, fs_1.writeFileSync)(__classPrivateFieldGet(this, _File_path, "f"), content);
        this.log.push("Updated file: " + __classPrivateFieldGet(this, _File_path, "f"));
    }
    addContent(content) {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        (0, fs_1.appendFileSync)(__classPrivateFieldGet(this, _File_path, "f"), content);
        this.log.push("Added content to file: " + __classPrivateFieldGet(this, _File_path, "f"));
    }
    modifyContent(lambda) {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        const fileContent = this.getContent();
        const out = lambda(fileContent);
        this.updateContent(out);
    }
    delete() {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        (0, fs_1.unlinkSync)(__classPrivateFieldGet(this, _File_path, "f"));
        this.log.push("Deleted file: " + __classPrivateFieldGet(this, _File_path, "f"));
        __classPrivateFieldSet(this, _File_path, "null", "f");
        this.log.push("Deleted file");
    }
    copyContent(destFile) {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        __classPrivateFieldGet(destFile, _File_instances, "m", _File_checkDelete).call(destFile);
        destFile.updateContent(this.getContent());
        this.log.push(`Copied content from ${__classPrivateFieldGet(this, _File_path, "f")} into ${__classPrivateFieldGet(destFile, _File_path, "f")}`);
    }
    copy(destFilePath) {
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        (0, fs_1.copyFileSync)(__classPrivateFieldGet(this, _File_path, "f"), destFilePath);
        this.log.push("Copied file: " + __classPrivateFieldGet(this, _File_path, "f"));
    }
    move(newPath) {
        let oldPath = __classPrivateFieldGet(this, _File_path, "f");
        __classPrivateFieldGet(this, _File_instances, "m", _File_checkDelete).call(this);
        (0, fs_1.renameSync)(__classPrivateFieldGet(this, _File_path, "f"), newPath);
        __classPrivateFieldSet(this, _File_path, newPath, "f");
        this.log.push("Moved file: " + oldPath + " to " + newPath);
    }
}
exports.File = File;
_File_path = new WeakMap(), _File_instances = new WeakSet(), _File_checkDelete = function _File_checkDelete() {
    if (__classPrivateFieldGet(this, _File_path, "f") === "null") {
        throw new Error("File was already deleted.");
    }
};
//# sourceMappingURL=file.js.map