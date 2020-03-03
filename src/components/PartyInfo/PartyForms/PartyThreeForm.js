import React, { Component, Fragment } from 'react'
import {Form, Label, Input, FormGroup} from 'reactstrap'
import {Dropdown, Button} from 'react-bootstrap'
import '../style.css'



class PartyThreeForm extends Component {
    constructor() {
        super();
        this.state ={
            playerOneName: "",
            playerTwoName: "",
            playerThreeName: "",
            playerOneClass: "",
            playerTwoClass: "",
            playerThreeClass: "",
            playerOneRace: "",
            playerTwoRace: "",
            playerThreeRace: "",
        }
    }

    playerhandleChange = (event) => {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState({
        [name]: value
        });
      }

    partyClick = () => {
        const playerArray = []

        let partyName = document.getElementById('partyInfoSapce')
        partyName.textContent = "";


        let playerOnePartyName = this.state.playerOneName
        let playerOnePartyClass = this.state.playerOneClass
        let playerTwoPartyName = this.state.playerTwoName
        let playerTwoPartyClass = this.state.playerTwoClass
        let playerThreePartyName = this.state.playerThreeName
        let playerThreePartyClass = this.state.playerThreeClass

        playerArray.push("Party Member #1: " + playerOnePartyName + " Class: " + playerOnePartyClass)
        playerArray.push("Party Member #2: " + playerTwoPartyName + " Class: " + playerTwoPartyClass)
        playerArray.push("Party Member #3: " + playerThreePartyName + " Class: " + playerThreePartyClass)

        for (let i = 0; i < playerArray.length; i++ ) {
            const newDiv = document.createElement('div')
            newDiv.append(playerArray[i])
            partyName.append(newDiv)
        }

    }

    playerOneSelectClass = (choice) => {
        if (this.state.playerOneClass = "") {
            let classSpace = document.getElementById('formThreeOne')
            classSpace.innerText = "What class is this party member?"
        } else {
            let classSpace = document.getElementById('formThreeOne')
            classSpace.innerText = choice.target.text
        }

        let newChoice = choice.target.text
        this.setState({
            playerOneClass: newChoice
        }, () => console.log(this.state.playerOneClass)
        )
        console.log(this.props.children)

    }

    /////////////////////
    playerTwoSelectClass = (choice) => {
        if (this.state.playerTwoClass = "") {
            let classSpace = document.getElementById('formThreeTwo')
            classSpace.innerText = "What class is this party member?"
        } else {
            let classSpace = document.getElementById('formThreeTwo')
            classSpace.innerText = choice.target.text
        }

        let newChoice = choice.target.text
        this.setState({
            playerTwoClass: newChoice
        }, () => console.log(this.state.playerTwoClass)
        )
    }

    /////////////////////
    playerThreeSelectClass = (choice) => {
        if (this.state.playerThreeClass = "") {
            let classSpace = document.getElementById('formThreeThree')
            classSpace.innerText = "What class is this party member?"
        } else {
            let classSpace = document.getElementById('formThreeThree')
            classSpace.innerText = choice.target.text
        }
        let newChoice = choice.target.text
        this.setState({
            playerThreeClass: newChoice
        }, () => console.log(this.state.playerThreeClass)
        )
    }

    render() {
        return (
            <div className="forms">
                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Party Member #1</Label>
                            <Input type="names" name="playerOneName" placeholder="Name" value={this.state.playerOneName} onChange={this.playerhandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="formThreeOne">
                                What is the class of this party member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Barbarian</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Bard</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Cleric</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Druid</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Fighter</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Monk</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Paladin</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Ranger</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Rogue</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Sourcerer</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Warlock</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </FormGroup>
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Party Member #2</Label>
                            <Input type="names" name="playerTwoName" placeholder="Name" value={this.state.playerTwoName} onChange={this.playerhandleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="formThreeTwo">
                            What is the class of this party member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Barbarian</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Bard</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Cleric</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Druid</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Fighter</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Monk</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Paladin</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Ranger</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Rogue</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Sourcerer</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Warlock</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerTwoSelectClass}>Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </FormGroup>
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Party Member #3</Label>
                            <Input type="names" name="playerThreeName" placeholder="Name" value={this.state.playerThreeName} onChange={this.playerhandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="formThreeThree">
                            What is the class of this party member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Barbarian</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Bard</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Cleric</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Druid</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Fighter</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Monk</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Paladin</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Ranger</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Rogue</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Sourcerer</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Warlock</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerThreeSelectClass}>Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </FormGroup>
                    </Form>
                    <div className="saveBtnSpace">
                     <Button variant="outline-success" onClick={this.partyClick}>Save</Button>
                     </div>
                </div>

            </div>
        )
    }
}

export default PartyThreeForm;
