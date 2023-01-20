"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidFilePathError = void 0;
class InvalidFilePathError extends Error {
    constructor(filePath) {
        const message = `The file path "${filePath}" could not be resolved, please check the path and try again. Notice that is best practice to use absolute paths instead of relative paths`;
        super(message);
        this.filePath = filePath;
    }
}
exports.InvalidFilePathError = InvalidFilePathError;
;
//# sourceMappingURL=error.js.map