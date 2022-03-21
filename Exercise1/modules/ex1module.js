const a = async (cb) => {
	await setTimeout(() => {
		console.log(new Date().getMilliseconds())
		return cb(null, 1000)
	}, 1000)
}

const b = async (cb) => {
	await setTimeout(() => {
		console.log(new Date().getMilliseconds())
		return cb(null, 500)
	}, 500)
}

export { a, b }
