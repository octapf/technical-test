<template>
	<div>
		<label for="country">Country</label>
		<input
			class="input"
			type="text"
			name="country"
			id=""
			@change="(e) => (this.country = e.target.value)"
		/>
		<label for="code">Code</label>

		<input
			class="input"
			type="text"
			name="code"
			v-model="code"
			id=""
			@change="(e) => (this.code = e.target.value)"
		/>
		<Button text="Add" :data="data"></Button>
	</div>
</template>

<script>
import Button from './Button.vue'

export default {
	name: 'Add',
	components: {
		Button,
	},
	data() {
		return {
			country: '',
			code: '',
			data: { country: this.country, code: this.code },
		}
	},
}
</script>

<style scoped>
.input {
	margin: 1rem;
}
</style>
