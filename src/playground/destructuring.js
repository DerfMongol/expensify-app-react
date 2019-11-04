//object destructuring

// const person = {
//     name: 'Lee',
//     age: 28,
//     location: {
//         city: 'orlando',
//         temp: 89
//     }
// }

// const { name: firstName = 'anonomyous', age } = person
// console.log(`${firstName} is ${age} and lives in ${person.location.city}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

//array destructuring

const address = ['1299 S Junipers Streey', 'Rochester', , '48306']
const [street, city, state = 'Michigan', zip] = address
console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot}', '$2.00', '$2.50', '$2.75']
const [type, small, medium, large] = item
console.log(`A medium ${type} costs ${medium}`)