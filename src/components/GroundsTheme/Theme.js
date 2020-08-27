import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormGroup } from 'react-bootstrap'
import "./style.css"

class Theme extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            climate: "",
            world: "",
            meetingPlace: ""
        }
    }

    close = () =>  {
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
        // if (this.state.climate = "") {
        //     let climateSpace = document.getElementById('climateForm')
        //     climateSpace.innerText = ""
        // } else {
        //     let climateSpace = document.getElementById('climateForm')
        //     climateSpace.innerText = choice.target.text
        // }
        console.log(event.target.text)

        this.setState({
            climate: event.target.text
        }, () => {this.props.setTheme(this.state.climate)})
        
    }

    worldSelect = (eventKey, event) => {
        // if (this.state.world = "") {
        //     let worldSpace = document.getElementById('worldForm')
        //     worldSpace.innerText = ""
        // } else {
        //     let worldSpace = document.getElementById('worldForm')
        //     worldSpace.innerText = choice.target.text
        // }
        this.setState({
            world: event.target.text
        }, () => {this.props.setTheme(this.state.world)})
    }

    meetingSelect = (eventKey, event) => {
        // if (this.state.meeting = "") {
        //     let meetSpace = document.getElementById('meetForm')
        //         meetSpace.innerText = ""
        // } else {
        //     let meetSpace = document.getElementById('meetForm')
        //     meetSpace.innerText = choice.target.text
        // }
        this.setState({
            meeting: event.target.text
        }, () => {this.props.setTheme(this.state.meetingPlace)} )
    }

render() {  

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
                <p id="villianNameRemember">Some things you should keep in mind.</p>
                <p id="questGiverNameRemember">Some things you should keep in mind.</p>

                <FormGroup>
                    <Dropdown onSelect={this.climateSelect}>
                        <Dropdown.Toggle variant="outline-primary" id="climateForm">
                        What type of climate would you find your villian in?
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
                        What type of world is this?
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
                        Where do you intend your party to meet?
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