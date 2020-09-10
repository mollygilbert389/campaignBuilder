import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import "./style.css"

class DiceRoller extends Component {
    state ={
        rolledNum: null
    }

    handleRoll = () => {
        const roll20 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        roll20.sort(function() {
            return .5 - Math.random();
        })

        roll20.sort(function() {
            return .5 - Math.random();
        })

        let rolledNum = roll20.pop()

        this.setState({
            rolledNum: rolledNum
        })
    }


render() {  

    return (
        <div>
            <div className=" d-flex flex-column align-items-center diceBox">
                <div>
                    <img alt="DC 20" src="https://ih1.redbubble.net/image.470427841.1065/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" width="200px" hieght="200px"></img>
                </div>
                <br></br>
                <Button onClick={this.handleRoll}>Roll Dice</Button>
            </div>
        </div>
    );
}
}

export default DiceRoller;