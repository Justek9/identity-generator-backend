const fs = require('fs')

const genders = ['M', 'F']
const maleNames = ['Tom', 'John', 'James']
const femaleNAmes = ['Alex', 'Zara', 'Ruby']
const lastNames = ['Smith', 'Doe', 'Neil']

const randChoice = arr => {
	const random = arr[Math.floor(Math.random() * arr.length)]
	return random
}

const people = []

for (let i = 0; i <= 19; i++) {
	let person = {}
	person.gender = randChoice(genders)
	if (person.gender === 'M') {
		person.firstName = randChoice(maleNames)
	} else person.firstName = randChoice(femaleNAmes)
	person.lastName = randChoice(lastNames)
	person.age = Math.floor(Math.random() * (78 - 19) + 18)

	people.push(person)
}

const peopleJSON = JSON.stringify(people)

fs.writeFile('people.json', peopleJSON, err => {
	if (err) throw err
	console.log('The file has been saved!')
})
