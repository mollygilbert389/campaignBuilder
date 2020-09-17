import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, FormGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Physical extends Component {

    state = {
        showModal: false,
        world: "",
        mapScale: "",
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    worldSelect = (keyEvent, event) => {
        this.setState({
            world: event.target.text
        })
    }

    mapScale = (keyEvent, event) => {
        this.setState({
            mapScale: event.target.text
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
                    <p>Below are some buttons to help create your ideal world!</p>

                    <FormGroup>
                        <Dropdown onSelect={this.worldSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.world ? `Setting: ${this.state.world}`: 'What is your setting?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Coast</Dropdown.Item>
                            <Dropdown.Item >Desert</Dropdown.Item>
                            <Dropdown.Item >Forest</Dropdown.Item>
                            <Dropdown.Item >Island</Dropdown.Item>
                            <Dropdown.Item >Jungle</Dropdown.Item>
                            <Dropdown.Item >Swamp</Dropdown.Item>
                            <Dropdown.Item >Tundra</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.mapScale}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.mapScale ? `Size: ${this.state.mapScale}` : 'What kind of place are your adventurers starting?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Village</Dropdown.Item>
                            <Dropdown.Item >Town</Dropdown.Item>
                            <Dropdown.Item >City</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.meetingSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.meetingPlace ? `Meeting: ${this.state.meetingPlace}`: 'How do your characters know each other?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Meet in a tavern about a contract</Dropdown.Item>
                            <Dropdown.Item >Party has already adventured togethr</Dropdown.Item>
                            <Dropdown.Item >One member brings the group together</Dropdown.Item>
                            <Dropdown.Item >Meet at a party</Dropdown.Item>
                            <Dropdown.Item >Mysterious Circumstance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Physical;