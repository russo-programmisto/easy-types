<p align="center">
    <a href="https://nodejs.org">
        <img src="https://img.shields.io/badge/Created for-Node.js-teal.svg?style=flat">
    </a>
    <a href="https://www.typescriptlang.org">
        <img src="https://img.shields.io/badge/Written in-TypeScript-purple.svg?style=flat">
    </a>
    <a href="https://tldrlegal.com/license/mit-license">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat">
    </a>
</p>

## At a Glance

**easy-types** is a better way of working with types in TypeScript. Much better than the normal approach suggested by JavaScript. If you are tired of using `typeof`, `Array.isArray`, `=== null` and other annoying things, then this library is a solution.

## How to Get Started

Type in Terminal:

```
npm install --save @russo-programmisto/easy-types
```

or, if you prefer **yarn** over **npm**, type:

```
yarn add @russo-programmisto/easy-types
```

Then add import instruction to your code:

```typescript
import { getType, Type } from '@russo-programmisto/easy-types'
```

## Requirements

Basic knowledge of TypeScript and NPM.

## Usage

```typescript
const obj = {};
const type = getType(obj);
type === Type.object // true
type === Type.null // false

// get type easily
getType("") === Type.string // true
getType(undefined) === Type.undefined // true

// or even easier
isType("", Type.string) // true

// check whether it's array or object
isType(obj, Type.array, Type.object)

// check missing values
isNullOrUndefined(obj)

// check empty values
isEmptyString("") // true
isEmptyArray([]) // true
isEmptyObject({}) // true

// or you can simply use `isEmpty` method that works for strings, arrays, and non-array objects:
isEmpty("") // true
isEmpty([]) // true
isEmpty({}) // true

// combine checks
isEmpty(obj.field) || isNullOrUndefined(obj.field)
```

## License

**types** is available under the MIT license. See the [LICENSE](./LICENSE) file for more info.
