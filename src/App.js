import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Form from "./Form/Form";
// import Notes from "./Notes/Notes";
import Modal from "./Modal/Modal";
import Note from "./components/Note"; // This is the component for displaying each note

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

 

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Form onAdd={addNote} />
      
      <div className="notes-container">
  {notes.map((note, index) => (
    <Note
      key={index}
      id={index}
      title={note.title}
      content={note.content}
      onDelete={deleteNote}
    />
  ))}
</div>

      <Modal />
    </div>
  );
}

export default App;
