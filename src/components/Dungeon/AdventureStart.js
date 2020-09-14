import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "./style.css"

class AdventureStart extends Component {
    state ={
        meetingSelected: "",
        meetingSelection: [
            {id:1, goal:"While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location."},
            {id:2, goal:"While traveling in the wilderness, the characters notice the entrance to the adventure location."},
            {id:3, goal:"While traveling on the road, the characters are attcked by monsters that flee into the nearby adventure location."},
            {id:4, goal:"The characters find a map on a dead body. In addition, to the map setting up the adventure, the character's villain want's the map."},
            {id:5, goal:"A mysterious item of cruel villain teleports the adventurers to the adventure location."},
            {id:6, goal:"A strange approcahes the chacters in a tavern and urges them toward the adventure location."},
            {id:7, goal:"A town or village needs the adventurers to go to the adventure location."},
            {id:8, goal:"An NPC the characters care about needs them to go to the adventure location."},
            {id:9, goal:"An NPC the characters must obey orders them to go to the adventure location."},
            {id:10, goal:"An NPC the characters respect asks them to go to the adventure location."},
            {id:11, goal:"One night, the characters all dream about entering the adventure location."},
            {id:12, goal:"A ghost appears and terrorizes a village. Research reveals that us can be put to rest only by entering the adveenture location."},
        ],
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleAdventureStart = (event) => {
        this.setState({
            meetingSelected: event.target.text
        })
    }


render() {  
    const style = {
        width: "350px",
        height: "200px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    }
    
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Adventure Start
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Read through the options below and click on to pick it.</p>

                        <Carousel>
                        {this.state.meetingSelection.map(drop => {
                            return <Carousel.Item> <div className="d-block w-100"></div> <Button variant="primary" key={drop.id} style={style} name={drop.goal}>{drop.goal}</Button> </Carousel.Item>
                        })}
                        </Carousel>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default AdventureStart;