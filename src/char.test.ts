import { Char } from "./char";

describe("Char", () => {

    describe("constructor", () => {

        it("should throw an eror if the lenght of the inputted string is not equal to one",() => {
            expect(() => new Char("")).toThrow();
            expect(() => new Char("ab")).toThrow();
        })

        it("should store the correct character",() => {
            expect(new Char("a").value).toBe("a");
            expect(new Char("b").value).toBe("b");
            expect(new Char("\n").value).toBe("\n");
        });
    });
});