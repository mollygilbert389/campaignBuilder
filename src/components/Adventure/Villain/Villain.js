import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class VillainModal extends Component {
    state ={
        showModal: false,
        villainName: "",
        villainType: ""
    }

    close = (event) =>  {
        this.setState({
            showModal: false,
            villainName: event.target.value
        })

        this.props.setvillain(this.state.villainName, this.state.villainType)
    }

    handleChange = (event) => {
    this.setState({
        villainName: event.target.value
    })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
            })
    }

    handleVillainTypeSelect = (eventkey, event) => {
        this.setState({
            villainType: event.target.text
        })
    }

render() {  

    const{campaign}=this.props
    const{villainType}=this.state

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Villain
                </Button>
            </div>

            <Modal show={this.state.showModal} onHide={this.handleClick}>
            <Modal.Header closeButton>
                    <Modal.Title>Let's Create Yor villain!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to create your villain</p>

                    <Form inline>
                        <FormControl type="text" placeholder="villain Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
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
                        {villainType ? villainType: 'Choose your Adventure Villain'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Beast or monstrosity with no particular agenda</Dropdown.Item>
                            <Dropdown.Item>Abberation bent on corruption or desruction</Dropdown.Item>
                            <Dropdown.Item>Dragon bent on domination and plunder</Dropdown.Item>
                            <Dropdown.Item>Giant bent on plunder</Dropdown.Item>
                            <Dropdown.Item>Undead with any agenda</Dropdown.Item>
                            <Dropdown.Item>Fey with a mysterious goal</Dropdown.Item>
                            <Dropdown.Item>Hummanoid cultist</Dropdown.Item>
                            <Dropdown.Item>Hummanoid conqueror</Dropdown.Item>
                            <Dropdown.Item>Hummanoid seeking revenge</Dropdown.Item>
                            <Dropdown.Item>Hummanoid schemer seeking to rule</Dropdown.Item>
                            <Dropdown.Item>Hummanoid criminal mastermind</Dropdown.Item>
                            <Dropdown.Item>Hummanoid raider or ravager</Dropdown.Item>
                            <Dropdown.Item>Hummanoid under a curse</Dropdown.Item>
                            <Dropdown.Item>Misguided hummanoid zealot</Dropdown.Item>
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

export default VillainModal;