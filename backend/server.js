import express from 'express'
import countries from './dataset/countries.js'

const PORT = process.env.PORT | 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (res) => {
	res.send('Welcome to the technical test RESTFul API')
})

/**
 * ! RESTful API to manage countries
 * * octapf - 20/03/2022
 * @param req {Express.Request}
 * @param res {Express.Response}
 */
app
	.get('/api/countries', (res) => {
		res.status(200).json(countries)
	})
	.post('/api/countries', (req, res) => {
		const newCountry = req.body

		if (newCountry.name && newCountry.code) {
			countries.push(newCountry)
			res.status(201).json({ msg: 'New country added' })
		} else {
			res.status(404).json({ msg: 'Please send the correct input' })
		}
	})
	.put('/api/countries', (req, res) => {
		const updatedCountry = req.body
		if (updatedCountry.name) {
			countries.forEach((country) => {
				if (country.name === updatedCountry.name) {
					country.name = updatedCountry.newName
						? updatedCountry.newName
						: country.name
					country.code = updatedCountry.newCode
						? updatedCountry.newCode
						: country.code
				}
			})
			res.status(200).json({ msg: 'Country updated' })
		} else {
			res.status(404).json({ msg: 'Please send the correct input' })
		}
	})
	.delete('/api/countries', (req, res) => {
		const deletedCountry = req.body
		if (deletedCountry.name) {
			const newCountries = countries.filter(
				(country) => country.name !== deletedCountry.name
			)

			res.status(200).json({ msg: 'Country deleted' })
		} else {
			res.status(404).json({ msg: 'Please send the correct input' })
		}
	})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
