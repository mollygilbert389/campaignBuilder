import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, CardGroup, Carousel, Popover} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import EvilNPCCard from "./EvilNPCCard"
import "../../style.css"

class EvilNPCs extends Component {
    state ={
        evilNPCNum: null,
        evilNPCData: [],
    }

    handleSlider = (event, value) => {
        let evilNPCData = []

        for(let i=0; i < value; i++ ) {
            let newObj = {id:i}
            evilNPCData.push(newObj)
        }

        this.setState({
            evilNPCNum: value,
            evilNPCData: evilNPCData
        })

        // this.props.setNPCData("evilNPCData", evilNPCData)
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick} disabled>Evil NPCs
                </Button>
            </div>
            <Modal 
            size="lg" show={this.state.showModal} 
            onHide={this.handleClick}
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Let's get some Evil NPCs added to your campaign.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you pick some NPCs This modal is for your lieutenants for your villain that play a bigger part in your campaign.</p>
                    
                    <br></br>

                    <Slider
                    min={1}
                    max={5}
                    defaultValue={3}
                    className="sliderclass"
                    onChangeCommitted={this.handleSlider}
                    valueLabelDisplay="on"
                    />

                    {/* {this.state.evilNPCData.length > 0 && (<Carousel className="center" interval={null}>
                        {this.state.evilNPCData.map((item, index) => 
                            {return <Carousel.Item><EvilNPCCard 
                                index={index} 
                                key={item.id} 
                                name={item.id}
                                // campaign={this.props.campaign}
                                // setNPCData={this.props.setNPCData}
                                ></EvilNPCCard></Carousel.Item>}
                        )}
                    </Carousel>)} */}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default EvilNPCs;