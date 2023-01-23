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


    describe("fromString",() => {

        it("should have the correct length",() => {

            expect(Char.fromString("Hello, world!").length).toEqual(13);
            expect(Char.fromString("").length).toEqual(0);
        });

        it("should have the correct characters",() => {
            let string = "Hello, world!";
            let chars = Char.fromString(string);
            for(let i = 0; i < string.length;i++){
                expect(string[i]).toEqual(chars[i].value);
            }
        });

    });
});