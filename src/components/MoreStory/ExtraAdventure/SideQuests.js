import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Encounters from "../Between/Encounters"
import RandomEvents from "./RandomEvents"
import SideQuests from "./SideQuests"
import Traps from "./Traps"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Twists extends Component {

    state = {
        showModal: false,
        sideQuests: '',
        sideQuestChoice: '',
        sideQuestOptions: [
            {id: 1, option: "Find a specific item rumored to be in the area"},
            {id: 2, option: "Retrieve information from an NPC in the area"},
            {id: 3, option: "Rescue a captive"},
            {id: 4, option: "Discover the fate of a missing NPC"},
            {id: 5, option: "Slay a specific monster"},
            {id: 6, option: "Discover the nature and origin of a strange phenpmenon in the area"},
            {id: 7, option: "Secure the aid of a character or creatue in the area"},
            {id: 8, option: "Retrieve a stolen item in the villain's possession"},
        ]
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleYesNoTwists = (event) => {
        let choice = event.target.name

        switch(choice) {
            case "Yes":
                this.setState({
                    sideQuests: choice
                })
            break;
            default: 
            this.setState({
                sideQuests: '',
                sideQuestChoice: '',
            })
        }
    }

    handleSideQuestChoice = (keyEvent, event) => {
        this.setState({
            sideQuestChoice: event.target.name,
        })
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Side Quests
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>This is optional, do you want to add a side quest to your story?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below</p>
                    
                    <br></br>

                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={this.handleYesNoTwists}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={this.handleYesNoTwists}>No</Button>
                        </div>
                    </div>

                    {this.state.sideQuests && (<div>
                        <Dropdown onSelect={this.handleSideQuestChoice}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.sideQuestChoice ? this.state.sideQuestChoice: 'Choose your Side Quest Goal'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            {this.state.sideQuestOptions.map(drop => {
                                return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                            })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>)}


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Twists;