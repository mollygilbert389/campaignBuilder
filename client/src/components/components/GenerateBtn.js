import React from "react";
import { Button } from "react-bootstrap";
import "../home.css";

const generateBtn = ({ name, index, handleGenerate }) => {
    function generateName() {
        const firstName = firstNameBank[Math.floor(Math.random()*firstNameBank.length)];
        const lastName = lastNameBank[Math.floor(Math.random()*lastNameBank.length)];
        const finalName = `${firstName.name} ${lastName.name}`;
        handleGenerate(finalName, name, index)
    }

    return (
        <Button className="giveMeSomeSpace" variant="outline-primary" onClick={generateName}>Generate</Button>
    )
}

export default generateBtn;