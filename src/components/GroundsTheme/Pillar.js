import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"
import { conditionalExpression } from '@babel/types';

class Pillar extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            partyPillar: ""
        }
    }


    handlePillarBtn = (event) =>  {
        let pillarchoice = event.target.name
          this.setState({
            partyPillar: event.target.name,            
            showModal: false,   
            }, () => console.log(this.state.partyPillar)
            )

            let pillarName = document.getElementById('pillarTypeSpace')
            pillarName.textContent = "Pillar: " + pillarchoice
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
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Adventure Type!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Here you will choose your adventure type. We reccomend a Combat pillar for a short campaign, but you can have any type of campaign you choose!</p>

                <div>
                    <Button onClick={this.handlePillarBtn} variant="outline-success" name="Combat" size="lg" block>
                    Combat
                    </Button>
                    <Button onClick={this.handlePillarBtn} variant="outline-warning" name="Interaction" size="lg" block>
                    Interaction
                    </Button>
                    <Button onClick={this.handlePillarBtn} variant="outline-danger" name="Exploration" size="lg" block>
                    Exploration
                    </Button>
                </div>

            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Pillar;