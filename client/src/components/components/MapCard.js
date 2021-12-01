import React from "react";
import "../home.css";

const MapCard = ({ name, image }) => {
  const style = {
    width: "500px",
    height: "500px",
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div>Your Map:</div>
        <div>{name}</div>
        <img alt={name} src={image} style={style} />
      </div>
    </div>
  );
};

export default MapCard;
