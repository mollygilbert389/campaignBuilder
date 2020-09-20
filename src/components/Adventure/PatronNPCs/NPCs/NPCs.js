import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, CardGroup, Carousel} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import NPCCard from "./NPCcard"
import "../../style.css"

class NPCs extends Component {
    state ={
        NPCNum: "3",
        NPCData: [],
        nextClicked: false, 
        NPCAppearance: [
            {id: 1, option: "Distinctive Jewelry: earrings, necklace, circlet, braclets"},
            {id: 2, option: "Piercings"},
            {id: 3, option: "Flamboyent or outlandish clothes"},
            {id: 4, option: "Formal, clean clothes"},
            {id: 5, option: "Ragged, dirty clothes"},
            {id: 6, option: "Pronounced scar"},
            {id: 7, option: "Missing teeth"},
            {id: 8, option: "Missing fingers"},
            {id: 9, option: "Unusual eye color"},
            {id: 10, option: "Tattoos"},
            {id: 11, option: "Birthmark"},
            {id: 12, option: "Unusual skin color"},
            {id: 13, option: "Bald"},
            {id: 14, option: "Braided beard or hair"},
            {id: 15, option: "Unusual hair color"},
            {id: 16, option: "Nervous eye twitch"},
            {id: 17, option: "Distinctive nose"},
            {id: 18, option: "Distinctive posture"},
            {id: 19, option: "Exceptionally beautiful"},
            {id: 20, option: "Exceptionally ugly"},
        ]
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
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
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