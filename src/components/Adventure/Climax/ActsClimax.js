import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "../style.css"

class Acts extends Component {
    state ={
        showModal: false,
        acts: "",
        climax: ""
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleActBtn = (event) => {
        this.setState({
            acts: event.target.name
        }, () => {this.props.setActs(this.state.acts)})
    }

    handleClimax = (eventkey, event) => {
        this.setState({
            climax: event.target.text
        })
    }

render() {  

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Acts
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                    <Modal.Header closeButton>
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

                        <p>Let's also plan your end goal.</p>

                        <Dropdown onSelect={this.handleClimax}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.climax ? this.state.climax: 'Choose how your story will end.'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Loose Pantheons</Dropdown.Item>
                                <Dropdown.Item>Tight Pantheons</Dropdown.Item>
                                <Dropdown.Item>Mystery Cults</Dropdown.Item>
                                <Dropdown.Item>Monotheism</Dropdown.Item>
                                <Dropdown.Item>Dualism</Dropdown.Item>
                                <Dropdown.Item>Animism</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClick}>Save</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Acts;