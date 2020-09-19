import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Languages from "./Languages"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Government extends Component {
    state ={
        government: "",
        currency: ""
    }

    governmentChoice = (eventKey, event) => {
        this.setState({
            government: event.target.text
        }, () => this.props.setGovernment(this.state.government))
    }

    currencyChoice = (eventKey, event) => {
        this.setState({
            currency: event.target.text
        }, () => this.props.setCurrency(this.state.currency))
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
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Government
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's organize the Government and pick our Currency.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help you make those decisions.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.governmentChoice}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.government ? this.state.government: 'Choose Your Government'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Autogracy</Dropdown.Item>
                            <Dropdown.Item>Bureaucracy</Dropdown.Item>
                            <Dropdown.Item>Confederacy</Dropdown.Item>
                            <Dropdown.Item>Democracy</Dropdown.Item>
                            <Dropdown.Item>Dictatorship</Dropdown.Item>
                            <Dropdown.Item>Feudalism</Dropdown.Item>
                            <Dropdown.Item>Gerontocracy</Dropdown.Item>
                            <Dropdown.Item>Hierarchy</Dropdown.Item>
                            <Dropdown.Item>Magocracy</Dropdown.Item>
                            <Dropdown.Item>Matriarchy/Patriarchy</Dropdown.Item>
                            <Dropdown.Item>Militocracy</Dropdown.Item>
                            <Dropdown.Item>Oligarchy</Dropdown.Item>
                            <Dropdown.Item>Plutocracy</Dropdown.Item>
                            <Dropdown.Item>Republic</Dropdown.Item>
                            <Dropdown.Item>Satrapy</Dropdown.Item>
                            <Dropdown.Item>Theocracy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <br></br>

                    <Dropdown onSelect={this.currencyChoice}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.currency ? this.state.currency: 'Choose Your Currency'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Common Coinage</Dropdown.Item>
                            <Dropdown.Item>Common Coinage (No Electum)</Dropdown.Item>
                            <Dropdown.Item>Trade Bars</Dropdown.Item>
                            <Dropdown.Item>Barter System</Dropdown.Item>
                            <Dropdown.Item>Odd Currency</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Languages
                    setLanguages={this.props.setLanguages}
                    ></Languages>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Government;