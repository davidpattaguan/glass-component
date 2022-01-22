import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Notemate from "../games/Notemate";
import "./Styles.css";

const GlassComponent = () => {
  return (
    <div className="glass">
      <Dashboard />
      <Notemate />
    </div>
  );
};

export default GlassComponent;
