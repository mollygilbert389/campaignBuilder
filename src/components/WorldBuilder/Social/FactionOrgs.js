import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class FactionOrgs extends Component {
    state ={
        other:false,
        factionOrgs: []
    }

    handleFactionOrgs = (eventKey, event) => {
        this.setState({
            factionOrgs: event.target.text
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleCheckBoxChange = (event) => {

        if (event.target.text = "Other")
        this.setState({
            other: true
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
    }


render() {  
    const{other} = this.state
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Factions and Organizations
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's add some organizations to your world.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some check boxes to help you add organizations to your world.</p>

                    <br></br>

                    {/* <Slider
                    min={1}
                    max={10}
                    defaultValue={5}
                    onChangeCommitted={this.handleSlider}
                    valueLabelDisplay="on"
                    /> */}

                <FormGroup>
                    <FormControlLabel
                    control={
                    <Checkbox 
                    // checked={equipment} 
                    onChange={this.handleCheckBoxChange} 
                    name="harpers"
                    value="Harpers" 
                    color="primary"/>}
                    label="Harpers"
                    />

                    <FormControlLabel
                    control={
                    <Checkbox 
                    // checked={magicItem} 
                    onChange={this.handleCheckBoxChange} 
                    name="orderOfTheGauntlet"
                    value="Order of The Gauntlet" 
                    color="primary"/>}
                    label="Order of the Guantlet"
                    />

                    <FormControlLabel
                    control={
                    <Checkbox 
                    // checked={gems} 
                    onChange={this.handleCheckBoxChange} 
                    name="emeraldEnclave"
                    value="Emerald Enclave" 
                    color="primary"/>}
                    label="Emerald Enclave"
                    />

                    <FormControlLabel
                    control={
                    <Checkbox 
                    // checked={tradeGoods} 
                    onChange={this.handleCheckBoxChange} 
                    name="lordsAlliance" 
                    value="Lord's Alliance"
                    color="primary"/>}
                    label="Lord's Alliance"
                    />

                    <FormControlLabel
                    control={
                    <Checkbox 
                    // checked={money} 
                    onChange={this.handleCheckBoxChange} 
                    name="zhentarim" 
                    value="Zhentarim"
                    color="primary"/>}
                    label="Zhentarim"
                    />

                    <FormControlLabel
                    control={
                    <Checkbox 
                    onChange={this.handleCheckBoxChange} 
                    name="other" 
                    value="Other"
                    color="primary"/>}
                    label="Other"
                    />

                    {other &&  (
                        <div>
                            <FormControl type="text" placeholder="Other" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                        </div>)}

                </FormGroup>

                </Modal.Body>

                <Modal.Footer>
                <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}}

export default FactionOrgs;