import React, {Component} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Form, Label, Input, FormGroup} from 'reactstrap'
import update from 'immutability-helper';
import "./style.css"

class PartyInfo extends Component {
    state = {
        partyMembers: 0,
        partymemberData: {}
    }

    handleClick = (e) => {
        let partyMemberChoice = e.target.id
        partyMemberChoice = parseInt(partyMemberChoice)
        this.setState({
            ...this.state,
            partyMembers: partyMemberChoice
    })
        
    let playerData = {}

    switch(partyMemberChoice) {
        case 3: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        case 4: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
            {id: 4, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        case 5: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
            {id: 4, name: "", raceClass: "", level:0},
            {id: 5, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        case 6: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
            {id: 4, name: "", raceClass: "", level:0},
            {id: 5, name: "", raceClass: "", level:0},
            {id: 6, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        case 7: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
            {id: 4, name: "", raceClass: "", level:0},
            {id: 5, name: "", raceClass: "", level:0},
            {id: 6, name: "", raceClass: "", level:0},
            {id: 7, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        case 8: 
        playerData = [
            {id: 1, name: "", raceClass: "", level:0},
            {id: 2, name: "", raceClass: "", level:0},
            {id: 3, name: "", raceClass: "", level:0},
            {id: 4, name: "", raceClass: "", level:0},
            {id: 5, name: "", raceClass: "", level:0},
            {id: 6, name: "", raceClass: "", level:0},
            {id: 7, name: "", raceClass: "", level:0},
            {id: 8, name: "", raceClass: "", level:0},
        ]
            this.setState({
                partymemberData: playerData
            })
        break;
        default: 
        return;
    } 
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
        const{partymemberData, partyMembers} = this.state
        
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

            {partyMembers > 2 && (
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
                                    <Dropdown.Item id={partyMember.id} name="Barbarian">Barbarian</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Bard">Bard</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Cleric">Cleric</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Druid">Druid</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Fighter">Fighter</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Monk">Monk</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Paladin">Paladin</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Ranger">Ranger</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Rogue">Rogue</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Sourcerer">Sourcerer</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Warlock">Warlock</Dropdown.Item>
                                    <Dropdown.Item id={partyMember.id} name="Wizard">Wizard</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="someSpace" onSelect={this.handlePartyLevel} id={partyMember.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {partymemberData[index].level ? partymemberData[index].level: 'Choose a level for this party member'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item id={partyMember.id} >1</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >2</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >3</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >4</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >5</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >6</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >7</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >8</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >9</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >10</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >11</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >12</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >13</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >14</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >15</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >16</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >17</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >18</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >19</Dropdown.Item>
                                        <Dropdown.Item id={partyMember.id} >20</Dropdown.Item>
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

 