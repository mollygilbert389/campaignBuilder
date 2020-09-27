import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Encounters from "../Encounters/Encounters"
import RandomEvents from "../Encounters/RandomEvents"
import SideQuests from "./SideQuests"
import Traps from "../SetbacksTraps/Traps"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {Slider} from '@material-ui/core'
import "../style.css"

class Twists extends Component {

    state = {
        showModal: false,
        sideQuests: '',
        sideQuestChoice: '',
        sideQuests: [],
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

    handleYesNoSideQuest = (event) => {
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

    handleSideQuestChoice = (keyEvent, event, index) => {
        const selection = event.target.text

        const newSideQuest = [...this.state.sideQuests].map(item => {
            if (item.id===index) {
                return {...item, type:selection}
            } return item
        })
        
        this.setState({
            sideQuests: newSideQuest
        })

        this.props.setSideQuests("sideQuests", newSideQuest)
    }

    handleSlider = (event, value) => {
        let sideQuests = []
        for (let i=0; i < value; i++) {
            let newObject = {id:i}
            sideQuests.push(newObject)
        }

        this.setState({
            sideQuests: sideQuests
        })

    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Side Quests
                </Button>
            </div>
            <Modal
            size="lg" 
            show={this.state.showModal} 
            onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>This is optional, do you want to add a side quest to your story?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below</p>
                    
                    <br></br>

                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={this.handleYesNoSideQuest}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={this.handleYesNoSideQuest}>No</Button>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    {this.state.sideQuests &&(<div>
                        <Slider
                        min={1}
                        max={10}
                        defaultValue={5}
                        onChangeCommitted={this.handleSlider}
                        valueLabelDisplay="on"
                        />
                    </div>)}

                    {this.state.sideQuests.length > 0 && (<div>
                        {this.state.sideQuests.map((space , index)=> {return <div>
                        <Dropdown onSelect={(keyEvent, event) => this.handleSideQuestChoice(keyEvent, event, index)}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.sideQuests[index].type ? this.state.sideQuests[index].type: 'Choose your Side Quest Goal'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            {this.state.sideQuestOptions.map(drop => {
                                return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                            })}
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>})}
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