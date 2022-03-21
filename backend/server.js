import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import countries from './dataset/countries.js'

const PORT = process.env.PORT || 5000
const app = express()
var allCountries = countries

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('tiny'))

/**
 * ! RESTful API to manage countries
 * * octapf - 20/03/2022
 * @param req {Express.Request}
 * @param res {Express.Response}
 */
app
	.get('/', (req, res) => {
		res.send('Welcome to the technical test RESTFul API')
	})
	.get('/api/countries', (req, res) => {
		res.status(200).json(countries)
	})
	.post('/api/countries', (req, res) => {
		const newCountry = req.body

		if (newCountry.name && newCountry.code) {
			allCountries.unshift(newCountry)
			res.status(201).json(allCountries)
		} else {
			res.status(404).json({ msg: 'Please send the correct input' })
		}
	})
	.put('/api/countries', (req, res) => {
		const updatedCountry = req.body
		if (updatedCountry.name && updatedCountry.code) {
			for (var i in allCountries) {
				if (allCountries[i].name == updatedCountry.name) {
					allCountries[i].name = updatedCountry.name
					allCountries[i].code = updatedCountry.code
					break
				} else {
					res.status(404).json({ msg: 'Please send the correct input' })
					return
				}
			}

			res.status(200).json(allCountries)
		}
	})
	.delete('/api/countries', (req, res) => {
		const deletedCountry = req.body
		if (deletedCountry.name) {
			const result = allCountries.filter(
				(country) => country.name !== deletedCountry.name
			)

			allCountries = result

			res.status(200).json(allCountries)
		} else {
			res.status(404).json({ msg: 'Please send the correct input' })
		}
	})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
