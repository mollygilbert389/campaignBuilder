import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Languages from "./Languages"
import governments from "./Govrenmnt.json";
import {Button, Dropdown, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Government
                </Button>
            </div>
            <Modal   size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's pick a government some local languages and our world's currency.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you make those decisions.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.governmentChoice}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.government ? this.state.government: 'Choose Your Government'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {governments.map(item => {
                                return <div>
                                    <OverlayTrigger overlay={
                                    <Tooltip>{item.description}</Tooltip>}>
                                    <span className="d-inline-block">
                                    <Dropdown.Item key={item.id} name={item.name}>{item.name}</Dropdown.Item>
                                    </span>
                                    </OverlayTrigger> 
                                </div>
                                })}       
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
                    campaign={this.props.campaign}
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