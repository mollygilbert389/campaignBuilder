import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, ButtonGroup, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class FactionOrgs extends Component {
    state ={
        value: "",
        suggestedTags: [
            "Harpers",
            "Order of the Guantlet",
            "Emerald Enclave",
            "Lord's Alliance",
            "Zhentarim",
        ]

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleRemove = (event) => {
        let removedItem = event.target.name
        let currentTags = this.state.suggestedTags
        const removedFaction = currentTags.filter(item => item !== removedItem)
        this.setState({
            suggestedTags: removedFaction
        })
    }

    handleAddFaction = (event) => {
        this.setState({
            suggestedTags: this.state.suggestedTags.concat(this.state.value),
            value: '',
        })
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    onKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addFaction();
          }
    }

    handleSave = () => {
        this.setState({
            showModal: !this.state.showModal,
            // suggestedTags: this.state.suggestedTags
        }, () => this.props.setFactionOrgs(this.state.suggestedTags))
    }


render() {  
    const{other} = this.state
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Factions and Organizations
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick} >
                <Modal.Header closeButton>
                    <Modal.Title>Let's add some organizations to your world.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>We have a few factions and organizations suggestions. Feel free to add and remove as many or as little as you want.</p>

                    <br></br>

                    <div className="tagsArea centeredItems">
                    {this.state.suggestedTags.map(item => {
                        return <ButtonGroup className="factionButtons"><Button name={item}>{item}</Button><Button name={item} onClick={this.handleRemove}>X</Button></ButtonGroup>
                    })}
                        
                        <div className="inputAndBtn factionButtons">
                            <input className="factionInput" placeholder="Add Faction or Organization Here" type="text" value={this.state.value} onChange={this.handleInputChange} onKeyUp={(event) => this.onKeyDown(event)}></input>
                            <Button size="sm" variant="outline-success" onClick={this.handleAddFaction}>Submit</Button>
                        </div>
                    </div>
                   

                </Modal.Body>

                <Modal.Footer>
                <Button variant="outline-success" onClick={this.handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )}}

export default FactionOrgs;