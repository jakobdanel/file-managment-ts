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
  - [Class: Char](#class-char)
    - [Table of contents](#table-of-contents)
    - [Constructors](#constructors)
    - [Properties](#properties)
    - [Accessors](#accessors)
    - [Methods](#methods)
  - [Class: InvalidFilePathError](#class-invalidfilepatherror)
    - [Hierarchy](#hierarchy)
    - [Table of contents](#table-of-contents-1)
    - [Constructors](#constructors-1)
    - [Properties](#properties-1)
    - [Methods](#methods-1)
  - [Class: File](#class-file)
    - [Table of contents](#table-of-contents-2)
    - [Constructors](#constructors-2)
    - [Properties](#properties-2)
    - [Methods](#methods-2)
  - [Class: FilePath](#class-filepath)
    - [Table of contents](#table-of-contents-3)
    - [Constructors](#constructors-3)
    - [Properties](#properties-3)
    - [Methods](#methods-3)
- [Enums](#enums)
  - [Enumeration: FileSystemType](#enumeration-filesystemtype)
    - [Table of contents](#table-of-contents-4)
    - [Enumeration Members](#enumeration-members)
- [file-managment-ts](#file-managment-ts-1)
  - [Table of contents](#table-of-contents-5)
    - [Modules](#modules)
- [Modules](#modules-1)
  - [Module: char](#module-char)
    - [Table of contents](#table-of-contents-6)
  - [Module: error](#module-error)
    - [Table of contents](#table-of-contents-7)
  - [Module: file](#module-file)
    - [Table of contents](#table-of-contents-8)
  - [Module: filepath](#module-filepath)
    - [Table of contents](#table-of-contents-9)
  - [Module: main](#module-main)
    - [Table of contents](#table-of-contents-10)
    - [Functions](#functions)
  - [Module: utils](#module-utils)
    - [Table of contents](#table-of-contents-11)
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
- [x] show metadata of a file.
- [ ] show metadata of a dir.
- [ ] (optional) search files (by regex).
- [ ] (optional) search file content (by regex).

#### Add content
- [x] overwrite content of a file by string.
- [x] add content at the end of a file.
- [x] add content to a list of files.
- [ ] add content to every file of a dir.

#### Deleting
- [x] delete a file.
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
4. Rename the file into ```config.json ``` and save it. 


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


<a name="classescharcharmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / [char](#modulescharmd) / Char

## Class: Char

[char](#modulescharmd).Char

**`Abstract`**

This class should help to work with strings by seperating a string into
an array of characters. The constructor of this class will only accept strings with only one 
character. The value of the character will be readonly.

**`Author`**

Jakob Danel

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [#value](##value)

#### Accessors

- [value](#value)

#### Methods

- [fromString](#fromstring)
- [toString](#tostring)

### Constructors

#### constructor

• **new Char**(`c`)

**`Abstract`**

Building the character by accepting an string input and only accepting the input,
if the input has the lenght of one character.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `string` | The string to build the character from. Need to have c.length === 0. |

##### Defined in

[src/char.ts:25](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/char.ts#L25)

### Properties

#### #value

• `Private` **#value**: `number`

**`Abstract`**

This number holding the ascii code for the character.

##### Defined in

[src/char.ts:17](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/char.ts#L17)

### Accessors

#### value

• `get` **value**(): `string`

##### Returns

`string`

##### Defined in

[src/char.ts:30](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/char.ts#L30)

### Methods

#### fromString

▸ `Static` **fromString**(`s`): [`Char`](#classescharcharmd)[]

**`Abstract`**

Building an array of characters from a string. Iterates over each element of the
string and creating characters from them.

**`Static`**

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `string` | The string to build the chars from |

##### Returns

[`Char`](#classescharcharmd)[]

An array of characters.

##### Defined in

[src/char.ts:41](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/char.ts#L41)

___

#### toString

▸ `Static` **toString**(`cs`): `string`

**`Abstract`**

Builds an string from an array of characters. Iterates over each character
and builds the string

**`Static`**

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cs` | [`Char`](#classescharcharmd)[] | The array of characters to build the string from |

##### Returns

`string`

The string.

##### Defined in

[src/char.ts:56](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/char.ts#L56)


<a name="classeserrorinvalidfilepatherrormd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / [error](#moduleserrormd) / InvalidFilePathError

## Class: InvalidFilePathError

[error](#moduleserrormd).InvalidFilePathError

**`Abstract`**

This class represent the error that an inputted file path can not be resolved. This happens for example when you try to access an empty string as
file path. The class expecting the invalid filePath as an argument at creation and storing this filePath.

**`Author`**

Jakob Danel

### Hierarchy

- `Error`

  ↳ **`InvalidFilePathError`**

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [filePath](#filepath)
- [message](#message)
- [name](#name)
- [stack](#stack)
- [prepareStackTrace](#preparestacktrace)
- [stackTraceLimit](#stacktracelimit)

#### Methods

- [captureStackTrace](#capturestacktrace)

### Constructors

#### constructor

• **new InvalidFilePathError**(`filePath`)

**`Abstract`**

Constructing the error. Building an custom error message due to the file path.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The file path |

##### Overrides

Error.constructor

##### Defined in

[src/error.ts:22](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/error.ts#L22)

### Properties

#### filePath

• **filePath**: `string`

**`Abstract`**

Represent the file path that could not be resolved.

##### Defined in

[src/error.ts:15](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/error.ts#L15)

___

#### message

• **message**: `string`

##### Inherited from

Error.message

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

#### name

• **name**: `string`

##### Inherited from

Error.name

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

#### stack

• `Optional` **stack**: `string`

##### Inherited from

Error.stack

##### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

#### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

##### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

###### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

###### Returns

`any`

##### Inherited from

Error.prepareStackTrace

##### Defined in

node_modules/@types/node/globals.d.ts:11

___

#### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

##### Inherited from

Error.stackTraceLimit

##### Defined in

node_modules/@types/node/globals.d.ts:13

### Methods

#### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

##### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

##### Returns

`void`

##### Inherited from

Error.captureStackTrace

##### Defined in

node_modules/@types/node/globals.d.ts:4


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

If the file is not created yet and cannot be created due to permissions/invalid path pattern

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file. Should be provided in an absolute way for robustness reasons. |

##### Defined in

[src/file.ts:47](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L47)

### Properties

#### #path

• `Private` **#path**: `string`

**`Abstract`**

represents the path of the file. Should always be an absolute path.

**`Property`**

##### Defined in

[src/file.ts:29](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L29)

___

#### log

• **log**: `string`[]

**`Abstract`**

containing strings with informations about the actions which have taken place on the file.

**`Property`**

**`Global`**

##### Defined in

[src/file.ts:37](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L37)

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

[src/file.ts:73](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L73)

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

[src/file.ts:124](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L124)

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

[src/file.ts:164](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L164)

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

[src/file.ts:152](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L152)

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

[src/file.ts:140](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L140)

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

[src/file.ts:85](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L85)

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

[src/file.ts:96](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L96)

___

#### getPath

▸ **getPath**(): `string`

**`Abstract`**

Returns the path of the file.

##### Returns

`string`

The path of the file

##### Defined in

[src/file.ts:64](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L64)

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

[src/file.ts:130](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L130)

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

[src/file.ts:175](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L175)

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

[src/file.ts:113](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/file.ts#L113)


<a name="classesfilepathfilepathmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / [filepath](#modulesfilepathmd) / FilePath

## Class: FilePath

[filepath](#modulesfilepathmd).FilePath

**`Abstract`**

This class representing an FilePath. At creation  it will check if the path is resovable. If so, it will create an object with 
readonly properties holding the path. If the path is not resovable it will throw an exception with further debugging information.

**`Author`**

<a href="mailto: jdanel@uni-muenster.de">jdanel@uni-muenster.de</a>

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [#directory](##directory)
- [#extension](##extension)
- [#name](##name)

#### Methods

- [getUserName](#getusername)
- [isPathResolvable](#ispathresolvable)
- [normalizePath](#normalizepath)

### Constructors

#### constructor

• **new FilePath**(`filePath`)

Not implemented properly.

##### Parameters

| Name | Type |
| :------ | :------ |
| `filePath` | `string` |

##### Defined in

[src/filepath.ts:38](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L38)

### Properties

#### #directory

• `Private` **#directory**: `string`[]

**`Abstract`**

Holding the directory in the form of an array of directories. Always holding all the dirs absolute.

**`Access`**

private

**`Example`**

```ts
["home","jakob","Documents","Dir1"]
```

##### Defined in

[src/filepath.ts:17](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L17)

___

#### #extension

• `Private` **#extension**: `string`

**`Abstract`**

Holding the extension of the file if existent. If the file has no extionsion the value will be "".

**`Access`**

private

**`Example`**

```ts
"ts"
```

##### Defined in

[src/filepath.ts:33](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L33)

___

#### #name

• `Private` **#name**: `string`

**`Abstract`**

Holds the name of the file.

**`Access`**

private

**`Example`**

```ts
"script"
```

##### Defined in

[src/filepath.ts:25](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L25)

### Methods

#### getUserName

▸ `Static` **getUserName**(`path`): `undefined` \| `string`

**`Abstract`**

This static method will return the username of a given filepath string. It is used to determine if an Linux file system path is 
an users subclass and if so extracting the username. If the path is not in an users folder then the function will return undefined. It will also
return undefined for filepath which are not resolveable.

**`Access`**

public

**`Static`**

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path th extract the username from |

##### Returns

`undefined` \| `string`

The username of the given filepath string or undefined if the path is not in an users folder.

##### Defined in

[src/filepath.ts:98](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L98)

___

#### isPathResolvable

▸ `Static` **isPathResolvable**(`path`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`Promise`<`boolean`\>

##### Defined in

[src/filepath.ts:72](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L72)

___

#### normalizePath

▸ `Static` **normalizePath**(`path`): `string`

Not implemented properly!

##### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`string`

##### Defined in

[src/filepath.ts:56](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/filepath.ts#L56)

# Enums


<a name="enumsutilsfilesystemtypemd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / [utils](#modulesutilsmd) / FileSystemType

## Enumeration: FileSystemType

[utils](#modulesutilsmd).FileSystemType

**`Abstract`**

This enumeration describing the two types of items that are common in an file system:
File and Directory. I    t can be used as parameter for functions, that need an specific logic for
one of the types.

**`Param`**

Represents a directory

**`Param`**

Represents a file

### Table of contents

#### Enumeration Members

- [Directory](#directory)
- [File](#file)

### Enumeration Members

#### Directory

• **Directory** = ``0``

##### Defined in

[src/utils.ts:241](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L241)

___

#### File

• **File** = ``1``

##### Defined in

[src/utils.ts:241](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L241)


<a name="modulesmd"></a>

[file-managment-ts](#readmemd) / Modules

# file-managment-ts

## Table of contents

### Modules

- [char](#modulescharmd)
- [error](#moduleserrormd)
- [file](#modulesfilemd)
- [filepath](#modulesfilepathmd)
- [main](#modulesmainmd)
- [utils](#modulesutilsmd)

# Modules


<a name="modulescharmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / char

## Module: char

### Table of contents

#### Classes

- [Char](#classescharcharmd)


<a name="moduleserrormd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / error

## Module: error

### Table of contents

#### Classes

- [InvalidFilePathError](#classeserrorinvalidfilepatherrormd)


<a name="modulesfilemd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / file

## Module: file

### Table of contents

#### Classes

- [File](#classesfilefilemd)


<a name="modulesfilepathmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / filepath

## Module: filepath

### Table of contents

#### Classes

- [FilePath](#classesfilepathfilepathmd)


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

[src/main.ts:157](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L157)

___

#### addContentFile

▸ **addContentFile**(`filePath`, `content`): [`File`](#classesfilefilemd)

**`Abstract`**

This function will add the content of the file at the specified file path to the end of the file. If the file already exists, the content is
the form oldContent + content, if the file was not created before, the file will be created and the content are placed inside the File.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path from the file where the content will be placed. |
| `content` | `string` | The content which will be placed inside the file. |

##### Returns

[`File`](#classesfilefilemd)

The file object, for operation chaining purposes.

##### Defined in

[src/main.ts:151](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L151)

___

#### addContentFileList

▸ **addContentFileList**(`filePaths`, `content`): [`File`](#classesfilefilemd)[]

**`Abstract`**

This function adding content to the end of a list of files. The function iterated over
each entrie in filePath and adding the string from content to the end of the file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePaths` | `string`[] | The paths to the files, where to add the content |
| `content` | `string` | The content to be added |

##### Returns

[`File`](#classesfilefilemd)[]

The files objects, where rhe content was added.

##### Defined in

[src/main.ts:169](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L169)

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

[src/main.ts:209](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L209)

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

[src/main.ts:205](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L205)

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

[src/main.ts:199](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L199)

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

[src/main.ts:69](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L69)

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

[src/main.ts:33](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L33)

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

[src/main.ts:58](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L58)

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

[src/main.ts:74](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L74)

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

[src/main.ts:193](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L193)

___

#### deleteFile

▸ **deleteFile**(`filePath`): `void`

**`Abstract`**

This function will delete the file at the specified path. It will not check if the
file is existing or not. If the file at the provided filePath is not existent it will create an
empty file and immediately delete the file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path to the file to be deleted |

##### Returns

`void`

##### Defined in

[src/main.ts:187](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L187)

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

[src/main.ts:90](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L90)

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

[src/main.ts:86](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L86)

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

[src/main.ts:103](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L103)

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

[src/main.ts:122](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L122)

___

#### getMetaDataFile

▸ **getMetaDataFile**(`filePath`): `any`

**`Abstract`**

This function returning the metadata of the file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path from the file with the metadata to check. |

##### Returns

`any`

The metadata of the file.

##### Defined in

[src/main.ts:117](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L117)

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

[src/main.ts:238](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L238)

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

[src/main.ts:232](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L232)

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

[src/main.ts:225](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L225)

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

[src/main.ts:218](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L218)

___

#### writeFile

▸ **writeFile**(`filePath`, `content`): [`File`](#classesfilefilemd)

**`Abstract`**

This function will overwrite the content of the file at the specified file path, with content. If the file already exists
the old content will be overwritten, if the file did not exist the file will be created and the content placed inside the file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path from the file where the content will be placed |
| `content` | `string` | The content which will be placed inside the file |

##### Returns

[`File`](#classesfilefilemd)

The file object, for operation chaining purposes.

##### Defined in

[src/main.ts:137](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/main.ts#L137)


<a name="modulesutilsmd"></a>

[file-managment-ts](#readmemd) / [Modules](#modulesmd) / utils

## Module: utils

### Table of contents

#### Enumerations

- [FileSystemType](#enumsutilsfilesystemtypemd)

#### Functions

- [addingNewLinesToString](#addingnewlinestostring)
- [assert](#assert)
- [assertInteger](#assertinteger)
- [assertNotNegative](#assertnotnegative)
- [buildAbsolutePath](#buildabsolutepath)
- [buildTableFromArray](#buildtablefromarray)
- [checkExists](#checkexists)
- [executeCommand](#executecommand)
- [flattern2DArray](#flattern2darray)
- [generateFileName](#generatefilename)
- [generateRandomCharacters](#generaterandomcharacters)
- [leadingZeros](#leadingzeros)
- [pwd](#pwd)
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

[src/utils.ts:105](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L105)

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

[src/utils.ts:16](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L16)

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

[src/utils.ts:37](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L37)

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

[src/utils.ts:28](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L28)

___

#### buildAbsolutePath

▸ **buildAbsolutePath**(`filePath`): `string`

The function building the absolute paths of an file in this directory. If you passing an relative path from the 
root of this module to the function, it will return the absolute path build with the specified 
home path from the {@see config.json } file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path which will be converted to the absolute path. |

##### Returns

`string`

The absolute path of the given path.

##### Defined in

[src/utils.ts:275](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L275)

___

#### buildTableFromArray

▸ **buildTableFromArray**<`T`\>(`array`, `entriesPerRow`): `T`[][]

**`Abstract`**

This function will build an 2 dimensional array from an one dimensional array. It will
add entriesPerRow entries to each column. If there is an remainder, the last element will have
less entries.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be transformed into two dimensions |
| `entriesPerRow` | `number` | The number of entries for eych row |

##### Returns

`T`[][]

The two dimensional array.

##### Defined in

[src/utils.ts:83](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L83)

___

#### checkExists

▸ **checkExists**(`path`, `fst`): `Promise`<`boolean`\>

**`Abstract`**

This funcion is checking if an file or dir is existent. Therefore it is using the
Linux [ ] command for checking an expression.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to be checked |
| `fst` | [`FileSystemType`](#enumsutilsfilesystemtypemd) | FileSystemType which specifies if it should check for a file or a directory |

##### Returns

`Promise`<`boolean`\>

An Promise that resolves at any input, whith an boolean value indicating whether the
file or directory is existent or not.

##### Defined in

[src/utils.ts:252](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L252)

___

#### executeCommand

▸ **executeCommand**(`command`): `Promise`<`CommandOutput`\>

**`Abstract`**

The executeCommand() function is a Node.js utility function for running command line
commands and capturing the output. It takes a single argument, a string representing the command
to be executed, and returns a promise that resolves to an object containing the output, exit
code, and error message (if applicable).

**`Async`**

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | The command to be executed in the command line. |

##### Returns

`Promise`<`CommandOutput`\>

A promise that resolves to an object

##### Defined in

[src/utils.ts:219](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L219)

___

#### flattern2DArray

▸ **flattern2DArray**<`T`\>(`array`): `T`[]

**`Abstract`**

This function takes an abitrary 2 dimensional array and returns all values flattened
into an 1 dimensional array.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[][] | The two dimensional array to flatten |

##### Returns

`T`[]

The flattened array

##### Defined in

[src/utils.ts:65](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L65)

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

[src/utils.ts:191](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L191)

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

[src/utils.ts:48](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L48)

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

[src/utils.ts:170](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L170)

___

#### pwd

▸ **pwd**(): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

##### Defined in

[src/utils.ts:260](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L260)

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

[src/utils.ts:154](https://github.com/jakobdanel/file-managment-ts/blob/228df06/src/utils.ts#L154)
