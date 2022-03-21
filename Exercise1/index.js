import { a, b, APromise, BPromise } from './modules/ex1module.js'

const cb = (param1, param2) => {
	console.log(param1, param2)
}

//CallBack Hell ***************************
a(() => {
	b(() => {
		console.log('DONE')
	})
})

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

// .then().catch() ********************************

// APromise().then(() => BPromise().then(() => console.log('DONE')))
