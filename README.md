# @lennardvdberg/eslint-config-react-lennard

[![npm version](https://badge.fury.io/js/@lennardvdberg%2Feslint-config-react-lennard.svg)](https://badge.fury.io/js/@lennardvdberg%2Feslint-config-react-lennard)

An opinionated default [ESLint](https://github.com/eslint/eslint) + [Typescript](https://github.com/microsoft/TypeScript) + [Prettier](https://github.com/prettier/prettier) configuration for [React](https://github.com/facebook/react). Make Eslint and prettier work with only one package installation.

## Usage

```sh
yarn add @lennardvdberg/eslint-config-react-lennard --dev
```

The [`example`](/example) folder contains the files required to use this configuration. Alternatively, you can also add the ESLint, Prettier and Typescript configuration manually:

1. Create an `.eslintrc.js` file in your project root:

```js
module.exports = {
  extends: 'eslint-config-react-lennard',
  rules: {
    // override or add additional rules here
  },
}
```

2. In `tsconfig.json` (if you want to use my base TS configuration):

```json
{
  "extends": "@lennardvdberg/eslint-config-react-lennard/tsconfig.base"
}
```

3. Create a .prettierrc.js file in your project root and add:

```js
const prettier = require('@lennardvdberg/eslint-config-react-lennard/prettier')

// You can also overwrite some keys in this config

module.exports = prettier
```

Alternatively, in your package.json file add the following key:

```json
{
  "prettier": "@lennardvdberg/eslint-config-react-lennard/prettier"
}
```

4. Also recommended to add an `.editorconfig` file at the project root:

```
root = true

[*]
indent_style = tab
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

5. If you're using VSCode, you can copy the files in the .vscode folder to enable "Format on save" and use the ESLint plugin for formatting.

6. This package is meant to be used as an opinionated standalone. It includes both `eslint` and `prettier`. With these you can for example use them in `scripts` in `package.json`:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## Releases

Pushes to the 'main' branch are automatically published to NPM. This is done via [semantic-release](https://github.com/semantic-release/semantic-release) which runs on CircleCI, see the [CircleCI config](/.circleci/config.yml). Semantic-release uses the commit messages to check whether a release is necessary and what the version bump will be, see [How does CircleCI work?](https://github.com/semantic-release/semantic-release#how-does-it-work).
