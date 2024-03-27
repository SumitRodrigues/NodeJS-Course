// #1) Importing NodeJS core modules
// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by node.js!')

// //Challenge: Append a message to notes.txt
// // 1. Use appendFileSync to append to the file
// // 2. Run the script
// // 3. Check your work by opening the file and viewing the appended text

// fs.appendFileSync('notes.txt', ' I live in California!')

// #2) Importing your own files

// const add = require('./utils.js')

// const sum = add(6, -91)
// console.log(sum)

// Challenge: Define and use a function in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)
