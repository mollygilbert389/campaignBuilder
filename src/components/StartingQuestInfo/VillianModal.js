import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "./style.css"

class VillianModal extends Component {
    state ={
        showModal: false,
        villianName: "",
        villianType: ""
    }

    close = (event) =>  {
        this.setState({
            showModal: false,
            villianName: event.target.value
        })

        this.props.setVillian(this.state.villianName, this.state.villianType)
    }

    handleChange = (event) => {
    this.setState({
        villianName: event.target.value
    })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
            })
    }

    handleVillainTypeSelect = (eventkey, event) => {
        this.setState({
            villianType: event.target.text
        })
    }

render() {  

    const{campaign}=this.props
    const{villianType}=this.state

    return (
        <div>
            <div className="btns">
                <Button id="villian" variant="outline-success" size="lg" onClick={this.handleClick}>Villian
                </Button>
            </div>

            <Modal show={this.state.showModal} onHide={this.handleClick}>
            <Modal.Header closeButton>
                    <Modal.Title>Let's Create Yor Villian!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to create your villian</p>

                    <Form inline>
                        <FormControl type="text" placeholder="Villian Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                        <div style={{paddingRight: "10px"}}>or</div> 

                        <OverlayTrigger overlay={
                        <Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                        <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                        </span>
                        </OverlayTrigger>

                    </Form>
                    <br></br>

                    <Dropdown onSelect={this.handleVillainTypeSelect}>
                        <Dropdown.Toggle variant="outline-primary">
                        {villianType ? villianType: 'Choose your Villian Type'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item>Human</Dropdown.Item>
                        <Dropdown.Item>Hag</Dropdown.Item>
                        <Dropdown.Item>Abyssal Chicken</Dropdown.Item>
                        <Dropdown.Item>Alcolyte</Dropdown.Item>
                        <Dropdown.Item>Elemental</Dropdown.Item>
                        <Dropdown.Item>Dwarf</Dropdown.Item>
                        <Dropdown.Item>Cult</Dropdown.Item>
                        <Dropdown.Item>Animal</Dropdown.Item>
                        <Dropdown.Item>Banshee</Dropdown.Item>
                        <Dropdown.Item>Ghost</Dropdown.Item>
                        <Dropdown.Item>Zombie</Dropdown.Item>
                        <Dropdown.Item>Assasin</Dropdown.Item>
                        <Dropdown.Item>Giant</Dropdown.Item>
                        <Dropdown.Item>Wizard</Dropdown.Item>
                        <Dropdown.Item>Demogorgan</Dropdown.Item>
                        <Dropdown.Item>Dragon</Dropdown.Item>
                        <Dropdown.Item>God</Dropdown.Item>
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

export default VillianModal;