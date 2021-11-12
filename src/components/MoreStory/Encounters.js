import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, Form } from 'react-bootstrap'
import { Slider } from '@material-ui/core'
import "../style.css"

class Encounters extends Component {
    state ={
        encounterEvents: [],
        encounterOptions: [
            "Protect an NPC or Object",
            "Retrieve an object",
            "Run a guantlet",
            "Sneak In",
            "Stop a ritual",
            "Take out a single target",
            "Investiage an area",
        ]
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleSlider = (event, value) => {
        let encounterEvents = []
    
        for (let i=0; i < value; i++) {
            let newObject = {id:i}
            encounterEvents.push(newObject)
        }

        this.setState({
            encounterNum: value,
            encounterEvents: encounterEvents
        })
    }

    handleSelect = (eventKey, event, index) => {
        const selection = event.target.text

        const encounterObject = [...this.state.encounterEvents].map(item => {
            if (item.id===index) {
                return {...item, type:selection}
            } return item
        })

        this.setState({
            encounterEvents: encounterObject
        })
    }

    handleDifficultySelect = (eventKey, event, index) => {
        const selection = event.target.text

        const encounterObject = [...this.state.encounterEvents].map(item => {
            if (item.id===index) {
                return {...item, difficulty:selection}
            } return item
        })

        this.setState({
            encounterEvents: encounterObject
        })
    }

    handleSave = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
        this.props.setEncounters("encounters", this.state.encounterEvents)
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Encounters
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Your adventure should have some encounters to give the players something to do, and help progress the story along.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help you decide some encounters. These will happen organically in your story, and it's up to your players to ultimately decide what to do, but you can help move them along.</p>
                    
                    <br></br>

                        <Slider
                        min={1}
                        max={5}
                        defaultValue={3}
                        onChangeCommitted={this.handleSlider}
                        valueLabelDisplay="on"
                        />
                   
                    {this.state.encounterEvents.length > 0 && (<div>
                        {this.state.encounterEvents.map((space , index)=> {return <div>
                            <Form inline>
                                <Dropdown onSelect={(keyEvent, event) => this.handleSelect(keyEvent, event, index)} name={space.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {this.state.encounterEvents[index].type ? this.state.encounterEvents[index].type : 'Choose an Encounter Goal'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.encounterOptions.map(item => {return <Dropdown.Item name={item}>{item}</Dropdown.Item>})} 
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown onSelect={(keyEvent, event) => this.handleDifficultySelect(keyEvent, event, index)}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {this.state.encounterEvents[index].difficulty ? this.state.encounterEvents[index].difficulty : 'Choose the Difficulty'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Easy</Dropdown.Item>
                                        <Dropdown.Item>Medium</Dropdown.Item>
                                        <Dropdown.Item>Hard</Dropdown.Item>
                                        <Dropdown.Item>Deadly</Dropdown.Item>  
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </div>})}
                    </div>)}


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Encounters;