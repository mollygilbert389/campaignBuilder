import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import {Slider} from '@material-ui/core'
import "./style.css"
import SideMonsters from './SideMonsters'


class MonsterCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.suggestMeMonsters = this.suggestMeMonsters.bind(this)
        this.state ={
            showModal: false,
            suggestedMonsterNum:0,
            maxMonsterNum:0, 
            finalMonsterNum:0,
            finalMonsterChoices: [],
            firstQues: true,
            secondQues: false
        }
    }

    suggestMeMonsters() {
        let roomState = this.props.campaign.rooms
        roomState = parseInt(roomState)
        let suggestedMonsterNum = 0
        let maxMonsterNum = 0

        if (roomState <= 5) {
            suggestedMonsterNum = 10
            maxMonsterNum = 20
        } else if (roomState <= 10) {
            suggestedMonsterNum = 6
            maxMonsterNum = 13
        } else if (roomState > 10) {
            suggestedMonsterNum = 4
            maxMonsterNum = 10
        }

        this.setState({
            roomNum: roomState,
            suggestedMonsterNum: suggestedMonsterNum,
            maxMonsterNum: maxMonsterNum
        }, () => {this.props.setMonsterNum(this.state.suggestedMonsterNum)})
    }

    handleClick() {
        this.setState({
            showModal: !this.state.showModal,
        })
        this.suggestMeMonsters()
    }

    handleNext = () => {
        this.setState({
            firstQues: false,
            secondQues: true,
        })
    }

    handleSlider = (event, value) => {
        this.setState({
            finalMonsterNum: value
        }, () => {this.props.setMonsterNum(this.state.finalMonsterNum)})
    }

    handleClose = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

render() {  

    const{campaign}=this.props

    return (
        <div>
            <div className="btns">
                <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Monsters
                </Button>
            </div>

            <Modal show={this.state.showModal} onHide={this.handleClose}>
            {this.state.firstQues && (<div>
                    <Modal.Header closeButtotn>
                        <Modal.Title>Monster Time!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Now it's time to choose some monsters!</p>
                        <p>Since you have chosen {campaign.rooms} rooms we reccomend chosing {this.state.suggestedMonsterNum} total monsters and no more than {this.state.maxMonsterNum}. How many monsters would you like in your dungeon?</p>
                        <br></br>
                        <br></br>

                        <div>
                        <Slider
                        min={4}
                        max={20}
                        defaultValue={this.state.suggestedMonsterNum}
                        valueLabelDisplay="on"
                        onChangeCommitted={this.handleSlider}
                        />
                        </div>

                        <Modal.Footer>
                            <Button variant="outline-success" onClick={this.handleNext}> Next</Button>
                        </Modal.Footer>
                        
                    </Modal.Body>
                </div>)}

                {this.state.secondQues && (<div>
                    <SideMonsters campaign={campaign} onClose={this.handleClose} setMonsters={this.props.setMonsters}>
                    </SideMonsters>
                </div>)}
            </Modal>
        </div>
    );
}
}

export default MonsterCard;