import React from "react";
import "./style.css";

function MapCard(props) {

  const style = {
    "width":"500px",
    "height":"500px"
  }

  return (
    <div>
      <div>
        <div>Your Map:</div>
        <div>{props.name}</div>
        <img alt={props.name} src={props.image} style={style}></img>
      </div>
    </div>
  );
}

export default MapCard;


