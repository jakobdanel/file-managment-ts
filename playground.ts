import { File } from "src/file";
import { executeCommand } from "./src/utils";


async function main() {
    return checkExists("./src/test-dir",FileSystemType.File);
}

enum FileSystemType { Directory, File }

async function checkExists(filePath: string, fst: FileSystemType): Promise<boolean> {
    let flag = fst === FileSystemType.Directory ? "d" : "f";
    let result = await executeCommand(`[ -${flag} ${filePath} ]`);
    return new Promise<boolean>((resolve, reject) => {
        return resolve(result.ok);
    });
}

main().then((data) => {
    console.log("Runned successfully")
    console.log(data);
}).catch((err) => {
    console.log("Failed to run");
    console.log(err);
})