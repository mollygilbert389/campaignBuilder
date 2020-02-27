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
            let acts = this.state.value
            let newName = document.getElementById('actsSpace')
            newName.textContent = "Acts: " + acts
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
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Acts
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Let's Create A Theme!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to help create your ideal world!</p>
                <Form inline>
                    <FormControl type="text" placeholder="Guest Giver Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Types of Themes
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Human</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Elf</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">God</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dwarf</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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