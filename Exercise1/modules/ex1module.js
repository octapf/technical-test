// const a = async (cb) => {
// 	await setTimeout(() => {
// 		console.log('A', new Date().getMilliseconds())
// 		return cb(null, 1000)
// 	}, 1000)
// }

// const b = async (cb) => {
// 	await setTimeout(() => {
// 		console.log('B', new Date().getMilliseconds())
// 		return cb(null, 500)
// 	}, 500)
// }

// export { a, b }

export const a = (cb) => {
	setTimeout(() => {
		console.log('Executing A')
		return cb(null, 1000)
	}, 1000)
}

export const b = (cb) => {
	setTimeout(() => {
		console.log('Executing B')
		return cb(null, 500)
	}, 500)
}
