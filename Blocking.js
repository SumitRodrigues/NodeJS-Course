const getUserSync = require('./src/get-user-sync')

const userOne = getUserSync(1)
console.log(userOne) // { id: 1, name: 'John Doe' }

const userTwo = getUserSync(2)
console.log(userTwo)

const sum = 1 + 33
console.log(sum)