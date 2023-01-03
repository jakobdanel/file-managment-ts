import { readFileSync } from "fs";
import * as path from "path";
import { createEmptyFile,deleteFile } from "./main"


describe("createEmptyFile()", () => {
    const filePath = path.join(__dirname, "./test-dir/test-file.txt");


    beforeEach(() => {

        createEmptyFile(filePath);
        
    })

    afterEach(() => {
        deleteFile(path.join(filePath));
    });

    it('creates an empty file at the specified path', () => {
        // Assert
        const fileContent = readFileSync(filePath, 'utf8');
        expect(fileContent).toBe('');
    });

    it('throws an error if the file already exists', () => {


        expect(() => createEmptyFile(filePath)).toThrow('File already exists');
    });

    it("should throw an error if the file path could not be resolved",() => {

        expect(() => createEmptyFile("")).toThrow("Error: Could not create the file. Please check the inputted path!");

    })
});