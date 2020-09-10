import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class Patron extends Component {
    state ={
        showModal: false,
        patronName: "", 
        patronType: ""
    }

    close = (event) =>  {
        this.setState({
            showModal: false,
            patronName: event.target.value
        })
        this.props.setQuestGiver(this.state.patronName, this.state.patronType)
    }


    handleChange = (event) => {
        this.setState({
            patronName: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handlePatronSlect = (eventkey, event) => {
        this.setState({
            patronType: event.target.text
        })
    }

render() {  

    const{patronType}=this.state

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Patron
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create A Quest Giver!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help create your patron.</p>
                    <Form inline>
                        <FormControl type="text" placeholder="Guest Giver Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                        <div style={{paddingRight: "10px"}}>or</div> 

                        <OverlayTrigger overlay={
                        <Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                        <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                        </span>
                        </OverlayTrigger>
                        
                    </Form>
                    <br></br>

                    <Dropdown onSelect={this.handlePatronSlect}>
                        <Dropdown.Toggle variant="outline-primary">
                        {patronType ? patronType: 'Choose your Patron Type'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item>Human</Dropdown.Item>
                        <Dropdown.Item>Elf</Dropdown.Item>
                        <Dropdown.Item>God</Dropdown.Item>
                        <Dropdown.Item>Dwarf</Dropdown.Item>
                        <Dropdown.Item>Wizard</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Patron;