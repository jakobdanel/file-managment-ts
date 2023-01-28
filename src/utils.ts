import { Char } from './char';
import { exec } from 'child_process';
import { getContent } from './main';
let path = require('path');
//TODO Write a util project to combine all my util functions.


//TODO Move assertions to a separate project.
/**
 * @abstract This method checking if the condition is true, if not it will throw an exception with
 * the inputted error message. If the condition is true the function will return void.
 * @param condition The condition to check
 * @param message The error message which will be thrown if the condition is false
 * @throws Error if the condition is false
 */
export function assert(condition: boolean, message: string = "Assertion failed") {
    if (!condition) {
        //TODO Add an AssertionError
        throw new Error(message);
    }
}

/**
 * @abstract Implementation of {@link assert} method to check that a number is positive or 0.
 * @param n The number to check
 * @throws Error if the number is not positive or 0
 */
export function assertNotNegative(n: number) {
    assert(n >= 0, "Assertion failed: Expected not negative number but got " + n);
}

/**
 * @abstract Implementation of {@link assert} method to check that the number is an integer.
 * @param n The number to check.
 * @throws Error if the number is not an integer.
 */
export function assertInteger(n: number) {
    assert(Number.isInteger(n), "Assertion failed: Expected integer but got " + n);
}

/**
 * @abstract Creating a random string with n characters. Uses only the lowercase alphabetical characters.
 * @param n the number of characters to generate
 * @returns A string concenate the generated characters
 * @throws Error if the inputted number is negative
 * @throws Error if the inputted number is not an integer
 */
export function generateRandomCharacters(n: number): string {
    assertNotNegative(n);
    assertInteger(n);
    let result = '';
    for (let i = 0; i < n; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return result;
}


/**
 * @abstract This function takes an abitrary 2 dimensional array and returns all values flattened
 * into an 1 dimensional array.
 * @param array The two dimensional array to flatten
 * @returns The flattened array
 */
export function flattern2DArray<T>(array: T[][]): T[] {
    let result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
        }
    }
    return result;
}

/**
 * @abstract This function will build an 2 dimensional array from an one dimensional array. It will
 * add entriesPerRow entries to each column. If there is an remainder, the last element will have
 * less entries.
 * @param array The array to be transformed into two dimensions
 * @param entriesPerRow The number of entries for eych row
 * @returns The two dimensional array.
 */
export function buildTableFromArray<T>(array: T[], entriesPerRow: number): T[][] {
    assertInteger(entriesPerRow);
    assertNotNegative(entriesPerRow);
    assert(entriesPerRow !== 0, "entriesPerRow must be positive");

    let result: T[][] = [];
    for (let i = 0; i < array.length; i += entriesPerRow) {
        result.push(array.slice(i, i + entriesPerRow));
    }
    return result;
}


/**
 * @abstract Adding new lines every interval characters to the string. It iterates over the characters of the string.
 * Than the function will build a substring for each interval and adding a \n to the string
 * @param string The string to be modified
 * @param interval The interval after which to add new lines
 * @returns The modified string, with evenly new lines added
 * @throws Error if the inputted number is negative
 * @throws Error if the inputted number is not an Integer
 */
export function addingNewLinesToString(string: string, interval: number): string {
    assertNotNegative(interval);
    assertInteger(interval);
    let chars: Char[] = Char.fromString(string);
    let table = buildTableFromArray<Char>(chars, interval);
    let lines: string[] = []
    table.forEach(row => {
        row.push(new Char("\n"));
        lines.push(Char.toString(row));
    })
    let result = "";
    lines.forEach(line => result += line);
    return result;
}

/**
 * @abstract An array containing an example list of file extensions. Used to generate random file names.
 */
const fileExtensions =
    [
        "txt",
        "csv",
        "tsv",
        "html",
        "md",
        "xml",
        "json",
        "css",
        "js",
        "ts",
        "tsx",
        "vue",
        "json5",
        "jsonc",
        "graphql",
        "graphqls",
        "yml",
        "yaml",
        "geojson",
        "topojson",
        "geojsonz",
        "mbtiles",
    ]

/**
 * @abstract Generating a random value from an array of abitrary data.
 * @param array The array of values.
 * @returns The random choosen value.
 */
export function randomArrayValue<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

/**
 * @abstract Generating a string representing an integer having targetLength leading characters, so that all
 * left spaces which are not needed to represent the number are filled with 0. If more characters are needed
 * to represent the number then the string will have more characters than the targetLength specified.
 * @param n The number which are modified
 * @param targetLength The length of the target string.
 * @returns A string representing n with targetLength characters
 * @throws An error if n or targetLength is negative
 * @throws An error if n or targetLength is not an integer
 * @example leadingZeros(34,3) = "034"
 * @example leadingZeros(187,2) = "187" //Note that targetLength could not be fullfilled, because n > 99
 */
export function leadingZeros(n: number, targetLength: number): string {
    assertInteger(n);
    assertInteger(targetLength);
    assertNotNegative(n);
    assertNotNegative(targetLength);
    let str = n.toString();
    while (str.length < targetLength) {
        str = "0" + str;
    }
    return str;
}


/**
 * @abstract Generating a file name with the schema: `test_${leadingZeros(n, 3)}.${randomArrayValue<string>(fileExtensions)}`
 * @param n The number which the file name will have.
 * @returns The semi random file name
 * @throws Error if n is negative
 * @throws Error if n is not an integer
 * @example generateFileName(10) = "test_010.js"
 */
export function generateFileName(n: number): string {
    assertNotNegative(n);
    assertInteger(n);
    return `test_${leadingZeros(n, 3)}.${randomArrayValue<string>(fileExtensions)}`;
}

/**
 * @abstract This type describing the output of an linux system call. It is containing an flag
 * indicating whether the call was successful, the exit code and the message.
 * @type
 * @param ok (boolean): A boolean value indicating whether the command executed successfully (true)
 * or not (false).
 * @param code (number): The exit code of the command. A non-zero exit code indicates an error
 * occurred.
 * @param message (string): The output of the command, or the error message if an error occurred.
 */
type CommandOutput = { ok: boolean, code: number, message: string }

/**
 * 
 * @abstract The executeCommand() function is a Node.js utility function for running command line
 * commands and capturing the output. It takes a single argument, a string representing the command
 * to be executed, and returns a promise that resolves to an object containing the output, exit
 * code, and error message (if applicable).
 * @async
 * @param {string} command - The command to be executed in the command line.
 * @returns {Promise<CommandOutput>} A promise that resolves to an object 
 */
export function executeCommand(command: string): Promise<CommandOutput> {
    return new Promise<CommandOutput>((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                if (err.code === undefined) err.code = 0;
                resolve({ ok: false, code: err.code, message: stderr })
            } else {
                resolve({ ok: true, code: 0, message: stdout })
            }
        })
    });
}


/**
 * @abstract This enumeration describing the two types of items that are common in an file system:
 * File and Directory. I    t can be used as parameter for functions, that need an specific logic for
 * one of the types.
 * @enum
 * @param Directory Represents a directory
 * @param File Represents a file
 */
export enum FileSystemType { Directory, File }


/**
 * @abstract This funcion is checking if an file or dir is existent. Therefore it is using the
 * Linux [ ] command for checking an expression. 
 * @param path The path to be checked
 * @param fst FileSystemType which specifies if it should check for a file or a directory
 * @returns An Promise that resolves at any input, whith an boolean value indicating whether the
 * file or directory is existent or not.
 */
export async function checkExists(path: string, fst: FileSystemType): Promise<boolean> {
    let flag = fst === FileSystemType.Directory ? "d" : "f";
    let result = await executeCommand(`[ -${flag} ${path} ]`);
    return new Promise<boolean>((resolve, reject) => {
        return resolve(result.ok);
    });
}

export async function pwd(): Promise<string> {
    let pwd = (await executeCommand("pwd")).message;
    pwd = pwd.substring(0, pwd.length - 1);
    return new Promise<string>((resolve, reject) => {
        return resolve(pwd);
    })
}

/**
 * The function building the absolute paths of an file in this directory. If you passing an relative path from the 
 * root of this module to the function, it will return the absolute path build with the specified 
 * home path from the \{@see config.json \} file.
 * @param filePath The path which will be converted to the absolute path.
 * @returns The absolute path of the given path.
 */
export function buildAbsolutePath(filePath: string): string {
    let config: any = {};
    try {
        let configText = getContent(path.join(__dirname , "./../config.json"));
        config = JSON.parse(configText || "")
    } catch (e) {
        throw new Error("Error parsing config.json, Details: " + e.message);
    }
    const packagePath = config.packageDirectory;
    return packagePath + filePath;
}