# path-to-json

Convert /path/to/file to {path:{to:{file:{}}}}

## Install

```bash
$ npm install path-to-json
```

## Usage

```js
const pathToJSON=require("path-to-json")
const data=[
    'any/path/to/file/or/folder',
    'other/path/to/file/or/folder'
]
const extraData='anything' //optional
const converted=pathToJSON(data,extraData)
console.log(JSON.stringify(converted,null,4))
```