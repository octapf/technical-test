import { a, b } from './modules/ex1module.js'

const cb = (param1, param2) => {
	console.log(param1, param2)
}

a(cb)
b(cb)
