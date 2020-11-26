//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { argv } = require('yargs')



//Customizw yargs version
yargs.version('1.3.0')


yargs.command({
    command: 'add',
    describe: 'addes a Note',
    //we can give options after node add.js add commmand like node add.js add --title = "My projects"
    builder: { 
        title: {
            describe: 'Note Title',
            demandOption: true, //if title is mandatory to add in run command by default it is false
            type: 'string' //you only give a string as title
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a Note.',
    builder: {
        title: {
            describe: 'Node title to remove the node from the file',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list your Notes',
    handler() {
        notes.listNotes()
    }
})


yargs.command({
    command: 'read',
    describe: 'reads a note',
    builder: {
        title:{
            describe: 'title of a note to be read',
            demandOption: true,
            type: 'string'
        } 
    },
    handler(argv) {
       notes.readNote(argv.title)
    }

})



//console.log(yargs.argv)
yargs.parse()

