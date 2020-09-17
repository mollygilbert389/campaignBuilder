import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Twists from './Twists'
import SideQuests from "./SideQuests"
import Traps from "../SetbacksTraps/Traps"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class ExtraAdventure extends Component {

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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Extra Adventure
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Here are some things you could add to your story to make it more interesting.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>These are optional. Click the buttons below to make some choices.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Twists></Twists>
                        <SideQuests></SideQuests>
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

export default ExtraAdventure;