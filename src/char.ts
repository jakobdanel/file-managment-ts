import { assert } from "./utils";


/**
 * @abstract This class should help to work with strings by seperating a string into
 * an array of characters. The constructor of this class will only accept strings with only one 
 * character. The value of the character will be readonly. 
 * @class Char
 * @author Jakob Danel 
 */
export class Char {

    /**
     * @abstract This number holding the ascii code for the character.
     * @type {number}
     */
    #value: number;

    /**
     * @abstract Building the character by accepting an string input and only accepting the input,
     * if the input has the lenght of one character. 
     * @constructor
     * @param c The string to build the character from. Need to have c.length === 0.
     */
    constructor(c: string) {
        assert(c.length === 1, `Error: Invalid char, only one character is allowed, but got ${c.length} with value ${c}`);
        this.#value = c.charCodeAt(0);
    }

    public get value(): string {
        return String.fromCharCode(this.#value);
    }

    /**
     * @abstract Building an array of characters from a string. Iterates over each element of the
     * string and creating characters from them.
     * @param s The string to build the chars from
     * @static
     * @returns An array of characters. 
     */
    public static fromString(s: string): Char[] {
        let result: Char[] = [];
        for (let i = 0; i < s.length; i++) {
            result.push(new Char(s[i]));
        }
        return result;
    }

    /**
     * @abstract Builds an string from an array of characters. Iterates over each character
     * and builds the string
     * @static
     * @param cs The array of characters to build the string from
     * @returns The string.
     */
    public static toString(cs: Char[]): string {
        let result: string = "";
        cs.forEach(c => result += c.value);
        return result;
    }
}