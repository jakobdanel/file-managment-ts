"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./src/utils");
async function main() {
    return checkExists("./src/test-dir", FileSystemType.File);
}
var FileSystemType;
(function (FileSystemType) {
    FileSystemType[FileSystemType["Directory"] = 0] = "Directory";
    FileSystemType[FileSystemType["File"] = 1] = "File";
})(FileSystemType || (FileSystemType = {}));
async function checkExists(filePath, fst) {
    let flag = fst === FileSystemType.Directory ? "d" : "f";
    let result = await (0, utils_1.executeCommand)(`[ -${flag} ${filePath} ]`);
    return new Promise((resolve, reject) => {
        return resolve(result.ok);
    });
}
main().then((data) => {
    console.log("Runned successfully");
    console.log(data);
}).catch((err) => {
    console.log("Failed to run");
    console.log(err);
});
//# sourceMappingURL=playground.js.map