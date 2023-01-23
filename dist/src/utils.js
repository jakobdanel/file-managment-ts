"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = exports.generateFileName = exports.leadingZeros = exports.randomArrayValue = exports.addingNewLinesToString = exports.buildTableFromArray = exports.flattern2DArray = exports.generateRandomCharacters = exports.assertInteger = exports.assertNotNegative = exports.assert = void 0;
const char_1 = require("./char");
const child_process_1 = require("child_process");
function assert(condition, message = "Assertion failed") {
    if (!condition) {
        throw new Error(message);
    }
}
exports.assert = assert;
function assertNotNegative(n) {
    assert(n >= 0, "Assertion failed: Expected not negative number but got " + n);
}
exports.assertNotNegative = assertNotNegative;
function assertInteger(n) {
    assert(Number.isInteger(n), "Assertion failed: Expected integer but got " + n);
}
exports.assertInteger = assertInteger;
function generateRandomCharacters(n) {
    assertNotNegative(n);
    assertInteger(n);
    let result = '';
    for (let i = 0; i < n; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    return result;
}
exports.generateRandomCharacters = generateRandomCharacters;
function flattern2DArray(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
        }
    }
    return result;
}
exports.flattern2DArray = flattern2DArray;
function buildTableFromArray(array, entriesPerRow) {
    assertInteger(entriesPerRow);
    assertNotNegative(entriesPerRow);
    assert(entriesPerRow !== 0, "entriesPerRow must be positive");
    let result = [];
    for (let i = 0; i < array.length; i += entriesPerRow) {
        result.push(array.slice(i, i + entriesPerRow));
    }
    return result;
}
exports.buildTableFromArray = buildTableFromArray;
function addingNewLinesToString(string, interval) {
    assertNotNegative(interval);
    assertInteger(interval);
    let chars = char_1.Char.fromString(string);
    let table = buildTableFromArray(chars, interval);
    let lines = [];
    table.forEach(row => {
        row.push(new char_1.Char("\n"));
        lines.push(char_1.Char.toString(row));
    });
    let result = "";
    lines.forEach(line => result += line);
    return result;
}
exports.addingNewLinesToString = addingNewLinesToString;
const fileExtensions = [
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
];
function randomArrayValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}
exports.randomArrayValue = randomArrayValue;
function leadingZeros(n, targetLength) {
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
exports.leadingZeros = leadingZeros;
function generateFileName(n) {
    assertNotNegative(n);
    assertInteger(n);
    return `test_${leadingZeros(n, 3)}.${randomArrayValue(fileExtensions)}`;
}
exports.generateFileName = generateFileName;
function executeCommand(command) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(command, (err, stdout, stderr) => {
            if (err) {
                if (err.code === undefined)
                    err.code = 0;
                resolve({ ok: false, code: err.code, message: stderr });
            }
            else {
                resolve({ ok: true, code: 0, message: stdout });
            }
        });
    });
}
exports.executeCommand = executeCommand;
//# sourceMappingURL=utils.js.map