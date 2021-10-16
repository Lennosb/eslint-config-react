# eslint-config-react

My ESLint configuration for React

## Usage

```sh
# you also need eslint if not installed already: yarn add eslint --dev
yarn add eslint-config-react-lennard --dev
```

In `.eslintrc`:

```json
{ 
  "extends": "react-lennard", 
} 
```

In `tsconfig.json` (if you want to use my base TS configuration):

```json
{
  "extends": "eslint-config-react-lennard/tsconfig.base"
}
```
