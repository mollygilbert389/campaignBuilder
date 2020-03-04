import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown} from 'react-bootstrap'
import {Label, Input, Form, FormGroup} from "reactstrap"
import AberrationDrop from "./monsterDrops/AberrationDrop"
import BeastDrop from "./monsterDrops/BeastDrop"
import CelestialDrop from "./monsterDrops/CelestialDrop"
import ConstructDrop from "./monsterDrops/ConstructDrop"
import DragonDrop from "./monsterDrops/DragonDrop"
import ElementalDrop from "./monsterDrops/ElementalDrop"
import FeyDrop from "./monsterDrops/FeyDrop"
import FiendDrop from "./monsterDrops/FiendDrop"
import GiantDrop from "./monsterDrops/GiantDrop"
import HumanoidDrop from "./monsterDrops/HumaniodDrop"
import MonstrosityDrop from "./monsterDrops/MonstrosityDrop"
import OozeDrop from "./monsterDrops/OozeDrop"
import PlantDrop from "./monsterDrops/PlantDrop"
import UndeadDrop from "./monsterDrops/UndeadDrop"
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
    }

    handleMonsterSelect = (event) => {
        
        const show = function (div) {
            div.style.display = 'block'
        }

        const hide = function (div) {
            div.style.display = 'none'
        }

        let abberationMonsterList = document.getElementById("abberationChoices")
        let beastMonsterList = document.getElementById("beastChoices")
        let celestialMonsterList = document.getElementById("celestialChoices")
        let constructMonsterList = document.getElementById("constructChoices")
        let dragonMonsterList = document.getElementById('dragonChoices')
        let elementalMonsterList = document.getElementById("elementalChoices")
        let feyMonsterList = document.getElementById("feyChoices")
        let fiendMonsterList = document.getElementById('fiendChoices')
        let giantMonsterList = document.getElementById("giantChoices")
        let humanoidMonsterList = document.getElementById("humanoidChoices")
        let monstrosityMonsterList = document.getElementById('monstrosityChoices')
        let oozeMonsterList = document.getElementById("oozeChoices")
        let plantMonsterList = document.getElementById("plantChoices")
        let undeadMonsterList = document.getElementById('undeadChoices')
        
        let monsterChoice = event.target.name

        hide(abberationMonsterList)
        hide(beastMonsterList)
        hide(celestialMonsterList)
        hide(constructMonsterList)
        hide(dragonMonsterList)
        hide(elementalMonsterList)
        hide(feyMonsterList)
        hide(fiendMonsterList)
        hide(giantMonsterList)
        hide(humanoidMonsterList)
        hide(monstrosityMonsterList)
        hide(oozeMonsterList)
        hide(plantMonsterList)
        hide(undeadMonsterList)

        if (monsterChoice === "Abberation") {
            show(abberationMonsterList)
        }

        if (monsterChoice === "Beast") {
            show(beastMonsterList)
        }
        if (monsterChoice === "Celestial") {
            show(celestialMonsterList)
        }

        if (monsterChoice === "Construct") {
            show(constructMonsterList)
        }

        if (monsterChoice === "Dragon") {
            show(dragonMonsterList)
        }
        if (monsterChoice === "Elemental") {
            show(elementalMonsterList)
        }

        if (monsterChoice === "Fey") {
            show(feyMonsterList)
        }

        if (monsterChoice === "Fiend") {
            show(fiendMonsterList)
        }
        if (monsterChoice === "Giant") {
            show(giantMonsterList)
        }

        if (monsterChoice === "Humanoid") {
            show(humanoidMonsterList)
        }

        if (monsterChoice === "Monstrosity") {
            show(monstrosityMonsterList)
        }
        if (monsterChoice === "Ooze") {
            show(oozeMonsterList)
        }

        if (monsterChoice === "Plant") {
            show(plantMonsterList)
        }

        if (monsterChoice === "Undead") {
            show(undeadMonsterList)
        }

    }

render() {  

    return (
        <div>
        <div className="btns">
        <Button id="questGiver" variant="outline-success" size="lg" onClick={this.handleClick}>Monsters
        </Button>
            </div>
        <Modal show={this.state.showModal}>
        <Modal.Dialog id="villianbtn">
            <Modal.Header>
                <Modal.Title>Monster Monster</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Now that we have a good idea of rooms and dungeon let's throw some monsters into the mix. Your monsters should be varying in difficulty and type.</p>
                <p>Since you chose a short campaign and you currenty have selected five rooms. You should select four different tyoes of monster below.</p>

                <div className="partyFormSpace">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary" id="monsterChoices">
                                Monster Category Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="mainMonsterMenu">
                            <Dropdown.Item name="Undead" onClick={this.handleMonsterSelect}>Undead</Dropdown.Item>
                            <Dropdown.Item name="Abberation" onClick={this.handleMonsterSelect}>Aberration</Dropdown.Item>
                            <Dropdown.Item name="Beast" onClick={this.handleMonsterSelect}>Beast</Dropdown.Item>
                            <Dropdown.Item name="Celestial" onClick={this.handleMonsterSelect}>Celestial</Dropdown.Item>
                            <Dropdown.Item name="Construct" onClick={this.handleMonsterSelect}>Construct</Dropdown.Item>
                            <Dropdown.Item name="Dragon" onClick={this.handleMonsterSelect}>Dragon</Dropdown.Item>
                            <Dropdown.Item name="Elemental" onClick={this.handleMonsterSelect}>Elemental</Dropdown.Item>
                            <Dropdown.Item name="Fey" onClick={this.handleMonsterSelect}>Fey</Dropdown.Item>
                            <Dropdown.Item name="Fiend" onClick={this.handleMonsterSelect}>Fiend</Dropdown.Item>
                            <Dropdown.Item name="Giant" onClick={this.handleMonsterSelect}>Giant</Dropdown.Item>
                            <Dropdown.Item name="Humanoid" onClick={this.handleMonsterSelect}>Humaniod</Dropdown.Item>
                            <Dropdown.Item name="Monstrosity" onClick={this.handleMonsterSelect}>Monstrosity</Dropdown.Item>
                            <Dropdown.Item name="Ooze" onClick={this.handleMonsterSelect}>Ooze</Dropdown.Item>
                            <Dropdown.Item name="Plant" onClick={this.handleMonsterSelect}>Plant</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="dropDownLists">
                        <div id="abberationChoices" className="monsterChoice" style={{display:"none"}}>
                            <AberrationDrop></AberrationDrop>
                        </div>

                        <div id="beastChoices" className="monsterChoice" style={{display:"none"}}>
                            <BeastDrop></BeastDrop>
                        </div>

                        <div id="celestialChoices" className="monsterChoice" style={{display:"none"}}>
                            <CelestialDrop></CelestialDrop>
                        </div>

                        <div id="constructChoices" className="monsterChoice" style={{display:"none"}}>
                            <ConstructDrop></ConstructDrop>
                        </div>

                        <div id="dragonChoices" className="monsterChoice" style={{display:"none"}}>
                            <DragonDrop></DragonDrop>
                        </div>

                        <div id="elementalChoices" className="monsterChoice" style={{display:"none"}}>
                            <ElementalDrop></ElementalDrop>
                        </div>

                        <div id="feyChoices" className="monsterChoice" style={{display:"none"}}>
                            <FeyDrop></FeyDrop>
                        </div>

                        <div id="fiendChoices" className="monsterChoice" style={{display:"none"}}>
                            <FiendDrop></FiendDrop>
                        </div>

                        <div id="giantChoices" className="monsterChoice" style={{display:"none"}}>
                            <GiantDrop></GiantDrop>
                        </div>

                        <div id="humanoidChoices" className="monsterChoice" style={{display:"none"}}>
                            <HumanoidDrop></HumanoidDrop>
                        </div>

                        <div id="monstrosityChoices" className="monsterChoice" style={{display:"none"}}>
                            <MonstrosityDrop></MonstrosityDrop>
                        </div>

                        <div id="oozeChoices" className="monsterChoice" style={{display:"none"}}>
                            <OozeDrop></OozeDrop>
                        </div>

                        <div id="plantChoices" className="monsterChoice" style={{display:"none"}}>
                            <PlantDrop></PlantDrop>
                        </div>

                       <div id="undeadChoices" className="monsterChoice" style={{display:"none"}}>
                            <UndeadDrop></UndeadDrop>
                        </div>
                        </div>

                        </FormGroup>
                    </Form>
                </div>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={this.close} >Save</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </Modal>
        </div>
    );
}
}

export default Monsters;