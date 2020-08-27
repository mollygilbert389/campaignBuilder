import React, {Component} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
import {Form, Label, Input, FormGroup} from 'reactstrap'
// import PartyThreeForm from './PartyForms/PartyThreeForm'
// import PartyFourForm from './PartyForms/PartyFourForm'
// import PartyFiveForm from './PartyForms/PartyFiveForm'
// import PartySixForm from './PartyForms/PartySixForm'
// import PartySevenForm from './PartyForms/PartySevenForm'
// import PartyEightForm from './PartyForms/PartyEightForm'
// import PartyLineItem from "./PartyForms/PartyLineItem"
import "./style.css"

class PartyInfo extends Component {

    constructor() {
        super();
        this.state ={
            partyMemebers: 0,
            partymemberData: []
        }
    }

    handleClick = (e) => {
        let partyMemberChoice = e.target.id
        partyMemberChoice = parseInt(partyMemberChoice)
        this.setState({
            ...this.state,
            partyMemebers: partyMemberChoice
        })
        
        let playerData = {}

        switch(partyMemberChoice) {
            case 3: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 4: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
                {id: 4, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 5: 
            playerData = [
                {id: 1, name: "", class: "" },
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
                {id: 4, name: "", Class: ""},
                {id: 5, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 6: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
                {id: 4, name: "", Class: ""},
                {id: 5, name: "", Class: ""},
                {id: 6, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 7: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
                {id: 4, name: "", Class: ""},
                {id: 5, name: "", Class: ""},
                {id: 6, name: "", Class: ""},
                {id: 7, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            case 8: 
            playerData = [
                {id: 1, name: "", class: ""},
                {id: 2, name: "", Class: ""},
                {id: 3, name: "", Class: ""},
                {id: 4, name: "", Class: ""},
                {id: 5, name: "", Class: ""},
                {id: 6, name: "", Class: ""},
                {id: 7, name: "", Class: ""},
                {id: 8, name: "", Class: ""},
            ]
                this.setState({
                    partymemberData: playerData
                })
            break;
            default: 
            return;
        } 

       
    }

render() {  

        const quantity = [3,4,5,6,7,8]
        const{partymemberData, partyMemebers} = this.state


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

            {partyMemebers > 2 && (
                <div>
                    <div className="forms">
                        {[...partymemberData].map(partyMember => {
                            return <div id={partymemberData.id} className="partyFormSpace">
                            <Form inline>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label className="mr-sm-2">Party Memeber</Label>
                                    <Input type="names" placeholder="Name"/>
                                </FormGroup>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Dropdown>
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