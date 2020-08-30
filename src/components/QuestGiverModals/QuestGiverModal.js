import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "./style.css"

class QuestGiverModal extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            questGiverName: "", 
            questGiverType: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              questGiverName: event.target.value
            })
            this.props.setQuestGiver(this.state.questGiverName, this.state.questGiverType)
      }


      handleChange = (event) => {
        this.setState({
            questGiverName: event.target.value
        })
      }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    questGiverChoice = (choice) => {
        this.setState({
            questGiverType: choice.target.text
        })
    }

render() {  

    const{questGiverType}=this.state

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

                    <OverlayTrigger overlay={
                    <Tooltip>Coming Soon!</Tooltip>}>
                    <span className="d-inline-block">
                    <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                    </span>
                    </OverlayTrigger>
                    
                </Form>
                <br></br>

                <Dropdown>
                    <Dropdown.Toggle variant="outline-primary" id="questGiverType">
                    {questGiverType ? questGiverType: 'Choose your Quest Giver Type'}
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