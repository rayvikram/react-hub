## motive

- In this repo i will try to use all react-features ( hooks, context, HOC, error-boundary, etc) so that i can use this as a reference in future.

## used features

- context
- ErrorHandling HOC
- Prettier & eslint
- Absolute Imports
- Dynamic Theme

## TODO

- code splitting
- portals
- testing

## Recommended plugins or practices

### Plugins / Packages

1. eslint
2. prettier
3. eslint-config-prettier
4. eslint-plugin-jsx-a11y
5. eslint-plugin-import
6. eslint-plugin-react
7. eslint-plugin-react-hooks

### structure

1. Absolute import for components to make the code look clean
2. try using react.strict mode

## to add prettier

1. add the dev dependency from package.json if you want to use prettier with cmd
2. add the script `prettier \"src/**/*.{js,html}\" --write` in `scripts` in package.json if you want to use prettier with cmd
3. Add prettier in VS code
4. enable `format on save` setting in VS code (search in VIEW>PREFERENCE>SETTINGS search)
5. enable prettier `require config` so that prettier will only format if the project has `.prettierrc` file. (search in VIEW>PREFERENCE>SETTINGS search)
6. create a file `.prettierrc` with empty object {}
7. All DONE

## to add eslint

1. install dev dependency of `eslint and eslint-config-prettier`
2. add the script `eslint \"src/**/*.{js,jsx}\" --quiet` in `script`
3. install eslint in vs code.
4. add a file `.eslint.json` and add content/rules in it.

## to enable absolute import

1. create and add content in `jsconfig.json` so enable `src` as base folder
2. if using eslint add `import/resolver` in `.eslintrc.json` to let eslintlint about the imports

## Commands

> `yarn format` - to format the codebase using prettier
> `yarn build` - to build production version
