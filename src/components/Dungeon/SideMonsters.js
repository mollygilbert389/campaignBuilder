import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown} from 'react-bootstrap'
import {Label, Input, Form, FormGroup} from "reactstrap"
import "./style.css"

class Monsters extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
        }
    }

    close = () =>  {
        this.setState({
            showModal: false,
        })

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleMonsterSelect = (event) => {
        

        const show = function (div) {
            div.style.display = 'block'
        }

        let undeadChoices = document.getElementById('undeadChoices')
        let abberationMonsterList = document.getElementById("abberationChoices")
        let beastMonsterList = document.getElementById("beastChoices")
        
        let monsterChoice = event.target.name
        if (monsterChoice === "Undead") {
            show(undeadChoices)
        }

        if (monsterChoice === "Abberation") {
            show(abberationMonsterList)
        }

        if (monsterChoice === "Beast") {
            show(beastMonsterList)
        }

    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Monsters
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Monster Monster</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Now that we have a good idea of rooms and dungeon let's throw some monsters into the mix. Your monsters should be varying in difficulty and type.</p>
                <p>Since you chose a short campaign and you currenty have selected five rooms. You should select four different tyoes of monster below.</p>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="monsterChoices">
                                Monster Category Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item name="Undead" onClick={this.handleMonsterSelect}>Undead</Dropdown.Item>
                            <Dropdown.Item name="Abberation" onClick={this.handleMonsterSelect}>Aberration</Dropdown.Item>
                            <Dropdown.Item name="Beast" onClick={this.handleMonsterSelect}>Beast</Dropdown.Item>
                            {/* <Dropdown.Item onClick={this.playerOneSelectClass}>Celestial</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Construct</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Dragon</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Elemental</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Fey</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Fiend</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Giant</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Humaniod</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Monstrosity</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Ooze</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Plant</Dropdown.Item>
                            <Dropdown.Item onClick={this.playerOneSelectClass}>Undead</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>

                        <div id="undeadChoices" className="monsterChoice" style={{display:"none"}}>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                                Monster Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Zombie</Dropdown.Item>
                            <Dropdown.Item >Ghost</Dropdown.Item>
                            <Dropdown.Item >Boneclaw</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>

                        <div id="abberationChoices" className="monsterChoice" style={{display:"none"}}>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                                Monster Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Chocker</Dropdown.Item>
                            <Dropdown.Item >Dyrrn</Dropdown.Item>
                            <Dropdown.Item >Brain</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>

                        <div id="beastChoices" className="monsterChoice" style={{display:"none"}}>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                                Monster Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Owlbear</Dropdown.Item>
                            <Dropdown.Item >Bat</Dropdown.Item>
                            <Dropdown.Item >Wolf</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>

                        </FormGroup>
                    </Form>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.close} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Monsters;