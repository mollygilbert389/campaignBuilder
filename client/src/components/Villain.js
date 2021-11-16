import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GenerateBtn } from "./components";
import { Button, Dropdown, Form, FormControl, OverlayTrigger, Card, Popover } from 'react-bootstrap';
import "./home.css";
import { setVillainData } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const VillainModal = ({ onSetVillainData }) => {
    const overlay = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
    const [villainData, setVillainData] = useState({});
    
    const setReduxVillainData = (destination, value) => {
        onSetVillainData(destination, value)
    };

    const handleVillainObjectiveCatSelect = (ek, event) => {
        let choice = event.target.text
        const newVillainObjectiveChoices = villainObjectives.find((event) => event.objectiveCat === choice);
        const objectivesList = newVillainObjectiveChoices.objectives;
        setVillainData({...villainData, villainObjectiveCatChoice:choice, villainObjectivesPossible:objectivesList});
    };

    const handleVillainMethodCatSelect = (ek, event) => {
        const selection = event.target.text;
        const newVillainMethodChoices = villainMethods.find((event) => event.methodCat === selection);
        const drilledMethods = newVillainMethodChoices.methods;
        setVillainData({...villainData, villainMethodCatChoice:selection, villainMethodPossible:drilledMethods});
    };

    const handleCloseOverlay = () => {
        overlay.current.hide();
    };

    const hanelSave = () => {
        setShowModal(!showModal);
        setReduxVillainData("villainData", villainData)
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Villain</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create Yor villain!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to create your villain</p>
                    <Form inline>
                        <FormControl 
                            type="text" 
                            placeholder="villain Name" 
                            className="mr-sm-2" 
                            value={villainData?.name} 
                            onChange={(e) => setVillainData({...villainData, name: e.target.value})}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        <GenerateBtn name="villainName" handleGenerate={(feedback) => setVillainData({...villainData, name: feedback})}/>
                    </Form>
                    <br/>
                    <Card className="d-flex flex-column align-items-center villainPatronCard">   
                        <OverlayTrigger 
                            trigger="click"
                            ref={overlay}
                            placement="top"
                            overlay={
                                <Popover className="makeItBigger">
                                    <Popover.Title as="h3">Add Your Image!</Popover.Title>
                                    <Popover.Content>
                                        <div className="centerMe">
                                            <FormControl 
                                                type="text" 
                                                placeholder="Image Link" 
                                                className="mr-sm-2" 
                                                value={villainData?.image} 
                                                onChange={(e) => setVillainData({...villainData, image: e.target.value})}/>
                                            <Button onClick={handleCloseOverlay} className="imageSubmit">Submit</Button>
                                        </div>
                                    </Popover.Content>
                                </Popover>}>
                            <Card.Img className="NPCimage" variant="top" src={villainData?.image || imageLink}/> 
                        </OverlayTrigger>
                        <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title>{villainData.name && (`Name: ${villainData.name}`)}</Card.Title>
                            <div className="d-flex flex-column align-items-center">
                                <Dropdown onSelect={(ek, e)  => setVillainData({...villainData, type: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.type ? `Type: ${villainData.type }`: 'Choose your Adventure Villain'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Beast or monstrosity with no particular agenda</Dropdown.Item>
                                        <Dropdown.Item>Abberation bent on corruption or desruction</Dropdown.Item>
                                        <Dropdown.Item>Dragon bent on domination and plunder</Dropdown.Item>
                                        <Dropdown.Item>Giant bent on plunder</Dropdown.Item>
                                        <Dropdown.Item>Undead with any agenda</Dropdown.Item>
                                        <Dropdown.Item>Fey with a mysterious goal</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid cultist</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid conqueror</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid seeking revenge</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid schemer seeking to rule</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid criminal mastermind</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid raider or ravager</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid under a curse</Dropdown.Item>
                                        <Dropdown.Item>Misguided hummanoid zealot</Dropdown.Item>
                                        <Dropdown.Item>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown onSelect={(ek, e) => setVillainData({...villainData, gender: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.gender ? `Gender: ${villainData.gender}`: 'Choose your Adventure Villain'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Female</Dropdown.Item>
                                        <Dropdown.Item>Male</Dropdown.Item>
                                        <Dropdown.Item>Non Binary</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="dualDrop">
                                    <Dropdown onSelect={handleVillainObjectiveCatSelect} className="giveMeNPCSpace">
                                        <Dropdown.Toggle variant="outline-primary">
                                            {villainData.villainObjectiveCatChoice ? `Objective Category: ${villainData.villainObjectiveCatChoice}`: "Choose your Villain's Main Objective"}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {villainObjectives.map((item) => (<Dropdown.Item key={item.id} name={item.objectiveCat}>{item.objectiveCat}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {villainData?.villainObjectivesPossible?.length > 0 && (
                                        <Dropdown onSelect={(ek, e) => setVillainData({...villainData, finalVillainObjectiveChoice: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {villainData.finalVillainObjectiveChoice ? `Objective: ${villainData.finalVillainObjectiveChoice}`: "Choose your Villain's Main Objective"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {villainData.villainObjectivesPossible.map((item) => (<Dropdown.Item name={item}>{item}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </div>
                                <div className="dualDrop">
                                    <Dropdown onSelect={handleVillainMethodCatSelect} className="giveMeNPCSpace">
                                        <Dropdown.Toggle variant="outline-primary">
                                            {villainData.villainMethodCatChoice ? `Method Category: ${villainData.villainMethodCatChoice}`: "Choose your Villain's Method"}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {villainMethods.map((item) => (<Dropdown.Item key={item.id} name={item.methodCat}>{item.methodCat}</Dropdown.Item>))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {villainData?.villainMethodPossible?.length > 0 && (
                                        <Dropdown onSelect={(ek, e) => setVillainData({...villainData, finalVillainMethodChoice: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {villainData.finalVillainMethodChoice ? `Method: ${villainData.finalVillainMethodChoice}`: "Choose your Villain's Method"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {villainData.villainMethodPossible.map((item) => (<Dropdown.Item name={item}>{item}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </div>
                                <Dropdown onSelect={(ek, e) => setVillainData({...villainData, weakness: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.weakness ? `Weakness: ${villainData.weakness}`: "Choose your Villain's Weakness"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {villainWeaknessChoices.map((item) => (<Dropdown.Item key={item.id} name={item.option}>{item.option}</Dropdown.Item>))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={hanelSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetVillainData: bindActionCreators(setVillainData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(VillainModal);