import React from "react";
import "./Notes.css";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <div className="note-header">
        <h3>{title}</h3>
        <span className="material-symbols-outlined note-check">check_circle</span>
      </div>
      <p>{content}</p>
      <div className="note-actions">
        {["add_alert", "palette", "archive", "delete"].map((icon, index) => (
          <span
            key={index}
            className="material-symbols-outlined note-icon"
            onClick={icon === "delete" ? () => onDelete(id) : null}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Note;
