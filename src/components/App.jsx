import React, { useState } from "react";
import Note from "./Note";

function App() {
  const [note, setNote] = useState({
    Title: "",
    Content: ""
  });

  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    console.log(event);
    const { name, value } = event.target;

    setNote((prevValue) => {
      if (name === "Title") {
        return {
          Title: value,
          Content: prevValue.Content
        };
      } else if (name === "Content") {
        return {
          Title: prevValue.Title,
          Content: value
        };
      }
    });
  }

  function submitNote(event) {
    setNotes((prevNotes, index) => {
      console.log(index);
      return [...prevNotes, note];
    });
    console.log(notes);

    // props.onAdd(Note);
    event.preventDefault();
  }

  return (
    <div className="">
      <h1>
        Krunal's {note.Title} {note.Content}
      </h1>

      <form>
        <input
          onChange={handleChange}
          // value={contact.fName}
          name="Title"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          // value={contact.lName}
          name="Content"
          placeholder="Content"
        />

        <button onClick={submitNote}>Add</button>
      </form>

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={noteItem.Title}
            content={noteItem.Content}
            // onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
