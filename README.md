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

Is necesary to execute function A with a callBack that will execute function B passing another callback with the message 'Done'. It is known as callBack hell.

```
//CallBack Hell ***************************
a(() => {
	b(() => {
		console.log('DONE')
	})
})
```

## - what are the different solutions if we are using node v.8+?
```
// .then().catch() ********************************

APromise()
.then(()=> BPromise().then(()=> console.log("DONE")))
```
```
// Async - Await **************************
//Most elegant option
async function main() {
	try {
		await APromise()
		await BPromise()
		console.log('DONE')
	} catch (error) {}
}

main()
```


## - Which is the most elegant solution in your opinion?

- The most elegant solution is to use async-await pattern.

```
import { a, b, APromise, BPromise } from './modules/ex1module.js'

const cb = (param1, param2) => {
	console.log(param1, param2)
}

// Async - Await **************************
//Most elegant option
async function main() {
	try {
		await APromise()
		await BPromise()
		console.log('DONE')
	} catch (error) {}
}

main()
```

# Ex 2:

---

## Enum top 5 features a table web component should have

1. Sorting by one or multiple columns
2. Filtering
3. Grouping
4. Tree mode
5. Cell and Row Editing

# Ex 3:

---

- Create a rest api containing methods GET/POST/PUT/DELETE, using express, following standards, and with minimal code
  Use the following dataset:

- Create a vue (v2) app with view to manage this rest

Given array Countries

## 1. On root
        npm install
        npm run dev


