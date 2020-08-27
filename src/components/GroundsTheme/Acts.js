import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Theme extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            acts: "",
        }
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleActBtn = (event) => {
        this.setState({
            showModal: !this.state.showModal,
            acts: event.target.name
        }, () => {this.props.setActs(this.state.acts)})
    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button variant="outline-success" size="lg" onClick={this.handleClick}>Acts
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Deciding on Acts.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Here were will decide how many acts this campaign should be. Like a play a campaing should have at least three acts. A party meeting, a dungeon exploration, and a final battle or acheivement of the end goal.</p>
                <p>Since you chose short campaign we reccomend you have no less than 3 and no more than 5 acts. </p>

                <div className="actBtnSpace">
                <div className="actBtns">
                <Button name="3" variant="outline-primary" onClick={this.handleActBtn}>3</Button>
                </div>

                <div className="actBtns">
                <Button name="4" variant="outline-primary" onClick={this.handleActBtn}>4</Button>
                </div>

                <div className="actBtns">
                <Button name="5" variant="outline-primary" onClick={this.handleActBtn}>5</Button>
                </div>
                </div>
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Theme;