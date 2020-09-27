import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Encounters from "./Encounters"
import RandomEvents from "./RandomEvents"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class EncountersAndEvents extends Component {

    state = {
        showModal: false,
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Encounters & Combat Events
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some things you can add to make your story a little more interesting and push your characters forward.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>These are optional, but suggested. Encounters are parts of the story where your characters will learn more about the main goal. Random Events are encounters thrown into the story to spice it up, and add some combat.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Encounters
                        setEncounters={this.props.setEncounters}
                        ></Encounters>
                        <RandomEvents
                        campaign={this.props.campaign}
                        // setRandomEncounterNumber={this.props.setRandomEncounterNumber}
                        ></RandomEvents>
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

export default EncountersAndEvents;