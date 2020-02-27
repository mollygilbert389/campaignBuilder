import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, FormControl, Dropdown} from 'react-bootstrap'
import "./style.css"

class CustomBoth extends Component {

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
            let custom = this.state.value
            let villianName = document.getElementById('villianNameSpace')
            let questgiverName = document.getElementById('questGiverNameSpace')
            villianName.textContent = "Villian: " + custom
            questgiverName.textContent = "Quest Giver: " + custom
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
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>They Are One
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Let's Your Custom Villian/Quest Giver</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to help create this being.</p>
                <Form inline>
                    <FormControl type="text" placeholder="Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    <div style={{paddingRight: "10px"}}>or</div> 
                    <Button variant="primary" >Generate</Button>
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Villian Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Human</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Elf</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">God</Dropdown.Item>
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

export default CustomBoth;