import "./Addbtn.css";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { useState } from "react";

function AddBtn({ handleAddnote }) {
  const leng = 200;

  const [OpenOption, setOpenOption] = useState(false);
  const [input, setInput] = useState("");

  const ChangeHandler = (e) => {
    if (leng - e.target.value.length >= 0) {
      setInput(e.target.value);
    }
    else{alert("Count limit is 200 characters")}
  };

  const handlesaveClick = () => {
    if (input.trim().length > 0) {
      handleAddnote(input);
      setInput("");
      setOpenOption(!OpenOption);
    } else {
      alert("Please Enter Something");
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          setOpenOption(!OpenOption);
        }}
        className="btn"
      >
        <FaPlus className="icon" size="1.5rem" />
      </div>
      {OpenOption && (
        <div className="note-form">
          <textarea
            onChange={ChangeHandler}
            rows="8"
            columns="10"
            placeholder="Write Something... "
            spellCheck="true"
          ></textarea>
          <div className="row">
            <p>{leng - input.length} Remaining</p>
            <button onClick={handlesaveClick}>
              <FcOk size="1.9rem" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBtn;
