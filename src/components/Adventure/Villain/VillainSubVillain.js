import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Villain from "./Villain"
import NPC from "../PatronNPCs/NPCs/NPCs"
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


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Villains
                </Button>
            </div>
            <Modal 
            size="lg" 
            show={this.state.showModal} 
            onHide={this.handleClick}
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Let's talk about the main villain and the mini bosses.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Now let's plan our your villain, their drives and goals, and who is on their team.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Villain
                        setVillainName={this.props.setVillainName}
                        ></Villain>
                        <NPC></NPC>
                        {/* <SubVillain></SubVillain> */}
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

export default PatronNPCs;