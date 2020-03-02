import React, { Component, Fragment } from 'react'
import {Form, Label, Input,FormGroup} from 'reactstrap'
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

    playerOnehandleChange = (event) => {
        // this.setState({
        //     playerOneName: event.target.value,
        // })
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

        let playerOnePartyName = this.state.playerOneName
        let playerOnePartyClass = this.state.playerOneClass
        let playerTwoPartyName = this.state.playerTwoName
        let playerTwoPartyClass = this.state.playerTwoClass
        let playerThreePartyName = this.state.playerThreeName
        let playerThreePartyClass = this.state.playerThreeClass

        playerArray.push("Party Member #1: " + playerOnePartyName + " Class: " + playerOnePartyClass)
        playerArray.push("Party Member #2: " + playerTwoPartyName + " Class: " + playerTwoPartyClass)
        playerArray.push("Party Member #3: " + playerThreePartyName + " Class: " + playerThreePartyClass)

        console.log(playerArray)

        for (let i = 0; i < playerArray.length; i++ ) {
            const newDiv = document.createElement('div')
            newDiv.append(playerArray[i])
            partyName.append(newDiv)
        }
  
    }

    playerOneSelectClass = (choice) => {
        let newChoice = choice.target.text
        this.setState({
            playerOneClass: newChoice
        }, () => console.log(this.state.playerOneClass)
        )
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
            let playerTwoClass = this.state.playerTwoClass
            console.log(playerTwoClass)
            let partyName = document.getElementById('partyInfoSapce')
            newDiv.append("Player #2: " + playerTwoName)
            newDiv.append("Class: " + playerTwoClass)
            partyName.append(newDiv)
        }

    playerTwoSelectClass = (choice) => {
        let newChoice = choice.target.text
        this.setState({
            playerTwoClass: newChoice
        }, () => console.log(this.state.playerTwoClass)
        )
    }

    /////////////////////
    playerThreehandleChange = (event) => {
        this.setState({
            playerThreeName: event.target.value,
        })
      }

      playerThreebuttonClick = (event) =>  {
        this.setState({
            playerOneName: event.target.value,
            })
    
            let newDiv = document.createElement('div')
            newDiv.classList.add('playerNameSpace')
            let playerThreeName = this.state.playerThreeName
            let playerThreeClass = this.state.playerThreeClass
            console.log(playerThreeClass)
            let partyName = document.getElementById('partyInfoSapce')
            newDiv.append("Player #1: " + playerThreeName)
            newDiv.append("Class: " + playerThreeClass)
            partyName.append(newDiv)
        }

    playerThreeSelectClass = (choice) => {
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
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #1</Label>
                            <Input type="names" name="playerOneName" id="partyMemberOne" placeholder="Name" value={this.state.playerOneName} onChange={this.playerOnehandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
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
                        {/* <Button variant="outline-success" onClick={this.playerOnebuttonClick}>Save</Button> */}
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #2</Label>
                            <Input type="names" name="playerTwoName" id="partyMemberOne" placeholder="Name" value={this.state.playerTwoName} onChange={this.playerOnehandleChange} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
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
                        {/* <Button variant="outline-success" onClick={this.playerTwobuttonClick}>Save</Button> */}
                    </Form>
                </div>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">Party Member #3</Label>
                            <Input type="names" name="playerThreeName" id="partyMemberOne" placeholder="Name" value={this.state.playerThreeName} onChange={this.playerOnehandleChange}/>
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                            What is the class of this member?
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
                        {/* <Button variant="outline-success" onClick={this.playerThreebuttonClick}>Save</Button> */}
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
