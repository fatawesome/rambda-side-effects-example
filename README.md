This repository shows webpack optimization bailouts with `rambda@7.2.1`.

To see the bailouts, open `stats.json` and search for `rambda.mjs` in modules section. 
In found objects there is a `optionmizationBailouts` field, which indicates what problemns webpack had when building the project
There you will see the following:
```text
Statement (VariableDeclaration) with side effects in source code at 28:0-31
```
It basically indicates that `const adjust = curry(adjustFn);` could not be optimized due to the fact that this code is a side-effect.

You can generate your own `stats.json` with 
```shell
npx webpack --profile --json=stats.json  
```
but it will not be different from mine.
