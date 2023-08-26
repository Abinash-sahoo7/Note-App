import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

function NoteList({notes,  addNote, noteText, handleNoteText, handleDeleteNote}) {



  return (
    <div className='notes-container'>
      <AddNote noteText={noteText} handleNoteText={handleNoteText} addNote = {addNote} />
        {notes.map(note => <Note handleDeleteNote={handleDeleteNote} key={note.id} note={note}/>)}

    </div>
  )
}

export default NoteList