import React, {Component} from 'react'
import {Button, Form, Dropdown} from 'react-bootstrap'
import PartyThreeForm from './PartyForms/PartyThreeForm'
import PartyFourForm from './PartyForms/PartyFourForm'
import PartyFiveForm from './PartyForms/PartyFiveForm'
import PartySixForm from './PartyForms/PartySixForm'
import PartySevenForm from './PartyForms/PartySevenForm'
import PartyEightForm from './PartyForms/PartyEightForm'
import "./style.css"

class PartyInfo extends Component {


handleClick = (e) => {
    let num = e.target.id
    let threeForm = document.getElementById("threeForm")
    let fourForm = document.getElementById("fourForm")
    let fiveForm = document.getElementById("fiveForm")
    let sixForm = document.getElementById("sixForm")
    let sevenForm = document.getElementById("sevenForm")
    let eightForm = document.getElementById("eightForm")

    const show = function (div) {
        div.style.display = 'block'
    }

    const hide = function (div) {
        div.style.display = 'none'
    }

    if (num === "3") {         
        show(threeForm)
        hide(fourForm)
        hide(fiveForm)
        hide(sixForm)
        hide(sevenForm)
        hide(eightForm)
    }

     if (num === "4") {
        hide(threeForm)
        show(fourForm)
        hide(fiveForm)
        hide(sixForm)
        hide(sevenForm)
        hide(eightForm)
    }
     if (num === "5") {
        hide(threeForm)
        hide(fourForm)
        show(fiveForm)
        hide(sixForm)
        hide(sevenForm)
        hide(eightForm)
    }
     if (num === "6") {
        hide(threeForm)
        hide(fourForm)
        hide(fiveForm)
        show(sixForm)
        hide(sevenForm)
        hide(eightForm)
    }

    if (num === "7") {
        hide(threeForm)
        hide(fourForm)
        hide(fiveForm)
        hide(sixForm)
        show(sevenForm)
        hide(eightForm)
    }

    if (num === "8") {
        hide(threeForm)
        hide(fourForm)
        hide(fiveForm)
        hide(sixForm)
        hide(sevenForm)
        show(eightForm)
    }

}


render() {  

    return (
        <div>
            <p>Click on the number of party members you plan to have. Must be at least 3 (exluding the DM) and the max is 8.</p>
            
            <div className="partyBtnSpace">
                <div className="prtyBtns">
                <Button id="3" variant="outline-primary" onClick={this.handleClick}>3</Button>
                </div>

                <div className="prtyBtns">
                <Button id="4" variant="outline-primary" onClick={this.handleClick}>4</Button>
                </div>

                <div className="prtyBtns">
                <Button id="5" variant="outline-primary" onClick={this.handleClick}>5</Button>
                </div>

                <div className="prtyBtns">
                <Button id="6" variant="outline-primary" onClick={this.handleClick}>6</Button>
                </div>

                <div className="prtyBtns">
                <Button id="7" variant="outline-primary" onClick={this.handleClick}>7</Button>
                </div>

                <div className="prtyBtns">
                <Button id="8" variant="outline-primary" onClick={this.handleClick}>8</Button>
                </div>
            </div>

            <div id="partySpace">
                <div id="threeForm" name="forms" style={{display:"none"}}>
                    <PartyThreeForm></PartyThreeForm>
                </div>

                <div id="fourForm" name="forms" style={{display:"none"}}>
                    <PartyFourForm></PartyFourForm>
                </div>

                <div id="fiveForm" name="forms" style={{display:"none"}}>
                    <PartyFiveForm></PartyFiveForm>
                </div>

                <div id="sixForm" name="forms" style={{display:"none"}}>
                    <PartySixForm></PartySixForm>
                </div>

                <div id="sevenForm" name="forms" style={{display:"none"}}>
                    <PartySevenForm></PartySevenForm>
                </div>

                <div id="eightForm" name="forms" style={{display:"none"}}>
                    <PartyEightForm></PartyEightForm>
                </div>

            </div>

        </div>
    );
}
}

export default PartyInfo;