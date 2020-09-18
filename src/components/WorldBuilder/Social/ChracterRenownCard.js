import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class CharacterRenownCard extends Component {
    state ={
        suggestedTags: this.props.campaign.factionOrgs,
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }


render() { 
    // const{charName}=this.props
    return (
        <div>
            <div className="characterRenownContainer">
                <div className="characterBoxes">
                    <div>
                        <h2>{this.props.charName}</h2>
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
        </div>
    );
}
}

export default CharacterRenownCard;