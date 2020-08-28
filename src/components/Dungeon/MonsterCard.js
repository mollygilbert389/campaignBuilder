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
            finalMonsterNum:0
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
        })
    }

    handleClick() {
        this.setState({
            showModal: !this.state.showModal,
        })

        this.suggestMeMonsters()
    }

    handleFirstClick = () => {
        let firstQues = document.getElementById("firstRoundMonsterQuestions")
        let secondQues = document.getElementById("secondRoundMonsterQuestions")
    
        const show = function (div) {
            div.style.display = 'block'
        }
        const hide = function (div) {
            div.style.display = 'none'
        }
    
        hide(firstQues)
        show(secondQues)
    }

    handleSlider = (event, value) => {
        this.setState({
            finalMonsterNum: value
        }, () => {this.props.setMonsterNum(this.state.finalMonsterNum)})
    }


render() {  

    const{campaign}=this.props

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Monsters
        </Button>
            </div>

        <Modal show={this.state.showModal}>
        <div id="firstRoundMonsterQuestions">
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Monster Time!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Now it's time to choose some monsters!</p>
                <p>Since you have chosen {campaign.rooms} rooms we reccomend chosing {this.state.suggestedMonsterNum} total monsters and no more than {this.state.maxMonsterNum}. How many monsters would you like in your dungeon?</p>
                <br></br>
                <br></br>

                <div id="monsterNum">
                <Slider
                min={4}
                max={20}
                defaultValue={this.state.suggestedMonsterNum}
                valueLabelDisplay="on"
                onChangeCommitted={this.handleSlider}
                />
                </div>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleFirstClick}> Next</Button>
                </Modal.Footer>
                
            </Modal.Body>
            </Modal.Dialog>
            </div>

            <div id="secondRoundMonsterQuestions" style={{display:"none"}}>
                <SideMonsters>

                </SideMonsters>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </div>
        </Modal>
        </div>
    );
}
}

export default MonsterCard;