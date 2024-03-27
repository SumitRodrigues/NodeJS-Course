const getUserSync = require('./src/get-user-sync')

getUser(1, (user) => {
    console.log(user)
})

getUser(2, (user) => {
    console.log(user)
})

const sum = 1 + 33
console.log(`Sum: ${sum}`)