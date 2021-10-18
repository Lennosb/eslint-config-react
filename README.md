# @lennardvdberg/eslint-config-react-lennard

[![CircleCI](https://circleci.com/gh/lennardvandenberg/eslint-config-react/tree/main.svg?style=svg)](https://circleci.com/gh/lennardvandenberg/eslint-config-react/tree/main)
[![npm version](https://badge.fury.io/js/@lennardvdberg%2Feslint-config-react-lennard.svg)](https://badge.fury.io/js/@lennardvdberg%2Feslint-config-react-lennard)

An opinionated default [ESLint](https://github.com/eslint/eslint) + [Typescript](https://github.com/microsoft/TypeScript) + [Prettier](https://github.com/prettier/prettier) configuration for [React](https://github.com/facebook/react).

## Usage

```sh
# you also need eslint if not installed already: yarn add eslint --dev
yarn add @lennardvdberg/eslint-config-react-lennard --dev
```

The [`example`](/example) folder contains the files required to use this configuration. The prettier configuration needs to be copied manually. Alternatively, you can also add the ESLint and Typescript configuration manually:

In `.eslintrc.js`:

```js
module.exports = {
  extends: "eslint-config-react-lennard",
  rules: {
    // override or add additional rules here
  }
}
```

In `tsconfig.json` (if you want to use my base TS configuration):

```json
{
  "extends": "@lennardvdberg/eslint-config-react-lennard/tsconfig.base"
}
```

## Releases

Pushes to the 'main' branch are automatically published to NPM. This is done via [semantic-release](https://github.com/semantic-release/semantic-release) which runs on CircleCI, see the [CircleCI config](/.circleci/config.yml). Semantic-release uses the commit messages to check whether a release is necessary and what the version bump will be, see [How does CircleCI work?](https://github.com/semantic-release/semantic-release#how-does-it-work).
