import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, CardGroup, Carousel, Popover} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import NPCCard from "./NPCcard"
import "../../style.css"

class NPCs extends Component {
    state ={
        NPCNum: null,
        NPCData: [],
    }

    handleSlider = (event, value) => {
        let NPCData = []

        for(let i=0; i < value; i++ ) {
            let newObj = {id:i}
            NPCData.push(newObj)
        }

        this.setState({
            NPCNum: value,
            NPCData: NPCData
        })

        this.props.setNPCData("NPCData", NPCData)
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleSave = () => {
        console.log(this.state.NPCData)
        this.setState({
            showModal: !this.state.showModal,
        })
    }


render() {  
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>NPCs
                </Button>
            </div>
            <Modal 
            size="lg" show={this.state.showModal} 
            onHide={this.handleClick}
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Let's get some NPCs added to your campaign.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you pick some NPCs This modal is for NPCs that play a bigger part in your campaign, not necesarily the shopkeeper your characters will buy things from.</p>
                    
                    <br></br>

                    <Slider
                    min={1}
                    max={5}
                    defaultValue={3}
                    className="sliderclass"
                    onChangeCommitted={this.handleSlider}
                    valueLabelDisplay="on"
                    />

                    {this.state.NPCData.length > 0 && (<Carousel className="center" interval={null}>
                        {this.state.NPCData.map((item, index) => 
                            {return <Carousel.Item><NPCCard 
                                // NPCDataObj={this.state.NPCData} 
                                index={index} 
                                key={item.id} 
                                name={item.id}
                                campaign={this.props.campaign}
                                setNPCData={this.props.setNPCData}
                                ></NPCCard></Carousel.Item>}
                        )}
                    </Carousel>)}

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default NPCs;