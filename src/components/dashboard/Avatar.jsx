import React from "react";
import avatar from "../../assets/avatar.jpg";

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img src={avatar} alt="avatar" className="avatar-img"></img>
      <h4>David Pattaguan</h4>
      <h6>Pro User</h6>
    </div>
  );
};

export default Avatar;
