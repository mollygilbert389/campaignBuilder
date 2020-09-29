import React, {Component} from 'react'
import {Card, Button, Modal} from 'react-bootstrap'
import "./style.css"

class NPCStyledCard extends Component {

    state = {
        showModal: false,
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  
    return (
          <div className="cards">
            <Card className="bg-dark text-white skinnyCard">
                <Card.Header className="fixedHeader">
                <Card.Img src={this.props.image}/>
                <Card.ImgOverlay className="bottom">
                    <Card.Title><div>{this.props.name}</div></Card.Title>
                </Card.ImgOverlay>
                </Card.Header>
                <Button className="roundBtn" onClick={this.handleClick}>+</Button>
                <Card.Body>
                    <div>{`Gender: ${this.props.gender}`}</div>
                    <div>{`High Ability: ${this.props.highAbility}`}</div>
                </Card.Body>
            </Card>
            
            <Modal 
            show={this.state.showModal} 
            onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <div>{`Gender: ${this.props.gender}`}</div>
                    <div>{`High Ability: ${this.props.highAbility}`}</div>
                    <div>{`Low Ability: ${this.props.lowAbility}`}</div>
                    <div>{`Appearance: ${this.props.appearance}`}</div>
                    <div>{`Talent: ${this.props.talent}`}</div>
                    <div>{`Manner: ${this.props.manner}`}</div>
                    <div>{`Trait: ${this.props.trait}`}</div>
                    <div>{`Ideal: ${this.props.ideal}`}</div>
                    <div>{`Bond: ${this.props.bond}`}</div>
                    <div>{`Flaw/Secret: ${this.props.flawOrSecret}`}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
    }
}


export default NPCStyledCard;