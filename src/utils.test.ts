import "jest"
import { addingNewLinesToString, assert, assertInteger, assertNotNegative, buildAbsolutePath, buildTableFromArray, checkExists, executeCommand, FileSystemType, flattern2DArray, generateFileName, generateRandomCharacters, leadingZeros, randomArrayValue } from "./utils";

describe("assert()", () => {

    it("should normally return if the condition is true", () => {
        assert(true, "");
    });

    it("should throw an error if the condition is false", () => {
        expect(() => assert(false, "")).toThrow();
    });

    it("should throw an error with the correct error message, if the condition is not true", () => {
        expect(() => assert(false, "This is a message")).toThrow("This is a message");
    });
});

describe("assertNotNegative()", () => {

    it("should normally return if the number is not negative", () => {
        assertNotNegative(1);
        assertNotNegative(1000000000);
        assertNotNegative(.0000001);
        assertNotNegative(0);
        assertNotNegative(Infinity)
    });

    it("should throw an error if the number is negative", () => {
        expect(() => assertNotNegative(-1)).toThrow();
        expect(() => assertNotNegative(-0.00000000001)).toThrow();
        expect(() => assertNotNegative(NaN)).toThrow();
        expect(() => assertNotNegative(-Infinity)).toThrow();
    })
});

describe("assertInteger()", () => {

    it("should normally run if the number is an integer", () => {
        assertInteger(1);
        assertInteger(1000000000);
        assertInteger(-256);
    })

    it("should throw an error if the number is not an integer", () => {
        expect(() => assertInteger(2.4)).toThrow();
        expect(() => assertInteger(-1.4)).toThrow();
        expect(() => assertInteger(1.000000000000001)).toThrow();
        expect(() => assertInteger(NaN)).toThrow();

    })
});

describe("generateRandomCharacters()", () => {

    const N = 100;

    let exampleStrings: string[] = []

    beforeEach(() => {
        for (let i = 0; i < N; i++) {
            exampleStrings.push(generateRandomCharacters(N));
        }
    })

    afterEach(() => exampleStrings = []);

    it("should have the correct number of characters", () => {
        exampleStrings.forEach(example => {
            expect(example.length).toEqual(N);
        })
    });

    it("should have only lowercase alphabetical values", () => {
        exampleStrings.forEach(example => {
            for (let i = 0; i < example.length; i++) {
                let char = example.charCodeAt(i);
                expect(char).toBeGreaterThanOrEqual(97);
                expect(char).toBeLessThanOrEqual(123);
            }
        })
    })
});

describe("flattern2DArray()", () => {

    it("should flatten arrays", () => {
        let exampleNumbers = [[1, 2, 3], [4, 5], [6, 7, 8, 9], []];
        let exampleResults = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(flattern2DArray<number>(exampleNumbers)).toEqual(exampleResults);
    });
});

describe("buildTableFromArray()", () => {

    it("should build a table for fitting interval with array.length % entriesPerRow == 0", () => {
        let exampleArray = [1, 2, 3, 4];
        let exampleTable = [[1, 2], [3, 4]];

        expect(buildTableFromArray<number>(exampleArray, 2)).toEqual(exampleTable);
    })

    it("should nuild a table if the interval leaves an remaining number of entries", () => {
        let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8];
        let exampleTable = [[1, 2, 3], [4, 5, 6], [7, 8]];

        expect(buildTableFromArray<number>(exampleArray, 3)).toEqual(exampleTable);
    });
});


describe("addingNewLinesToString()", () => {
    it('Adding new lines to string', () => {
        expect(addingNewLinesToString('1234567890', 5)).toBe('12345\n67890\n');
        expect(addingNewLinesToString('12345', 2)).toBe('12\n34\n5\n');
    });


    it('Negative interval throws error', () => {
        expect(() => addingNewLinesToString('hello world', -5)).toThrowError();
    });

    it('Non-integer interval throws error', () => {
        expect(() => addingNewLinesToString('hello world', 4.5)).toThrowError();
    });

    it('Handles empty string', () => {
        expect(addingNewLinesToString('', 5)).toBe('');
    });
});

describe("randomArrayValue()", () => {

    it("Returns an value from the array", () => {
        const VALUES = ["bla", "bli", "blub", "la", "li", "lu"];
        let n = 10;
        while (n > 0) {
            expect(VALUES.indexOf(randomArrayValue<string>(VALUES))).not.toBe(-1);
            n--;
        }
    })
});

describe("leadingZeros()", () => {

    it("Should build a string representation with leading zeros", () => {
        expect(leadingZeros(2, 2)).toEqual("02");
        expect(leadingZeros(32, 2)).toEqual("32");
        expect(leadingZeros(5, 1)).toEqual("5");
        expect(leadingZeros(1, 5)).toEqual("00001");
        expect(leadingZeros(100, 5)).toEqual("00100");
        expect(leadingZeros(200, 2)).toEqual("200");


    });
});

describe("generateFileName()", () => {

    it("should start with 'test_", () => {
        expect(generateFileName(1)).toMatch(/^test_/);
    });
})


describe('executeCommand', () => {
    test('should execute command and return output', async () => {
        const output = await executeCommand('echo "hello world"');
        expect(output).toEqual({ ok: true, code: 0, message: 'hello world\n' });
    });

    test('should execute command and return error message', async () => {
        const output = await executeCommand('nonexistent-command');
        expect(output.ok).toBe(false);
        expect(output.code).not.toBe(0);
        expect(output.message).toBeTruthy();
    });
});

describe('checkExists', () => {
    test("should return true if an file exists", async () => {
        expect(await checkExists("/home/jakob/projects/file-managment-ts/src/utils.ts", FileSystemType.File)).toBe(true);

    });


    test("should return true if an directory exists", async () => {
        expect(await checkExists("/home/jakob/projects/file-managment-ts/src", FileSystemType.Directory)).toBe(true);

    });

    test("should return false if a file does not exist", async () => {
        expect(await checkExists("bla", FileSystemType.File)).toBe(false);
    })


    test("should return false if a directory does not exist", async () => {
        expect(await checkExists("bla", FileSystemType.Directory)).toBe(false);
    })

});

describe('buildAbsolutePath()', () => {

    it('should build the absolute path correctly', () => {
        const packagePath = '/home/user/project/';
        const path = 'test-folder/test-file.txt';
        const expectedAbsolutePath = '/home/user/project/test-folder/test-file.txt';
        jest.spyOn(JSON, 'parse').mockImplementation(() => ({ packagePath }));
        const absolutePath = buildAbsolutePath(path);
        expect(absolutePath).toBe(expectedAbsolutePath);
    });
});

