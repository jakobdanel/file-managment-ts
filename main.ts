//Data structures for file tree

interface FileTreeItem {
    name: string;
}

interface File extends FileTreeItem { }

interface Dir extends FileTreeItem {
    items: FileTreeItem[];
}

interface FileTree {
    root: string;
    items: FileTreeItem[];
}

//Creating

const createEmptyFile = (filePath: string) => {
    throw new Error("Not implemented");
}


const createFile = (filePath: string, content: string) => {
    throw new Error("Not implemented");
}


const createDir = (dirPath: string) => {
    throw new Error("Not implemented");
}


const createFileTree = (fileTree: FileTree) => {
    throw new Error("Not implemented");
}


//get content

const getContent = (filePath: string) => {
    throw new Error("Not implemented");

}

const getMetaDataFile = (filePath: string) => {
    throw new Error("Not implemented");

}

const getMetaDataDir = (dirPath: string) => {
    throw new Error("Not implemented");

}

//Add content
const writeFile = (filePath: string, content: string) => {
    throw new Error("Not implemented");
}


const addContentFile = (filePath: string, content: string) => {
    throw new Error("Not implemented");

}

const addContentDir = (dirPath: string, content: string) => {
    throw new Error("Not implemented");

}

const addContentFileList = (filePaths: string[], content: string) => {
    throw new Error("Not implemented");
}

// Deleting

const deleteFile = (filePath: string) => {
    throw new Error("Not implemented");

}

const deleteDir = (dirPath: string) => {
    throw new Error("Not implemented");
}

// Copy

const copyFile = (srcFilePath: string, destFilePath: string) => {
    throw new Error("Not implemented");

}

const copyDir = (srcDirPath: string, destDirPath: string) => {
    throw new Error("Not implemented");
}

const copyContent = (srcFilePath: string, destDirPath) => {
    throw new Error("Not implemented");
}

// Rename

const renameFile = (srcFilePath: string, newName: string) => {
    throw new Error("Not implemented");

}

const renameDir = (srcDirPath: string, newName: string) => {
    throw new Error("Not implemented");

}

// Move

const moveFile = (srcFilePath: string, destFilePath: string) => {
    throw new Error("Not implemented");

}

const moveDir = (srcDirPath: string, destDirPath: string) => {
    throw new Error("Not implemented");
}
