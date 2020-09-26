import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, CardGroup, Popover} from 'react-bootstrap'
import CharacterRenownCard from "../../WorldBuilder/Social/ChracterRenownCard"
// import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class PatronCard extends Component {
    state ={
        patronData: {},
        show: false,
        imageLink: "",
        setImageLink: "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg",
        isDisabled: true,
        patronMannerisms: [
            {id: 1, option: "Prone to singing, whistling, or humming quietly" },
            {id: 2, option: "Speaks in rhyme or some other particular way" },
            {id: 3, option: "Particularly low or high voice" },
            {id: 4, option: "Slurs words, lisps, or stutters" },
            {id: 5, option: "Enunciateas overly clearly" },
            {id: 6, option: "Speaks loudly" },
            {id: 7, option: "Whispers" },
            {id: 8, option: "Uses flowery speech or long words" },
            {id: 9, option: "Frequently uses the wrong word" },
            {id: 10, option: "Uses colorful oaths and exclaimations" },
            {id: 11, option: "Makes constant jokes or puns" },
            {id: 12, option: "Prone to predictions of doom" },
            {id: 13, option: "Fidgets" },
            {id: 14, option: "Squints" },
            {id: 15, option: "Stares into the distance" },
            {id: 16, option: "Chews something" },
            {id: 17, option: "Paces" },
            {id: 18, option: "Taps fingers" },
            {id: 19, option: "Bites Fingernails" },
            {id: 20, option: "Twirls hair or tugs beard"},
        ],
        patronInteractionTraits: [
            {id: 1, option: "Argumentative" },
            {id: 2, option: "Arrogant" },
            {id: 3, option: "Blustering" },
            {id: 4, option: "Rude" },
            {id: 5, option: "Cautious" },
            {id: 6, option: "Friendly" },
            {id: 7, option: "Honest" },
            {id: 8, option: "Hot Tempered" },
            {id: 9, option: "Irritable" },
            {id: 10, option: "Ponderous" },
            {id: 11, option: "Quiet" },
            {id: 12, option: "Suspicious" },
            {id: 12, option: "Beautiful" },
            {id: 12, option: "Humorous" },
            {id: 12, option: "Generous" },
        ], 
        patronChoices: [
            "Retired Adventurer",
            "Local Ruler",
            "Military Officer",
            "Temple Official",
            "Sage",
            "Respected Elder",
            "Deity or Celestial",
            "Mysterious Fey",
            "Old Friend",
            "Former Teacher",
            "Parent or Family Member",
            "Desprate Commoner",
            "Embattled Merchant",
            "Villain posing as a patron",
            "Something else",
        ]
    }

    handleGenderSelect = (eventKey, event) => {
        const selection = event.target.text
        
        this.setState({
            patronData: {...this.state.patronData, gender:selection}
        })
    }

    handleManner = (eventKey, event) => {
        const selection = event.target.text

        this.setState({
            patronData: {...this.state.patronData, manner:selection},
        })
    }

    handleTrait = (eventKey, event) => {
        const selection = event.target.text
        this.setState({
            patronData: {...this.state.patronData, trait:selection},
        })
    }

    handlePatronSlect = (eventkey, event) => {
        const selection = event.target.text
        this.setState({
            patronData: {...this.state.patronData, type:selection},
        })
    }

    handleImageLink = (event) => {
        this.setState({
            imageLink: event.target.value,
        })
    }

    handleImageSubmit = () => {
        const image = this.state.imageLink.trim()

        if (image === "") {
            this.setState({
                setImageLink: "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg",
            })
        } else {
            this.setState({
                setImageLink: image,
            })
        }
        this.refs.overlay.hide();
    }

    

render() {  
    
    return (
        <div className="patronContainer">
            <div>
                <Card className="d-flex flex-column align-items-center villainPatronCard"
                enforceFocus={false}
                >
                    <div>
                        <OverlayTrigger 
                            trigger="click"
                            ref="overlay"
                            placement="top"
                            overlay={
                            <Popover className="makeItBigger">
                                <Popover.Title as="h3">Add Your Image!</Popover.Title>
                                <Popover.Content>
                                    <div className="centerMe">
                                        <FormControl type="text" placeholder="Image Link" className="mr-sm-2" value={this.state.imageLink} onChange={this.handleImageLink}/>
                                        <Button onClick={this.handleImageSubmit} className="imageSubmit">Submit</Button>
                                    </div>
                                </Popover.Content>
                            </Popover>
                            }
                            >
                            <Card.Img className="NPCimage" variant="top" src={this.state.setImageLink}/> 
                        </OverlayTrigger>
                    </div>
                    
                    
                    <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title>{this.props.name}</Card.Title>
                        <Dropdown onSelect={this.handleGenderSelect} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.patronData.gender ?  `Gender: ${this.state.patronData.gender}`: "Choose your Patron's Gender"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Female</Dropdown.Item>
                                <Dropdown.Item>Male</Dropdown.Item>
                                <Dropdown.Item>Non Binary</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={this.handlePatronSlect} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.patronData.type ? `Type: ${this.state.patronData.type}` : "Choose your Patron's Type"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.patronChoices.map(item => {
                                    return <Dropdown.Item name={item}>{item}</Dropdown.Item>})}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={this.handleManner} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.patronData.manner ? `Mannerism: ${this.state.patronData.manner}`: "Choose your Patron's Mannerism"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.patronMannerisms.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown onSelect={this.handleTrait} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                                {this.state.patronData.trait ? `Trait: ${this.state.patronData.trait }`: "Choose your Patron's Trait"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.patronInteractionTraits.map(drop => {
                                    return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </div>

            <div>
                <CharacterRenownCard 
                    campaign={this.props.campaign} 
                    charName={this.props.name}>
                </CharacterRenownCard>
            </div>

        </div>
    );
}
}

export default PatronCard;