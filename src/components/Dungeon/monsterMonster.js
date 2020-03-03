import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown} from 'react-bootstrap'
import {Label, Input, Form, FormGroup} from "reactstrap"
import "./style.css"

class Monsters extends Component {

    constructor() {
        super();
        this.state ={
            showModal: false,
        }
    }

    close = () =>  {
        this.setState({
            showModal: false,
        })

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })

        let undeadMonsterList = document.getElementById('undeadChoices')
        // let abberationMonsterList = document.getElementById('abberationChoices')
        // let beastMonsterList = document.getElementById('beastChoices')

        const hide = function (div) {
            div.style.display = 'none'
        }

        hide(undeadMonsterList)
        // hide(abberationMonsterList)
        // hide(beastMonsterList)
    }

    handleMonsterSelect = () => {

        // if (monsterChoice === "Undead") {
        //     show(undeadMonsterList)
        // }

        // if (monsterChoice === "Abberation") {
        //     show(abberationMonsterList)
        // }

        // if (monsterChoice === "Beast") {
        //     show(beastMonsterList)
        // }

    }

render() {  

    return (
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
    );
}
}

export default Monsters;