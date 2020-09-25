import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Monsters from "../../Dungeon/monster.json"
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class RandomEvents extends Component {
    state ={
        randomEncounter: false,
        randomEncounterNum: null,
        monsterCat: this.props.campaign.travelPointChoices,
        filteredMonsterSelection: "",
        monsterDrop: [],
        monsterItemsByCategory: [],
        finalSelection: "",
        possibleMonsters: [],
        randomEncounterMonsters: []
    }

    componentDidMount() {
        this.handleMonsterShow()
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleBtnClick = (event) => {
        if (event.target.name === "Yes")
        this.setState({
           randomEncounter: true
        }) 
    }

    handleSlider = (event, value) => {
        let randomMonsterObject = []
    
        for (let i=0; i < value; i++) {
            let newObject = {id:i}
            randomMonsterObject.push(newObject)
        }

        this.setState({
            randomEncounterNum: value,
            randomEncounterMonsters: randomMonsterObject
        },() => this.props.setRandomEncounterNumber(this.state.randomEncounterNum))
    }

    handleMonsterShow = () => {
        const choices = this.state.monsterCat
        const newFilteredMonsters = Monsters.filter(monster => {
            for(let i=0; i < monster.area.length; i++) {
                for(let j=0; j < choices.length; j++) {
                    if (monster.area.includes(choices[j])) {
                        return true
                    }
                    return false
                }

            }
        })

        const monsterCategories = newFilteredMonsters.map(item => item.category)
        const filterMonsterCategories = [...new Set(monsterCategories)]

        this.setState({
            monsterDrop: filterMonsterCategories,
            possibleMonsters: newFilteredMonsters,
        })
    }

    handleSelect = (eventKey, event, index) => {
        const selection = event.target.text
        const updatedMonsterList = this.state.possibleMonsters
        const filteredMonsters = updatedMonsterList.filter(item => (item.category.includes(selection)))

        const newMonsterDrops = [...this.state.randomEncounterMonsters].map(monster => {
            if (monster.id===index) {
                return {...monster, category:selection, filteredMonsterList:filteredMonsters}
            } return monster
        })

        this.setState({
            filteredMonsterSelection: selection,
            randomEncounterMonsters: newMonsterDrops
        })
    }

    handleFinalSelect = (eventKey, event, index) => {
        const selection = event.target.text 
        const newMonsterDrops = [...this.state.randomEncounterMonsters].map(monster => {
            if (monster.id===index) {
                return {...monster, finalSelection:selection}
            } return monster
        })

        this.setState({
            randomEncounterMonsters: newMonsterDrops
        })
    }


render() {  


    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Random Encounters
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to have a random encounter?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Use the buttons below to add random enounters to your adventure. If selected use you can use the table privided in your campaign to figure this out later.</p>
                    <br></br>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={this.handleBtnClick}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={this.handleBtnClick}>No</Button>
                        </div>
                    </div>

                    <br></br>
                    <br></br>

                    {this.state.randomEncounter &&(<div>
                        <Slider
                        min={1}
                        max={10}
                        defaultValue={5}
                        onChangeCommitted={this.handleSlider}
                        valueLabelDisplay="on"
                        />

                        {this.state.monsterCat.length <= 0 && (<div>
                            <p>You haven't selected enough data about your world to plan this. If you want to plan some random encounters go back to The Physical and pick some areas of interest</p>
                        </div>)}
                    </div>)}



                    {this.state.monsterCat.length > 0 && (<div>
                        {this.state.randomEncounterMonsters.map((space , index)=> {return <div>
                            <Form inline>
                                <Dropdown onSelect={(keyEvent, event) => this.handleSelect(keyEvent, event, index)} name={space.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                    {this.state.randomEncounterMonsters[index].category ? this.state.randomEncounterMonsters[index].category : 'Choose Your Monsters'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.monsterDrop.map(item => {
                                            return <Dropdown.Item key={item}>{item}</Dropdown.Item> })}       
                                    </Dropdown.Menu>
                                </Dropdown>

                                {this.state.randomEncounterMonsters[index].category && (<Dropdown onSelect={(keyEvent, event) => this.handleFinalSelect(keyEvent, event, index)}>
                                    <Dropdown.Toggle variant="outline-primary">
                                    {this.state.randomEncounterMonsters[index].finalSelection ? this.state.randomEncounterMonsters[index].finalSelection : 'Choose Your Monsters'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.randomEncounterMonsters[index].filteredMonsterList.map(item => {
                                            return <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>})}       
                                    </Dropdown.Menu>
                                </Dropdown>)}
                            </Form>
                        </div>})}
                    </div>)}


                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default RandomEvents;