import React, {Component} from 'react'
import {Dropdown} from 'react-bootstrap'
import {Form, FormGroup} from "reactstrap"
import "./style.css"

class MonsterSelect extends Component {

    constructor() {
        super();
        this.state ={
            monsterChoiceOne: "",
            monsterTypesOne: {},
            monterTypeOneChoice: "",
            monsterChoiceTwo: "",
            monsterTypesTwo: {},
            monterTypeTwoChoice: "",
            monsterChoiceThree: "",
            monsterTypesThree: {},
            monterTypeThreeChoice: "",
            monsterObjectArray: 
            [
                {id:1, 
                name: "Abberation",
                types: [
                     'Aboleth', 
                    'Beholder', 
                    "Berbalang", 
                    "Blue Slaad", 
                    "Chocker", 
                    "Chaos Quadrapod", 
                    "Cloacker", 
                    "Death Kiss", 
                    "Elder Brain", 
                    "Mind Flayer", 
                    "Morkoth", 
                    "Nothic", 
                    "Shadow Horror", 
                    "Skum", 
                    "Spectator"
                ]},
                
                {id:2,
                name: "Beast",
                types: [
                    'Monkey', 
                    'Badger', 
                    "Bat Swarm", 
                    "Bear", 
                    "Blood Hawk", 
                    "Boar", 
                    "Large Cat", 
                    "Cow herd",
                    "Deep Rothe",
                    "Deer Herd",
                    "Wolf Pack",
                    "Horse Herd",
                    "Enrourmous Tentacle",
                    "Giant Snake",
                    "Giant Fly",
                    "Owlbear",
                    "Giant Crab",
                    "Giant Scorpion",
                    "Giant Spider",
                    "Giant Snapping Turtle",
                    "Giant Wasp",
                    "Guthash",
                    "Mammoth",
                    "Snarl",
                    "Swarm of Insects",
                ]},

                {id:3,
                name: "Celestial",
                types: [
                    "Aurelia",
                    "Battleforce Angel",
                    "Deva",
                    "Empyrean",
                    "Hollyphant",
                    "Pegasus",
                    "Plantar",
                    "Radiant Idol",
                    "Solar",
                    "Unicorn",
                ]},

                {id:4, 
                name: "Construct",
                types: [
                    "Animated Armor",
                    "Animated Statue",
                    "Braim in Iron",
                    "Cadaver Collector",
                    "Clay Gladiator",
                    "Clay Golem",
                    "Clockwork Dragon",
                    "Crystal Golem",
                    "Flying Sword",
                    "Guardian Portrait",
                    "Hellfire Engine",
                    "Homunculus",
                    "Iron Cobra",
                    "Jade Spider",
                    "Keg Robot",
                    "Rug of Smothering",
                    "Skull Flier",
                    "Warforaged Titan",
                ]},
                
                {id:5,
                name: "Dragon",
                types: [
                    "Adult Dragon",
                    "Ancient Dragon",
                    "Astyrranthor",
                    "Guard Drake",
                    "Dragon Wyrmling",
                    "Dragon Turtle",
                    "Faerie Dragon",
                    "Itmrith",
                    "Pseudodragon",
                    "Young Dragon",
                ]},
                
                {id:6,
                name: "Elemental",
                types: [
                    "Air Elemental",
                    "Azer",
                    "Dust Mephit",
                    "Earth Elemental",
                    "Efreeti",
                    "Tempest",
                    "Fire Elemental",
                    "Fire Snake",
                    "Flail Snail",
                    "Frost Salamander",
                    "Gargoyle",
                    "Ice Mephit",
                    "Imix",
                    "Invisible Stalker",
                    "Leviathan",
                    "Marid",
                    "Phoenix",
                    "Steam Mephit",
                    "Water Elemental",
                    "Water Weird",
                ]},

                {id:7, 
                name: "Fey",
                types: [
                    "Autumn Eladrin",
                    "Blink Dog",
                    "Boggle",
                    "Conclave Dryad",
                    "Darkling Elder",
                    "Dusk Hag",
                    "Mite",
                    "Pixie",
                    "Quickling",
                    "Satyr",
                    "Siren",
                ]},
                
                {id:8,
                name: "Fiend",
                types: [
                    "Abyssal Chicken",
                    "Arcanaloth",
                    "Bael",
                    "Balor",
                    "Barbed Devil",
                    "Bone Devil",
                    "Cackler",
                    "Cambion",
                    "Demogorgon",
                    "Devourer",
                    "Erinyes",
                    "Hell Hound",
                    "Ice Devil",
                    "Imp",
                    "Incubus",
                    "Nightmare",
                    "Succubus",
                    "Vrock",
                ]},

                {id:9,
                name: "Giant",
                types: [
                    "Cloud Giant",
                    "Cyclops",
                    "Ettin",
                    "Fire Giant",
                    "Frost Giant",
                    "Hill Giant",
                    "Ogre",
                    "Oni",
                    "Stone Giant",
                    "Storm Giant",
                    "Troll",
                ]},

                {id:10, 
                name: "Humanoid",
                types: [
                    "Acolyte",
                    "Archmage",
                    "Assasin",
                    "Bandit",
                    "Bandit Captain",
                    "Berserker",
                    "Bugbear",
                    "Commoner",
                    "Cultist",
                    "Deeo Gnome",
                    "Drow",
                    "Druid",
                    "Duergar",
                    "Gladiator",
                    "Gnoll",
                    "Goblin",
                    "Grimlock",
                    "Guard",
                    "Hobgoblin",
                    "Knight",
                    "Kobold",
                    "Lizardfolk",
                    "Mage",
                    "Merfolk",
                    "Orc",
                    "Priest",
                    "Scout",
                    "Spy",
                    "Thug",
                    "Warrior",
                    "Veteran",
                    "Werebear",
                    "Wererat",
                    "Werewolf",
                ]},
                
                {id:11,
                name: "Monstrosity",
                types: [
                    "Androsphinx",
                    "Ankheg",
                    "Basilisk",
                    "Behir",
                    "Bulette",
                    "Centaur",
                    "Chimera",
                    "Cockatrice",
                    "Darkmantle",
                    "Death Dog",
                    "Doppelganger",
                    "Drider",
                    "Ettercap",
                    "Grick",
                    "Griffon",
                    "Guardian Naga",
                    "Gynosphinx",
                    "Harpy",
                    "Hippogriff",
                    "Hydra",
                    "Kraken",
                    "Lamia",
                    "Manticore",
                    "Medusa",
                    "Merrow",
                    "Mimic",
                    "Minotaur",
                    "Owlbear",
                    "Phase Spider",
                    "Rust Monster",
                    "Spirit Naga",
                    "Tarrasque",
                    "Winter Wolf",
                    "Worg",
                    "Yeti",
                ]},
                
                {id:12,
                name: "Ooze",
                types: [
                    "Black Pudding",
                    "Gelatinous Cube",
                    "Gray Ooze",
                    "Ochre Jelly",
                ]},

                {id:13,
                name: "Plant",
                types: [
                    "Awakened Shrub",
                    "Awakened Tree",
                    "Shambling Mound",
                    "Shrieker",
                    "Treant",
                    "Twig Blight",
                    "Violet Fungus",
                ]},

                {id:14, 
                name: "Undead",
                types: [
                    "Banshee",
                    "Flameskull",
                    "Ghast",
                    "Ghost",
                    "Ghoul",
                    "Lich",
                    "Minotaur Skeleton",
                    "Mummy",
                    "Mummy Lord",
                    "Orgre Zombie",
                    "Shadow",
                    "Skeleton",
                    "Specter",
                    "Vampire",
                    "Warhorse Skeleton",
                    "Wight",
                    "Will-O-Wisp",
                    "Wraith",
                    "Zombie",
                ]},
            ]
        }
    }

    handlemonsterSelect = (eventKey, event) => {
        let monsterChoice = event.target.name
        let monsterTypes = this.state.monsterObjectArray.find(monster => monster.name === monsterChoice)
        console.log(monsterTypes)
        
        this.setState({ 
            ...this.state,
            monsterChoiceOne: monsterChoice,
            monsterTypesOne: monsterTypes
        })
    }

    handlemonsterTwoSelect = (eventKey, event) => {
        let monsterChoice = event.target.name
        let monsterChoiceTwoSpace = document.querySelector('#monsterChoiceTwo')
        monsterChoiceTwoSpace.innerText = monsterChoice
        let monsterTypes = this.state.monsterObjectArray.find(monster => monster.name === monsterChoice)
        console.log(monsterTypes)

        this.setState({ 
            ...this.state,
            monsterChoiceTwo: monsterChoice,
            monsterTypesTwo: monsterTypes
        })
    }

    handlemonsterThreeSelect = (eventKey, event) => {
        let monsterChoice = event.target.name
        let monsterTypes = this.state.monsterObjectArray.find(monster => monster.name === monsterChoice)
        let monsterChoiceThreeSpace = document.querySelector('#monsterChoiceThree')
        monsterChoiceThreeSpace.innerText = monsterChoice
        console.log(monsterTypes)

        this.setState({ 
            ...this.state,
            monsterChoiceThree: monsterChoice,
            monsterTypesThree: monsterTypes
        })
    }

    handlemonsterTypeSelect = (eventKey, event) => {
        let monsterTypeChoice = event.target.name
        this.setState({ 
            monterTypeOneChoice: monsterTypeChoice
        })

    }

    handlemonsterTwoTypeSelect = (eventKey, event) => {
        let monsterTypeChoice = event.target.name
        this.setState({ 
            monterTypeTwoChoice: monsterTypeChoice
        })

    }

    handlemonsterThreeTypeSelect = (eventKey, event) => {
        let monsterTypeChoice = event.target.name
        this.setState({ 
            monterTypeThreeChoice: monsterTypeChoice
        })

    }


render() {  

    const{monsterObjectArray} = this.state 
    const{monsterChoiceOne} = this.state
    const{monsterChoiceTwo} = this.state
    const{monsterChoiceThree} = this.state
    const{monsterTypesOne} = this.state
    const{monsterTypesTwo} = this.state
    const{monsterTypesThree} = this.state
    const{monterTypeOneChoice} = this.state
    const{monterTypeTwoChoice} = this.state
    const{monterTypeThreeChoice} = this.state

    return (
        <div>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Dropdown onSelect={this.handlemonsterSelect}>
                    <Dropdown.Toggle variant="outline-primary" id="monsterChoiceOne" >
                      {monsterChoiceOne ? monsterChoiceOne: 'Monster Category'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="mainMonsterMenu">
                        {monsterObjectArray.map(monsterObject => {
                            return <Dropdown.Item key={monsterObject.id} name={monsterObject.name}> {monsterObject.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                    {monsterChoiceOne.length > 0 && (
                    <Dropdown onSelect={this.handlemonsterTypeSelect}>
                    <Dropdown.Toggle variant="outline-primary">
                        {monterTypeOneChoice ? monterTypeOneChoice: 'Monster Type'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {monsterTypesOne.types.map(monsterTypesObject => {
                            return <Dropdown.Item key={monsterTypesObject} name={monsterTypesObject}> {monsterTypesObject}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                )}
                
                </FormGroup>
                </Form>

                <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Dropdown onSelect={this.handlemonsterTwoSelect}>
                    <Dropdown.Toggle variant="outline-primary" id="monsterChoiceTwo" >
                    {monsterChoiceTwo ? monsterChoiceTwo: 'Monster Category'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="mainMonsterMenu">
                        {monsterObjectArray.map(monsterObject => {
                            return <Dropdown.Item key={monsterObject.id} name={monsterObject.name}> {monsterObject.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                    {monsterChoiceTwo.length > 0 && (
                    <Dropdown onSelect={this.handlemonsterTwoTypeSelect}>
                    <Dropdown.Toggle variant="outline-primary" >
                        {monterTypeTwoChoice ? monterTypeTwoChoice: 'Monster Type'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {monsterTypesTwo.types.map(monsterTypesObject => {
                            return <Dropdown.Item key={monsterTypesObject} name={monsterTypesObject}> {monsterTypesObject}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                )}
                
                </FormGroup>
                </Form>

                <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Dropdown onSelect={this.handlemonsterThreeSelect}>
                    <Dropdown.Toggle variant="outline-primary" id="monsterChoiceThree" >
                        {monsterChoiceThree ? monsterChoiceThree: 'Monster Category'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="mainMonsterMenu">
                        {monsterObjectArray.map(monsterObject => {
                            return <Dropdown.Item key={monsterObject.id} name={monsterObject.name}> {monsterObject.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                    {monsterChoiceThree.length > 0 && (
                    <Dropdown onSelect={this.handlemonsterThreeTypeSelect}>
                    <Dropdown.Toggle variant="outline-primary">
                        {monterTypeThreeChoice ? monterTypeThreeChoice: 'Monster Type'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {monsterTypesThree.types.map(monsterTypesObject => {
                            return <Dropdown.Item key={monsterTypesObject} name={monsterTypesObject}> {monsterTypesObject}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
                )}
                </FormGroup>
            </Form>

        </div>
    );
}
}

export default MonsterSelect;
