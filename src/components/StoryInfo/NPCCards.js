import React, { Component } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
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
                </Card.ImgOverlay>
                </Card.Header>
                <Button className="roundBtn" onClick={this.handleClick}>+</Button>
                <Card.Body>
                    {this.props.name && (<div>{`Name: ${this.props.name}`}</div>)}
                    {this.props.gender && (<div>{`Gender: ${this.props.gender}`}</div>)}
                    {this.props.highAbility &&(<div>{`High Ability: ${this.props.highAbility}`}</div>)}
                </Card.Body>
            </Card>
            
            <Modal 
            show={this.state.showModal} 
            onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    {this.props.gender && (<div>{`Gender: ${this.props.gender}`}</div>)}
                    {this.props.highAbility &&(<div>{`High Ability: ${this.props.highAbility}`}</div>)}
                    {this.props.lowAbility && (<div>{`Low Ability: ${this.props.lowAbility}`}</div>)}
                    {this.props.appearance && (<div>{`Appearance: ${this.props.appearance}`}</div>)}
                    {this.props.talent && (<div>{`Talent: ${this.props.talent}`}</div>)}
                    {this.props.manner && (<div>{`Manner: ${this.props.manner}`}</div>)}
                    {this.props.trait && (<div>{`Trait: ${this.props.trait}`}</div>)}
                    {this.props.ideal && (<div>{`Ideal: ${this.props.ideal}`}</div>)}
                    {this.props.bond && (<div>{`Bond: ${this.props.bond}`}</div>)}
                    {this.props.flawOrSecret && (<div>{`Flaw/Secret: ${this.props.flawOrSecret}`}</div>)}
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