const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
   return  "your notes"
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title ===title)

    if(!duplicateNote) {
        notes.push( {
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('new note added!'))
    } else {
        console.log(chalk.red.inverse('note taken!'))
    } 
    //console.log(notes)
}


const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright.inverse('Your Notes \n'))

    notes.forEach((note) => console.log(note.title + '\n')) 
}


const removeNote =(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((notes) => notes.title !== title) //returns an array

    saveNotes(notesToKeep)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed! "))
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
} 


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
        console.log(chalk.red.inverse('Note not Found'))
    }
}


const saveNotes = (notes) => {
    notesBuffer = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesBuffer)
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
