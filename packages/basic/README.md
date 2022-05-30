# @gitart/eslint-config-basic

`.eslintrc.js`

```js
module.exports = {
  extends: ['@gitart/eslint-config-basic'],
}
```

---

## Babel Parser (Optional)

If you are going some syntax that is not supported by the ESlint defaujlt parser, 
you can use `@babel/eslint-parser` in the `.eslintrc.js` file.

```sh
npm install @babel/eslint-parser
```

```js
module.exports = {
  extends: ['@gitart/eslint-config-basic'],
  parser: '@babel/eslint-parser',
}
```

After that, it will work.

```js
class Car {
  type = 'Electric'

  constructor() {
    // ...
  }
}
```