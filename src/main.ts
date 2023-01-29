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


/**
 * @abstract This FileTree represent a file structure.
 */
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
 * @throws Error if the path pattern is invalid \{@see file.ts\}
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
 * @throws Error if the path pattern can not be resolved \{@see file.ts\}
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


//TODO Document the returned metadata properly, maybe transform them to own format.
/**
 * @abstract This function returning the metadata of the file.
 * @param filePath The path from the file with the metadata to check.
 * @returns The metadata of the file.
 */
export function getMetaDataFile(filePath: string): any {
    let file = new File(filePath);
    return file.getMetadata();
}

export function getMetaDataDir(dirPath: string) {
    throw new Error("Not implemented");

}

//Add content


/**
 * @abstract This function will overwrite the content of the file at the specified file path, with content. If the file already exists
 * the old content will be overwritten, if the file did not exist the file will be created and the content placed inside the file.
 * @param filePath The path from the file where the content will be placed
 * @param content The content which will be placed inside the file
 * @returns The file object, for operation chaining purposes.
 */
export function writeFile(filePath: string, content: string): File {
    let file = new File(filePath);
    file.updateContent(content);
    return file;
}


/**
 * @abstract This function will add the content of the file at the specified file path to the end of the file. If the file already exists, the content is
 * the form oldContent + content, if the file was not created before, the file will be created and the content are placed inside the File.
 * @param filePath The path from the file where the content will be placed.
 * @param content The content which will be placed inside the file.
 * @returns The file object, for operation chaining purposes.
 */
export function addContentFile(filePath: string, content: string): File {
    let file = new File(filePath);
    file.addContent(content);
    return file;
}

export function addContentDir(dirPath: string, content: string) {
    throw new Error("Not implemented");

}

/**
 * @abstract This function adding content to the end of a list of files. The function iterated over
 * each entrie in filePath and adding the string from content to the end of the file.
 * @param filePaths The paths to the files, where to add the content
 * @param content The content to be added
 * @returns The files objects, where rhe content was added.
 */
export function addContentFileList(filePaths: string[], content: string) {
    let files: File[] = [];
    for (let filePath of filePaths) {
        let file = new File(filePath);
        file.addContent(content);
        files.push(file);
    }
    return files;
}

// Deleting

/**
 * @abstract This function will delete the file at the specified path. It will not check if the
 * file is existing or not. If the file at the provided filePath is not existent it will create an
 * empty file and immediately delete the file.
 * @param filePath The path to the file to be deleted
 */
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
