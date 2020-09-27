import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Encounters from "../Encounters/Encounters"
import RandomEvents from "../Encounters/RandomEvents"
import SideQuests from "./SideQuests"
import Traps from "../SetbacksTraps/Traps"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Carousel} from 'react-bootstrap'
import "../style.css"

class Twists extends Component {

    state = {
        showModal: false,
        twistYesNo: '',
        twistChoice: '',
        twists: [
            {id: 1, option: "The adventurers are racing against other creatures with the same or opposite goals"},
            {id: 2, option: "The adventurers become responsible for the safety of a noncombatant NPC"},
            {id: 3, option: "The adventurers are prohibited from killing the villain, but the villain has no compunctions about killing them"},
            {id: 4, option: "The adventurers have a time limit"},
            {id: 5, option: "The adventurers have received false or extraneous information"},
            {id: 6, option: "Completeting an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy"},
            {id: 7, option: "The adventurers have two different goals, but they can only complete one"},
            {id: 8, option: "Completing the goal secretly helps the villain"},
            {id: 9, option: "The adventurers must cooperate with a known enemy to achieve a goal"},
            {id: 10, option: "The adventurers are under magical compulsion to complete their goal"},
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
                    twistYesNo: choice
                })
            break;
            default: 
            this.setState({
                twistYesNo: '',
                twistChoice: '',
            })
            
        }
    }

    handleTwist = (event) => {
        const choice = event.target.name
        this.setState({
            twistChoice: choice
        })
        this.props.setTwist("twist", choice)
    }

render() {  
    const style = {
        width: "350px",
        height: "125px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    }
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Twists
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>This is optional, do you want to add a twist to your story?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you want to add a twist?</p>
                    
                    <br></br>

                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={this.handleYesNoTwists}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={this.handleYesNoTwists}>No</Button>
                        </div>
                    </div>

                    {this.state.twistYesNo && (<div>

                        <div className="d-flex flex-column align-items-center">
                            <p>Click through these to add a fun twist to your story.</p>
                            <Carousel interval={null}>
                            {this.state.twists.map(drop => {
                                return <Carousel.Item> <div className="d-block w-100"></div> <Button variant="primary" onClick={this.handleTwist} style={style} key={drop.id} name={drop.option}>{drop.option}</Button> </Carousel.Item>
                            })}
                            </Carousel>
                        </div>
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