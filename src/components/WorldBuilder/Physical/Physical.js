import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Atmosphere from "./Atmosphere"
import Scale from "./Scale"
import AdventureSite from "./AdventureSite"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Physical extends Component {

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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>The Physical
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Paint with all th colors.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Let's figure out the more apparent features of your world.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <Atmosphere></Atmosphere>
                        <Scale></Scale>
                        <AdventureSite></AdventureSite>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Physical;