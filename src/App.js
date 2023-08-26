import { useState } from "react";
import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [switchMode, setSwitchMode] = useState(false);
  const [notes, setNotes] = useState([

  ]);

  function addNote() {
    if(noteText.trim().length > 0){
      const date = new Date().toLocaleDateString();
      setNoteText("");
      const newNote = {
        text: noteText,
        date: date,
        id: nanoid(),
      };
  
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    }
    else{
      alert('add some text')
      setNoteText('')
    }
  }

  function handleNoteText(text) {
    setNoteText(text);
  }
  function handleDeleteNote(id) {
    console.log(id);
    const updateNotes = notes.filter((note) => note.id != id);
    setNotes(updateNotes);
  }

  function handleSearchText(text) {
    setSearchText(text);
  }

  return (
    <div className={switchMode? 'darkmode': ''}>
      <Header setSwitchMode= {setSwitchMode}/>
      <Search searchText={searchText} handleSearchText={handleSearchText} />
      <NoteList
        handleDeleteNote={handleDeleteNote}
        handleNoteText={handleNoteText}
        noteText={noteText}
        addNote={addNote}
        notes={notes.filter((note) => note.text.includes(searchText))}
      />
    </div>
  );
}

export default App;
