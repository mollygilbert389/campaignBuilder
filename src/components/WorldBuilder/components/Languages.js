import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import "../style.css";
import { setLanguages, setLanguageShow } from "../../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Languages = ({ onSetLanguages,  onSetLanguageShow }) => {
    const setReduxLanguages = (type) => {
        onSetLanguages(type)
    }
    const setReduxLanguageShow = (destination, value) => {
        onSetLanguageShow(destination, value)
    }
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
        const removedTag = currentTags.filter((item) => item !== removedItem);
        setSuggestedTags(removedTag);
        setReduxLanguages(removedTag);
        setReduxLanguageShow("languageShow", true);
    };

    const handleAddLanguage = (event) => {
        setSuggestedTags(suggestedTags.concat(value));
        setReduxLanguages(suggestedTags.concat(value));
        setReduxLanguageShow("languageShow", true);
        setValue("");
    };

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
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
                    onKeyUp={(event) => onKeyDown(event)}/>
                <Button size="sm" variant="outline-success" onClick={handleAddLanguage}>Submit</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetLanguages: bindActionCreators(setLanguages, dispatch),
    onSetLanguageShow: bindActionCreators(setLanguageShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Languages);