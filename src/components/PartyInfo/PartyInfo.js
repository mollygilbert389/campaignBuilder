import React, {Component} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Form, Label, Input, FormGroup} from 'reactstrap'
import update from 'immutability-helper';
import "./style.css"

class PartyInfo extends Component {

    constructor() {
        super();
        this.state ={
            partyMembers: 0,
            partymemberData: {}
        }
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
                {id: 1, name: "", class: ""},
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 4: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                {id: 4, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
                // {id: 4},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 5: 
            playerData = [
                {id: 1, name: "", class: "" },
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                {id: 4, name: "", class: ""},
                {id: 5, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
                // {id: 4},
                // {id: 5},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 6: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                {id: 4, name: "", class: ""},
                {id: 5, name: "", class: ""},
                {id: 6, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
                // {id: 4},
                // {id: 5},
                // {id: 6},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 7: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                {id: 4, name: "", class: ""},
                {id: 5, name: "", class: ""},
                {id: 6, name: "", class: ""},
                {id: 7, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
                // {id: 4},
                // {id: 5},
                // {id: 6},
                // {id: 7},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 8: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", class: ""},
                {id: 3, name: "", class: ""},
                {id: 4, name: "", class: ""},
                {id: 5, name: "", class: ""},
                {id: 6, name: "", class: ""},
                {id: 7, name: "", class: ""},
                {id: 8, name: "", class: ""},
                // {id: 1},
                // {id: 2},
                // {id: 3},
                // {id: 4},
                // {id: 5},
                // {id: 6},
                // {id: 7},
                // {id: 8},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            default: 
            return;
        } 
    }

    handlePartySelect = ()=> {
        console.log("something")
    }

    playerhandleChange = (event) => {
        let index = event.target.id -1
        let playerName = event.target.value
        const oldData = this.state.partymemberData

        const newPartyMemberData = update(oldData, 
            {[index]: {$set: {id: index+1, name: playerName, class: ""}}},
          );

          this.setState({
            partymemberData: newPartyMemberData
        });
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
                        {[...partymemberData].map(partyMember => {
                            return <div key={partyMember.id} className="partyFormSpace">
                            <Form inline>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">{`Party Member ${partyMember.id}`}</Label>
                                    <Input type="names" placeholder="Name" id={partyMember.id} onChange={this.playerhandleChange}/>
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Dropdown onSelect={this.handlePartySelect}>
                                    <Dropdown.Toggle variant="outline-primary" id="formThreeOne">
                                        What is the class of this party member?
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <Dropdown.Item>Barbarian</Dropdown.Item>
                                    <Dropdown.Item>Bard</Dropdown.Item>
                                    <Dropdown.Item>Cleric</Dropdown.Item>
                                    <Dropdown.Item>Druid</Dropdown.Item>
                                    <Dropdown.Item>Fighter</Dropdown.Item>
                                    <Dropdown.Item>Monk</Dropdown.Item>
                                    <Dropdown.Item>Paladin</Dropdown.Item>
                                    <Dropdown.Item>Ranger</Dropdown.Item>
                                    <Dropdown.Item>Rogue</Dropdown.Item>
                                    <Dropdown.Item>Sourcerer</Dropdown.Item>
                                    <Dropdown.Item>Warlock</Dropdown.Item>
                                    <Dropdown.Item>Wizard</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </FormGroup>
                            </Form>
                        </div>
                        }

                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
}

export default PartyInfo;

 