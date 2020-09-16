import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Languages extends Component {
    state ={
        language: "",
        languageOptions: [
            "Celestial",
            "Common",
            "Draconic",
            "Druidic",
            "Dwarvish",
            "Elvish",
            "Infernal",
        ]
    }

    handleLanguageSelect = (eventKey, event) => {
        this.setState({
            language: event.target.text
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Languages
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Talking Talking Talking Talk</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Choose the languages spoken commonly.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.handleLanguageSelect}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.language ? this.state.language: 'Choose Your Languages'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {this.state.languageOptions.map(item => {
                            return <Dropdown.Item name={item}>{item}</Dropdown.Item>})}
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

export default Languages;