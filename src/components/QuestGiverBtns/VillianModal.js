import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import "./style.css"

class VillianModal extends Component {

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
            let villianName = this.state.value
            let newName = document.getElementById('villianNameSpace')
            newName.textContent = "Villian: " + villianName
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
        <Button id="villian" variant="outline-success" size="lg" onClick={this.handleClick}>Villian
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Let's Create Yor Villian!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to create your villian</p>

                <Form inline>
                    <FormControl type="text" placeholder="Villian Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    <div style={{paddingRight: "10px"}}>or</div> 
                    <Button variant="primary" >Generate</Button>
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Villian Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">Human</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Hag</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Abyssal Chicken</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Alcolyte</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Elemental</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dwarf</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cult</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Animal</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Banshee</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Ghost</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Zombie</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Assasin</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Giant</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Wizard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Demogorgan</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Dragon</Dropdown.Item>
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

export default VillianModal;