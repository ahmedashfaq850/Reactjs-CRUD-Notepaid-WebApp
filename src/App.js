import React from "react";
import Navbar from "./components/Navbar";
import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import AddBtn from "./components/AddBtn";

function App() {
  const colorGen = () => {
    const arr = [
      "#F4C16E",
      "#F59571",
      "#AF8CF5",
      "#AF8CF5",
      "#01CCF5",
      "#77A0F1",
      "#B9BE7A",
    ];
    const random = Math.floor(Math.random() * 7);
    return arr[random];
  };

  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);
  const [note, setNote] = useState([
    { id: nanoid(), text: "First task", date: "9/14/2022", color: colorGen() },
    { id: nanoid(), text: "First task", date: "9/14/2022", color: colorGen() },
    { id: nanoid(), text: "First task", date: "9/14/2022", color: colorGen() },
    { id: nanoid(), text: "First task", date: "9/14/2022", color: colorGen() },
  ]);

  useEffect(() => {
    const savednotes = JSON.parse(localStorage.getItem("react-notes"));
    if (savednotes) {
      setNote(savednotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(note));
  }, [note]);

  const addNote = (text) => {
    const date = new Date();
    const newdata = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      color: colorGen(),
    };

    const newNotes = [newdata, ...note];
    setNote(newNotes);
  };

  const deleteNote = (id) => {
    const filternotes = note.filter((item) => item.id !== id);
    setNote(filternotes);
  };

  return (
    <div className={`${dark && "dark-mode"}`}>
      <div className="main-container">
        <Navbar handleDark={setDark} />
        <NoteList
          notes={note.filter((item) =>
            item.text.toLowerCase().includes(search)
          )}
          handleDeleteNode={deleteNote}
          handleSearch={setSearch}
        />
      </div>
      <AddBtn handleAddnote={addNote} />
    </div>
  );
}

export default App;
