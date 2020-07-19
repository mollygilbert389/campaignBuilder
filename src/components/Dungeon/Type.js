import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown, FormControl } from 'react-bootstrap'
import "./style.css"

class Type extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
        }
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
        <Button id="" variant="outline-success" size="lg" onClick={this.handleClick}>Type
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="">
            <Modal.Header>
                <Modal.Title>Let's Pick a Dungeon Type.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Let's start by designing a dungeon. Below are some questions to consider.</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="">
                    Dungeon Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item> Mansion</Dropdown.Item>
                    <Dropdown.Item> Cave</Dropdown.Item>
                    <Dropdown.Item> Lost City</Dropdown.Item>
                    <Dropdown.Item> Cellar</Dropdown.Item>
                    <Dropdown.Item> Tomb</Dropdown.Item>
                    <Dropdown.Item> Temple</Dropdown.Item>
                    <Dropdown.Item> Prison</Dropdown.Item>
                    <Dropdown.Item> Vault</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default Type;