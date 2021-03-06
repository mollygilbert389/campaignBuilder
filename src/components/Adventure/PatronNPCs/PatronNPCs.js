import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import NPCs from "./NPCs/NPCs"
import Patron from "./Patron"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class PatronNPCs extends Component {

    state = {
        showModal: false
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleClose = (playerData) => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  


    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Patrons And NPCs
                </Button>
            </div>
            <Modal 
            size="lg" 
            show={this.state.showModal} 
            onHide={this.handleClick}
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Who's On Your Team?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Let's figure out some details about the NPCs you get the play in the game. Firstly, let's plan your patron who will be the benefactor of the adventure goal. You can also use this to add some NPC characters to your story to make things interesting.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Patron
                        campaign={this.props.campaign}
                        setPatronData={this.props.setPatronData}
                        ></Patron>
                        <NPCs
                        setNPCData={this.props.setNPCData}
                        campaign={this.props.campaign}
                        ></NPCs>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClose} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default PatronNPCs;