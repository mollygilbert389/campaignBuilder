import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import CharacterRenownCard from "./ChracterRenownCard"
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class Renown extends Component {
    state ={
        playerInfo: this.props.campaign.playerData
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Renown
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Do your characters have any renown with your factions/organizations?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below select the renown that each character has with each faction (can be none).</p>
                    
                    <br></br>

                    {this.state.playerInfo.length > 0 && (<div className="characterRenownContainer">
                        {this.state.playerInfo.map(item => {
                            return <CharacterRenownCard campaign={this.props.campaign} key={item.id} charName={item.name}></CharacterRenownCard>
                        })}
                    </div>)}

                    {this.state.playerInfo.length < 1 && (<div className="characterRenownContainer">
                        <div>
                            <p>You haven't added charcters to your campaign yet! If you're like to add certain renown to certain characters go back and a some characters in!</p>
                        </div>
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

export default Renown;