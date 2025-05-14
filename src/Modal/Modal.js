import "./Modal.css";


 const Modal = () => {
    return (
        <div className="modal modal">
        <div className="modal-content">
      <div className="form-container active-form">
        <form>
          <input type="text" className="note-title" placeholder="Title" />
          <input type="text" className="note-text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="icons">
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >add_alert</span
                >
                <span className="tooltip-text">Remind me</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >person_add</span
                >
                <span className="tooltip-text">Collaborator</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >palette</span
                >
                <span className="tooltip-text">Change Color</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >image</span
                >
                <span className="tooltip-text">Add Image</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >archive</span
                >
                <span className="tooltip-text">Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >more_vert</span
                >
                <span className="tooltip-text">More</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >undo</span
                >
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover small-icon"
                  >redo</span
                >
                <span className="tooltip-text">Redo</span>
              </div>
            </div>
            <button className="close-btn">close</button>
          </div>
        </form>
      </div>
        </div>
      </div> 
    )
}

export default Modal;