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

    describe("isPathResovable", () => {

        test("should return true for existing files paths", async () => {
            expect(await FilePath.isPathResolvable("/home/jakob/projects/file-managment-ts/src/filepath.ts")).toBe(true);
            expect(await FilePath.isPathResolvable("/home/jakob/projects/file-managment-ts/src/main.test.ts")).toBe(true);
            expect(await FilePath.isPathResolvable("/home/jakob/projects/file-managment-ts/src/README.md")).toBe(true);

        })

        test("should return true if the file do not exists, bit the specified folder, does ", async () => {
            expect(await FilePath.isPathResolvable("/home/jakob/projects/file-managment-ts/src/filepath123.ts")).toBe(true);
            expect(await FilePath.isPathResolvable("/home/jakob/projects/file-managment-ts/READA.txt")).toBe(true);

        })

        test("should return true if the dir do not exists", async () => {
            expect(await FilePath.isPathResolvable("/home/bla/blub")).toBe(false);

        })
    });
});
