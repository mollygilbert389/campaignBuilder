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
            meeting: ""
        }
    }

    close = () =>  {
        this.setState({
            showModal: false,
        })

        let themeArray = []

        let climate = this.state.climate
        let world = this.state.world
        let meeting = this.state.meeting
        let newName = document.getElementById('themeSpace')


        themeArray.push("Climate: " + climate)
        themeArray.push("World: " + world)
        themeArray.push("Meeting: " + meeting)

        for (let i = 0; i < themeArray.length; i++ ) {
            const newDiv = document.createElement('div')
            newDiv.append(themeArray[i])
            newName.append(newDiv)
        }
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    climateSelect = (choice) => {
        if (this.state.climate = "") {
            let climateSpace = document.getElementById('climateForm')
            climateSpace.innerText = ""
        } else {
            let climateSpace = document.getElementById('climateForm')
            climateSpace.innerText = choice.target.text
        }
        let newChoice = choice.target.text
        this.setState({
            climate: newChoice
        })
    }

    worldSelect = (choice) => {
        if (this.state.world = "") {
            let worldSpace = document.getElementById('worldForm')
            worldSpace.innerText = ""
        } else {
            let worldSpace = document.getElementById('worldForm')
            worldSpace.innerText = choice.target.text
        }

        let newChoice = choice.target.text
        this.setState({
            world: newChoice
        })
    }

    meetingSelect = (choice) => {
        if (this.state.meeting = "") {
            let meetSpace = document.getElementById('meetForm')
                meetSpace.innerText = ""
        } else {
            let meetSpace = document.getElementById('meetForm')
            meetSpace.innerText = choice.target.text
        }

        let newChoice = choice.target.text
        this.setState({
            meeting: newChoice
        })
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
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" id="climateForm">
                        What type of climate would you find your villian in?
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={this.climateSelect}>Cold</Dropdown.Item>
                        <Dropdown.Item onClick={this.climateSelect}>Hot</Dropdown.Item>
                        <Dropdown.Item onClick={this.climateSelect}>Mild</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </FormGroup>

                <FormGroup>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" id="worldForm">
                        What type of world is this?
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={this.worldSelect}>Forest</Dropdown.Item>
                        <Dropdown.Item onClick={this.worldSelect}>Desert</Dropdown.Item>
                        <Dropdown.Item onClick={this.worldSelect}>City</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </FormGroup>

                <FormGroup>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-success" id="meetForm">
                        Where do you intend your party to meet?
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item onClick={this.meetingSelect}>Meadow</Dropdown.Item>
                        <Dropdown.Item onClick={this.meetingSelect}>Tavern</Dropdown.Item>
                        <Dropdown.Item onClick={this.meetingSelect}>Party</Dropdown.Item>
                        <Dropdown.Item onClick={this.meetingSelect}>Dinner</Dropdown.Item>
                        <Dropdown.Item onClick={this.meetingSelect}>Mysterious Circumstance</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </FormGroup>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.close} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Theme;