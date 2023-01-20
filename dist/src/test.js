"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = __importStar(require("path"));
const main_1 = require("./main");
const file_1 = require("./file");
const utils_1 = require("./utils");
let files = [];
let filePaths = [];
let fileContents = [];
const createExampleFile = (filePath, fileContent) => {
    let absolutePath = __dirname + "/test-dir/" + filePath;
    filePaths.push(absolutePath);
    fileContents.push(fileContent);
    let f = new file_1.File(absolutePath);
    f.addContent(fileContent);
    files.push(f);
};
const compareNumbers = (a, b, delta) => {
    return Math.abs(a - b) <= delta;
};
const containsKeys = (object, keys) => {
    for (let i = 0; i < keys.length; i++) {
        if (!Object.keys(object).includes(keys[i])) {
            return false;
        }
    }
    ;
    return true;
};
const createExampleFiles = (n = 100) => {
    if (n >= 1000) {
        console.log("WARNING: The implementation of the file name generator allows only three digits. For that reason n must be maximum of 1000. Set n to 1000.");
        n = 1000;
    }
    createExampleFile("test_001.txt", "test");
    for (let i = 2; i <= n; i++) {
        let fName = (0, utils_1.generateFileName)(i);
        let content = (0, utils_1.generateRandomCharacters)(10000);
        content = (0, utils_1.addingNewLinesToString)(content, 100);
        createExampleFile(fName, content);
    }
};
const deleteExampleFiles = () => {
    files.forEach(file => file.delete());
    files = [];
    filePaths = [];
    fileContents = [];
};
describe("createEmptyFile()", () => {
    const filePath = path.join(__dirname, "./test-dir/test-file.txt");
    let file;
    beforeEach(() => {
        file = (0, main_1.createEmptyFile)(filePath);
    });
    afterEach(() => {
        (0, main_1.deleteFile)(path.join(filePath));
    });
    it('creates an empty file at the specified path', () => {
        const fileContent = (0, fs_1.readFileSync)(filePath, 'utf8');
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
        expect(() => (0, main_1.createEmptyFile)(filePath)).toThrow('File already exists');
    });
    it("should throw an error if the file path could not be resolved", () => {
        expect(() => (0, main_1.createEmptyFile)("")).toThrow("Error: Could not create the file. Please check the inputted path!");
    });
});
describe("createFile()", () => {
    beforeEach(createExampleFiles);
    afterEach(deleteExampleFiles);
    it("should create a file at the specified path", () => {
        for (let i = 0; i < files.length; i++) {
            expect((0, fs_1.existsSync)(filePaths[i])).toBe(true);
        }
    });
    it("should have the correct contents in the file", () => {
        for (let i = 0; i < files.length; i++) {
            expect((0, fs_1.readFileSync)(filePaths[i]).toString()).toBe(fileContents[i]);
        }
    });
    it("should throw an error if the file path could not be resolved", () => {
        expect(() => (0, main_1.createFile)("", "")).toThrow("Error: Could not create the file. Please check the inputted path");
    });
    it("should throw an error if the file already exists", () => {
        expect(() => (0, main_1.createFile)(__dirname + "/test-dir/test_001.txt", "")).toThrow("File already exists");
    });
});
describe("fileExists()", () => {
    beforeEach(createExampleFiles);
    afterEach(deleteExampleFiles);
    it("should return true if the file is existing", () => {
        for (let i = 0; i < files.length; i++) {
            expect((0, main_1.fileExists)(filePaths[i])).toBe(true);
        }
    });
    it("should return false if the file is not existing", () => {
        expect((0, main_1.fileExists)("./test-dir/no_file.txt")).toBe(false);
        expect((0, main_1.fileExists)("./test-dir/no_file.json")).toBe(false);
        expect((0, main_1.fileExists)("")).toBe(false);
    });
});
describe("getContent()", () => {
    beforeEach(createExampleFiles);
    afterEach(deleteExampleFiles);
    it("should return null if the file does not exist", () => {
        expect((0, main_1.getContent)("./test-dir/no_file.txt")).toBe(null);
        expect((0, main_1.getContent)("./test-dir/no_file.json")).toBe(null);
        expect((0, main_1.getContent)("")).toBe(null);
    });
    it("should return the file contents", () => {
        for (let i = 0; i < files.length; i++) {
            expect((0, main_1.getContent)(filePaths[i])).toBe(fileContents[i]);
        }
    });
});
describe("getMetadataFile()", () => {
    beforeEach(createExampleFiles);
    afterEach(deleteExampleFiles);
    const expectedKeys = [
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
            expect((0, main_1.getMetaDataFile)(filePaths[i])).toBeDefined();
        }
    });
    it("should have the correct metadata keys", () => {
        for (let i = 0; i < files.length; i++) {
            expect(containsKeys((0, main_1.getMetaDataFile)(filePaths[i]), expectedKeys)).toBe(true);
        }
    });
    it("should contain the same timestamps in datetime format as in ms format", () => {
        for (let i = 0; i < files.length; i++) {
            let metadata = (0, main_1.getMetaDataFile)(filePaths[i]);
            expect(compareNumbers(new Date(metadata.atime).getTime(), metadata.atimeMs, 1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.mtime).getTime(), metadata.mtimeMs, 1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.ctime).getTime(), metadata.ctimeMs, 1)).toBeTruthy();
            expect(compareNumbers(new Date(metadata.birthtime).getTime(), metadata.birthtimeMs, 1)).toBeTruthy();
        }
    });
    describe('writeFile()', () => {
        test('overwrites the content of an existing file', () => {
            const filePath = 'example.txt';
            const oldContent = 'old content';
            const newContent = 'new content';
            const file = new file_1.File(filePath);
            file.updateContent(oldContent);
            const result = (0, main_1.writeFile)(filePath, newContent);
            expect(result.getContent()).toBe(newContent);
            file.delete();
        });
        test('creates a new file with the given content', () => {
            const filePath = 'example.txt';
            const content = 'example content';
            const result = (0, main_1.writeFile)(filePath, content);
            expect(result.getContent()).toBe(content);
            result.delete();
        });
    });
    describe('addContentFile()', () => {
        test('adds content to an existing file', () => {
            const filePath = 'example.txt';
            const oldContent = 'old content';
            const newContent = 'new content';
            const file = new file_1.File(filePath);
            file.updateContent(oldContent);
            const result = (0, main_1.addContentFile)(filePath, newContent);
            expect(result.getContent()).toBe(oldContent + newContent);
            result.delete();
        });
        test('creates a new file with the given content', () => {
            const filePath = 'example.txt';
            const content = 'example content';
            const result = (0, main_1.addContentFile)(filePath, content);
            expect(result.getContent()).toBe(content);
            result.delete();
        });
    });
});
//# sourceMappingURL=test.js.map