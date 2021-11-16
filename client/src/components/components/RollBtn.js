import React from "react";
import { Button } from "react-bootstrap";
import "../home.css";

const diceRoller = function({ rollingArray, handleRoll, name }) {
    function rollIt() {
        let diceMax = rollingArray.length;
        let randoNumber = Math.floor(Math.random() * Math.floor(diceMax));
        let finalItem = rollingArray[randoNumber]
        handleRoll(finalItem, name);
    };

    return (
        <Button className="giveMeSomeSpace" onClick={rollIt}>Roll it</Button>
    )
}

export default diceRoller;