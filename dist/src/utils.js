"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFileName = exports.leadingZeros = exports.randomArrayValue = exports.addingNewLinesToString = exports.generateRandomCharacters = exports.assertInteger = exports.assertNotNegative = exports.assert = void 0;
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
function addingNewLinesToString(string, interval) {
    assertNotNegative(interval);
    assertInteger(interval);
    let result = '';
    for (let i = 0; i < string.length; i += interval) {
        result += string.substring(i, i + interval) + '\n';
    }
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
//# sourceMappingURL=utils.js.map