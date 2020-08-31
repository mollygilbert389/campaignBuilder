import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import "./style.css"

class Rooms extends Component {
    state ={
        showModal: false,
        roomNum: "",
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleActBtn = (event) => {
        this.setState({ 
            roomNum: event.target.name,
            showModal: !this.state.showModal
        }, () => {this.props.setRooms(this.state.roomNum)})
    }

render() {  

    return (
        <div>
            <div className="btns">
                <Button id="" variant="outline-success" size="lg" onClick={this.handleClick}>Rooms
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Name that Room!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>How many rooms are in this dungeon.</p>
                    <p>Since you have picked a short campaign we reccomend a minimum of 3 rooms and a max fo 5 rooms.</p>
                    <div className="roomSpace">
                        <div className="roomBtns">
                            <Button name="3" variant="outline-primary" onClick={this.handleActBtn}>3</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="4" variant="outline-primary" onClick={this.handleActBtn}>4</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="5" variant="outline-primary" onClick={this.handleActBtn}>5</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="6" variant="outline-primary" onClick={this.handleActBtn}>6</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="7" variant="outline-primary" onClick={this.handleActBtn}>7</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="8" variant="outline-primary" onClick={this.handleActBtn}>8</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="9" variant="outline-primary" onClick={this.handleActBtn}>9</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="10" variant="outline-primary" onClick={this.handleActBtn}>10</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="11" variant="outline-primary" onClick={this.handleActBtn}>11</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="12" variant="outline-primary" onClick={this.handleActBtn}>12</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="13" variant="outline-primary" onClick={this.handleActBtn}>13</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="14" variant="outline-primary" onClick={this.handleActBtn}>14</Button>
                        </div>

                        <div className="roomBtns">
                            <Button name="15" variant="outline-primary" onClick={this.handleActBtn}>15</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
}

export default Rooms;