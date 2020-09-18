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


render() {  


    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Patrons And NPCs
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Who's On Your Team?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Let's figure out who is on your team and if you have an allies.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Patron
                        setPatronName={this.props.setPatronName}
                        ></Patron>
                        <NPCs></NPCs>
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