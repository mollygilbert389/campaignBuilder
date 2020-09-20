import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "./style.css"

class Religion extends Component {
    state ={
        gods: "",
        other: false,
    }

    handleReligion = (eventKey, event) => {

        if (event.target.text === "Other") {
            this.setState({
                other: true,
            })
        } else {
            this.setState({
                gods: event.target.text
            }, () => this.props.setReligion(this.state.gods))
        }
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleChange = (event) => {
        this.setState({
            gods: event.target.value
        }, () => this.props.setReligion(this.state.gods))
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Religion
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Gods Oversee the World.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you set up your gods.</p>
                    
                    <br></br>

                    <Dropdown onSelect={this.handleReligion}>
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.gods ? `Religion: ${this.state.gods}`: 'Choose Your Religious Philosophy'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item>Loose Pantheons (Suggested)</Dropdown.Item>
                        <Dropdown.Item>Tight Pantheons</Dropdown.Item>
                        <Dropdown.Item>Mystery Cults</Dropdown.Item>
                        <Dropdown.Item>Monotheism</Dropdown.Item>
                        <Dropdown.Item>Dualism</Dropdown.Item>
                        <Dropdown.Item>Animism</Dropdown.Item>
                        <Dropdown.Item>Other</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <br></br>

                    {this.state.other && (
                    <FormControl type="text" placeholder="Add Religion" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                    )}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Religion;