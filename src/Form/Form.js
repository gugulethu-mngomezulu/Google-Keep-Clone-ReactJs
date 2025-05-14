import React, { useState } from "react";
import { useRef, useEffect } from "react";
import "./Form.css";

function Form({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const formRef = useRef();

useEffect(() => {
  function handleClickOutside(event) {
    if (formRef.current && !formRef.current.contains(event.target)) {
      if (isExpanded) {
        setIsExpanded(false);
      }
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isExpanded]);


  function handleSubmit(event) {
    event.preventDefault();
    if (note.title.trim() === "" && note.content.trim() === "") return;

    onAdd(note);
    setNote({ title: "", content: "" });
    setIsExpanded(false);
  }

  return (
    <div className="form-container active-form" ref={formRef}>
      

      <form onSubmit={handleSubmit}>
        {/* TITLE triggers expansion */}
        <input
          type="text"
          className="note-title"
          placeholder="Title"
          name="title"
          value={note.title}
          onFocus={() => setIsExpanded(true)}
          onChange={handleChange}
        />
         
       
        {/* SHOW content input only when expanded */}
        {isExpanded && (
          <textarea
            className="note-text"
            placeholder="Take a note..."
            name="content"
            value={note.content}
            onChange={handleChange}
            rows="3"
          />
        )}

        {/* SHOW actions only when expanded */}
        {isExpanded && (
          <div className="form-actions">
            <div className="icons">
              {[
                "add_alert",
                "person_add",
                "palette",
                "image",
                "archive",
                "more_vert",
                "undo",
                "redo"
              ].map((icon, i) => (
                <div className="tooltip" key={i}>
                  <span className="material-symbols-outlined hover small-icon">{icon}</span>
                  <span className="tooltip-text">{icon.replace("_", " ")}</span>
                </div>
              ))}
            </div>
            <button type="submit" className="submit-btn ">close</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
