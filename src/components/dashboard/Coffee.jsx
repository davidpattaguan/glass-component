import React from "react";
import avatar from "../../assets/avatar.jpg";

const Coffee = () => {
  return (
    <div className="coffee-container">
      <div className="coffee-buyme">Buy me Coffee</div>
      <div className="coffee-img-handler">
        <img src={avatar} alt="" className="coffee-img" />
      </div>
    </div>
  );
};

export default Coffee;
