import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Dropdown, FormControl } from 'react-bootstrap'
import "../style.css"

class Setback extends Component {
    state ={
        showModal: false,
        setback: false,
        bigSetback: false,
        smallSetback: false,
        setbackCatChoice: "",
        setBackTypes: [],
        setbackCategory: [],
        finalSetbackType: "",
        eventName: "",
        trapChoice: "",
        traps: [
            {id: 1, option: "Collapsing Roof",},
            {id: 1, option: "Falling Net",},
            {id: 1, option: "Fire-Breathing Statue",},
            {id: 1, option: "Simple Pit",},
            {id: 1, option: "Hidden Pit",},
            {id: 1, option: "Locking Pit",},
            {id: 1, option: "Spiked Pit",},
            {id: 1, option: "Poison Darts",},
            {id: 1, option: "Poison Needle",},
            {id: 1, option: "Rolling Sphere",},
            {id: 1, option: "Sphere of Annihilation",},
        ],
        worldShakingEvents: [
            {
                id: 1,
                title: "Rise of a Leader or an Era",
                possible: ["Political", "Religious", "Military", "Crime/Underworld", "Art/Culture", "Philosphy/Learning/Magic"]
            },
            {
                id: 2,
                title: "Fall of a leader or an era",
                possible: ["Political", "Religious", "Military", "Crime/Underworld", "Art/Culture", "Philosphy/Learning/Magic"]
            },
            {
                id: 3,
                title: "Cataclysmic Disaster",
                possible: ["Earthquake", "Famine/Drought", "Fire", "Flood", "Plague/Disease", "Rain of Fire (meteors)", "Storm (Hurricane, Tornado, Tsunami)", "Volcanic Eruption", "Bad Magic or Planar Warp", "Divine Judgement"]
            },
            {
                id: 4,
                title: "Assult or Invasion",
                possible: ["Criminal Enterprise", "Monsters or Unique Monsters", "A Planar Threat", "A Past Adversary reawakened, reborn, or resurgent", "A Splinter Faction", "A Savage Tribe", "A Secret Society", "A traitorous Ally"]
            },
            {
                id: 5,
                title: "Extinction or Depletion",
                possible: ["A kind of Animal (insect, bird, fish, or livestock)", "Habitable Land", "Magic or Magic Users", "A Mineral Resource (gems, metals, ores)", "A type of monster (unicorn, manitcore, dragon)", "A people (family line, clan, culture, race)", "A kind of Plant (crop, tree, herb, forest)", "A waterway (river, lake, ocean)"]
            },
            {
                id: 6,
                title: "Rebllion, Revolution, or Overthrow",
                possible: []
            },
            {
                id: 7,
                title: "New Organization",
                possible: ["Crime syndicate/bandit confederacy", "Guild (masons, apothecaries, goldsmiths)", "Magical circle/Society", "Military/Knightly Order", "New Family Dynasty/Tribe/Clan", "Philosophy/Discipline Dedicated to a Principle or Ideal", "Realm (Village, Town, Duchy, Kingdom)", "Religion/Sect/Denomination", "School/University", "Secret Society/Cult/Cabal"]
            },
            {
                id: 8,
                title: "Discovrey, Expansion, Invention",
                possible: ["Ancient Ruin/Lost City of a Legendary Race", "Animal/Monster/Magical Mutation", "Invention/Technology/Magic", "New (or forgotten) God or Planar Entity", "New (or rediscovered) Artifact or Religious Relic", "New Land (Island, Continent, Lost World, Demiplane)", "Otherworldly Object (Planar Portal, Alien Spacecraft)", "People (Race, Tribe, Lost Civilization, Colony)", "Plant (Miracle Herb, Fungal Parasite, Sentint Plant)", "Resource or Wealth (Gold, Gems, Mithral)"]
            },
            {
                id: 9,
                title: "Prediction, Omen, Prophecy",
                possible: []
            },
            {
                id: 10,
                title: "Myth and Legend",
                possible: []
            }, 
        ]

    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    setback = (event) => {
        let choice = event.target.name
        switch (choice) {
            case "Yes":
                this.setState({
                    setback: true
                })
                break;
            case "No":
                this.setState({
                    setback: false,
                    finalSetbackType: "",
                    smallSetback: false,
                    bigSetback: false,
                    setbackCatChoice: "",
                    setBackTypes: [],
                    trapChoice: "",
                    showModal: !this.state.showModal
                })
        } 
    }

    handleSetbackCategorySelect = (keyevent, event) => {
        let setbackCatChoice = event.target.name
        let setBackTypes = this.state.worldShakingEvents.find(event => event.title === setbackCatChoice)

        this.setState({ 
            setbackCatChoice: setbackCatChoice,
            setBackTypes: setBackTypes.possible
        })
    }   

    handleFinalEvent = (keyevent, event) => {
        let choice = event.target.name
        let choiceCat = this.state.setbackCatChoice

        this.setState({ 
            finalSetbackType: choice,
            trapChoice: "",
        })

        const finalChoice = choiceCat + " " + choice

        this.props.setSetBack("setback", finalChoice)
}

    handleChange = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }

    handleSetbackBtn = (event) => {
        let choice = event.target.name
        switch(choice) {
            case "large":
                this.setState({
                    bigSetback: true,
                    smallSetback: false,
                })
                break;
            case "small":
                this.setState({
                    smallSetback: true,
                    bigSetback: false,
                })
                break;
        }
    }

    handleTrapSelect = (keyEvent, event) => {
        const choice = event.target.text
        this.setState({
            trapChoice: choice,
            finalSetbackType: "",
        })

        this.props.setSetBack("setback", choice)
    }

render() {  

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Setback
                </Button>
            </div>
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Uh Oh Setbacks.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>You might want to make the campaign a little more interesting by adding a setback. Would you like to throw a wrench in their plans?</p>

                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" value={true} onClick={this.setback}>Yes</Button>
                        </div>

                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" value={false} onClick={this.setback}>No</Button>
                        </div>
                    </div>

                        {this.state.setback && (
                        
                        <div className="setbackContainer">
                            <div className="setBackItem d-flex flex-column align-items-center"> 
                                <Button onClick={this.handleSetbackBtn} name="large">Large Setback Options</Button>
                                
                                {this.state.bigSetback &&(
                                <div>
                                    <Dropdown className="setBackItemchild" onSelect={this.handleSetbackCategorySelect}>
                                    <Dropdown.Toggle variant="outline-primary">
                                    {this.state.setbackCatChoice ? this.state.setbackCatChoice: 'Choose Your Setback Category'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {this.state.worldShakingEvents.map(drop => { 
                                            return <Dropdown.Item key={drop.id} name={drop.title}>{drop.title}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>

                                {this.state.setBackTypes.length > 0 && (<div className="d-flex flex-column align-items-center">
                                    <Dropdown onSelect={this.handleFinalEvent}>
                                        <Dropdown.Toggle variant="outline-primary">
                                        {this.state.finalSetbackType ? this.state.finalSetbackType: 'Choose your event'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        {this.state.setBackTypes.map(drop => {
                                            return <Dropdown.Item name={drop}> {drop}</Dropdown.Item>
                                        })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    </div>)}
                                </div>)}

                                {this.state.setbackCatChoice && this.state.setBackTypes.length <= 0 &&  (
                                    <div>
                                        <FormControl type="text" placeholder="Name Your Event" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                                    </div>
                                )}
                            </div>
                                
                            <div className="setBackItem d-flex flex-column align-items-center">
                                <Button onClick={this.handleSetbackBtn} name="small">Small Setback Options</Button>
                                
                                {this.state.smallSetback &&(
                                <div>
                                    <Dropdown className="setBackItemchild" onSelect={this.handleTrapSelect}>
                                        <Dropdown.Toggle variant="outline-primary">
                                        {this.state.trapChoice ? this.state.trapChoice: 'Choose Your Trap'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {this.state.traps.map(drop => { 
                                                return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>)}
                            </div>
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

export default Setback;
