import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Encounters extends Component {
    state ={
        enounter: "", 
        difficulty: '',
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleEncounterSelect = (eventKey, event) => {
        this.setState({
            enounter: event.target.text
        })
    }

    handleDifficultySelect = (eventKey, event) => {
        this.setState({
            difficulty: event.target.text
        })
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Encounters
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Your adventure should have some encounters to give the players something to do, and help progress the story along.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help you decide some encounters. These will happen organically in your story, and it's up to your players to ultimately decide what to do, but you can help move them along.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.handleEncounterSelect}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.enounter ? this.state.enounter: 'Choose some encounter options'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Make peace</Dropdown.Item>
                            <Dropdown.Item>Protect an NPC or Object</Dropdown.Item>
                            <Dropdown.Item>Retrieve an object</Dropdown.Item>
                            <Dropdown.Item>Run a guantlet</Dropdown.Item>
                            <Dropdown.Item>Sneak In</Dropdown.Item>
                            <Dropdown.Item>Stop a ritual</Dropdown.Item>
                            <Dropdown.Item>Take out a single target</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                
                    <div>
                        <p>Creating a dificulty level for the encouonter.</p>

                    <Dropdown onSelect={this.handleDifficultySelect}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.difficulty ? this.state.difficulty: 'Choose some encounter options'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Easy</Dropdown.Item>
                            <Dropdown.Item>Medium</Dropdown.Item>
                            <Dropdown.Item>Hard</Dropdown.Item>
                            <Dropdown.Item>Deadly</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Encounters;