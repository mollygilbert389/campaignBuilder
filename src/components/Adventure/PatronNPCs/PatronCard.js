import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, CardGroup} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class PatronCard extends Component {
    state ={
        patronGender: "",
        patronName: "",
        patronMannerismChoice:'',
        patronTraitChoice: '',
        patronType: '',
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
        this.setState({
            patronGender: event.target.text
        })
    }

    handleCManner = (eventKey, event) => {
        this.setState({
            patronMannerismChoice: event.target.text
        })
    }

    handleTrait = (eventKey, event) => {
        this.setState({
            patronTraitChoice: event.target.text
        })
    }

    handlePatronSlect = (eventkey, event) => {
        this.setState({
            patronType: event.target.text
        })
    }

render() {  
    return (
        <div>
            <Card className="d-flex flex-column align-items-center villainPatronCard">
                <Card.Img className="NPCimage" variant="top" src="https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg"/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{this.props.name}</Card.Title>
                            <Dropdown onSelect={this.handleGenderSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.patronGender ?  `Gender: ${this.state.patronGender}`: "Choose your Patron's Gender"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Female</Dropdown.Item>
                                    <Dropdown.Item>Male</Dropdown.Item>
                                    <Dropdown.Item>Non Binary</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handlePatronSlect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.patronType ? this.state.patronType: "Choose your Patron's Type"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.patronChoices.map(item => {
                                        return <Dropdown.Item name={item}>{item}</Dropdown.Item>})}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleCManner}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.patronMannerismChoice ? `Mannerism: ${this.state.patronMannerismChoice}`: "Choose your Patron's Mannerism"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.patronMannerisms.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleTrait}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.patronTraitChoice ? `Trait: ${this.state.patronTraitChoice}`: "Choose your Patron's Trait"}
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
    );
}
}

export default PatronCard;