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

const getNotes = require('./notes.js')
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

const chalk = require('chalk') 
// console.log(chalk.green('Success!'));
// console.log(chalk.red.bold.inverse('Updated'))

// #5) Global npm Modules and Nodemon
// sudo npm install nodemon@1.18.5 -g

// File system and command line args (Notes App)
// 1. Section Intro
// 2. Getting Input from the user

//console.log(process.argv[2])

// const command = process.argv[2]

// console.log(process.argv)
// if(command === 'add'){
//     console.log('Adding notes!')
// }else if (command === 'remove') {
//     console.log('Removing notes!')
// }

// 3. Argument Parsing with Yargs: Part 1

const  yargs = require("yargs") //import yargs

//console.log(process.argv)

// Customize yargs version
yargs.version("1.1.0");

// Create add command
// yargs.command({
//     command: "add",
//     describe: "Add a new note",
//     builder: {
//         title: {
//             describe: "Note title",
//             demandOption: true, // Add this line if you want 'title' to be required
//             type: 'string', // Add this line to ensure 'title' is treated as a string
//         }
//     },
//     handler(argv) { // <-- Note the addition of the argv parameter
//         console.log("Title: " + argv.title);
//     }
// })

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removing the note.")
    },
})

// Challenge: Add two new commands
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands and ensure correct output

// Create list command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function () {
        console.log("Listing the notes.")
    },
})

// Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading a note.")
    },
})

// add, remove, read, list

//console.log(yargs.argv)

// 4. Argument Parsing with Yargs: Part 2



// Challenge: Add an option to yargs
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be string
// 3. Log the body value in the handler function
// 4. Test your work!

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, // Add this line if you want 'title' to be required
            type: 'string', // Add this line to ensure 'title' is treated as a string
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) { // <-- Note the addition of the argv parameter
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
    }
})

yargs.parse()

// 5. Storing Data with JSON
