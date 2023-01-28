import { checkExists, FileSystemType } from "./utils";

/**
 * @abstract This class representing an FilePath. At creation  it will check if the path is resovable. If so, it will create an object with 
 * readonly properties holding the path. If the path is not resovable it will throw an exception with further debugging information.
 * @class FilePath
 * @author <a href="mailto: jdanel@uni-muenster.de">jdanel@uni-muenster.de</a>
 */
export class FilePath {

    /**
     * @abstract Holding the directory in the form of an array of directories. Always holding all the dirs absolute.
     * @access private
     * @type string[]
     * @example ["home","jakob","Documents","Dir1"]
     */
    #directory: string[]; // example: ["home","jakob","Documents","Dir1"]

    /**
     * @abstract Holds the name of the file.
     * @access private
     * @type string
     * @example "script"
     */
    #name: string;

    /**
     * @abstract Holding the extension of the file if existent. If the file has no extionsion the value will be "".
     * @access private
     * @type string
     * @example "ts"
     */
    #extension: string;

    /**
     * Not implemented properly.
     */
    constructor(filePath: string) {
        FilePath.isPathResolvable(filePath)
            .then((isResovable: boolean) => {
                if(isResovable){
                    filePath = FilePath.normalizePath(filePath);
                }else {
                    // TODO Better error handling here:
                    throw new Error("Unresolvable file path"); 
                }
            }).catch((error: Error) => {
                throw new Error("Error executing the command, Details: " + error.message);
            });
    };


    /**
     * Not implemented properly!
     */
    public static normalizePath(path: string): string {
        let startChar = path.charAt(0);
        switch (startChar) {
            case "/":
                return path;

            case "~":
                return path.replace("~", `/home/${this.getUserName(path)}`);

            //TODO handle all cases e.g ".".
            default:
                //TODO Better error handling
                throw new Error("Invalid path");
        }
    }

    public static async isPathResolvable(path: string): Promise<boolean> {
        //Check if the path is a existing file.
        let isExistingFile = await checkExists(path, FileSystemType.File);

        //Check if the path without the filename exists.
        let pathSplitted = path.split("/");
        let lastElem = pathSplitted.pop();
        let dir = "";
        if (pathSplitted.length == 0) {
            dir = lastElem || "";
        } else {
            dir = pathSplitted.join("/");
        }
        let isExistingDirectory = await checkExists(dir, FileSystemType.Directory);
        return isExistingFile || isExistingDirectory;
    }

    /**
     * @abstract This static method will return the username of a given filepath string. It is used to determine if an Linux file system path is 
     * an users subclass and if so extracting the username. If the path is not in an users folder then the function will return undefined. It will also
     * return undefined for filepath which are not resolveable.
     * @access public
     * @static 
     * @param path The path th extract the username from
     * @returns The username of the given filepath string or undefined if the path is not in an users folder.
     */
    public static getUserName(path: string): string | undefined {
        if (path.startsWith("/home")) {
            return path.split("/")[2] || undefined;
        } else return undefined;
    }

}