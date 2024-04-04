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

// #3) Importing NPM Modules

// const validator = require('validator')

// console.log(validator.isEmail('xample.com'))
// console.log(validator.isURL('https://sumit-rodrigues.netlify.app'))

// #4) Printing in Color

// Challenge: Use the chalk library in your project

//1. Install version 2.4.1 of chalk
//2. Load Chalk into app.js
//3. Use it to print the string "Success!" to the console in green
//4. Test your work

// import chalk from "chalk";

// const chalk = require('chalk') 
// console.log(chalk.green('Success!'));
// console.log(chalk.red.bold.inverse('Updated'))

// 

