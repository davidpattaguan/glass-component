import React from "react";
import "./Styles.css";

const Noteheader = () => {
  return (
    <>
      <h1 className="noteheader-title">NoteMate Todo-List</h1>
      <input type="text" placeholder="New note ..." />
    </>
  );
};

export default Noteheader;
