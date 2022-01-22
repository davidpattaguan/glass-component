import React from "react";
import Dashboard from "../dashboard/Dashboard";
import Games from "../games/Games";
import "./Styles.css";

const GlassComponent = () => {
  return (
    <div className="glass">
      <Dashboard />
      <Games />
    </div>
  );
};

export default GlassComponent;
