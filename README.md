<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [file-managment-ts](#file-managment-ts)
    - [Features](#features)
    - [Limitations](#limitations)
    - [Structure](#structure)
    - [Roadmap](#roadmap)
    - [Build](#build)
    - [About](#about)
- [Classes](#classes)
  - [Class: File](#class-file)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Methods](#methods)
- [file-managment-ts](#file-managment-ts-1)
  - [Table of contents](#table-of-contents-1)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: file](#module-file)
    - [Table of contents](#table-of-contents-2)
  - [Module: main](#module-main)
    - [Table of contents](#table-of-contents-3)
    - [Functions](#functions)
  - [Module: test](#module-test)
  - [Module: utils](#module-utils)
    - [Table of contents](#table-of-contents-4)
    - [Functions](#functions-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


<a name="readmemd"></a>

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
To work with this project run:
```git clone https://github.com/jakobdanel/file-managment-ts```

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



# Classes


<a name="classesfilefilemd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / [file](#modulesfilemd) / File

## Class: File

[file](#modulesfilemd).File

**`Abstract`**

This class is used to represent a file. It shoul use at the one Hand as helper for the functions of the main.ts file, but also
can be used individually. The main advantage of this class is that you can easily chain multiple operations e.g. first adding content to a file
and the moving a file to another location without having to worry about the files path.

**`Author`**

Jakob Danel

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [#path](##path)
- [log](#log)

#### Methods

- [#checkDelete](##checkdelete)
- [addContent](#addcontent)
- [copy](#copy)
- [copyContent](#copycontent)
- [delete](#delete)
- [getContent](#getcontent)
- [getMetadata](#getmetadata)
- [getPath](#getpath)
- [modifyContent](#modifycontent)
- [move](#move)
- [updateContent](#updatecontent)

### Constructors

#### constructor

• **new File**(`path`)

**`Abstract`**

Constructing the file object. Setting the properties. Logging "Logged file: ${path}". If the file is not created yet it will create
the file and add an log message to the log.

**`Throws`**

Error If the file is not created yet and cannot be created due to permissions/invalid path pattern

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file. Should be provided in an absolute way for robustness reasons. |

##### Defined in

[file.ts:45](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L45)

### Properties

#### #path

• `Private` **#path**: `string`

**`Abstract`**

represents the path of the file. Should always be an absolute path.

**`Property`**

##### Defined in

[file.ts:27](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L27)

___

#### log

• **log**: `string`[]

**`Abstract`**

containing strings with informations about the actions which have taken place on the file.

**`Property`**

**`Global`**

##### Defined in

[file.ts:35](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L35)

### Methods

#### #checkDelete

▸ `Private` **#checkDelete**(): `void`

**`Abstract`**

checking if the file was already deleted. If the file is deleted throw an error.

**`Throws`**

Error If the file was already deleted it throws an error.

##### Returns

`void`

##### Defined in

[file.ts:71](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L71)

___

#### addContent

▸ **addContent**(`content`): `void`

**`Abstract`**

Adding content to the of a file.

**`Throws`**

Error if the File was already deleted.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` | A string with the content to be appended at the end of the file. |

##### Returns

`void`

##### Defined in

[file.ts:122](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L122)

___

#### copy

▸ **copy**(`destFilePath`): `void`

**`Abstract`**

Copy the content of the file inside another file.

**`Throws`**

Error if the file was already deleted.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destFilePath` | `string` | The path where the file was copied |

##### Returns

`void`

##### Defined in

[file.ts:162](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L162)

___

#### copyContent

▸ **copyContent**(`destFile`): `void`

**`Abstract`**

Copieng the content of the file inside another file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destFile` | [`File`](#classesfilefilemd) | The file were the data to be copied. |

##### Returns

`void`

##### Defined in

[file.ts:150](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L150)

___

#### delete

▸ **delete**(): `void`

**`Abstract`**

Delete the file. After that move the object is not useable anymore. Every function call will throw an error.

**`Throws`**

Error if the File was already deleted.

##### Returns

`void`

##### Defined in

[file.ts:138](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L138)

___

#### getContent

▸ **getContent**(): `string`

**`Abstract`**

Get the content of a file.

**`Throws`**

Error If the file was already deleted

##### Returns

`string`

The content of the file as a string

##### Defined in

[file.ts:83](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L83)

___

#### getMetadata

▸ **getMetadata**(): `any`

**`Abstract`**

Get the metadata of the file.

**`Throws`**

Error If the file was already deleted

**`Throws`**

Error If the metadata could not be read.

##### Returns

`any`

The metadata of the file.

##### Defined in

[file.ts:94](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L94)

___

#### getPath

▸ **getPath**(): `string`

**`Abstract`**

Returns the path of the file.

##### Returns

`string`

The path of the file

##### Defined in

[file.ts:62](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L62)

___

#### modifyContent

▸ **modifyContent**(`lambda`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `lambda` | `StringModifier` |

##### Returns

`void`

##### Defined in

[file.ts:128](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L128)

___

#### move

▸ **move**(`newPath`): `void`

**`Abstract`**

Moving the File to a new location. Update the path property.

**`Throws`**

Error if the file was already deleted.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPath` | `string` | The path where to move the file. |

##### Returns

`void`

##### Defined in

[file.ts:173](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L173)

___

#### updateContent

▸ **updateContent**(`content`): `void`

**`Abstract`**

Update the content of a file. Overwrite all existing content inside the file.

**`Throws`**

Error if the File was already deleted.

##### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

##### Returns

`void`

##### Defined in

[file.ts:111](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/file.ts#L111)


<a name="modulesmd"></a>

[file-managment-ts](#readmemd) / Modules

# file-managment-ts

## Table of contents

### Modules

- [file](#modulesfilemd)
- [main](#modulesmainmd)
- [test](#modulestestmd)
- [utils](#modulesutilsmd)

# Modules


<a name="modulesfilemd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / file

## Module: file

### Table of contents

#### Classes

- [File](#classesfilefilemd)


<a name="modulesmainmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / main

## Module: main

### Table of contents

#### Functions

- [addContentDir](#addcontentdir)
- [addContentFile](#addcontentfile)
- [addContentFileList](#addcontentfilelist)
- [copyContent](#copycontent)
- [copyDir](#copydir)
- [copyFile](#copyfile)
- [createDir](#createdir)
- [createEmptyFile](#createemptyfile)
- [createFile](#createfile)
- [createFileTree](#createfiletree)
- [deleteDir](#deletedir)
- [deleteFile](#deletefile)
- [dirExists](#direxists)
- [fileExists](#fileexists)
- [getContent](#getcontent)
- [getMetaDataDir](#getmetadatadir)
- [getMetaDataFile](#getmetadatafile)
- [moveDir](#movedir)
- [moveFile](#movefile)
- [renameDir](#renamedir)
- [renameFile](#renamefile)
- [writeFile](#writefile)

### Functions

#### addContentDir

▸ **addContentDir**(`dirPath`, `content`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |
| `content` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:135](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L135)

___

#### addContentFile

▸ **addContentFile**(`filePath`, `content`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `content` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:128](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L128)

___

#### addContentFileList

▸ **addContentFileList**(`filePaths`, `content`): [`File`](#classesfilefilemd)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePaths` | `string`[] |
| `content` | `string` |

##### Returns

[`File`](#classesfilefilemd)[]

##### Defined in

[main.ts:140](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L140)

___

#### copyContent

▸ **copyContent**(`srcFilePath`, `destDirPath`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcFilePath` | `string` |
| `destDirPath` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:174](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L174)

___

#### copyDir

▸ **copyDir**(`srcDirPath`, `destDirPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcDirPath` | `string` |
| `destDirPath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:170](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L170)

___

#### copyFile

▸ **copyFile**(`srcFilePath`, `destFilePath`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcFilePath` | `string` |
| `destFilePath` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:164](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L164)

___

#### createDir

▸ **createDir**(`dirPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:69](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L69)

___

#### createEmptyFile

▸ **createEmptyFile**(`filePath`): [`File`](#classesfilefilemd)

**`Abstract`**

This function will create an empty File. It uses the File class from file.ts
It will creating a new File object and then checking if at the given path a File already exists.
If so it will throw an error.

**`Throws`**

Error if the path pattern is invalid {@see file.ts}

**`Throws`**

Error if the file already exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path to the file |

##### Returns

[`File`](#classesfilefilemd)

File the File object, for further manipulation

##### Defined in

[main.ts:33](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L33)

___

#### createFile

▸ **createFile**(`filePath`, `content`): [`File`](#classesfilefilemd)

**`Abstract`**

This function will create a new file at the given path with the given contents.
It will creating a new File object and then checking if at the given path a File already exists.
If so it will throw an error. For setting the contents of the file, it will use the File.updateContent()
method.

**`Throws`**

Error if the path pattern can not be resolved {@see file.ts}

**`Throws`**

Error if the file already exists.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path to the file to create |
| `content` | `string` | The content to set into the file |

##### Returns

[`File`](#classesfilefilemd)

File the File object, for further manipulation

##### Defined in

[main.ts:58](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L58)

___

#### createFileTree

▸ **createFileTree**(`fileTree`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileTree` | `FileTree` |

##### Returns

`void`

##### Defined in

[main.ts:74](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L74)

___

#### deleteDir

▸ **deleteDir**(`dirPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:158](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L158)

___

#### deleteFile

▸ **deleteFile**(`filePath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:152](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L152)

___

#### dirExists

▸ **dirExists**(`dirPath`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

##### Returns

`boolean`

##### Defined in

[main.ts:90](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L90)

___

#### fileExists

▸ **fileExists**(`filePath`): `boolean`

**`Abstract`**

This method checks if the inputted file exists or not.
If the filePath can not be resolved, the function will return false.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path to the file which will be checked. |

##### Returns

`boolean`

True if the file exists, false if not

##### Defined in

[main.ts:86](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L86)

___

#### getContent

▸ **getContent**(`filePath`): `string` \| ``null``

**`Abstract`**

Returning the of the file. If the file exsists. If the file do not exists then
the function will return null.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path to the file where the file is located. |

##### Returns

`string` \| ``null``

A string containing the content of the file. Null if the file do not exist.

##### Defined in

[main.ts:103](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L103)

___

#### getMetaDataDir

▸ **getMetaDataDir**(`dirPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `dirPath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:115](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L115)

___

#### getMetaDataFile

▸ **getMetaDataFile**(`filePath`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

##### Returns

`any`

##### Defined in

[main.ts:110](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L110)

___

#### moveDir

▸ **moveDir**(`srcDirPath`, `destDirPath`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcDirPath` | `string` |
| `destDirPath` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:203](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L203)

___

#### moveFile

▸ **moveFile**(`srcFilePath`, `destFilePath`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcFilePath` | `string` |
| `destFilePath` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:197](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L197)

___

#### renameDir

▸ **renameDir**(`srcDirPath`, `newName`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcDirPath` | `string` |
| `newName` | `string` |

##### Returns

`void`

##### Defined in

[main.ts:190](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L190)

___

#### renameFile

▸ **renameFile**(`srcFilePath`, `newName`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `srcFilePath` | `string` |
| `newName` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:183](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L183)

___

#### writeFile

▸ **writeFile**(`filePath`, `content`): [`File`](#classesfilefilemd)

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |
| `content` | `string` |

##### Returns

[`File`](#classesfilefilemd)

##### Defined in

[main.ts:121](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/main.ts#L121)


<a name="modulestestmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / test

## Module: test


<a name="modulesutilsmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / utils

## Module: utils

### Table of contents

#### Functions

- [addingNewLinesToString](#addingnewlinestostring)
- [assert](#assert)
- [assertInteger](#assertinteger)
- [assertNotNegative](#assertnotnegative)
- [generateFileName](#generatefilename)
- [generateRandomCharacters](#generaterandomcharacters)
- [leadingZeros](#leadingzeros)
- [randomArrayValue](#randomarrayvalue)

### Functions

#### addingNewLinesToString

▸ **addingNewLinesToString**(`string`, `interval`): `string`

**`Abstract`**

Adding new lines every interval characters to the string. It iterates over the characters of the string.
Than the function will build a substring for each interval and adding a \n to the string

**`Throws`**

Error if the inputted number is negative

**`Throws`**

Error if the inputted number is not an Integer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to be modified |
| `interval` | `number` | The interval after which to add new lines |

##### Returns

`string`

The modified string, with evenly new lines added

##### Defined in

[utils.ts:62](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L62)

___

#### assert

▸ **assert**(`condition`, `message?`): `void`

**`Abstract`**

This method checking if the condition is true, if not it will throw an exception with
the inputted error message. If the condition is true the function will return void.

**`Throws`**

Error if the condition is false

##### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `condition` | `boolean` | `undefined` | The condition to check |
| `message` | `string` | `"Assertion failed"` | The error message which will be thrown if the condition is false |

##### Returns

`void`

##### Defined in

[utils.ts:12](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L12)

___

#### assertInteger

▸ **assertInteger**(`n`): `void`

**`Abstract`**

Implementation of [assert](#assert) method to check that the number is an integer.

**`Throws`**

Error if the number is not an integer.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number to check. |

##### Returns

`void`

##### Defined in

[utils.ts:32](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L32)

___

#### assertNotNegative

▸ **assertNotNegative**(`n`): `void`

**`Abstract`**

Implementation of [assert](#assert) method to check that a number is positive or 0.

**`Throws`**

Error if the number is not positive or 0

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number to check |

##### Returns

`void`

##### Defined in

[utils.ts:23](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L23)

___

#### generateFileName

▸ **generateFileName**(`n`): `string`

**`Abstract`**

Generating a file name with the schema: `test_${leadingZeros(n, 3)}.${randomArrayValue<string>(fileExtensions)}`

**`Throws`**

Error if n is negative

**`Throws`**

Error if n is not an integer

**`Example`**

```ts
generateFileName(10) = "test_010.js"
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number which the file name will have. |

##### Returns

`string`

The semi random file name

##### Defined in

[utils.ts:143](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L143)

___

#### generateRandomCharacters

▸ **generateRandomCharacters**(`n`): `string`

**`Abstract`**

Creating a random string with n characters. Uses only the lowercase alphabetical characters.

**`Throws`**

Error if the inputted number is negative

**`Throws`**

Error if the inputted number is not an integer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | the number of characters to generate |

##### Returns

`string`

A string concenate the generated characters

##### Defined in

[utils.ts:43](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L43)

___

#### leadingZeros

▸ **leadingZeros**(`n`, `targetLength`): `string`

**`Abstract`**

Generating a string representing an integer having targetLength leading characters, so that all
left spaces which are not needed to represent the number are filled with 0. If more characters are needed
to represent the number then the string will have more characters than the targetLength specified.

**`Throws`**

An error if n or targetLength is negative

**`Throws`**

An error if n or targetLength is not an integer

**`Example`**

```ts
leadingZeros(34,3) = "034"
```

**`Example`**

```ts
leadingZeros(187,2) = "187" //Note that targetLength could not be fullfilled, because n > 99
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | `number` | The number which are modified |
| `targetLength` | `number` | The length of the target string. |

##### Returns

`string`

A string representing n with targetLength characters

##### Defined in

[utils.ts:122](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L122)

___

#### randomArrayValue

▸ **randomArrayValue**<`T`\>(`array`): `T`

**`Abstract`**

Generating a random value from an array of abitrary data.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array of values. |

##### Returns

`T`

The random choosen value.

##### Defined in

[utils.ts:106](https://github.com/jakobdanel/file-managment-ts/blob/6acdd6b/src/utils.ts#L106)
