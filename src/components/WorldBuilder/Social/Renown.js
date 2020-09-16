import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class Renown extends Component {
    state ={
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


render() {  


    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Renown
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Do your characters have any renown with your factions/organizations?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below select the renown that each character has with each faction (can be none).</p>
                    
                    <br></br>

                    <div className="characterRenownContainer">
                        <div className="characterBoxes">
                            <div>
                                Character 1
                            </div>
                            {this.state.suggestedTags.map(item => {
                                return <div>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                        onChange={this.handleChange} 
                                        name={item}
                                        value={item}
                                        color="primary"/>}
                                        label={item}
                                        />
                                    </div>})}
                        </div>

                        <div className="characterBoxes">
                            <div>
                                Character 2
                            </div>
                            {this.state.suggestedTags.map(item => {
                                return <div>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                        onChange={this.handleChange} 
                                        name={item}
                                        value={item}
                                        color="primary"/>}
                                        label={item}
                                        />
                                    </div>})}
                        </div>

                        <div className="characterBoxes">
                            <div>
                                Character 3
                            </div>
                            {this.state.suggestedTags.map(item => {
                                return <div>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                        onChange={this.handleChange} 
                                        name={item}
                                        value={item}
                                        color="primary"/>}
                                        label={item}
                                        />
                                    </div>})}
                        </div>
                    </div>


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Renown;