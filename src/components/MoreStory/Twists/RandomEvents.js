import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class RandomEvents extends Component {
    state ={
        gods: ""
    }

    religousOrg = (eventKey, event) => {
        this.setState({
            gods: event.target.text
        })
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
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Random Events
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's set up a religious structure</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help you set up your gods.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.religousOrg}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.gods ? this.state.gods: 'Choose Your Religious Philosophy'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item>Loose Pantheons `(Suggested)`</Dropdown.Item>
                        <Dropdown.Item>Tight Pantheons</Dropdown.Item>
                        <Dropdown.Item>Mystery Cults</Dropdown.Item>
                        <Dropdown.Item>Monotheism</Dropdown.Item>
                        <Dropdown.Item>Dualism</Dropdown.Item>
                        <Dropdown.Item>Animism</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default RandomEvents;