# technical-test

Technical test - Teresa Morenés

- Complete test
- Share repository to monojones@gmail.com

# Ex 1:

---

```
module.exports = {
    a: (cb) => {
        setTimeout(()=>{
            return cb(null,1000)
        },1000)
    },

    b: (cb) => {
        setTimeout(()=>{
            return cb(null,500)
        },500)
    },
}
```

If you had to use the previous node.js module and call methods a and then b sequencially, explain:

## - why it's not so straightforward?

Since the sintax used to export this module is from CJS (CommonJs), we need the require() function to import the module. Ex: const { a, b } = require('./modules/ex1module')

## - what are the different solutions if we are using node v.8+?

### CommonJS

1. const b = require('./modules/ex1module').b
2. const a = require('./modules/ex1module').a
3. const module = require('./modules/ex1module')
4. const { a, b } = require('./modules/ex1module')

### ES-Modules (Node-13)

1. import {a,b} from './module.js'
2. import \* as module from './module.js'

Also exporting is simpler in ES-Modules

1. export function a(cb) => import { a } from '...'
2. export default function b(cb) => import anyName from '...'
3. export {name as newName } => import { newName } from '...'
4. export {a,b} => import {a,b} from '...'

## - Which is the most elegant solution in your opinion?

1. Most elegant solution is (ES Modules).
2. Makes the module tree shakeable, meaning the consumer imports the code wanted and renamed if needed, to shakes off the rest, resulting in smaller bundle sizes and better performance.
3. Also performs in browsers.
4. Imports are static and hoisted in parsetime.
5. Enables to use static analizing tools.
6. In CommonJS, require() is a function meaning it will be called and get an error, if exits, in runtime.

```
//ES-Modules sintax
import { a, b } from './module.js'

const cb = (param1, param2) => {
console.log(param1, param2)
}

a(cb)
b(cb)
```

# Ex 2:

---

Enum top 5 features a table web component should have

# Ex 3:

---

- Create a rest api containing methods GET/POST/PUT/DELETE, using express, following standards, and with minimal code
  Use the following dataset:

- Create a vue (v2) app with view to manage this rest

Given array Countries
