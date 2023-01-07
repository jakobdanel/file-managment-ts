import { readFileSync, existsSync } from "fs";
import * as path from "path";
import { createEmptyFile, createFile, deleteFile,fileExists } from "./main"
import File from "./file";


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
        const fileContent = readFileSync(filePath, 'utf8');
        expect(fileContent).toBe('');
    });

    it("should return the file object containing the correct properties", () => {

        expect(file.getPath()).toBe(filePath);

        let expected_log = ["Logged file: " + filePath, "Created file: " + filePath];
        for (let i = 0; i < file.log.length; i++) {
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


describe("createFile()", () => {

    let files: File[] = [];
    let filePaths: string[] = [];
    let fileContents: string[] = [];

    function pushFileExampleToList(filePath: string, fileContent: string): void {
        filePaths.push(path.join(__dirname + filePath));
        fileContents.push(fileContent);


    }

    beforeEach(() => {
        pushFileExampleToList("/test-dir/test_01.txt", "");
        pushFileExampleToList("/test-dir/test_02.txt", "This is a test. \n \" bla bla bla");
        pushFileExampleToList("/test-dir/test_03.txt", "Only for testing purposes");

        for (let i = 0; i < filePaths.length; i++) {
            files.push(createFile(filePaths[i], fileContents[i]));
        }
    });

    afterEach(() => {
        for (let i = 0; i < files.length; i++) {
            deleteFile(files[i].getPath());
        }

        files = [];
        filePaths = [];
        fileContents = [];
    });

    it("should create a file at the specified path", () => {

        for (let i = 0; i < files.length; i++) {
            expect(existsSync(filePaths[i])).toBe(true);
        }

        console.log(filePaths)
    });

    it("should have the correct contents in the file", () => {
        console.log(files);

        for (let i = 0; i < files.length; i++) {
            expect(readFileSync(filePaths[i]).toString()).toBe(fileContents[i]);
        }

    });

    it("should throw an error if the file path could not be resolved", () => {
        expect(() => createFile("", "")).toThrow("Error: Could not create the file. Please check the inputted path");
    });

    it("should throw an error if the file already exists", () => {
        expect(() => createFile("./test-dir/test_01.txt", "")).toThrow("File already exists");
    });

})


describe("fileExists()", () => {
    let files: File[] = [];
    let filePaths: string[] = [];
    let fileContents: string[] = [];

    function pushFileExampleToList(filePath: string, fileContent: string): void {
        filePaths.push(path.join(__dirname + filePath));
        fileContents.push(fileContent);


    }

    beforeEach(() => {
        pushFileExampleToList("/test-dir/test_01.txt", "");
        pushFileExampleToList("/test-dir/test_02.txt", "This is a test. \n \" bla bla bla");
        pushFileExampleToList("/test-dir/test_03.txt", "Only for testing purposes");

        for (let i = 0; i < filePaths.length; i++) {
            files.push(createFile(filePaths[i], fileContents[i]));
        }
    });

    afterEach(() => {
        for (let i = 0; i < files.length; i++) {
            deleteFile(files[i].getPath());
        }

        files = [];
        filePaths = [];
        fileContents = [];
    });


    it("should return true if the file is existing", () => {

        for (let i = 0; i < files.length; i++) {
            expect(fileExists(filePaths[i])).toBe(true);
        }

    })

    it("should return false if the file is not existing", () => {

        expect(fileExists("./test-dir/no_file.txt")).toBe(false);
        expect(fileExists("./test-dir/no_file.json")).toBe(false);
        expect(fileExists("")).toBe(false);
    })


})