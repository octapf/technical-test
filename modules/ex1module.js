module.exports = {
	a: (cb) => {
		setTimeout(() => {
			return cb(null, 1000)
		}, 1000)
	},

	b: (cb) => {
		setTimeout(() => {
			return cb(null, 500)
		}, 500)
	},
}
