import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import "./style.css"

class Rooms extends Component {
    state ={
        showModal: false,
        roomNum: "",
        roomOptions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleActBtn = (event) => {
        const choice = event.target.name
        const currentDungeonData=this.props.campaign.dungeonData
        const destructedData = {...currentDungeonData, rooms:choice}
        
        this.setState({ 
            roomNum: event.target.name,
            showModal: !this.state.showModal
        },() => this.suggestMeMonsters())

       
        this.props.setDungeonData("dungeonData", destructedData)
    }

    suggestMeMonsters() {
        let roomNum = this.state.roomNum
        roomNum = parseInt(roomNum)

        let suggestedMonsterNum=0
        let maxMonsterNum=0

        if (roomNum <= 5) {
            suggestedMonsterNum = 10
            maxMonsterNum = 20
        } else if (roomNum <= 10) {
            suggestedMonsterNum = 6
            maxMonsterNum = 13
        } else if (roomNum > 10) {
            suggestedMonsterNum = 4
            maxMonsterNum = 10
        }

        const currentDungeonData=this.props.campaign.dungeonData
        const destructedData = {...currentDungeonData, suggestedMonsterNum:suggestedMonsterNum, maxMonsterNum: maxMonsterNum}
        this.props.setDungeonData("dungeonData", destructedData)
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
                    <p>This is your custom campaign, have as many rooms as you'd like!</p>
                    <div className="roomSpace">
                        {this.state.roomOptions.map(item => {return <div className="roomBtns">
                            <Button name={item} variant="outline-primary" onClick={this.handleActBtn}>{item}</Button>
                        </div>}
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
}

export default Rooms;