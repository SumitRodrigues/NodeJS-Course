const fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book) // "{"title":"Ego is the Enemy","author":"Ryan Holiday"}"
fs.writeFileSync('1-json.json', bookJSON)