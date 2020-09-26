import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, CardGroup, Carousel, Popover} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import NPCCard from "./NPCcard"
import "../../style.css"

class NPCs extends Component {
    state ={
        NPCNum: "3",
        NPCData: [],
        nextClicked: false, 

    }

    handleSlider = (event, value) => {
        this.setState({
            NPCNum: value
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
            nextClicked: false,
        })
    }

    handleNextBtn = () => {
        this.setState({
            nextClicked: true, 
        })

        let choice = this.state.NPCNum.toString()
        let newNPCData = []
        console.log(choice)

        switch(choice) {
            case "1":
                newNPCData = [
                    {id: 1, name: ""},
                ]
                this.setState({
                    NPCData: newNPCData
                })
                break;
            case "2":
                newNPCData = [
                    {id: 1, name: ""},
                    {id: 2, name: ""},
                ]
                this.setState({
                    NPCData: newNPCData
                })
                break;
            case "3":
                newNPCData = [
                    {id: 1, name: ""},
                    {id: 2, name: ""},
                    {id: 3, name: ""},
                ]
                this.setState({
                    NPCData: newNPCData
                })
                break;
            case "4":
                newNPCData = [
                    {id: 1, name: ""},
                    {id: 2, name: ""},
                    {id: 3, name: ""},
                    {id: 4, name: ""},
                ]
                this.setState({
                    NPCData: newNPCData
                })
                break;
            case "5":
                newNPCData = [
                    {id: 1, name: ""},
                    {id: 2, name: ""},
                    {id: 3, name: ""},
                    {id: 4, name: ""},
                    {id: 5, name: ""},
                ]
                this.setState({
                    NPCData: newNPCData
                })
                break;
        }
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
                    {!this.state.nextClicked && (<br></br>)}

                    {!this.state.nextClicked && (
                    <Slider
                    min={1}
                    max={5}
                    defaultValue={3}
                    className="sliderclass"
                    onChangeCommitted={this.handleSlider}
                    valueLabelDisplay="on"
                    />)}

                    {!this.state.nextClicked && (
                        <Button onClick={this.handleNextBtn}>Next</Button>
                    )}

                    {this.state.nextClicked && (<div>
                        <Carousel className="center" interval={null}>
                            {this.state.NPCData.map(item => 
                                {return <Carousel.Item><NPCCard key={item.id} name={item.id}></NPCCard></Carousel.Item>}
                            )}
                        </Carousel>
                    </div>)}


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default NPCs;