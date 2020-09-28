import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Form, Dropdown} from 'react-bootstrap'
import {Slider} from '@material-ui/core'
import Monsters from "./monster.json"
import "./style.css"


class MonsterCard extends Component {
    state = {
        showModal: false,
        finalMonsterNum:0,
        monsterData: [],
        monsterCategories: [],
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }


    handleSlider = (event, value) => {
        this.setState({
            finalMonsterNum: value
        })
        
        this.createMonsterForm()
    }

    createMonsterForm = () => {
        const monsterCategories = Monsters.map(item => item.category)
        const filterMonsterCategories = [...new Set(monsterCategories)]
        
        const monsterFormNumber = this.state.finalMonsterNum
        let sideMonsterObject = []
    
        for (let i=0; i < monsterFormNumber; i++) {
            let newObject = {id:i}
            sideMonsterObject.push(newObject)
        }

        this.setState({
            monsterData: sideMonsterObject,
            monsterCategories: filterMonsterCategories
        })
    }

    handleSelect = (eventKey, event, index) => {
        const selection = event.target.text
        const filteredMonsters = Monsters.filter(item => (item.category === selection))

        const newMonsterDrops = [...this.state.monsterData].map(monster => {
            if (monster.id===index) {
                return {...monster, category:selection, monsterTypes:filteredMonsters}
            } return monster
        })

        this.setState({ 
            monsterData: newMonsterDrops,
        })
    }

    handleMonsterTypeSelect = (eventKey, event, index) => {
        const finalSelection = event.target.text
    
        const newMonsterDrops = [...this.state.monsterData].map(monster => {
            if (monster.id===index) {
                return {...monster, monsterName:finalSelection}
            } return monster
        })

        this.setState({ 
            monsterData: newMonsterDrops,
        })
    }

    handleSave = () => {
        const currentDungeonData=this.props.campaign.dungeonData
        const currentMonsters = this.state.monsterData
        const destructedData = {...currentDungeonData, monsterList:currentMonsters}
        
        this.setState({
            showModal: !this.state.showModal,
        })

        this.props.setDungeonData("dungeonData", destructedData)
    }

render() {  

    const{campaign}=this.props

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Monsters
                </Button>
            </div>

            <Modal 
            show={this.state.showModal} 
            onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Monster Time!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Now it's time to choose some monsters!</p>
                    <p>Since you have chosen {campaign.rooms} rooms we reccomend chosing {campaign.dungeonData.suggestedMonsterNum} total monsters and no more than {campaign.dungeonData.maxMonsterNum}. How many monsters would you like in your dungeon?</p>
                    <br></br>
                    <br></br>

                    <div>
                        <Slider
                        min={4}
                        max={20}
                        defaultValue={campaign.dungeonData.suggestedMonsterNum}
                        valueLabelDisplay="on"
                        onChangeCommitted={this.handleSlider}
                        />
                    </div>

                    {this.state.monsterData.map((space, index) =>  {return <div>
                            <Form inline className="mb-2 mr-sm-2 mb-sm-0">
                                
                                <Dropdown onSelect={(keyEvent, event) => this.handleSelect(keyEvent, event, index)} name={space.id}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {this.state.monsterData[index].category ? this.state.monsterData[index].category : 'Monster Categories'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.monsterCategories.map(item => {
                                            return <Dropdown.Item>{item}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>

                                {this.state.monsterData[index].monsterTypes && (<Dropdown onSelect={(keyEvent, event) => this.handleMonsterTypeSelect(keyEvent, event, index)}>
                                    <Dropdown.Toggle variant="outline-primary">
                                        {this.state.monsterData[index].monsterName ? this.state.monsterData[index].monsterName : 'Monster Type'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    {this.state.monsterData[index].monsterTypes.map(item => {
                                            return <Dropdown.Item name={item.name} key={item.id}>{item.name}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>)}
                            </Form>
                        </div>
                    })}

                    <br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleSave}> Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default MonsterCard;