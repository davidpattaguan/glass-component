import React from "react";
import Noteheader from "./Noteheader";
import NotesList from "./NotesList";
import "./Styles.css";
const Notemate = () => {
  return (
    <div className="notemate">
      <Noteheader />
      <NotesList />
    </div>
  );
};

export default Notemate;
