import { existsSync, writeFileSync, readFileSync, statSync, appendFileSync, unlinkSync, copyFileSync, renameSync } from 'fs';


/**
 * @abstract This class is used to represent a file. It shoul use at the one Hand as helper for the functions of the main.ts file, but also
 * can be used individually. The main advantage of this class is that you can easily chain multiple operations e.g. first adding content to a file
 * and the moving a file to another location without having to worry about the files path.
 * @class File
 * @author Jakob Danel
 */
export default class File {

    /**
     * @abstract represents the path of the file. Should always be an absolute path.
     * @property path
     * @type string
     * @private
     */
    #path: string;

    /**
     * @abstract containing strings with informations about the actions which have taken place on the file.
     * @property log
     * @type string[]
     * @global
     */
    log: string[];
    //TODO(2): Add an proper log class here

    /**
     * @abstract Constructing the file object. Setting the properties. Logging "Logged file: ${path}". If the file is not created yet it will create
     * the file and add an log message to the log.
     * @constructor
     * @param path The path to the file. Should be provided in an absolute way for robustness reasons.
     * @throws Error If the file is not created yet and cannot be created due to permissions/invalid path pattern
     */
    constructor(path: string) {
        this.#path = path;
        this.log = ["Logged file: " + path];
        if (!existsSync(this.#path)) {
            try {
                writeFileSync(this.#path, "");
            } catch (e) {
                throw new Error("Error: Could not create the file. Please check the inputted path!");
            }
            this.log.push("Created file: " + this.#path);
        }
    }

    /**
     * @abstract Returns the path of the file.
     * @returns The path of the file
     */
    getPath(): string {
        return this.#path;
    }

    /**
     * @abstract checking if the file was already deleted. If the file is deleted throw an error.
     * @private
     * @throws Error If the file was already deleted it throws an error. 
     */
    #checkDelete() {
        if (this.#path === "null") {
            //TODO(1) Add an proper error object.
            throw new Error("File was already deleted.");
        }
    }

    /**
     * @abstract Get the content of a file.
     * @returns The content of the file as a string
     * @throws Error If the file was already deleted
     */
    getContent(): string {
        this.#checkDelete();
        return readFileSync(this.#path, "utf8");
    }

    /**
     * @abstract Get the metadata of the file.
     * @returns The metadata of the file.
     * @throws Error If the file was already deleted
     * @throws Error If the metadata could not be read.
     */
    getMetadata(): any {
        this.#checkDelete();
        try {
            const stats = statSync(this.#path);
            this.log.push("Read metadata: " + stats);
            return stats;
        } catch (error) {
            this.log.push("Could not read metadata: " + error);
            throw new Error(error.message);
        }
    }

    /**
     * @abstract Update the content of a file. Overwrite all existing content inside the file.
     * @throws Error if the File was already deleted.
     */
    updateContent(content: string): void {
        this.#checkDelete();
        writeFileSync(this.#path, content);
        this.log.push("Updated file: " + this.#path);
    }

    /**
     * @abstract Adding content to the of a file.
     * @param content A string with the content to be appended at the end of the file.
     * @throws Error if the File was already deleted.
     */
    addContent(content: string): void {
        this.#checkDelete();
        appendFileSync(this.#path, content);
        this.log.push("Added content to file: " + this.#path);
    }

    /**
     * @abstract Delete the file. After that move the object is not useable anymore. Every function call will throw an error.
     * @throws Error if the File was already deleted.
     */
    delete(): void {
        this.#checkDelete();
        unlinkSync(this.#path);
        this.log.push("Deleted file: " + this.#path);
        this.#path = "null";
        this.log.push("Deleted file");
    }

    /**
     * @abstract Copieng the content of the file inside another file. 
     * @param destFile The file were the data to be copied.
     */
    copyContent(destFile: File): void {
        this.#checkDelete();
        destFile.#checkDelete();
        destFile.updateContent(this.getContent());
        this.log.push(`Copied content from ${this.#path} into ${destFile.#path}`);
    }

    /**
     * @abstract Copy the content of the file inside another file.
     * @param destFilePath The path where the file was copied
     * @throws Error if the file was already deleted.
     */
    copy(destFilePath: string): void {
        this.#checkDelete();
        copyFileSync(this.#path, destFilePath);
        this.log.push("Copied file: " + this.#path);
    }
    
    /**
     * @abstract Moving the File to a new location. Update the path property.
     * @param newPath The path where to move the file.
     * @throws Error if the file was already deleted.
     */
    move(newPath: string): void {
        let oldPath = this.#path;
        this.#checkDelete();
        renameSync(this.#path, newPath);
        this.#path = newPath;
        this.log.push("Moved file: " + oldPath + " to " + newPath);
    }
}