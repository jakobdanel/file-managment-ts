
/**
 * @abstract This class represent the error that an inputted file path can not be resolved. This happens for example when you try to access an empty string as
 * file path. The class expecting the invalid filePath as an argument at creation and storing this filePath.
 * @extends {Error}
 * @class InvalidFilePathError
 * @author Jakob Danel
 */
export class InvalidFilePathError extends Error {
    /**
     * @abstract Represent the file path that could not be resolved.
     * @type {string}
     * @public
     */
    filePath: string;

    /**
     * @abstract Constructing the error. Building an custom error message due to the file path.
     * @param {string} filePath The file path
     * @constructor
     */
    constructor(filePath: string) {
        const message = `The file path "${filePath}" could not be resolved, please check the path and try again. Notice that is best practice to use absolute paths instead of relative paths`;
        super(message);
        this.filePath = filePath;
    }
};
