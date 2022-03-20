//NodeJs create a function wrapper arround the file
// Also provides access to some global object inside the file
// Example > Module object that contains and exports property

// The module.exports reference ( which is an object ) is what is going to be exported out of the node module.
// Exports variable is an aditional global variable provided to us to be used
// We can add properties to the exports variable, as we are adding properties to it's reference which is module.exports
// but we should never change its reference to something else.

const { a, b } = require('./modules/ex1module')

console.log(b)

const cb = (param1, param2) => {
	console.log(param1, param2)
}

a(cb)
b(cb)
