import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import {Button, Dropdown} from 'react-bootstrap'
import "./style.css"

class AdventureStart extends Component {
    state ={
        meetingSelected: "",
        dungeonTypeLocationSelected: true, 
        nondungeonTypeLocationSelected: false,
        selectedPlace: "",
        meetingSelection: [
            {id:1, goal:"While traveling in the wilderness, the characters fall into a sinkhole that opens beneath their feet, dropping them into the adventure location."},
            {id:2, goal:"While traveling in the wilderness, the characters notice the entrance to the adventure location."},
            {id:3, goal:"While traveling on the road, the characters are attcked by monsters that flee into the nearby adventure location."},
            {id:4, goal:"The characters find a map on a dead body. In addition, to the map setting up the adventure, the character's villain want's the map."},
            {id:5, goal:"A mysterious item of cruel villain teleports the adventurers to the adventure location."},
            {id:6, goal:"A strange approcahes the chacters in a tavern and urges them toward the adventure location."},
            {id:7, goal:"A town or village needs the adventurers to go to the adventure location."},
            {id:8, goal:"An NPC the characters care about needs them to go to the adventure location."},
            {id:9, goal:"An NPC the characters must obey orders them to go to the adventure location."},
            {id:10, goal:"An NPC the characters respect asks them to go to the adventure location."},
            {id:11, goal:"One night, the characters all dream about entering the adventure location."},
            {id:12, goal:"A ghost appears and terrorizes a village. Research reveals that us can be put to rest only by entering the adveenture location."},
        ],
        dungeonTypeLocation: [
            {id: 1, option: "A building or city"},
            {id: 2, option: "Catacombs or sewers beneath the city"},
            {id: 3, option: "Beneath a farmhouse"},
            {id: 4, option: "Beneath a graveyard"},
            {id: 5, option: "Beneath a ruined castle"},
            {id: 6, option: "Beneath a ruined city"},
            {id: 7, option: "Beneath a temple"},
            {id: 8, option: "In a chasm"},
            {id: 9, option: "In a cliff face"},
            {id: 10, option: "In a desert"},
            {id: 11, option: "In a forest"},
            {id: 12, option: "In a glacier"},
            {id: 13, option: "In a gorge"},
            {id: 14, option: "In a jungle"},
            {id: 15, option: "In a mountain pass"},
            {id: 16, option: "In a swamp"},
            {id: 17, option: "Beneath or on top of a mesa"},
            {id: 18, option: "In sea caves"},
            {id: 19, option: "In several connected mesas"},
            {id: 20, option: "On a mountain peak"},
            {id: 21, option: "On a promontory"},
            {id: 22, option: "On an island"},
            {id: 23, option: "Underwater"},
        ], 
        nondungeonTypeLocation: [
            {id: 1, option: "Amoung the branches of a large tree"},
            {id: 2, option: "Around a geyser"},
            {id: 3, option: "Behind a waterfall"},
            {id: 4, option: "Buried in an avalanche"},
            {id: 5, option: "Buried in a sandstorm"},
            {id: 6, option: "Buried in volcanic ash"},
            {id: 7, option: "Castle or structure sunken in a swamp"},
            {id: 8, option: "Castle or structure at the bottom of a sinkhole"},
            {id: 9, option: "Floating on the sea"},
            {id: 10, option: "In a meteorite"},
            {id: 11, option: "On a demiplane or in a pcket dimension"},
            {id: 12, option: "In an area devastated by a magical catastrophe"},
            {id: 13, option: "On a cloud"},
            {id: 14, option: "In the feywild"},
            {id: 15, option: "In the shadowfell"},
            {id: 16, option: "On an island in an underground sea"},
            {id: 17, option: "In a volcano"},
            {id: 18, option: "On the back of a Gargantuan living creature"},
            {id: 19, option: "Sealed inside a magical dome of force"},
        ]
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
            nondungeonTypeLocationSelected: false,
            dungeonTypeLocationSelected: false,
        })
    }

    handleAdventureStart = (event) => {
        this.setState({
            meetingSelected: event.target.text
        })
    }

    handleDungeonClick = (event) => {
        let choice = event.target.name
        switch(choice) {
            case "dungeonLocatios":
                this.setState({
                    dungeonTypeLocationSelected: false,
                    nondungeonTypeLocationSelected: false,
                    selectedPlace: "",
                })
                break;
            case "nondungeonLocatios":
                this.setState({
                    nondungeonTypeLocationSelected: true,
                    dungeonTypeLocationSelected: true,
                    selectedPlace: "",
                })
                break;
            default:
                return;
        }
    }

    handleFinalEvent = (eventKey, event) => {
        const choice = event.target.text
        const currentDungeonData=this.props.campaign.dungeonData
        const destructedData = {...currentDungeonData, dungeonLocation:choice}

        this.setState({
            selectedPlace: event.target.text
        })

        this.props.setDungeonData("dungeonData", destructedData)
    }

    handleAdventureStartDetail = (event) => {
        const choice = event.target.name
        const currentDungeonData=this.props.campaign.dungeonData
        const destructedData = {...currentDungeonData, dungeonDetail:choice}

        this.props.setDungeonData("dungeonData", destructedData)
    }


render() {  
    const style = {
        width: "350px",
        height: "200px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    }
    
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Dungeon Start
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's figure out some dungeon details.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>First let's figure out where your dungeon is. Then let's pick how your characters find themselves there.</p>

                    <div>
                            <Button className="giveMeSpace" onClick={this.handleDungeonClick} name={"dungeonLocatios"}>Dungeon Locations</Button>
                            <Button className="giveMeSpace" onClick={this.handleDungeonClick} name={"nondungeonLocatios"}>Exotic Loactions</Button>
                        </div>

                        {!this.state.dungeonTypeLocationSelected && (
                        <div className="giveMeSpace">
                            <Dropdown onSelect={this.handleFinalEvent}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.selectedPlace ? this.state.selectedPlace: 'Choose your Dungeon Location'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                {this.state.dungeonTypeLocation.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        )}
                        
                        {this.state.nondungeonTypeLocationSelected && (
                        <div className="giveMeSpace">
                            <Dropdown onSelect={this.handleFinalEvent}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.selectedPlace ? this.state.selectedPlace: 'Choose your Exotic Location'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                {this.state.nondungeonTypeLocation.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        )}

                        <Carousel interval={null}>
                        {this.state.meetingSelection.map(drop => {
                            return <Carousel.Item> <div className="d-block w-100"></div> <Button variant="primary" onClick={this.handleAdventureStartDetail} key={drop.id} style={style} name={drop.goal}>{drop.goal}</Button> </Carousel.Item>
                        })}
                        </Carousel>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.handleClick} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default AdventureStart;