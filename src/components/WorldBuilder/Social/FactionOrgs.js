import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../style.css"

class FactionOrgs extends Component {
    state ={
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


render() {  


    return (
        <div>
            <div>
                Player 1
            </div>
            <div>
                Player 2
            </div>
            <div>
                Player 3
            </div>
        </div>
    );
}
}

export default FactionOrgs;