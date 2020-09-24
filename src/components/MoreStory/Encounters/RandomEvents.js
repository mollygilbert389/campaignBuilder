import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap'
import Monsters from "../../Dungeon/monster.json"
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class RandomEvents extends Component {
    state ={
        randomEncounter: false,
        randomEncounterNum: "",
        monsterCat: "Any",
        filteredMonsterSelection: "",
        monsterDrop: [],
        monsterItemsByCategory: [],
        finalSelection: ""
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
        this.setState({
            randomEncounterNum: value
        },() => this.props.setRandomEncounterNumber(this.state.randomEncounterNum))
    }

    handleMonsterShow = () => {
        const choice = this.state.monsterCat
        const filteredMonsters = Monsters.filter(item => (item.area.includes(choice)))
        
        const monsterCategories = filteredMonsters.map(item => item.category)
        const filterMonsterCategories = [...new Set(monsterCategories)]

        this.setState({
            monsterDrop: filterMonsterCategories,
        })

    }

    handleSelect = (eventKey, event) => {
        const selection = event.target.text
        console.log(selection)
        const choice = this.state.monsterCat
        const filteredMonsters = Monsters.filter(item => (item.area.includes(choice)))
        console.log(filteredMonsters)


        const monsterNamesByCat = filteredMonsters.filter(item =>  (item.category.includes(selection)))
        console.log(monsterNamesByCat)
        
        this.setState({
            filteredMonsterSelection: selection,
            monsterItemsByCategory: monsterNamesByCat
        })
    }

    handleFinalSelect = (eventKey, event) => {
        this.setState({
            finalSelection: event.target.text
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
                        defaultValue={2}
                        onChangeCommitted={this.handleSlider}
                        valueLabelDisplay="on"
                        />
                    </div>)}

                    <div>
                        <Form inline>
                            <Dropdown onSelect={this.handleSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.filteredMonsterSelection ? this.state.filteredMonsterSelection: 'Choose Your Monsters'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.monsterDrop.map(item => {
                                        return <Dropdown.Item key={item}>{item}</Dropdown.Item> })}       
                                </Dropdown.Menu>
                            </Dropdown>

                            {this.state.filteredMonsterSelection && (<Dropdown onSelect={this.handleFinalSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.finalSelection ? this.state.finalSelection: 'Choose Your Monsters'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.monsterItemsByCategory.map(item => {
                                        return <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>})}       
                                </Dropdown.Menu>
                            </Dropdown>)}
                        </Form>
                    </div>


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