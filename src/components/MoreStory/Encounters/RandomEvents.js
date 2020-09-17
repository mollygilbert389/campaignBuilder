import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class RandomEvents extends Component {
    state ={
        randomEncounter: false,
        randomEncounterNum: ""
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleBtnClick = (event) => {

        if (event.target.name === "Yes")
        this.setState({
           randomEncounter: true
        }) 
    }

    handleSlider = (event, value) => {
        this.setState({
            randomEncounterNum: value
        })
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Random Encounters
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to have a random encounter?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below to add random enounters to your adventure. If selected use you can use the table privided in your campaign to figure this out later.</p>
                    <br></br>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={this.handleBtnClick}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={this.handleBtnClick}>No</Button>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    {this.state.randomEncounter &&(<div>
                        <Slider
                        min={1}
                        max={10}
                        defaultValue={2}
                        onChangeCommitted={this.handleSlider}
                        valueLabelDisplay="on"
                        />
                    </div>)}


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default RandomEvents;