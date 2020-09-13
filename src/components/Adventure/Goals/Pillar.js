import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Pillar extends Component {
    state ={
        pillar: "",
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Pillar
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
                    
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Pillar;
