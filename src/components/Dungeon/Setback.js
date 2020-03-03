import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Setback extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            setback: ""
        }
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    setback = (event) => {
        let setbackSpace = document.getElementById('setbackSpace')
        setbackSpace.textContent = ""

        let setbackOption = event.target.name
        this.setState({
            showModal: !this.state.showModal,
            setback: setbackOption
        })

        setbackSpace.append("Setback: " + setbackOption)
    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Setback
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Uh Oh Setbacks.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>You might want to make the campaign a little more interesting by adding a setback. Would you like to throw a wrench in their plans?</p>
                <p>Since you chose a short campaign this may not be in your best interest.</p>

                <div className="sideQuestBtnSpace">
                <div className="sideQuestBtns">
                <Button name="Yes" variant="outline-success" onClick={this.setback}>Yes</Button>
                </div>

                <div className="sideQuestBtns">
                <Button name="No" variant="outline-danger" onClick={this.setback}>No</Button>
                </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Setback;