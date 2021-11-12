import React, { useState  } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import "../style.css";

const Languages = () => {
    const [value, setValue] = useState("");
    const [suggestedTags, setSuggestedTags] = useState([
        "Celestial",
        "Common",
        "Draconic",
        "Druidic",
        "Dwarvish",
        "Elvish",
        "Infernal",
    ]);

    const handleRemove = (event) => {
        let removedItem = event.target.name;
        let currentTags = suggestedTags;
        const removedTag = currentTags.filter(item => item !== removedItem);
        setSuggestedTags(removedTag);
        this.props.setLanguages(suggestedTags);
        this.props.setLanguageShow("languageShow", true);
    }

    const handleAddLanguage = (event) => {
        setSuggestedTags(suggestedTags.concat(value));
        setValue("");
        this.props.setLanguages(suggestedTags);
        this.props.setLanguageShow("languageShow", true);
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddLanguage();
            }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <br/>
            <p>We have a few languages suggestions here. Feel free to add and remove as many or as little as you want.</p>
            <div className="tagsArea centeredItems">
            {suggestedTags.map(item => {
                return (
                    <ButtonGroup className="factionButtons">
                        <Button name={item}>{item}</Button>
                        <Button name={item} onClick={handleRemove}>X</Button>
                    </ButtonGroup>
                )
            })}
            <div className="inputAndBtn factionButtons">
                <input 
                    className="factionInput" 
                    placeholder="Language" 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyUp={(event) => onKeyDown(event)}/>
                <Button size="sm" variant="outline-success" onClick={handleAddLanguage}>Submit</Button>
            </div>
            </div>
        </div>
    )
}

export default Languages;