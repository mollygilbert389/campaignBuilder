import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Atmosphere from "./Atmosphere"
import Scale from "./Scale"
import AdventureSite from "./AdventureSite"
import {Button, Dropdown, Form, FormControl, FormGroup, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Physical extends Component {

    state = {
        showModal: false,
        world: ""
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

                    {/* <div className="btnspace">
                        <Atmosphere></Atmosphere>
                        <Scale></Scale>
                        <AdventureSite></AdventureSite>
                    </div> */}

                    <FormGroup>
                        <Dropdown onSelect={this.worldSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.world ? this.state.world : 'What is your setting?'}
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
                                {this.state.mapScale ? this.state.mapScale : 'What kind of place are your adventurers starting?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Village</Dropdown.Item>
                            <Dropdown.Item >Town</Dropdown.Item>
                            <Dropdown.Item >City</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

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