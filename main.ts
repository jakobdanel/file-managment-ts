import File from "./file";


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
 * It ill creating a new File object and then checking if at the given path an File already exists.
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







export function createFile(filePath: string, content: string): File {
    let file = new File(filePath);
    if (file.log.includes("Created file: " + file.getPath())) {
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


//get content

export function getContent(filePath: string): string {
    let file = new File(filePath);
    return file.getContent();
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
