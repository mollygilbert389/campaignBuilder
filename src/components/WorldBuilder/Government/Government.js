import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Languages from "./Languages"
import governments from "./Govrenmnt.json";
import RollBtn from "../../StaticComps/RollBtn"
import {Button, Dropdown, FormControl, OverlayTrigger, Tooltip, Form} from 'react-bootstrap'
import "../style.css"

class Government extends Component {
    state ={
        government: "",
        currency: "",
        currencyOptions: [
            "Common Coinage",
            "Common Coinage (No Electum)",
            "Trade Bars",
            "Barter System",
            "Odd Currency",
        ],
    }

    handleDropSelect = (keyEvent, event) => {
        const name = event.target.name
        const feedback = event.target.text
        this.setState({
            [event.target.name]: event.target.text
        })
        
        this.props.setGovernmentData(name, feedback)
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleRoll = (feedback, name) => {
        this.setState({
            [name]: feedback
        })
        this.props.setGovernmentData(name, feedback)
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

                    <Form inline>
                        <Dropdown onSelect={this.handleDropSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.government ? this.state.government: 'Choose Your Government'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {governments.map(item => {
                                    return <div>
                                        <OverlayTrigger overlay={
                                        <Tooltip>{item.description}</Tooltip>}>
                                        <span className="d-inline-block">
                                            <Dropdown.Item key={item.id} name="government">{item.name}</Dropdown.Item>
                                        </span>
                                        </OverlayTrigger> 
                                    </div>
                                    })}       
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="government" handleRoll={this.handleRoll} rollingArray={governments.map(item => item.name)}></RollBtn>
                    </Form>
                    <br></br>

                    <Form inline>
                        <Dropdown onSelect={this.handleDropSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.currency ? this.state.currency: 'Choose Your Currency'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.currencyOptions.map(item => {return <Dropdown.Item name="currency">{item}</Dropdown.Item>})}
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="currency" handleRoll={this.handleRoll} rollingArray={this.state.currencyOptions}></RollBtn>
                    </Form>

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