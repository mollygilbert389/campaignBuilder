import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl} from 'react-bootstrap'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class CharacterRenownCard extends Component {

    // handleChange = (event) => {
    //     console.log(event.target.checked)
    //     console.log(event.target.name)
    //     this.setState({
    //         [event.target.name]: event.target.checked 
    //     });
    // }

render() { 
    return (
        <div>
            <div className="characterRenownContainer">
                <div className="characterBoxes">
                    <div>
                        <h3>{this.props.charName}</h3>
                    </div>
                    {this.props.campaign.factionOrgs.map(item => {
                        return <div>
                                <FormControlLabel
                                control={
                                <Checkbox
                                onChange={this.props.onChange} 
                                name={item.name}
                                value={item.name}
                                color="primary"/>}
                                label={item.name}
                                />
                         </div>})}
                </div>
            </div>
        </div>
    );
}
}

export default CharacterRenownCard;