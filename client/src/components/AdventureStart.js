import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Dropdown } from 'react-bootstrap';
import "./home.css";
import { setDungeonData } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const AdventureStart = ({ campaign, onSetDungeonData }) => {
    const setReduxDungeonData = (destination, value) => {
        onSetDungeonData(destination, value)
    }
    const [showModal, setShowModal] = useState(false);
    const [dungeonTypeLocationSelected, setDungeonTypeLocationSelected] = useState(true);
    const [nondungeonTypeLocationSelected, setNondungeonTypeLocationSelected] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState("");

    const  handleClick = () => {
        setShowModal(!showModal)
        setNondungeonTypeLocationSelected(false);
        setDungeonTypeLocationSelected(false);
    };

    const handleDungeonClick = (event) => {
        let choice = event.target.name
        switch(choice) {
            case "dungeonLocatios":
                setSelectedPlace("");
                setNondungeonTypeLocationSelected(false);
                setDungeonTypeLocationSelected(false);
                break;
            case "nondungeonLocatios":
                setNondungeonTypeLocationSelected(true);
                setDungeonTypeLocationSelected(true);
                setSelectedPlace("");
                break;
            default:
                return;
        }
    }

    const handleFinalEvent = (ek, e) => {
        const choice = e.target.text;
        const currentDungeonData= campaign.dungeonData;
        const destructedData = {...currentDungeonData, dungeonLocation: choice};
        setSelectedPlace(choice);
        setReduxDungeonData("dungeonData", destructedData);
    };

    const handleAdventureStartDetail = (e) => {
        const choice = e.target.name;
        const currentDungeonData= campaign.dungeonData;
        const destructedData = {...currentDungeonData, dungeonDetail: choice};
        setReduxDungeonData("dungeonData", destructedData);
    };

    const style = {
        width: "350px",
        height: "200px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    }
    
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={handleClick}>Dungeon Start</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's figure out some dungeon details.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>First let's figure out where your dungeon is. Then let's pick how your characters find themselves there.</p>
                    <div>
                        <Button className="giveMeSpace" onClick={handleDungeonClick} name={"dungeonLocatios"}>Dungeon Locations</Button>
                        <Button className="giveMeSpace" onClick={handleDungeonClick} name={"nondungeonLocatios"}>Exotic Loactions</Button>
                    </div>
                    {!dungeonTypeLocationSelected && (
                        <div className="giveMeSpace">
                            <Dropdown onSelect={handleFinalEvent}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {selectedPlace ? selectedPlace: 'Choose your Dungeon Location'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {dungeonTypeLocation.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )}
                    {nondungeonTypeLocationSelected && (
                        <div className="giveMeSpace">
                            <Dropdown onSelect={handleFinalEvent}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {selectedPlace ? selectedPlace: 'Choose your Exotic Location'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {nondungeonTypeLocation.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )}
                    <Carousel interval={null}>
                        {meetingSelection.map(drop => {
                            return (
                                <Carousel.Item> 
                                    <div className="d-block w-100"></div> 
                                    <Button 
                                        variant="primary" 
                                        onClick={handleAdventureStartDetail} 
                                        key={drop.id} style={style} 
                                        name={drop.goal}>{drop.goal}</Button> 
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetDungeonData: bindActionCreators(setDungeonData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(AdventureStart);