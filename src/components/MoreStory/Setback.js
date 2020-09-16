import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, FormControl} from 'react-bootstrap'
import "./style.css"

class Setback extends Component {
    state ={
        showModal: false,
        setback: false,
        setbackCatChoice: "",
        setBackTypes: [],
        setbackCategory: [],
        finalSetbackType: "",
        eventName: "",
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
        this.setState({
            // showModal: !this.state.showModal,
            setback: event.target.value
        } 
        // () => {this.props.setSetBacks(this.state.setback)}
        )
    }

    handleSetbackCategorySelect = (keyevent, event) => {
        let setbackCatChoice = event.target.name
        let setBackTypes = this.state.worldShakingEvents.find(event => event.title === setbackCatChoice)

        this.setState({ 
        ...this.state,
        setbackCatChoice: setbackCatChoice,
        setBackTypes: setBackTypes.possible
    })}

    handleFinalEvent = (keyevent, event) => {
        this.setState({ 
        ...this.state,
        finalSetbackType: event.target.name,
    })}

    handleChange = (event) => {
        this.setState({
            eventName: event.target.value
        })

    }

render() {  

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Setback
                </Button>
            </div>
            <Modal show={this.state.showModal} onHide={this.handleClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Uh Oh Setbacks.</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>You might want to make the campaign a little more interesting by adding a setback. Would you like to throw a wrench in their plans?</p>
                    <p>Since you chose a short campaign this may not be in your best interest.</p>

                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" value={true} onClick={this.setback}>Yes</Button>
                        </div>

                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" value={false} onClick={this.setback}>No</Button>
                        </div>
                    </div>

                    {this.state.setback && (<div>
                        <Dropdown onSelect={this.handleSetbackCategorySelect}>
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.setbackCatChoice ? this.state.setbackCatChoice: 'Choose Your World-Shaking Category'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.worldShakingEvents.map(drop => { 
                                    return <Dropdown.Item key={drop.id} name={drop.title}>{drop.title}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        <br></br>

                    {this.state.setBackTypes.length > 0 && (<div>
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

                    {this.state.setbackCatChoice && this.state.setBackTypes.length <= 0 &&  (
                        <div>
                            <FormControl type="text" placeholder="Name Your Event" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                        </div>)}


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
