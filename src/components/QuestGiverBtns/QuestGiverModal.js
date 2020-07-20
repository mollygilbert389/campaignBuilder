import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class QuestGiverModal extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            value: "", 
            // tyep: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              value: event.target.value
            })
            let questGiverName = this.state.value
            let newName = document.getElementById('questGiverNameSpace')
            newName.textContent = "Quest Giver: " + questGiverName
      }


      handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
        let questGiverName = this.state.value
        let newName = document.getElementById('questGiverNameSpace')
        newName.textContent = "Quest Giver: " + questGiverName
      }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    questGiverChoice = (choice) => {
        if (this.state.type = "") {
            let questGiverType = document.getElementById('questGiverType')
            questGiverType.innerText = "Quest Giver Type"
        } else {
            let questGiverType = document.getElementById('questGiverType')
            questGiverType.innerText = choice.target.text
        }

        let questGiverChoice = choice.target.text
        this.setState({
            type: questGiverChoice
        })

        let newNameandType = document.getElementById('questGiverTypeSpace')
        newNameandType.append("Type: " + questGiverChoice) 
    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Quest Giver
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Let's Create A Quest Giver!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Below are some buttons to help create your quest giver</p>
                <Form inline>
                    <FormControl type="text" placeholder="Guest Giver Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    <div style={{paddingRight: "10px"}}>or</div> 
                    <Button variant="outline-primary">Generate</Button>
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="questGiverType">
                    Quest Giver Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item onClick={this.questGiverChoice}>Human</Dropdown.Item>
                    <Dropdown.Item onClick={this.questGiverChoice}>Elf</Dropdown.Item>
                    <Dropdown.Item onClick={this.questGiverChoice}>God</Dropdown.Item>
                    <Dropdown.Item onClick={this.questGiverChoice}>Dwarf</Dropdown.Item>
                    <Dropdown.Item onClick={this.questGiverChoice}>Wizard</Dropdown.Item>
                    <Dropdown.Item onClick={this.questGiverChoice}>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default QuestGiverModal;