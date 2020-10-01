import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import CharacterRenownCard from "./ChracterRenownCard"
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class Renown extends Component {
    state ={
        playerInfo: this.props.campaign.playerData,
        playerOrgs: []
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleChange = (event, index) => {
        let checked = event.target.checked
        let name = event.target.name
        
        if(checked) {
            const playerOrgs = [...this.state.playerOrgs, {name:name, playerNumId:index}]
            
            this.setState({
                playerOrgs: playerOrgs
            })
        } else if (checked === false) {
                const allPlayersFactions = this.state.playerOrgs.filter(item => (item.playerNumId !== index))
                const playersFactions = this.state.playerOrgs.filter(item => (item.playerNumId === index))
                const itemsByPlayerToKeep = playersFactions.filter(item => (item.name !== name))
                const finalPlayerFactions = [...allPlayersFactions, ...itemsByPlayerToKeep]

                this.setState({
                    playerOrgs: finalPlayerFactions
                })
        }
    }

    handleSave = () => {
        console.log(this.props.campaign.playerData)
        console.log(this.props.campaign.factionOrgs)
        console.log(this.state.playerOrgs)

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
                        {this.state.playerInfo.map((item, index) => {
                            return <div>
                                <div>{item.name}</div>
                            {this.props.campaign.factionOrgs.map(item => {
                                return <div>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                        onChange={(event) => this.handleChange(event, index)} 
                                        name={item.name}
                                        value={item.name}
                                        color="primary"/>}
                                        label={item.name}
                                        />
                                 </div>
                                 })}
                            </div>
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