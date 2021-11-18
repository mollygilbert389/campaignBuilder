import React from "react";
import { Button } from "react-bootstrap";
import { name_data } from "../components/data";
import "../home.css";

const generateBtn = ({ name, index, handleGenerate }) => {
    function generateName() {
        const firstName = name_data.firstNameBank[Math.floor(Math.random()*name_data.firstNameBank.length)];
        const lastName = name_data.lastNameBank[Math.floor(Math.random()*name_data.lastNameBank.length)];
        const finalName = `${firstName.name} ${lastName.name}`;
        handleGenerate(finalName, name, index)
    }

    return (
        <Button className="giveMeSomeSpace" variant="outline-primary" onClick={generateName}>Generate</Button>
    )
}

export default generateBtn;