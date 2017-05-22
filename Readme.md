## Unofficial Fanduel API

Have you ever wanted programmatic access to Fanduel.com? Maybe to automatically import player data into your daily fantasy sports model. Or automatically contests that match a set of criteria. Well now you can.

This is a TypeScript library which allows you to access the REST endpoints that Fanduel.com itself uses. The library enables you to perform all the core functionality of Fanduel programmatically.

Note: This is definitely against the Fanduel ToS so be careful what account you use it with. 

## Getting Started

* First, check out the repository somewhere
* Then you should be able to create a nodejs script containing:

```
"use strict";

const Fanduel = require("./fd-api").default;
const auth = {username: "your fanduel userame", password: "your fanduel password"};

const fd = new Fanduel(auth);

fd.getAvailableSlates().then(slates => {
    console.log(slates);
    process.exit(0);
});
```

Replacing the placeholders with your Fanduel credentials.

## Examples

Check out the examples/ folder for sample code around what can be done with this library.

## Development

This is written in TypeScript so you'll definitely need TypeScript (http://www.typescriptlang.org/index.html#download-links) installed. If you want to run TypeScript without compiling it you'll also need ts-node (https://github.com/TypeStrong/ts-node). I'd recommend ts-node since it tightens the development feedback loop.

To build the JavaScript, just run "tsc" in the root folder and it'll use the tsconfig.json settings to build the files in dist/