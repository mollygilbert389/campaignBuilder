import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Sidequests extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            sideQuests: "",
        }
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    sideQuestFunction = (event) => {
        this.setState({
            showModal: !this.state.showModal,
            sideQuests: event.target.name
        }, () => {this.props.setSideQuests(this.state.sideQuests)})
    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Side Quests
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Side Questing</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Side questing is a great way to get your party into get game and get them some money or experience should that need it.</p>
                <p>Since you chose a short campaign you should either have no side quests or have only one optional side quest. Remember in DND campaigns won't always go as planned. It may be good to have a side quest option, but it is not required here.</p>

                <div className="sideQuestBtnSpace">
                <div className="sideQuestBtns">
                <Button name="Yes" variant="outline-success" onClick={this.sideQuestFunction}>Yes</Button>
                </div>

                <div className="sideQuestBtns">
                <Button name="No" variant="outline-danger" onClick={this.sideQuestFunction}>No</Button>
                </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Sidequests;