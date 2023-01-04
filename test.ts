import { readFileSync } from "fs";
import * as path from "path";
import { createEmptyFile, deleteFile } from "./main"
import File from "file";


describe("createEmptyFile()", () => {
    const filePath = path.join(__dirname, "./test-dir/test-file.txt");
    let file: File;


    beforeEach(() => {

        file = createEmptyFile(filePath);

    })

    afterEach(() => {
        deleteFile(path.join(filePath));
    });

    it('creates an empty file at the specified path', () => {
        // Assert
        const fileContent = readFileSync(filePath, 'utf8');
        expect(fileContent).toBe('');
    });

    it("should return the file object containing the correct properties", () => {

        // Assert
        console.log(file.log);
        expect(file.getPath()).toBe(filePath);

        let expected_log = ["Logged file: "+ filePath, "Created file: "+ filePath];

        for(let i = 0; i < file.log.length;i++){
            expect(file.log[i]).toBe(expected_log[i]);
        }
    });

    it('throws an error if the file already exists', () => {

        expect(() => createEmptyFile(filePath)).toThrow('File already exists');
    });

    it("should throw an error if the file path could not be resolved", () => {

        expect(() => createEmptyFile("")).toThrow("Error: Could not create the file. Please check the inputted path!");

    })


});