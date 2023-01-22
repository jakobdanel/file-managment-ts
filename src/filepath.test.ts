import { FilePath } from "./filepath";
import "jest";

describe("FilePath", () => {

    describe("getUserName", () => {

        it("should return the user name of the filepath", () => {

            expect(FilePath.getUserName("/home/jakob/example")).toBe("jakob");
            expect(FilePath.getUserName("/home/user123")).toBe("user123");
            expect(FilePath.getUserName("/home/user/subfolder")).toBe("user");
        });

        it("should return undefined if the filepath is in another dir", () => {
            expect(FilePath.getUserName("/etc/local/share/")).toBeUndefined();
            expect(FilePath.getUserName("/home/")).toBeUndefined();
            expect(FilePath.getUserName("/bla/bla")).toBeUndefined();
        })
    });
});
