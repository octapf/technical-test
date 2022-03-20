const a = (cb) => {
	setTimeout(() => {
		return cb(null, 1000)
	}, 1000)
}

const b = (cb) => {
	setTimeout(() => {
		return cb(null, 500)
	}, 500)
}

export { a, b }
