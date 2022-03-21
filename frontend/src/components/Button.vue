<template>
	<div>
		<button @click="addCountry()" class="btn btn-sm">{{ text }}</button>
		<p>{{ data }}</p>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Button',
	props: ['text', 'data'],
	methods: {
		addCountry() {
			console.log('HI HI HI')
			console.log(this.data.name)
			console.log(this.data.code)
			axios
				.post('http://localhost:5000/api/countries', { data })
				.then((response) => {})
				.catch((error) => {
					this.error = error.message
				})
		},
	},
}
</script>

<style scoped>
.btn {
	background-color: #000;
	color: #fff;
}
</style>
