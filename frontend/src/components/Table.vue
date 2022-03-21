<template>
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
				<Button class="btn btn-sm" text="Delete"></Button>
			</tr>
		</tbody>
	</table>
</template>

<script>
import Button from './Button.vue'

export default {
	name: 'Table',
	props: ['countries'],
	components: {
		Button,
	},
}
</script>
