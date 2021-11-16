import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Dropdown, FormControl } from 'react-bootstrap';
import "./home.css";
import { setSetback } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Setback = ({ onSetSetback }) => {
    const [showModal, setShowModal] = useState(false);
    const [setback, setSetback] = useState(false);
    const [largeSetback, setLargeSetback] = useState(false);
    const [smallSetback, setSmallSetback] = useState(false);
    const [setbackCat, setSetbackCat] = useState("");
    const [largeSetBackOptions, setLargeSetbackOptions] = useState([]);
    const [finalSetback, setFinalSetback] = useState("");
    const [showInput, setShowInput] = useState(false);
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

    const setReduxSetback = (destination, value) => {
        onSetSetback(destination, value);
    };

    const setbackFunc = (e) => {
        switch (e.target.name) {
            case "Yes":
                setSetback(true);
                break;
            case "No":
                setSetbackCat(null);
                setFinalSetback(null);
                setShowInput(false);
                setLargeSetback(false);
                setSmallSetback(false);
                setReduxSetback("setback", "");
                setSetback(false);
                setShowModal(!showModal);
                break;
            default: 
                setSetback(false);
                setShowModal(!showModal);
                break;
        } 
    };

    const handleSetbackSelect = (ek, e, type) => {
        let name = e.target.name;
        setShowInput(false);
        setFinalSetback(null);
        if(type === "large") {
            const largeEventOptions = worldShakingEvents.find((event) => event.title === name);
            setSetbackCat(name);
            setLargeSetbackOptions(largeEventOptions.possible);
            setShowInput(largeEventOptions.possible.length > 0 ? false : true);
        } else if(type === "small") {
            setSetbackCat(name);
            setFinalSetback(name);
        } else if (type === "subLarge") {
            setFinalSetback(name);
        }
    };

    const handleInput = (e) => {
        setFinalSetback(e.target.value)
    }

    const handleSave = () => {
        if(finalSetback) {
            let type;
            if (largeSetback) {
                type = "large"
            } else if (smallSetback) {
                type = "small"
            }
            const setbackObj = {
                type: type,
                category: setbackCat,
                name: finalSetback
            };
            setReduxSetback("setback", setbackObj);
        }
        setShowModal(!showModal);
    };

    const handleSetbackBtn = (e) => {
        let choice = e.target.name;
        setSetbackCat(null);
        setFinalSetback(null);
        setShowInput(false);
        setLargeSetback(false);
        setSmallSetback(false);
        switch(choice) {
            case "large":
                setLargeSetback(true);
                break;
            case "small":
                setSmallSetback(true);
                break;
            default:  
                break;
        };
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
                                    {largeSetback && (
                                        <div>
                                            <Dropdown className="setBackItemchild" onSelect={(ek, e) => handleSetbackSelect(ek, e, "large")}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {setbackCat ? setbackCat: 'Choose Your Setback Category'}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {worldShakingEvents.map((drop) => (<Dropdown.Item key={drop.id} name={drop.title}>{drop.title}</Dropdown.Item>))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        {largeSetBackOptions.length > 0 && (
                                            <div className="d-flex flex-column align-items-center">
                                                <Dropdown onSelect={(ek, e) => handleSetbackSelect(ek, e, "subLarge")}>
                                                    <Dropdown.Toggle variant="outline-primary">
                                                        {finalSetback ? finalSetback: 'Choose your event'}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {largeSetBackOptions.map((drop, idx) => (<Dropdown.Item key={idx} name={drop}> {drop}</Dropdown.Item>))}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            )}
                                        </div>
                                    )}
                                    {showInput && (
                                        <div>
                                            <FormControl type="text" placeholder="Name Your Event" value={finalSetback || null} className="mr-sm-2" onChange={handleInput}/>
                                        </div>
                                    )}
                                </div>
                                <div className="setBackItem d-flex flex-column align-items-center">
                                    <Button onClick={handleSetbackBtn} name="small">Small Setback Options</Button>
                                    {smallSetback && (
                                        <div>
                                            <Dropdown className="setBackItemchild" onSelect={(ek, e) => handleSetbackSelect(ek, e, "small")}>
                                                <Dropdown.Toggle variant="outline-primary">
                                                    {setbackCat ? setbackCat: 'Choose Your Trap'}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {traps.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetSetback: bindActionCreators(setSetback, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Setback);
