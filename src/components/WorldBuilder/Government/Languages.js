import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, ButtonGroup, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class Languages extends Component {
    state ={
        value: "",
        suggestedTags: [
            "Celestial",
            "Common",
            "Draconic",
            "Druidic",
            "Dwarvish",
            "Elvish",
            "Infernal",
        ]
    }

    handleRemove = (event) => {
        let removedItem = event.target.name
        let currentTags = this.state.suggestedTags
        const removedTag = currentTags.filter(item => item !== removedItem)
        this.setState({
            suggestedTags: removedTag
        }, () => this.props.setLanguages(this.state.suggestedTags))
        this.props.setLanguageShow("languageShow", true)
    }

    handleAddLanguage = (event) => {
        this.setState({
            suggestedTags: this.state.suggestedTags.concat(this.state.value),
            value: '',
        }, () => this.props.setLanguages(this.state.suggestedTags))
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    onKeyDown = (event) => {
        if (event.key === "Enter") {
            this.handleAddLanguage();
          }
    }

render() {  
    const{other} = this.state
    return (
        <div className="d-flex flex-column align-items-center">
            <br></br>
            <p>We have a few languages suggestions here. Feel free to add and remove as many or as little as you want.</p>

            <div className="tagsArea centeredItems">
            {this.state.suggestedTags.map(item => {
                return <ButtonGroup className="factionButtons"><Button name={item}>{item}</Button><Button name={item} onClick={this.handleRemove}>X</Button></ButtonGroup>
            })}
                
                <div className="inputAndBtn factionButtons">
                    <input className="factionInput" placeholder="Add Faction or Organization Here" type="text" value={this.state.value} onChange={this.handleInputChange} onKeyUp={(event) => this.onKeyDown(event)}></input>
                    <Button size="sm" variant="outline-success" onClick={this.handleAddLanguage}>Submit</Button>
                </div>
            </div>
        </div>
    )}}

export default Languages;