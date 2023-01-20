"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveDir = exports.moveFile = exports.renameDir = exports.renameFile = exports.copyContent = exports.copyDir = exports.copyFile = exports.deleteDir = exports.deleteFile = exports.addContentFileList = exports.addContentDir = exports.addContentFile = exports.writeFile = exports.getMetaDataDir = exports.getMetaDataFile = exports.getContent = exports.dirExists = exports.fileExists = exports.createFileTree = exports.createDir = exports.createFile = exports.createEmptyFile = void 0;
const file_1 = require("./file");
const fs_1 = require("fs");
function createEmptyFile(filePath) {
    let file = new file_1.File(filePath);
    if (!file.log.includes("Created file: " + file.getPath())) {
        throw new Error("File already exists");
    }
    else {
        return file;
    }
}
exports.createEmptyFile = createEmptyFile;
function createFile(filePath, content) {
    let file = new file_1.File(filePath);
    if (!file.log.includes("Created file: " + file.getPath())) {
        throw new Error("File already exists");
    }
    file.updateContent(content);
    return file;
}
exports.createFile = createFile;
function createDir(dirPath) {
    throw new Error("Not implemented");
}
exports.createDir = createDir;
function createFileTree(fileTree) {
    throw new Error("Not implemented");
}
exports.createFileTree = createFileTree;
function fileExists(filePath) {
    return (0, fs_1.existsSync)(filePath);
}
exports.fileExists = fileExists;
function dirExists(dirPath) {
    return (0, fs_1.existsSync)(dirPath);
}
exports.dirExists = dirExists;
;
function getContent(filePath) {
    if (fileExists(filePath)) {
        let file = new file_1.File(filePath);
        return file.getContent();
    }
    else
        return null;
}
exports.getContent = getContent;
function getMetaDataFile(filePath) {
    let file = new file_1.File(filePath);
    return file.getMetadata();
}
exports.getMetaDataFile = getMetaDataFile;
function getMetaDataDir(dirPath) {
    throw new Error("Not implemented");
}
exports.getMetaDataDir = getMetaDataDir;
function writeFile(filePath, content) {
    let file = new file_1.File(filePath);
    file.updateContent(content);
    return file;
}
exports.writeFile = writeFile;
function addContentFile(filePath, content) {
    let file = new file_1.File(filePath);
    file.addContent(content);
    return file;
}
exports.addContentFile = addContentFile;
function addContentDir(dirPath, content) {
    throw new Error("Not implemented");
}
exports.addContentDir = addContentDir;
function addContentFileList(filePaths, content) {
    let files = [];
    for (let filePath in filePaths) {
        let file = new file_1.File(filePath);
        file.addContent(content);
        files.push(file);
    }
    return files;
}
exports.addContentFileList = addContentFileList;
function deleteFile(filePath) {
    let file = new file_1.File(filePath);
    file.delete();
}
exports.deleteFile = deleteFile;
function deleteDir(dirPath) {
    throw new Error("Not implemented");
}
exports.deleteDir = deleteDir;
function copyFile(srcFilePath, destFilePath) {
    let file = new file_1.File(srcFilePath);
    file.copy(destFilePath);
    return file;
}
exports.copyFile = copyFile;
function copyDir(srcDirPath, destDirPath) {
    throw new Error("Not implemented");
}
exports.copyDir = copyDir;
function copyContent(srcFilePath, destDirPath) {
    let srcFile = new file_1.File(srcFilePath);
    let destFile = new file_1.File(destDirPath);
    srcFile.copyContent(destFile);
    return destFile;
}
exports.copyContent = copyContent;
function renameFile(srcFilePath, newName) {
    let file = new file_1.File(srcFilePath);
    file.move(newName);
    return file;
}
exports.renameFile = renameFile;
function renameDir(srcDirPath, newName) {
    throw new Error("Not implemented");
}
exports.renameDir = renameDir;
function moveFile(srcFilePath, destFilePath) {
    let file = new file_1.File(srcFilePath);
    file.move(destFilePath);
    return file;
}
exports.moveFile = moveFile;
function moveDir(srcDirPath, destDirPath) {
    throw new Error("Not implemented");
}
exports.moveDir = moveDir;
//# sourceMappingURL=main.js.map