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

export const APromise = async () => {
	return new Promise((resolve, reject) => {
		console.log('A')
		setTimeout(resolve, 1000)
	})
}

export const BPromise = async () => {
	return new Promise((resolve, reject) => {
		console.log('B')
		setTimeout(resolve, 1000)
	})
}
