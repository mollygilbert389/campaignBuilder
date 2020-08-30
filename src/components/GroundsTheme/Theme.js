import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormGroup } from 'react-bootstrap'
import "./style.css"

class Theme extends Component {
    state ={
        showModal: false,
        climate: "",
        world: "",
        meetingPlace: ""
    }

    close = () =>  {
        this.props.setClimate(this.state.climate)
        this.props.setWorld(this.state.world)
        this.props.setMeetingPlace(this.state.meetingPlace)

        this.setState({
            showModal: false,
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    climateSelect = (eventKey, event) => {
        this.setState({
            climate: event.target.text
        })
    }

    worldSelect = (eventKey, event) => {
        this.setState({
            world: event.target.text
        })
    }

    meetingSelect = (eventKey, event) => {
        this.setState({
            meetingPlace: event.target.text
        })
    }

render() {  
    const{climate,world,meetingPlace} = this.state

    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Theme
                </Button>
            </div>
            <Modal show={this.state.showModal}>
            <Modal.Dialog id="villianbtn">
                <Modal.Header>
                    <Modal.Title>Let's Create A Theme!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Below are some buttons to help create your ideal world!</p>

                    <FormGroup>
                        <Dropdown onSelect={this.climateSelect}>
                            <Dropdown.Toggle variant="outline-primary" id="climateForm">
                                {climate ? climate: 'What type of climate would you find your villian in?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Cold</Dropdown.Item>
                            <Dropdown.Item >Hot</Dropdown.Item>
                            <Dropdown.Item >Mild</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.worldSelect}>
                            <Dropdown.Toggle variant="outline-primary" id="worldForm">
                                {world ? world: 'What type of world is this?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Forest</Dropdown.Item>
                            <Dropdown.Item >Desert</Dropdown.Item>
                            <Dropdown.Item >City</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                    <FormGroup>
                        <Dropdown onSelect={this.meetingSelect}>
                            <Dropdown.Toggle variant="outline-primary" id="meetForm">
                                {meetingPlace ? meetingPlace: 'Where do you intend your party to meet?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Meadow</Dropdown.Item>
                            <Dropdown.Item >Tavern</Dropdown.Item>
                            <Dropdown.Item >Party</Dropdown.Item>
                            <Dropdown.Item >Dinner</Dropdown.Item>
                            <Dropdown.Item >Mysterious Circumstance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </Modal>
        </div>
    );
}
}

export default Theme;