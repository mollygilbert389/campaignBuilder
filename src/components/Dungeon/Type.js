import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown} from 'react-bootstrap'
import "./style.css"

class Type extends Component {
    state = {
        showModal: false,
        dungeonType: ""
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleSelect = (eventKey , event) => {
        this.setState({
            dungeonType: event.target.name
        })
        this.props.setDungeonType(event.target.name)
    }

render() {  

    const{dungeonType} = this.state 

    return (
        <div>
            <div className="btns">
                <Button id="" variant="outline-success" size="lg" onClick={this.handleClick}>Type
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Pick a Dungeon Type.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Let's start by designing a dungeon. Below are some questions to consider.</p>
                    <Dropdown onSelect={this.handleSelect}>
                        <Dropdown.Toggle variant="outline-primary">
                        { dungeonType ? dungeonType: 'Dungeon Type'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item name="Mansion"> Mansion</Dropdown.Item>
                        <Dropdown.Item name="Cave"> Cave</Dropdown.Item>
                        <Dropdown.Item name="Lost City"> Lost City</Dropdown.Item>
                        <Dropdown.Item name="Cellar"> Cellar</Dropdown.Item>
                        <Dropdown.Item name="tomb"> Tomb</Dropdown.Item>
                        <Dropdown.Item name="Temple"> Temple</Dropdown.Item>
                        <Dropdown.Item name="Prison"> Prison</Dropdown.Item>
                        <Dropdown.Item name="Vault"> Vault</Dropdown.Item>
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

export default Type;