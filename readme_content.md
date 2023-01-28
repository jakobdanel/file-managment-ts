## file-managment-ts
This module should be used to do stuff like file creating moving, copieng, etc. via Typescript/Javascript. It will contain basic API functions to input in your code. Implementation by implementing in ts and adding the ts flavour later.

### Features

#### Creating 
- [x] create an empty file
- [x] create an file with the content of a string
- [ ] creating a directory.
- [ ] creating a directory with files.

#### Check existences
- [x] check if a file exists
- [ ] check if a directory exists

#### Get content
- [x] get the content of a file.
- [ ] show metadata of a file.
- [ ] show metadata of a dir.
- [ ] (optional) search files (by regex).
- [ ] (optional) search file content (by regex).

#### Add content
- [ ] overwrite content of a file by string.
- [ ] add content at the end of a file.
- [ ] add content to a list of files.
- [ ] add content to every file of a dir.

#### Deleting
- [ ] delete a file.
- [ ] delete a dir (recursive and non recursive)

#### Copieng
- [ ] copy content from a file into another file.
- [ ] copy a file.
- [ ] copy a dir.

#### Rename
- [ ] rename a file
- [ ] rename a directory

#### Move
- [ ] move a file.
- [ ] move a dir.


### Limitations
The library is at the moment only usable for utf-8 encoded files in terms of reading, and adding content to the file. All other features should work properly (not tested atm). Encoding of other file formats, e.g. imaage formats, could be an enhancement in the future.

### Structure
Methods should be fully functional, meaning they should have no side-effects. For the start every function is in the same file, maybe a proper reorganisation of the functions later. Methods are only available by a js/ts call a cli API is not planned, because of the Linux build in tools.

### Roadmap
- [x] Defining project goals in this README
- [ ] Define the methods with an NotImplementedError
- [ ] Write unit tests for each function (all file interactions will be done in an dir in this folder, which is cleared after every test and should be empty at any time, beside test run time.
- [ ] Implementing the functions.
- [ ] Add an proper logger to the tool.

### Build
1. ```git clone https://github.com/jakobdanel/file-managment-ts```
2. Open ``` config.example.json ``` with an text editor of your own choice.
3. Replacing the value of ``` packageDirectory ``` with the path to the directory, where you have cloned the project. 
4. Rename the file into ```config.json `` and save it. 


#### Transpile
1. cd into this directory.
2. Run ```npx tsc main.ts```

#### Test
1. cd into this directory
2. Run ```npm run test```

#### Documentation
The documentation will be build automatically via typedoc and the typedoc plugin typedoc-plugin-markdown. Via the concat-md tool the generated Markdown Files are getting pushed into this README file. 

##### Rebuild the README file.
1. cd into this directory.
2. Run ```./build_documentation```

##### Manually modify the README
If you want to add content to this self written part of the README:
1. Modify the content inside of ```./readme_content.md```
2. Rebuild the markdwon file.

### About
Author: [Jakob Danel](https://github.com/jakobdanel)
Date: 2022-01-02


