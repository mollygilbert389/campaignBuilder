import React, {Component} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Form, Label, Input, FormGroup} from 'reactstrap'
import update from 'immutability-helper';
import "./style.css"

class PartyInfo extends Component {
    state = {
        partymemberData: []
    }

    handleClick = (event) => {
        let partyMemberChoice = event.target.id
        partyMemberChoice = parseInt(partyMemberChoice)
        
        let playerData = []

        for (let i=0; i < partyMemberChoice; i++) {
            let newObject = {id:i+1, name: "", raceClass: "", level: 0}
            playerData.push(newObject)
        }

        this.setState({
            partymemberData: playerData
        }, () => console.log(this.state.partymemberData))
    } 

    handlePartySelect = (eventKey, event)=> {
        const index = event.target.id -1
        const newRaceClass = event.target.name
        const oldData = this.state.partymemberData

        const newPartyMemberData = update(oldData, 
            {[index]: {$set: {id: index+1, name: this.state.partymemberData[index].name, raceClass: newRaceClass, level:0}}},
          );

          this.setState({
            partymemberData: newPartyMemberData
        });
    }

    playerNameChange = (event) => {
        const index = event.target.id -1
        const playerName = event.target.value
        const oldData = this.state.partymemberData

        const newPartyMemberData = update(oldData, 
            {[index]: {$set: {id: index+1, name: playerName, raceClass: this.state.partymemberData[index].raceClass, level:0}}},
          );

          this.setState({
            partymemberData: newPartyMemberData
        });
      }

      handlePartyLevel = (eventKey, event) => {
        const index = event.target.id -1
        const newlevel = event.target.text
        const oldData = this.state.partymemberData
        const newPartyMemberData = update(oldData, 
            {[index]: {$set: {id: index+1, name: this.state.partymemberData[index].name, raceClass: this.state.partymemberData[index].raceClass, level: newlevel}}},
          );

          this.setState({
            partymemberData: newPartyMemberData
        });
      }

      handleReduxSave = () => {
        this.props.setPlayers(this.state.partymemberData)
      }

render() {  

        const quantity = [3,4,5,6,7,8]
        const{partymemberData} = this.state
        const classTypes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sourcerer", "Warlock", "Wizard"]
        const levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        
    return (
        <div>
            <p>Click on the number of party members you plan to have. Must be at least 3 (exluding the DM) and the max is 8.</p>
            
            <div className="partyBtnSpace">
                {quantity.map(number => {
                    return <div key={number} className="prtyBtns">
                        <Button id={number} variant="outline-primary" onClick={this.handleClick}>{number}</Button>
                    </div>
                })}
            </div>

            {partymemberData.length > 0 && (
                <div>
                    <div className="forms">
                        {[...partymemberData].map((partyMember, index) => {
                            return <div key={partyMember.id} className="partyFormSpace">
                            <Form inline>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">{`Party Member ${partyMember.id}`}</Label>
                                    <Input type="names" placeholder="Name" id={partyMember.id} onChange={this.playerNameChange}/>
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Dropdown onSelect={this.handlePartySelect} id={partyMember.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {partymemberData[index].raceClass ? partymemberData[index].raceClass: 'Choose a Class for this Party Member'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {classTypes.map(item => {return <Dropdown.Item id={partyMember.id} name={item}>{item}</Dropdown.Item>})}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="someSpace" onSelect={this.handlePartyLevel} id={partyMember.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {partymemberData[index].level ? partymemberData[index].level: 'Choose a level for this party member'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {levels.map(item => {return <Dropdown.Item id={partyMember.id}>{item}</Dropdown.Item>})}
                                    </Dropdown.Menu>
                                </Dropdown>
                                </FormGroup>
                            </Form>
                        </div>
                        })}
                    </div>
                    
                    <div className="saveBtn">
                        <Button variant="outline-success" onClick={this.handleReduxSave}>Save</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
}

export default PartyInfo;

 