import React, { Component } from 'react'
import {Form, Label, Input,FormGroup} from 'reactstrap'
import {Dropdown, Button, DropdownButton} from 'react-bootstrap'
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

    playerOnehandleChange = (event) => {
        this.setState({
            playerOneName: event.target.value,
        })
      }

    playerOnebuttonClick = (event) =>  {
    this.setState({
        playerOneName: event.target.value,
        })

        console.log(this.state.playerOneName)
        let newDiv = document.createElement('div')
        newDiv.classList.add('playerNameSpace')
        let playerOneName = this.state.playerOneName

        let partyName = document.getElementById('partyInfoSapce')
        newDiv.append("Player #1: " + playerOneName)
        // newDiv.append("Class: " + playerOneClass)

        // newDiv.append("Race: " + playerOneRace)
        partyName.append(newDiv)
    }

    playerOneSelectRace = (choice) => {
        this.setState({
            playerOneClass: choice.target.text  
        })

        alert(choice.target.text)

        console.log(this.state.playerOneClass)
    }

    /////////////////////
    playerTwohandleChange = (event) => {
        this.setState({
            playerTwoName: event.target.value,
        })
      }

    playerTwobuttonClick = (event) =>  {
    this.setState({
        playerTwoName: event.target.value,
        })

        let newDiv = document.createElement('div')
        newDiv.classList.add('playerNameSpace')
        let playerTwoName = this.state.playerTwoName
        let partyName = document.getElementById('partyInfoSapce')
        newDiv.append("Player #2: " + playerTwoName)
        partyName.append(newDiv)
    }

    /////////////////////
    playerThreehandleChange = (event) => {
        this.setState({
            playerThreeName: event.target.value,
        })
      }

    playerThreebuttonClick = (event) =>  {
    this.setState({
        playerThreeName: event.target.value,
        })

        let newDiv = document.createElement('div')
        newDiv.classList.add('playerNameSpace')
        let playerThreeName = this.state.playerThreeName
        let partyName = document.getElementById('partyInfoSapce')
        newDiv.append("Player #3: " + playerThreeName)
        partyName.append(newDiv)
    }

    render() {
        return (
            <div>
                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #1</Label>
                            <Input type="name" name="name" id="partyMemberOne" placeholder="Name" value={this.state.playerOneName} onChange={this.playerOnehandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Barbarian</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Bard</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Cleric</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Druid</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Fighter</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Monk</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Paladin</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Ranger</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Rogue</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Sourcerer</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Warlock</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectRace}>Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </FormGroup>
                        <Button variant="outline-success" onClick={this.playerOnebuttonClick}>Save</Button>
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #2</Label>
                            <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" value={this.state.playerTwoName} onChange={this.playerTwohandleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        </FormGroup>
                        <Button variant="outline-success" onClick={this.playerTwobuttonClick}>Save</Button>
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #3</Label>
                            <Input type="name" name="partyMemberOne" id="partyMemberOne" placeholder="Name" value={this.state.playerThreeName} onChange={this.playerThreehandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="addSpace"></div>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the race of this member?
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Barbarian</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Bard</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cleric</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Druid</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fighter</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Monk</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Paladin</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ranger</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Rogue</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sourcerer</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Warlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        </FormGroup>
                        <Button variant="outline-success" onClick={this.playerThreebuttonClick}>Save</Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default PartyThreeForm;
