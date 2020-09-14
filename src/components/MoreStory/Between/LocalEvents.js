import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Religion extends Component {
    state ={
        showModal: false,
        localEventChoice: [],
        eventCap: false,
        localEventOptions: [
            {id: 1, eventName: "Anniversary of a monarch's reign"},
            {id: 2, eventName: "Anniversary of an important event"},
            {id: 3, eventName: "Arena event"},
            {id: 4, eventName: "Arrival of caravan or ship"},
            {id: 5, eventName: "Arrival of circus"},
            {id: 6, eventName: "Arrival of important NPC"},
            {id: 7, eventName: "Arrival of marching modrons"},
            {id: 8, eventName: "Artistic performance"},
            {id: 9, eventName: "Athletic event"},
            {id: 10, eventName: "Birth of a child"},
            {id: 11, eventName: "Birthday of an important NPC"},
            {id: 12, eventName: "Civic festival"},
            {id: 13, eventName: "Comet apperance"},
            {id: 14, eventName: "Commemoration of a past tragedy"},
            {id: 15, eventName: "Consecration of a new temple"},
            {id: 16, eventName: "Coronation"},
            {id: 17, eventName: "Council meeting"},
            {id: 18, eventName: "Equinox or solstice"},
            {id: 19, eventName: "Execution"},
            {id: 20, eventName: "Fertility festival"},
            {id: 21, eventName: "Full moon"},
            {id: 22, eventName: "Funeral"},
            {id: 23, eventName: "Graduation of cadets or wizards"},
            {id: 24, eventName: "Harvest festival"},
            {id: 25, eventName: "Holy day"},
            {id: 26, eventName: "Investiture of a knight or other noble"},
            {id: 27, eventName: "Lunar eclipse"},
            {id: 28, eventName: "Midsummer festival"},
            {id: 29, eventName: "Midwinter festival"},
            {id: 30, eventName: "Migration of monsters"},
            {id: 31, eventName: "Monarch's ball"},
            {id: 32, eventName: "New moon"},
            {id: 33, eventName: "New year"},
            {id: 34, eventName: "Pardoning of a prisoner"},
            {id: 35, eventName: "Planar conjunction"},
            {id: 36, eventName: "Planetary alignment"},
            {id: 37, eventName: "Priestly investiture"},
            {id: 38, eventName: "Procession of ghosts"},
            {id: 39, eventName: "Rememberance for soliders lost in war"},
            {id: 40, eventName: "Royal address or proclaimation"},
            {id: 41, eventName: "Royal audience day"},
            {id: 42, eventName: "Signing of a treaty"},
            {id: 43, eventName: "Solar eclipse"},
            {id: 44, eventName: "Tournament"},
            {id: 45, eventName: "Trial"},
            {id: 46, eventName: "Violent uprising"},
            {id: 47, eventName: "Wedding or wedding anniversary"},
        ]

    }

    handleSelect = (eventKey, event) => {
        this.setState({
            localEventChoice: event.target.text
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleAddEvent = (event) => {
        const currentChoices = this.state.localEventChoice
        const updatedChoiceList = currentChoices.concat(event.target.name)
        const filteredChoiceList = updatedChoiceList.filter((item, index) => updatedChoiceList.indexOf(item) === index)
        
        if (this.state.localEventChoice.length >= 4) {
            this.setState({
                eventCap: true
            })
        }

        this.setState({
            localEventChoice: filteredChoiceList,
        })
    }

    removeEvent = (event) => {
        let choices = this.state.localEventChoice
        const newChoiceList = choices.filter(eventName => eventName !== event.target.name);

        if (this.state.localEventChoice.length <= 5) {
            this.setState({
                eventCap: false
            })
        }

        this.setState({
            localEventChoice: newChoiceList
        })
    }


render() {  
    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Local Events
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Anything Interesting Happening?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are there any events going on locally that could add a tone to your immediate world.</p>
                    
                    <br></br>

                    <div className="container">
                        <div className="side">
                        {this.state.localEventOptions.map(drop => {
                            return <Button name={drop.eventName} className="eventbtns" onClick={this.handleAddEvent} disabled={this.state.eventCap}> {drop.eventName}</Button>
                            })}
                        </div>
                        <div className="side">
                        {this.state.localEventChoice.map(drop => {
                            return <Button name={drop} className="eventbtns" onClick={this.removeEvent}> {drop}</Button>
                            })}
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Religion;