import React, { useState, useRef } from 'react';
import { Button, Dropdown, Form, FormControl, OverlayTrigger, Card, Popover } from 'react-bootstrap';
import { GenerateBtn } from "..";
import "../../home.css";
import { setNPCData } from "../../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const NPCCard = ({ onSetNPCData, campaign, index }) => {
    const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
    const overlay = useRef(null);
    const [NPCData, setNPCData] = useState({});

    const setReduxNPCData = (destination, value) => {
        onSetNPCData(destination, value)
    };

    const handleSelections = (ek, event, index, type) => {
        const selection = event.target.text;
        const newNPC = [...campaign.NPCData].map((NPC) => {
            if (NPC.id === index) {
                return {...NPC, [type]: selection}
            } return NPC
        });
        setNPCData({...NPCData, [type]: selection});
        setReduxNPCData("NPCData", newNPC);
    }; 

    const handleNameorImageChange = (e, index, type) => {
        const name = e?.target?.value || e
        console.log(name)
        const newNPC = [...campaign.NPCData].map((NPC) => {
            if (NPC.id === index) {
                return {...NPC, [type]: name}
            } return NPC
        })
        setNPCData({...NPCData, [type]: name});
        setReduxNPCData("NPCData", newNPC);
    };

    const handleCloseOverlay = () => {
        overlay.current.hide();
    };
 
    return (
        <div>
            <Card enforceFocus={false} className="changeOverflow d-flex flex-column align-items-center color">
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
                                            value={NPCData?.NPCImage} 
                                            onChange={(e) => handleNameorImageChange(e, index, "NPCImage")}/>
                                        <Button onClick={handleCloseOverlay} className="imageSubmit">Submit</Button>
                                    </div>
                                </Popover.Content>
                            </Popover>}>

                        <Card.Img className="NPCimage" variant="top" src={NPCData?.NPCImage || imageLink}/> 
                    </OverlayTrigger>
                </div>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{!NPCData.NPCName ? `NPC # ${index +1}` : `${NPCData.NPCName}`}</Card.Title>
                    <Form inline className="giveMeNPCSpace">
                        <FormControl 
                            type="text" 
                            placeholder="NPC Name" 
                            className="mr-sm-2" 
                            value={NPCData?.NPCName} 
                            onChange={(e) => handleNameorImageChange(e, index, "NPCName")}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        <GenerateBtn name={NPCData?.NPCName} handleGenerate={(feedback) => handleNameorImageChange(feedback, index, "NPCName")}/>
                    </Form>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "gender")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.gender ?  `Gender: ${NPCData.gender}`: 'Choose your NPCs Gender'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Female</Dropdown.Item>
                            <Dropdown.Item>Male</Dropdown.Item>
                            <Dropdown.Item>Non Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown  onSelect={(ek, e) => handleSelections(ek, e, index, "appearance")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.appearance ? `Appearance: ${NPCData.appearance}`: "Choose your NPC's Appearance"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCAppearance.map((item, idx) => (<Dropdown.Item key={idx}>{item.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "highAbility")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.highAbility ? `High Ability: ${NPCData.highAbility}`: "Choose your NPC's High Ability"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Strength-powerful, brawny, strong as an ox</Dropdown.Item>
                            <Dropdown.Item>Dexterity-lithe, agile, graceful</Dropdown.Item>
                            <Dropdown.Item>Consitution-hardy, hale, healthy</Dropdown.Item>
                            <Dropdown.Item>Intelligence-studious, learned, inquisitive</Dropdown.Item>
                            <Dropdown.Item>Wisdom-perceptive, spiritual, insightful</Dropdown.Item>
                            <Dropdown.Item>Charisma-persuasive, forceful, born leader</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "lowAbility")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.lowAbility ? `Low Ability: ${NPCData.lowAbility}`: "Choose your NPC's Low Ability"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Strength-feeble, scrawny</Dropdown.Item>
                            <Dropdown.Item>Dexterity-clumbsy, fumbling</Dropdown.Item>
                            <Dropdown.Item>Consitution-sickly, pale</Dropdown.Item>
                            <Dropdown.Item>Intelligence-dim-witted, slow</Dropdown.Item>
                            <Dropdown.Item>Wisdom-oblivious, absentminded</Dropdown.Item>
                            <Dropdown.Item>Charisma-dull, boring</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "talent")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.talent ? `Talent: ${NPCData.talent}`: "Choose your NPC's Talent"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCTalents.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "manner")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.manner? `Mannerism: ${NPCData.manner}`: "Choose your NPC's Mannerism"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bringToFront">
                            {NPCMannerisms.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "trait")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.trait ? `Trait: ${NPCData.trait}`: "Choose your NPC's Trait"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCInteractionTraits.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="center">
                        <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "ideal")} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                                {NPCData.ideal ? NPCData.ideal: "Choose your NPC's Ideal"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {NPCIdeals.map((drop, idx) => (<Dropdown.Item key={idx} name={drop.main}>{drop.main}</Dropdown.Item>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        {NPCData.ideal && (
                            <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "drilledIdealChoice")} className="giveMeNPCSpace">
                                <Dropdown.Toggle variant="outline-primary">
                                    {NPCData.drilledIdealChoice ? NPCData.drilledIdealChoice: "Choose your NPC's Ideal"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {NPCIdeals.find((item) => item.main ===  NPCData.ideal).list.map((drop, idx) => (<Dropdown.Item key={idx} name={drop}>{drop}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "bond")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.bond ? `Bond: ${NPCData.bond}`: "Choose your NPC's Bond"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCBonds.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "flawOrSecret")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.flawOrSecret ? `Flaw/Secret: ${NPCData.flawOrSecret}`: "Choose your NPC's Flaw or Secret"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCFlawsSecrets.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetNPCData: bindActionCreators(setNPCData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(NPCCard);