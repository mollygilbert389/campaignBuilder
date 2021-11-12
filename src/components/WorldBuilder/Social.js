import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Renown, FactionOrgs } from './components';
import { Button } from 'react-bootstrap';
import "../style.css";

class Social extends Component {

    state = {
        showModal: false
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
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>The Social
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's create some organizations that might exist in this world.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below to make some create those organizations and decide if your characters will have familiartiry with them.</p>
                    
                    <br></br>

                    <div className="btnspace">
                        <FactionOrgs
                        setFactionOrgs={this.props.setFactionOrgs}
                        setFactionShow={this.props.setFactionShow}
                        ></FactionOrgs>
                        <Renown
                        setPlayers={this.props.setPlayers}
                        campaign={this.props.campaign}
                        ></Renown>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Social;