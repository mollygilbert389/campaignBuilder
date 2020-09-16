import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormGroup } from 'react-bootstrap'
import "../style.css"

class Atmosphere extends Component {
    state ={
        showModal: false,
        mapScale: "",
        world: "",
        meetingPlace: ""
    }

    close = () =>  {
        // this.props.setClimate(this.state.climate)
        // this.props.setWorld(this.state.world)
        // this.props.setMeetingPlace(this.state.meetingPlace)

        this.setState({
            showModal: false,
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    mapScale = (eventKey, event) => {
        this.setState({
            mapScale: event.target.text
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
    const{world,meetingPlace} = this.state

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Theme
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create A Theme!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Below are some buttons to help create your ideal world!</p>

                    <FormGroup>
                        <Dropdown onSelect={this.worldSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {world ? world: 'What is your setting?'}
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

                    <FormGroup>
                        <Dropdown onSelect={this.meetingSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {meetingPlace ? meetingPlace: 'Where do you intend your party to meet?'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                            <Dropdown.Item >Tavern</Dropdown.Item>
                            <Dropdown.Item >Party</Dropdown.Item>
                            <Dropdown.Item >Dinner</Dropdown.Item>
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

export default Atmosphere;