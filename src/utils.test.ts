import "jest"
import {assert} from "./utils";

describe("assert", () => {

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