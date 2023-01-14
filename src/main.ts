import { File } from "./file";
import { existsSync } from "fs";

//Data structures for file tree
interface FileTreeItem {
    name: string;
}

interface FileI extends FileTreeItem { }

interface Dir extends FileTreeItem {
    items: FileTreeItem[];
}

interface FileTree {
    root: string;
    items: FileTreeItem[];
}

/**
 * @abstract This function will create an empty File. It uses the File class from file.ts
 * It will creating a new File object and then checking if at the given path a File already exists.
 * If so it will throw an error.
 * @param filePath The path to the file
 * @returns File the File object, for further manipulation
 * @throws Error if the path pattern is invalid {@see file.ts}
 * @throws Error if the file already exists.
 */
export function createEmptyFile(filePath: string): File {
    let file = new File(filePath);
    if (!file.log.includes("Created file: " + file.getPath())) {
        throw new Error("File already exists");
    } else {
        return file;
    }
}






/**
 * @abstract This function will create a new file at the given path with the given contents.
 * It will creating a new File object and then checking if at the given path a File already exists.
 * If so it will throw an error. For setting the contents of the file, it will use the File.updateContent()
 * method. 
 * @param filePath The path to the file to create
 * @param content The content to set into the file
 * @returns File the File object, for further manipulation
 * @throws Error if the path pattern can not be resolved {@see file.ts}
 * @throws Error if the file already exists.
 */
export function createFile(filePath: string, content: string): File {
    let file = new File(filePath);
    if (!file.log.includes("Created file: " + file.getPath())) {
        throw new Error("File already exists");
    }
    file.updateContent(content);
    return file;

}


export function createDir(dirPath: string) {
    throw new Error("Not implemented");
}


export function createFileTree(fileTree: FileTree) {
    throw new Error("Not implemented");
}

//Check if the file/dir exists

/**
 * @abstract This method checks if the inputted file exists or not.
 * If the filePath can not be resolved, the function will return false.
 * @param filePath The path to the file which will be checked.
 * @returns True if the file exists, false if not
 */
export function fileExists(filePath: string): boolean {
    return existsSync(filePath);
}

export function dirExists(dirPath: string): boolean {
    return existsSync(dirPath);
};


//get content

/**
 * @abstract Returning the of the file. If the file exsists. If the file do not exists then
 * the function will return null.
 * @param filePath The path to the file where the file is located.
 * @returns A string containing the content of the file. Null if the file do not exist.
 */
export function getContent(filePath: string): string | null {
    if (fileExists(filePath)) {
        let file = new File(filePath);
        return file.getContent();
    } else return null;
}

export function getMetaDataFile(filePath: string): any {
    let file = new File(filePath);
    return file.getMetadata();
}

export function getMetaDataDir(dirPath: string) {
    throw new Error("Not implemented");

}

//Add content
export function writeFile(filePath: string, content: string): File {
    let file = new File(filePath);
    file.updateContent(content);
    return file;
}


export function addContentFile(filePath: string, content: string): File {
    let file = new File(filePath);
    file.addContent(content);
    return file;

}

export function addContentDir(dirPath: string, content: string) {
    throw new Error("Not implemented");

}

export function addContentFileList(filePaths: string[], content: string) {
    let files: File[] = [];
    for (let filePath in filePaths) {
        let file = new File(filePath);
        file.addContent(content);
        files.push(file);
    }
    return files;
}

// Deleting

export function deleteFile(filePath: string) {
    let file = new File(filePath);
    file.delete();

}

export function deleteDir(dirPath: string) {
    throw new Error("Not implemented");
}

// Copy

export function copyFile(srcFilePath: string, destFilePath: string): File {
    let file = new File(srcFilePath);
    file.copy(destFilePath);
    return file;
}

export function copyDir(srcDirPath: string, destDirPath: string) {
    throw new Error("Not implemented");
}

export function copyContent(srcFilePath: string, destDirPath: string): File {
    let srcFile = new File(srcFilePath);
    let destFile = new File(destDirPath);
    srcFile.copyContent(destFile);
    return destFile;
}

// Rename

export function renameFile(srcFilePath: string, newName: string) {
    let file = new File(srcFilePath);
    file.move(newName);
    return file;

}

export function renameDir(srcDirPath: string, newName: string) {
    throw new Error("Not implemented");

}

// Move

export function moveFile(srcFilePath: string, destFilePath: string) {
    let file = new File(srcFilePath);
    file.move(destFilePath);
    return file;
}

export function moveDir(srcDirPath: string, destDirPath: string) {
    throw new Error("Not implemented");
}
