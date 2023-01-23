import "jest"
import {assert, assertInteger, assertNotNegative} from "./utils";

describe("assert()", () => {

    it("should normally return if the condition is true", () => {
        assert(true,"");
    });

    it("should throw an error if the condition is false", () => {
        expect(() => assert(false,"")).toThrow();
    });

    it("should throw an error with the correct error message, if the condition is not true", () => {
        expect(() => assert(false,"This is a message")).toThrow("This is a message");
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

    it("should throw an error if the number is negative",() => {
        expect(() => assertNotNegative(-1)).toThrow();
        expect(() => assertNotNegative(-0.00000000001)).toThrow();
        expect(() => assertNotNegative(NaN)).toThrow();
        expect(() => assertNotNegative(-Infinity)).toThrow();
    })
});

describe("assertInteger()", () => {

    it("should normally run if the number is an integer",() => {
        assertInteger(1);
        assertInteger(1000000000);
        assertInteger(-256);
    })

    it("should throw an error if the number is not an integer",() => {
        expect(() => assertInteger(2.4)).toThrow();
        expect(() => assertInteger(-1.4)).toThrow();
        expect(() => assertInteger(1.000000000000001)).toThrow();
        expect(() => assertInteger(NaN)).toThrow();
        
    })
});
