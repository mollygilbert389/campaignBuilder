import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import Monsters from "./monster.json"
import {Button, Dropdown, Form} from 'react-bootstrap'

class SideMonsters extends Component {
    state = {
        showModal: false,
        finalMonsterChoices: [],
        monsterData: [],

        monsterChoice: '',
        monsterTypes: {},
        finalMonsterType: '',
        finalMonsterChoiceArray: [],
        monsterCategories: [],
    }

    createMonsterForm = () => {
        const monsterCategories = Monsters.map(item => item.category)
        const filterMonsterCategories = [...new Set(monsterCategories)]
        console.log(filterMonsterCategories)
        
        const monsterFormNumber = this.props.campaign.dungeonMonsterNum 
        let sideMonsterObject = []
    
        for (let i=0; i < monsterFormNumber; i++) {
            let newObject = {id:i}
            sideMonsterObject.push(newObject)
        }

        console.log(sideMonsterObject)

        this.setState({
            monsterData: sideMonsterObject,
            monsterCategories: filterMonsterCategories
        })
    }

    handleMonsterCategorySelect = (eventKey, event) => {
        let monsterChoice = event.target.text
        let monsterTypes = Monsters.find(monster => monster.category === monsterChoice)

        this.setState({ 
            ...this.state,
            monsterChoice: monsterChoice,
            monsterTypes: monsterTypes
        })
    }

    handleMonsterTypeSelect = (eventKey, event) => {
        const newSelection = event.target.text

        this.setState({ 
            ...this.state,
            finalMonsterType: newSelection,
        })
    }

    // saveMonster = (newSelection) => {
    //     let newMonsterArray = [...this.state.finalMonsterChoices]
    //     newMonsterArray = newMonsterArray.concat(newSelection)

    //     this.setState({ 
    //         ...this.state,
    //         finalMonsterChoices: newMonsterArray,
    //     }, () => this.props.setMonsters(this.state.finalMonsterChoices))
    // }

render() {  

    return (
        <div>
            <Modal.Header>
                <Modal.Title>Monster Monster</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Now that we have a good idea of rooms and dungeon let's throw some monsters into the mix. Your monsters should be varying in difficulty and type. Pick a few monster below, and we'll generate the rest for you.</p>



                

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={this.props.onClose} >Save</Button>
            </Modal.Footer>
        </div>
    );
}
}

export default SideMonsters;