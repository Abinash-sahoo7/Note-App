import React from 'react'
import {BsTrashFill} from 'react-icons/bs'

function Note({note, handleDeleteNote}) {
  return (
    <div className='Note'>
       <span>{note.text}</span>

        <div className="footer">
            <small className='date'>{note.date}</small>
            <button className="delete-btn" onClick={() => handleDeleteNote(note.id)}>
             <BsTrashFill /></button>
        </div>

    </div>
  )
}

export default Note