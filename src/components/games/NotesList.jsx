import React from "react";
import Note from "./Note";

const NotesList = () => {
  return (
    <div className="notes-list">
      <ul>
        <Note />
        <Note />
        <Note />
      </ul>
    </div>
  );
};

export default NotesList;
