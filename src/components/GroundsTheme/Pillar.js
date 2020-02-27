import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Pillar extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
            value: ""
        }
    }

      close = (event) =>  {
          this.setState({
              showModal: false,
              value: event.target.value
            })
            let pillar = this.state.value
            let newName = document.getElementById('pillarSpace')
            newName.textContent = "Pillar: " + pillar
      }

      //handles the key stoke changes????
      handleChange = (event) => {
        this.setState({
            value: event.target.value
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
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Adventure Type!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Here you will choose your adventure type. We reccomend a Combat pillar for a short campaign, but you can have any type of campaign you choose!</p>

                <div>
                    <Button variant="outline-success" size="lg" block>
                    Combat
                    </Button>
                    <Button variant="outline-warning" size="lg" block>
                    Interaction
                    </Button>
                    <Button variant="outline-danger" size="lg" block>
                    Exploration
                    </Button>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.close} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Pillar;