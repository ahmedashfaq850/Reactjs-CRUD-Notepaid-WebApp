import React from "react";
import "./NoteList.css";
import { MdDeleteForever } from "react-icons/md";

function NoteList({ notes, handleDeleteNode, handleSearch}) {

  return (
    <div className="outer-container">
      <div className="main-notelist">
        <div className="Notelist">
          <div className="input-box">
            <input onChange={(e)=>{handleSearch(e.target.value)}} type="search" placeholder="Search ..." />
          </div>
        </div>
      </div>
      <div className="Note-grid">
        {notes.map((note) => {
          
          return (
            <div key={note.id} className="NoteItem" style={{backgroundColor: note.color}}>
              <span>{note.text}</span>
              <div className="note-footer">
                <small>{note.date}</small>
                <MdDeleteForever onClick={()=>{handleDeleteNode(note.id)}} className="delete-icon" size="1.3rem" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NoteList;
