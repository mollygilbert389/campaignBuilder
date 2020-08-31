import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import "./style.css"

class Pillar extends Component {
    state ={
        showModal: false,
        pillar: ""
    }

    handlePillarBtn = (selection) =>  {
        this.setState({
        pillar: selection,          
        showModal: false,   
        }, () => {
            this.props.setPillar(this.state.pillar)
        })
      }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  
    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Pillar
                </Button>
            </div>

            <Modal show={this.state.showModal} onHide={this.handleClick}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adventure Type!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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
                    </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Pillar;