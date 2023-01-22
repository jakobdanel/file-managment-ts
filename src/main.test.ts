import { readFileSync, existsSync } from "fs";
import * as path from "path";
import { addContentFile, createEmptyFile, createFile, deleteFile, fileExists, getContent, getMetaDataDir, getMetaDataFile, writeFile } from "./main"
import { File } from "./file";
import { addingNewLinesToString, generateFileName, generateRandomCharacters } from "./utils";
import { InvalidFilePathError } from "./error";


/**
 * @abstract Tracking which files are created in the actual test run.
 * Here are files that stored in the ./test_dir directory in that moment
 */
let files: File[] = []

/**
 * @abstract The path to the files created in the actual test run
 */
let filePaths: string[] = []

/**
 * @abstract The content of the files created in the actual test run
 */
let fileContents: string[] = []

/**
 * @abstract This function will create a file in the actual test run. With the given filename
 * and the given content. It will also update the three arrays storing the content of the dir.
 * @param filePath The path where the file will be created. Is relative and start in the test-dir folder.
 * @param fileContent The content for the created file.
 */
const createExampleFile = (filePath: string, fileContent: string) => {
    let absolutePath = __dirname + "/test-dir/" + filePath;
    filePaths.push(absolutePath);
    fileContents.push(fileContent);
    let f = new File(absolutePath)
    f.addContent(fileContent)
    files.push(f);
}


const compareNumbers = (a: number, b: number, delta: number): boolean => {

    return Math.abs(a - b) <= delta;
}


/**
 * @abstract This function will check if the given object contains all of the required keys on top level of the object hierarchy. This means if the 
 * key is used inside the object hierarchy, but only inside a nested object structure, the function will return false.
 * @param object The object to check
 * @param keys The keys which are required
 * @returns True if all keys are inside the top level of the object, false if not.
 * @example containsKeys({a: "a",b:"b"},["a","b"]) = true
 * @example containsKeys({a: "a",b:"b"},["a","b", "c"]) = false
 * @example containsKeys({a: "a",b: {c: "c"}},["a","b","c"]) = false
 */
const containsKeys = (object: Object, keys: string[]): boolean => {
    for (let i = 0; i < keys.length; i++) {
        if (!Object.keys(object).includes(keys[i])) {
            return false;
        }
    };
    return true;
}

/**
 * This function adding a bunch of files with random content to 
 */
const createExampleFiles = (n: number = 100) => {
    if (n >= 1000) {
        console.log("WARNING: The implementation of the file name generator allows only three digits. For that reason n must be maximum of 1000. Set n to 1000.");
        n = 1000;
    }
    createExampleFile("test_001.txt", "test");
    for (let i = 2; i <= n; i++) {
        let fName = generateFileName(i);
        let content = generateRandomCharacters(10000);
        content = addingNewLinesToString(content, 100);
        createExampleFile(fName, content);
    }
}

const deleteExampleFiles = () => {
    files.forEach(file => file.delete());
    files = [];
    filePaths = [];
    fileContents = [];
}


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

        expect(() => createEmptyFile("")).toThrow(InvalidFilePathError);

    })


});


describe("createFile()", () => {

    beforeEach(createExampleFiles)
    afterEach(deleteExampleFiles)

    it("should create a file at the specified path", () => {

        for (let i = 0; i < files.length; i++) {
            expect(existsSync(filePaths[i])).toBe(true);
        }

    });

    it("should have the correct contents in the file", () => {

        for (let i = 0; i < files.length; i++) {
            expect(readFileSync(filePaths[i]).toString()).toBe(fileContents[i]);
        }

    });

    it("should throw an error if the file path could not be resolved", () => {
        expect(() => createFile("", "")).toThrow(InvalidFilePathError);
    });

    it("should throw an error if the file already exists", () => {
        expect(() => createFile(__dirname + "/test-dir/test_001.txt", "")).toThrow("File already exists");
    });

})


describe("fileExists()", () => {

    beforeEach(createExampleFiles)
    afterEach(deleteExampleFiles)


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

describe("getContent()", () => {

    beforeEach(createExampleFiles)
    afterEach(deleteExampleFiles)

    it("should return null if the file does not exist", () => {

        expect(getContent("./test-dir/no_file.txt")).toBe(null);
        expect(getContent("./test-dir/no_file.json")).toBe(null);
        expect(getContent("")).toBe(null);
    });


    it("should return the file contents", () => {

        for (let i = 0; i < files.length; i++) {
            expect(getContent(filePaths[i])).toBe(fileContents[i]);
        }
    })
})

describe("getMetadataFile()", () => {

    beforeEach(createExampleFiles);
    afterEach(deleteExampleFiles);

    const expectedKeys: string[] = [
        "dev",
        "mode",
        "nlink",
        "uid",
        "gid",
        "rdev",
        "blksize",
        "ino",
        "size",
        "blocks",
        "atimeMs",
        "mtimeMs",
        "ctimeMs",
        "birthtimeMs",
        "atime",
        "mtime",
        "ctime",
        "birthtime"
    ];

    it("should return an object with metadata", () => {

        for (let i = 0; i < files.length; i++) {
            expect(getMetaDataFile(filePaths[i])).toBeDefined();
        }
    });


    it("should have the correct metadata keys", () => {
        for (let i = 0; i < files.length; i++) {
            expect(containsKeys(getMetaDataFile(filePaths[i]), expectedKeys)).toBe(true);
        }
    });

    it("should contain the same timestamps in datetime format as in ms format", () => {

        for (let i = 0; i < files.length; i++) {
            let metadata = getMetaDataFile(filePaths[i]);
 
            expect(compareNumbers(new Date(metadata.atime).getTime(),metadata.atimeMs,1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.mtime).getTime(),metadata.mtimeMs,1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.ctime).getTime(),metadata.ctimeMs,1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.birthtime).getTime(),metadata.birthtimeMs,1)).toBeTruthy();

        }
    });


    describe('writeFile()', () => {
        test('overwrites the content of an existing file', () => {
            // Given
            const filePath = 'example.txt';
            const oldContent = 'old content';
            const newContent = 'new content';
            const file = new File(filePath);
            file.updateContent(oldContent);

            // When
            const result = writeFile(filePath, newContent);

            // Then
            expect(result.getContent()).toBe(newContent);

            file.delete();
        });

        test('creates a new file with the given content', () => {
            // Given
            const filePath = 'example.txt';
            const content = 'example content';

            // When
            const result = writeFile(filePath, content);

            // Then
            expect(result.getContent()).toBe(content);

            result.delete();
        });
    });


    describe('addContentFile()', () => {
        test('adds content to an existing file', () => {
            // Given
            const filePath = 'example.txt';
            const oldContent = 'old content';
            const newContent = 'new content';
            const file = new File(filePath);
            file.updateContent(oldContent);

            // When
            const result = addContentFile(filePath, newContent);

            // Then
            expect(result.getContent()).toBe(oldContent + newContent);

            result.delete();
        });

        test('creates a new file with the given content', () => {
            // Given
            const filePath = 'example.txt';
            const content = 'example content';

            // When
            const result = addContentFile(filePath, content);

            // Then
            expect(result.getContent()).toBe(content);
            result.delete();
        });
    });




});