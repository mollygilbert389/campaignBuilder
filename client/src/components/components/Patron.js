import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, Form, FormControl, OverlayTrigger, Popover, Card } from 'react-bootstrap';
import { GenerateBtn } from ".";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import "../home.css";
import { setPatronData } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Patron = ({ onSetPatronData, campaign }) => {
    const overlay = useRef(null);
    const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
    const [showModal, setShowModal] = useState(false);
    const [patronData, setPatronData] = useState({factions: []});
    const patronMannerisms = [
        {id: 1, option: "Prone to singing, whistling, or humming quietly" },
        {id: 2, option: "Speaks in rhyme or some other particular way" },
        {id: 3, option: "Particularly low or high voice" },
        {id: 4, option: "Slurs words, lisps, or stutters" },
        {id: 5, option: "Enunciateas overly clearly" },
        {id: 6, option: "Speaks loudly" },
        {id: 7, option: "Whispers" },
        {id: 8, option: "Uses flowery speech or long words" },
        {id: 9, option: "Frequently uses the wrong word" },
        {id: 10, option: "Uses colorful oaths and exclaimations" },
        {id: 11, option: "Makes constant jokes or puns" },
        {id: 12, option: "Prone to predictions of doom" },
        {id: 13, option: "Fidgets" },
        {id: 14, option: "Squints" },
        {id: 15, option: "Stares into the distance" },
        {id: 16, option: "Chews something" },
        {id: 17, option: "Paces" },
        {id: 18, option: "Taps fingers" },
        {id: 19, option: "Bites Fingernails" },
        {id: 20, option: "Twirls hair or tugs beard"},
    ];
    const patronInteractionTraits = [
        {id: 1, option: "Argumentative" },
        {id: 2, option: "Arrogant" },
        {id: 3, option: "Blustering" },
        {id: 4, option: "Rude" },
        {id: 5, option: "Cautious" },
        {id: 6, option: "Friendly" },
        {id: 7, option: "Honest" },
        {id: 8, option: "Hot Tempered" },
        {id: 9, option: "Irritable" },
        {id: 10, option: "Ponderous" },
        {id: 11, option: "Quiet" },
        {id: 12, option: "Suspicious" },
        {id: 12, option: "Beautiful" },
        {id: 12, option: "Humorous" },
        {id: 12, option: "Generous" },
    ]; 
    const patronChoices = [
        "Retired Adventurer",
        "Local Ruler",
        "Military Officer",
        "Temple Official",
        "Sage",
        "Respected Elder",
        "Deity or Celestial",
        "Mysterious Fey",
        "Old Friend",
        "Former Teacher",
        "Parent or Family Member",
        "Desprate Commoner",
        "Embattled Merchant",
        "Villain posing as a patron",
        "Something else",
    ];

    const setReduxPatronData = (destination, value) => {
        onSetPatronData(destination, value);
    };

    const close = () =>  {
        setShowModal(false);
        setReduxPatronData("patronData", patronData);
    };

    const handleCloseOverlay = () => {
        overlay.current.hide();
    }

    const handleCheckBoxChange = (event, icon) => {
        let checked = event.target.checked;
        let name = event.target.name;
        if(checked) {
            const updatedArr = patronData.factions;
            const factionOrg = campaign.factionOrgs.find((facObj) => facObj.name === name);
            updatedArr.push(factionOrg);
            setPatronData({...patronData, factions: updatedArr});
        } else {
            const updatedFactions = patronData.factions.filter((item) => (item.name !== name));
            setPatronData({...patronData, factions: updatedFactions});
        }
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Patron</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create A Patron!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help create your patron. Click the image to upload an image of your own.</p>
                    <div className="d-flex flex-column align-items-center">
                        <Form inline>
                            <FormControl 
                                type="text" 
                                placeholder="Patron Name" 
                                className="mr-sm-2" 
                                value={patronData?.name} 
                                onChange={(e) => setPatronData({...patronData, name: e.target.value})}/>
                            <div style={{paddingRight: "10px"}}>or</div> 
                            <GenerateBtn name="patronName" handleGenerate={(feedback) => setPatronData({...patronData, name:feedback})}/>
                        </Form>
                        <br/>
                        <div className="patronContainer">
                            <div>
                                <Card 
                                    className="d-flex flex-column align-items-center villainPatronCard"
                                    enforceFocus={false}>
                                    <div>
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
                                                                value={patronData?.image}  
                                                                onChange={(e) => setPatronData({...patronData, image: e.target.value})}/>
                                                            <Button onClick={handleCloseOverlay} className="imageSubmit">Submit</Button>
                                                        </div>
                                                    </Popover.Content>
                                                </Popover>}>
                                            <Card.Img className="NPCimage" variant="top" src={patronData?.image || imageLink}/> 
                                        </OverlayTrigger>
                                    </div>
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <Card.Title>{patronData.name && (`Name: ${patronData.name}`)}</Card.Title>
                                        <Dropdown onSelect={(ek, e) => setPatronData({...patronData, gender: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {patronData.gender ?  `Gender: ${patronData.gender}`: "Choose your Patron's Gender"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Female</Dropdown.Item>
                                                <Dropdown.Item>Male</Dropdown.Item>
                                                <Dropdown.Item>Non Binary</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown onSelect={(ek, e) => setPatronData({...patronData, type: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {patronData.type ? `Type: ${patronData.type}` : "Choose your Patron's Type"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {patronChoices.map((item, idx) => (<Dropdown.Item key={idx} name={item}>{item}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown onSelect={(ek, e) => setPatronData({...patronData, manner: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {patronData.manner ? `Mannerism: ${patronData.manner}`: "Choose your Patron's Mannerism"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {patronMannerisms.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown onSelect={(ek, e) => setPatronData({...patronData, trait: e.target.text})} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {patronData.trait ? `Trait: ${patronData.trait }`: "Choose your Patron's Trait"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {patronInteractionTraits.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                {campaign.factionOrgs.length > 0 && campaign.factionOrgs.map((item, idx) => (
                                    <div key={idx}>
                                        <FontAwesomeIcon className="iconSpace" icon={item.icon}/>
                                            <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={(event) => handleCheckBoxChange(event, item.icon)} 
                                                    name={item.name}
                                                    defaultChecked={patronData.factions.find((facName) => facName.name === item.name)?.id ? true : false}
                                                    inputProps={item.icon}
                                                    color="primary"/>}
                                            label={item.name}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetPatronData: bindActionCreators(setPatronData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Patron);