<template>
	<div class="container">
		<header class="header">
			<h1>{{ title }}</h1>
		</header>
		<p class="error" v-if="error">{{ error }}</p>
		<p class="success" v-if="success">{{ success }}</p>
		<label for="country">Country</label>
		<input
			class="input"
			type="text"
			name="country"
			v-model="countryInput"
			id=""
			@change="(e) => (this.country = e.target.value)"
		/>
		<label for="code">Code</label>

		<input
			class="input"
			type="text"
			name="code"
			v-model="codeInput"
			id=""
			@change="(e) => (this.code = e.target.value)"
		/>
		<button @click="addCountry()" class="btn-sm add-btn">Add</button>
		<button @click="updateCountry()" class="btn-sm update-btn">Update</button>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Country</th>
					<th scope="col">Code</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(country, index) in countries"
					v-bind:item="country"
					v-bind:index="index"
					v-bind:key="country.code"
				>
					<td>{{ country.name }}</td>
					<td>{{ country.code }}</td>
					<td>
						<button
							@click="deleteCountry(country.name)"
							class="btn-sm delete-btn"
						>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import Table from './components/Table.vue'

export default {
	name: 'App',
	data() {
		return {
			countries: [],
			countryInput: '',
			codeInput: '',
			title: 'Technical Test',
			error: '',
			success: '',
		}
	},
	async mounted() {
		axios
			.get('http://localhost:5000/api/countries')
			.then((response) => {
				this.countries = response.data
			})
			.catch((error) => {
				this.error = error.message
			})
	},
	components: {
		Header,
		Add,
		Table,
	},
	methods: {
		async addCountry() {
			await axios
				.post('http://localhost:5000/api/countries', {
					name: this.countryInput,
					code: this.codeInput,
				})
				.then((response) => {
					this.countries = response.data
					this.success = 'Successfully added.'
					this.error = ''
				})
				.catch((error) => {
					this.error = error.message
					this.success = ''
				})
		},
		updateCountry() {
			axios
				.put('http://localhost:5000/api/countries', {
					name: this.countryInput,
					code: this.codeInput,
				})
				.then((response) => {
					this.countries = response.data
					this.success = 'Successfully updated.'
					this.error = ''
				})
				.catch((error) => {
					this.error = error.message
					this.success = ''
				})
		},
		deleteCountry(countryName) {
			axios
				.delete('http://localhost:5000/api/countries', {
					headers: {
						'Content-Type': 'application/json',
					},
					data: { name: countryName },
				})
				.then((response) => {
					this.countries = response.data
					this.success = 'Successfully deleted.'
					this.error = ''
				})
				.catch((error) => {
					this.error = error.message
					this.success = ''
				})
		},
	},
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 1rem;
}

.input {
	margin: 1rem;
}

.add-btn {
	border: 1px solid #80d85d;
	background-color: #fff;
	color: #80d85d;
	margin: 0 0.2rem;
}
.delete-btn {
	border: 1px solid #e00000;
	background-color: #fff;

	color: #e00000;
	margin: 0 0.2rem;
}
.delete-btn:hover {
	color: #e00000;
}

.update-btn {
	border: 1px solid #0068e0;
	background-color: #fff;

	color: #0068e0;
	margin: 0 0.2rem;
}
.update-btn:hover {
	color: #0068e0;
}

.error {
	color: #e00000;
}
.success {
	color: #80d85d;
}
</style>
