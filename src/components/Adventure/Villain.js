import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { GenerateBtn } from "../StaticComps";
import { Button, Dropdown, Form, FormControl, OverlayTrigger, Card, Popover } from 'react-bootstrap';
import "../style.css";

const VillainModal = ({ setReduxVillainData }) => {
    const [showModal, setShowModal] = useState(false);
    const [setImageLink, imageLink] = useState("https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg")
    const [villainData, setVillainData] = useState({});
    const villainObjectives = [
        {
            id: 1, 
            objectiveCat: "Immortality", 
            objectives: [
                "Aquire a legnedary item to prolong life",
                "Ascend to godhood",
                "Become undead or obtain a younger body",
                "Steal a planer creatures essence",
            ]   
        },
        {
            id: 2, 
            objectiveCat: "Influence", 
            objectives: [
                "Seize a position of power or title",
                "Win a contest or tournament",
                "Win favor with a powerful individual",
                "Place a pawn in a position of power",
            ]   
        },
        {
            id: 3, 
            objectiveCat: "Magic", 
            objectives: [
                "Obtain an ancient artifact",
                "Build a construct or magical device",
                "Carry out a deity's wishes",
                "Offer sacrafices to a deity",
                "Contact a lost deity or power",
                "Open a gate to another world",
            ]   
        },
        {
            id: 4, 
            objectiveCat: "Mayhem", 
            objectives: [
                "Fulfill an apocolyptic prophecy",
                "Enact the vengeful will of a good or patron",
                "Spread a vile contagion",
                "Overthrow a government",
                "Trigger a natrual disaster",
                "Utterly destroy a bloodline or clan",
            ]   
        },
        {
            id: 5, 
            objectiveCat: "Passion", 
            objectives: [
                "Prolong the life of a loved one",
                "Prove worthy of another person's love",
                "Raise or restore a dead loved one",
                "Destroy rivals for another person's affection",
            ]   
        },
        {
            id: 5, 
            objectiveCat: "Power", 
            objectives: [
                "Conquer a region or incite a rebellion",
                "Seize control of an army",
                "Become the power behind the throne",
                "Gain the favor of a ruler",
            ]   
        },
        {
            id: 6, 
            objectiveCat: "Revenge", 
            objectives: [
                "Avenge a past humiliation or insult",
                "Avenge a past imprisonment or injury",
                "Avenge the death of a loved one",
                "Retrieve stolen property and punish the thief",
            ]   
        },
        {
            id: 7, 
            objectiveCat: "Wealth", 
            objectives: [
                "Control natural resources or trade",
                "Marry into wealth",
                "Plunder ancient ruins",
                "Steal lands, goods, or money",
            ]   
        },
    ];

    const villainMethods = [
        {
            id: 1,
            methodCat: "Agricultural Devistation",
            methods: [
                "Blight", 
                "Crop Failure", 
                "Drought",
                "Famine"
            ]
        },
        {
            id: 2,
            methodCat: "Assult or Beatings",
            methods: []
        },
        {
            id: 3,
            methodCat: "Bounty Hunting or Assassination",
            methods: []
        },
        {
            id: 4,
            methodCat: "Captivity or coercion",
            methods: [
                "Briberey", 
                "Enticement",
                "Eviction",
                "Imprisionment",
                "Kidnapping",
                "Legal intimidation",
                "Press gangs",
                "Shackling",
                "Slavery",
                "Threats or harassment",
            ]
        },
        {
            id: 5,
            methodCat: "Confidence scams",
            methods: [
                "Briberey", 
                "Enticement",
                "Eviction",
                "Imprisionment",
                "Kidnapping",
                "Legal intimidation",
                "Press gangs",
                "Shackling",
                "Slavery",
                "Threats or harassment",
            ]
        },
        {
            id: 6,
            methodCat: "Deflamation",
            methods: [
                "Framing", 
                "Gossiping or Slander",
                "Humiliation",
                "Libel or insults",
                "Kidnapping",
                "Legal intimidation",
            ]
        },
        {
            id: 7,
            methodCat: "Deuling",
            methods: []
        },
        {
            id: 8,
            methodCat: "Execution",
            methods: [
                "Beheading",
                "Burning at the stake",
                "Burying alive",
                "Crucifixion",
                "Drawing and quartering",
                "Hanging",
                "Impalement",
                "Sacrafice",
            ]
        },
        {
            id: 9,
            methodCat: "Impresonation or disguise",
            methods: []
        },
        {
            id: 10,
            methodCat: "Lying or perjury",
            methods: []
        },
        {
            id: 11,
            methodCat: "Magical mayhem",
            methods: [
                "Hauntings",
                "Illusions",
                "Infernal bargins",
                "Mind control",
                "Petrification",
                "Raising or animating the dead",
                "Summoning monsters",
                "Weather control",
            ]
        },
        {
            id: 12,
            methodCat: "Murder",
            methods: [
                "Assassination",
                "Cannibalism",
                "Dismemberment",
                "Drowning",
                "Electrocution",
                "Euthanasia",
                "Disease",
                "Poisoning",
                "Stabbing",
                "Strangulation or suffocation",
            ]
        },
        {
            id: 13,
            methodCat: "Neglect",
            methods: []
        },
        {
            id: 14,
            methodCat: "Politics",
            methods: [
                "Betrayal or treason",
                "Conspiracy",
                "Espionage or spying",
                "Genocide",
                "Oppression",
                "Raising Taxes",
            ]
        },
        {
            id: 15,
            methodCat: "Religion",
            methods: [
                "Curses",
                "Desecration",
                "False Gods",
                "Heresy or cults",
            ]
        },
        {
            id: 16,
            methodCat: "Stalking",
            methods: []
        },
        {
            id: 17,
            methodCat: "Theft of Property or Crime",
            methods: [
                "Arson",
                "Blackmail or extortion",
                "Burglary",
                "Counterfeiting",
                "Highway robbery",
                "Looting",
                "Mugging",
                "Poaching",
                "Seizing property",
                "Smuggling"
            ]
        },
        {
            id: 18,
            methodCat: "Torture",
            methods: [
                "Acid",
                "Blinding",
                "Racking",
                "Thumbscrews",
                "Whipping",
            ]
        },
        {
            id: 19,
            methodCat: "Vice",
            methods: [
                "Adultery",
                "Drugs or alcohol",
                "Gambling",
                "Seduction",
            ]
        },
        {
            id: 20,
            methodCat: "Warfare",
            methods: [
                "Ambush",
                "Invasion",
                "Massacre",
                "Mercenaries",
                "Rebellion",
                "Terrorism",
            ]
        },
    ];
    
    const villainWeaknessChoices = [
        {id: 1, option: "A hidden object that holds the villain's soul"},
        {id: 2, option: "The villain's power is broken if the death of its true love is avenged"},
        {id: 3, option: "The villain is weakened in the presence of a particular artifact"},
        {id: 4, option: "A special weapon deals extra damage when used against the villain"},
        {id: 5, option: "The villain is destroy if it speaks its true name"},
        {id: 6, option: "An ancient prophecy or riddle reveals how the villain can be overthrown"},
        {id: 7, option: "The villain falls when an ancient enemy forgives its past actions"},
        {id: 8, option: "The villain loses its power if a mystic bargain it struck long ago os completed"},
    ];

    const handleVillainObjectiveCatSelect = (eventkey, event) => {
        let choice = event.target.text
        const newVillainObjectiveChoices = villainObjectives.find(event => event.objectiveCat === choice);
        const objectivesList = newVillainObjectiveChoices.objectives;
        setVillainData({...villainData, villainObjectiveCatChoice:choice, villainObjectivesPossible:objectivesList});
    };

    const handleVillainMethodCatSelect = (eventkey, event) => {
        const selection = event.target.text;
        const newVillainMethodChoices = villainMethods.find(event => event.methodCat === selection);
        const drilledMethods = newVillainMethodChoices.methods;
        setVillainData({...villainData, villainMethodCatChoice:selection, villainMethodPossible:drilledMethods});
    };

    const handleImageSubmit = () => {
        let image = this.state.imageLink.trim();
        setVillainData({...villainData, image});
        // this.refs.overlay.hide();
    };

    const hanelSave = () => {
        setShowModal(!showModal);
        setReduxVillainData("villainData", villainData)
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Villain</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create Yor villain!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to create your villain</p>
                    <Form inline>
                        <FormControl 
                            type="text" 
                            placeholder="villain Name" 
                            className="mr-sm-2" 
                            value={villainData?.name || ""} 
                            onChange={(e) => setVillainData({...villainData, name: e.target.value})}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        <GenerateBtn name="villainName" handleGenerate={(feedback, name) => setVillainData({...villainData, name: feedback})}/>
                    </Form>
                    <br/>
                    <Card className="d-flex flex-column align-items-center villainPatronCard">   
                        <OverlayTrigger 
                            trigger="click"
                            ref="overlay"
                            placement="top"
                            overlay={
                                <Popover className="makeItBigger">
                                    <Popover.Title as="h3">Add Your Image!</Popover.Title>
                                    <Popover.Content>
                                        <div className="centerMe">
                                            <FormControl 
                                                type="text" 
                                                placeholder="Image Link" 
                                                className="mr-sm-2" 
                                                value={villainData?.imageLink || ""} 
                                                onChange={(e) => setVillainData({...villainData, image: e.target.value})}/>
                                            <Button onClick={(e) => setVillainData({...villainData, image: e.target.value})} className="imageSubmit">Submit</Button>
                                        </div>
                                    </Popover.Content>
                                </Popover>}>
                            <Card.Img className="NPCimage" variant="top" src={villainData?.imageLink || ""}/> 
                        </OverlayTrigger>
                        <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title>{villainData.name && (`Name: ${villainData.name}`)}</Card.Title>
                            <div className="d-flex flex-column align-items-center">
                                <Dropdown onSelect={(e)  => setVillainData({...villainData, type: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.type ? `Type: ${villainData.type }`: 'Choose your Adventure Villain'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Beast or monstrosity with no particular agenda</Dropdown.Item>
                                        <Dropdown.Item>Abberation bent on corruption or desruction</Dropdown.Item>
                                        <Dropdown.Item>Dragon bent on domination and plunder</Dropdown.Item>
                                        <Dropdown.Item>Giant bent on plunder</Dropdown.Item>
                                        <Dropdown.Item>Undead with any agenda</Dropdown.Item>
                                        <Dropdown.Item>Fey with a mysterious goal</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid cultist</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid conqueror</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid seeking revenge</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid schemer seeking to rule</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid criminal mastermind</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid raider or ravager</Dropdown.Item>
                                        <Dropdown.Item>Hummanoid under a curse</Dropdown.Item>
                                        <Dropdown.Item>Misguided hummanoid zealot</Dropdown.Item>
                                        <Dropdown.Item>Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown onSelect={(e) => setVillainData({...villainData, gender: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.gender ? `Gender: ${villainData.gender}`: 'Choose your Adventure Villain'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Female</Dropdown.Item>
                                        <Dropdown.Item>Male</Dropdown.Item>
                                        <Dropdown.Item>Non Binary</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="dualDrop giveMeNPCSpace">
                                    <Dropdown onSelect={handleVillainObjectiveCatSelect} className="giveMeNPCSpace">
                                        <Dropdown.Toggle variant="outline-primary">
                                            {villainData.villainObjectiveCatChoice ? `Objective Category: ${villainData.villainObjectiveCatChoice}`: "Choose your Villain's Main Objective"}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {villainObjectives.map(item => {
                                                return <Dropdown.Item key={item.id} name={item.objectiveCat}>{item.objectiveCat}</Dropdown.Item>
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {villainData.villainObjectivesPossible && (
                                        <Dropdown onSelect={(e) => villainData({...villainData, finalVillainObjectiveChoice: e.target.text})}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {villainData.finalVillainObjectiveChoice ? `Objective: ${villainData.finalVillainObjectiveChoice}`: "Choose your Villain's Main Objective"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {villainData.villainObjectivesPossible.map(item => {
                                                    return <Dropdown.Item name={item}>{item}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </div>
                                <div className="dualDrop giveMeNPCSpace">
                                    <Dropdown onSelect={handleVillainMethodCatSelect}>
                                        <Dropdown.Toggle variant="outline-primary">
                                            {villainData.villainMethodCatChoice ? `Method Category: ${villainData.villainMethodCatChoice}`: "Choose your Villain's Method"}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {villainMethods.map(item => {
                                                return <Dropdown.Item key={item.id} name={item.methodCat}>{item.methodCat}</Dropdown.Item>
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {villainData.villainMethodPossible && (
                                        <Dropdown onSelect={(e) => villainData({...villainData, finalVillainMethodChoice: e.target.text})}>
                                            <Dropdown.Toggle variant="outline-primary">
                                                {villainData.finalVillainMethodChoice ? `Method: ${villainData.finalVillainMethodChoice}`: "Choose your Villain's Method"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {villainData.villainMethodPossible.map(item => {
                                                    return <Dropdown.Item name={item}>{item}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </div>
                                <Dropdown onSelect={(e) => villainData({...villainData, weakness: e.target.text})} className="giveMeNPCSpace">
                                    <Dropdown.Toggle variant="outline-primary">
                                        {villainData.villainWeakness ? `Weakness: ${villainData.villainWeakness}`: "Choose your Villain's Weakness"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {villainWeaknessChoices.map(item => {
                                            return <Dropdown.Item key={item.id} name={item.option}>{item.option}</Dropdown.Item>
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={hanelSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VillainModal;