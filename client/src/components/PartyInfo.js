import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Form, Label, Input, FormGroup } from 'reactstrap';
import update from 'immutability-helper';
import "./home.css";
import { setPlayers } from "../actions/index";

const PartyInfo = ({ onSetPlayers })  => {
    const setReduxPlayers = (destination, value) => {
        onSetPlayers(destination, value)
    }
    const [partyMemberData, setPartyMemberData] = useState([]);
    const quantity = [3,4,5,6,7,8];
    const classTypes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sourcerer", "Warlock", "Wizard"];
    const levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    const handleClick = (event) => {
        let playerData = [];
        Array.from(Array(parseInt(event.target.id)).keys()).forEach((member, index) => {
            const newObject = { id: index+1, name: "", raceClass: "", level: 0 }
            playerData.push(newObject)
        });
        setPartyMemberData(playerData)
    }; 

    const handlePartyDetails = (eventKey, event, type) => {
        const jsEvent = event || eventKey;
        const index = jsEvent.target.id -1;
        const oldData = partyMemberData;
        if(type === "name"){
            const newName = jsEvent.target.value;
            const newPartyMemberData = update(oldData, 
                {[index]: {$set: {id: index+1, name: newName, raceClass: partyMemberData[index].raceClass, level: partyMemberData[index].level}}}
                );
            setPartyMemberData(newPartyMemberData);
        } else if (type === "level") {
            const newLevel = jsEvent.target.text;
            const newPartyMemberData = update(oldData, 
                {[index]: {$set: {id: index+1, name: partyMemberData[index].name, raceClass: partyMemberData[index].raceClass, level: newLevel}}},
              );
            setPartyMemberData(newPartyMemberData);
        } else if (type === "race") {
            const newRace = jsEvent.target.name;
            const newPartyMemberData = update(oldData, 
                {[index]: {$set: {id: index+1, name: partyMemberData[index].name, raceClass: newRace, level: partyMemberData[index].level}}}
              );
            setPartyMemberData(newPartyMemberData);
        }
    };

    const handleReduxSave = () => {
        setReduxPlayers("playerData", partyMemberData);
    };
        
    return (
        <div>
            <p>Click on the number of party members you plan to have. Must be at least 3 (exluding the DM) and the max is 8.</p>
            <div className="partyBtnSpace">
                {quantity.map((number, idx) => {
                    return (
                        <div key={idx} className="prtyBtns">
                            <Button id={number} variant="outline-primary" onClick={handleClick}>{number}</Button>
                        </div>
                    );
                })}
            </div>
            {partyMemberData.length > 0 && (
                <div>
                    <div className="forms">
                        {[...partyMemberData].map((partyMember, index) => {
                            return (
                                <div key={partyMember.id} className="partyFormSpace">
                                <Form inline>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Label className="mr-sm-2">{`Party Member ${partyMember.id}`}</Label>
                                        <Input type="names" placeholder="Name" id={partyMember.id} onChange={(ek, e) => handlePartyDetails(ek, e, "name")}/>
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                        <Dropdown onSelect={(ek, e) => handlePartyDetails(ek, e, "race")} id={partyMember.id}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {partyMemberData[index].raceClass ? partyMemberData[index].raceClass: 'Choose a Class for this Party Member'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {classTypes.map((item, idx) => (<Dropdown.Item key={idx} id={partyMember.id} name={item}>{item}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className="someSpace" onSelect={(ek, e) => handlePartyDetails(ek, e, "level")} id={partyMember.id}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {partyMemberData[index].level ? partyMemberData[index].level: 'Choose a level for this party member'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {levels.map((item, idx) => (<Dropdown.Item key={idx} id={partyMember.id}>{item}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </FormGroup>
                                </Form>
                            </div>
                        )
                        })}
                    </div>
                    <div className="saveBtn">
                        <Button variant="outline-success" onClick={handleReduxSave}>Save</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetPlayers: bindActionCreators(setPlayers, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(PartyInfo);

 