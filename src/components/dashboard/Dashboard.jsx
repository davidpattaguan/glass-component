import React from "react";
import "./Styles.css";

import Avatar from "./Avatar";
import Socials from "./Socials";
import Coffee from "./Coffee";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Avatar />
      <Socials />
      <Coffee />
    </div>
  );
};

export default Dashboard;
