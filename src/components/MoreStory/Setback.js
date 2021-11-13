import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, FormControl } from 'react-bootstrap';
import "./style.css";

const Setback = ({ setReduxSetback }) => {
    const [showModal, setShowModal] = useState(false);
    const [setback, setSetback] = useState(false);
    const [bigSetback, setBigSetback] = useState(false);
    const [smallSetback, setSmallSetback] = useState(false);
    const [setbackCatChoice, setSetbackCatChoice] = useState("");
    const [setbackTypes, setSetbackTypes] = useState([]);
    const [finalSetbackType, setFinalSetbackType] = useState("");
    const [eventName, setEventName] = useState("");
    const [trapChoice, setTrapChoice] = useState("");
    const traps = [
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
    ];
    const worldShakingEvents = [
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
    ];

    const setbackFunc = (event) => {
        let choice = event.target.name;
        switch (choice) {
            case "Yes":
                setSetback(true);
                break;
            case "No":
                setSetback(false);
                setFinalSetbackType("");
                setSmallSetback(false);
                setBigSetback(false);
                setbackCatChoice("");
                setSetbackTypes([]);
                setTrapChoice("");
                setShowModal(!showModal);
                break;
            default: 
                setSetback(false);
                setFinalSetbackType("");
                setSmallSetback(false);
                setBigSetback(false);
                setbackCatChoice("");
                setSetbackTypes([]);
                setTrapChoice("");
                setShowModal(!showModal);
                break;
        } 
    }

    const handleSetbackCategorySelect = (keyevent, event) => {
        let setbackCatChoice = event.target.name;
        let setbackTypes = worldShakingEvents.find(event => event.title === setbackCatChoice);
        setSetbackCatChoice(setbackCatChoice);
        setSetbackTypes(setbackTypes.possible)
    };

    const  handleFinalEvent = (keyevent, event) => {
        let choice = event.target.name;
        let choiceCat = setbackCatChoice;
        setFinalSetbackType(choice);
        setTrapChoice("");
        const finalChoice = choiceCat + " " + choice;
        setReduxSetback("setback", finalChoice);
    }

    const handleSetbackBtn = (event) => {
        let choice = event.target.name;
        switch(choice) {
            case "large":
                setBigSetback(true);
                setSmallSetback(false);
                break;
            case "small":
                setBigSetback(false);
                setSmallSetback(true);
                break;
            default:  
                setBigSetback(false);
                setSmallSetback(false);
                break;
        };
    };

    const handleTrapSelect = (keyEvent, event) => {
        const choice = event.target.text;
        setTrapChoice(choice);
        setFinalSetbackType("");
        setReduxSetback("setback", choice)
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Setback</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Uh Oh Setbacks.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You might want to make the campaign a little more interesting by adding a setback. 
                        Would you like to throw a wrench in their plans?
                    </p>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" value={true} onClick={setbackFunc}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" value={false} onClick={setbackFunc}>No</Button>
                        </div>
                    </div>
                        {setback && (
                            <div className="setbackContainer">
                                <div className="setBackItem d-flex flex-column align-items-center"> 
                                    <Button onClick={handleSetbackBtn} name="large">Large Setback Options</Button>
                                    {bigSetback && (
                                        <div>
                                            <Dropdown className="setBackItemchild" onSelect={handleSetbackCategorySelect}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {setbackCatChoice ? setbackCatChoice: 'Choose Your Setback Category'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {worldShakingEvents.map(drop => { 
                                                    return <Dropdown.Item key={drop.id} name={drop.title}>{drop.title}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {setbackTypes.length > 0 && (
                                            <div className="d-flex flex-column align-items-center">
                                                <Dropdown onSelect={handleFinalEvent}>
                                                    <Dropdown.Toggle variant="outline-primary">
                                                        {finalSetbackType ? finalSetbackType: 'Choose your event'}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                    {setbackTypes.map(drop => {
                                                        return <Dropdown.Item name={drop}> {drop}</Dropdown.Item>
                                                    })}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            )}
                                        </div>
                                    )}
                                    {setbackCatChoice && setbackTypes.length <= 0 &&  (
                                        <div>
                                            <FormControl type="text" placeholder="Name Your Event" className="mr-sm-2" value={eventName || ""} onChange={(e) => setEventName(e.target.value)}/>
                                        </div>
                                    )}
                                </div>
                                <div className="setBackItem d-flex flex-column align-items-center">
                                    <Button onClick={handleSetbackBtn} name="small">Small Setback Options</Button>
                                    {smallSetback &&(
                                        <div>
                                            <Dropdown className="setBackItemchild" onSelect={handleTrapSelect}>
                                                <Dropdown.Toggle variant="outline-primary">
                                                    {trapChoice ? trapChoice: 'Choose Your Trap'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {traps.map(drop => { 
                                                        return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                                                    })}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Setback;
