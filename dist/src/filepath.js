"use strict";
var _FilePath_directory, _FilePath_name, _FilePath_extension;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePath = void 0;
const fs_1 = require("fs");
class FilePath {
    constructor(filePath) {
        _FilePath_directory.set(this, void 0);
        _FilePath_name.set(this, void 0);
        _FilePath_extension.set(this, void 0);
        if ((0, fs_1.existsSync)(filePath)) {
            filePath = FilePath.normalizePath(filePath);
        }
        else {
            throw new Error("Invalid file path");
        }
    }
    static normalizePath(path) {
        let startChar = path.charAt(0);
        switch (startChar) {
            case "/":
                return path;
            case "~":
                return path.replace("~", `/home/${this.getUserName(path)}`);
            default:
                throw new Error("Invalid path");
        }
    }
    static getUserName(path) {
        if (path.startsWith("/home")) {
            return path.split("/")[2] || undefined;
        }
        else
            return undefined;
    }
}
exports.FilePath = FilePath;
_FilePath_directory = new WeakMap(), _FilePath_name = new WeakMap(), _FilePath_extension = new WeakMap();
//# sourceMappingURL=filepath.js.map