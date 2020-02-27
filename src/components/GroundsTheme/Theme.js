import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Theme extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            value: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              value: event.target.value
            })
            let theme = this.state.value
            let newName = document.getElementById('themeSpace')
            newName.textContent = "Theme: " + theme
      }

      //handles the key stoke changes????
      handleChange = (event) => {
        this.setState({
            value: event.target.value
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

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    What type of climate would you find your villian in?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Cold</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Hot</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Mild</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    What type of world is this?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Forest</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Desert</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">City</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Where do you intend your party to meet?
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Meadow</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Tavern</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Party</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dinner</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Mysterious Circumstance</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

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