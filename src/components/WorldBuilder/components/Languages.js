import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import "../style.css";

const Languages = ({ setReduxLanguages,  setReduxLanguageShow, value, setValue,  suggestedTags, setSuggestedTags }) => {

    const handleRemove = (e) => {
        const removedTag = suggestedTags.filter((item) => item !== e.target.name);
        setSuggestedTags(removedTag);
        setReduxLanguages(removedTag);
        setReduxLanguageShow("languageShow", true);
    };

    const handleAddLanguage = () => {
        setSuggestedTags(suggestedTags.concat(value));
        setReduxLanguages(suggestedTags.concat(value));
        setReduxLanguageShow("languageShow", true);
        setValue("");
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddLanguage();
        }
        setReduxLanguageShow("languageShow", true);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <br/>
            <p>We have a few languages suggestions here. Feel free to add and remove as many or as little as you want.</p>
            <div className="tagsArea centeredItems">
            {suggestedTags.map((item, idx) => (
                    <ButtonGroup key={idx} className="factionButtons">
                        <Button name={item}>{item}</Button>
                        <Button name={item} onClick={handleRemove}>X</Button>
                    </ButtonGroup>
                ))}
            </div>
            <div className="inputAndBtn factionButtons">
                <input 
                    className="factionInput" 
                    placeholder="Language" 
                    type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyUp={(e) => onKeyDown(e)}/>
                <Button size="sm" variant="outline-success" onClick={handleAddLanguage}>Submit</Button>
            </div>
        </div>
    )
}

export default Languages;