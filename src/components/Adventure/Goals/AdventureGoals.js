import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class AdventureGoals extends Component {
    state ={
        goals: "",
        pillar: ""
    }

    handleGoalClick = (eventKey, event) => {
        this.setState({
            goals: event.target.text
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handlePillarBtn = (selection) =>  {
        // event.target.text
        this.setState({
        pillar: selection,           
        }, () => {
            // this.props.setPillar(this.state.pillar)
        })
      }


render() {  

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Adventure Goals
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the dropdown below to decicde.</p>
                    
                    <br></br>

                    <p>Here you will choose your adventure type. We reccomend a Combat pillar for a short campaign, but you can have any type of campaign you choose!</p>
                        <div>
                            <Button onClick={() => this.handlePillarBtn("Combat")} variant="outline-success" name="Combat" size="lg" block>
                            Combat
                            </Button>
                            <Button onClick={() => this.handlePillarBtn("Interaction")} variant="outline-warning" name="Interaction" size="lg" block>
                            Interaction
                            </Button>
                            <Button onClick={() => this.handlePillarBtn("Exploration")} variant="outline-danger" name="Exploration" size="lg" block>
                            Exploration
                            </Button>
                        </div>

                    <br></br>

                    <Dropdown onSelect={this.handleGoalClick}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.goals ? this.state.goals: 'Choose Overal Campaign Goal'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item>Loose Pantheons `(Suggested)`</Dropdown.Item>
                        <Dropdown.Item>Tight Pantheons</Dropdown.Item>
                        <Dropdown.Item>Mystery Cults</Dropdown.Item>
                        <Dropdown.Item>Monotheism</Dropdown.Item>
                        <Dropdown.Item>Dualism</Dropdown.Item>
                        <Dropdown.Item>Animism</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default AdventureGoals;