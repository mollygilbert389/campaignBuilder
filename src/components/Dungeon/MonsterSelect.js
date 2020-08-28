import React, {Component} from 'react'
import {Dropdown} from 'react-bootstrap'
import {Form, FormGroup} from "reactstrap"
import "./style.css"

class MonsterSelect extends Component {

    constructor() {
        super();
        this.state ={
            monsterChoice: '',
            monsterTypes: {},
            finalMonsterType: '',
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

    handleMonsterCategorySelect = (eventKey, event) => {
        let monsterChoice = event.target.name
        let monsterTypes = this.state.monsterObjectArray.find(monster => monster.name === monsterChoice)

        this.setState({ 
            ...this.state,
            monsterChoice: monsterChoice,
            monsterTypes: monsterTypes
        })
    }

    handleMonsterTypeSelect = (eventKey, event) => {
        this.setState({ 
            ...this.state,
            finalMonsterType: event.target.name
        })
    }


render() {  

    const{monsterObjectArray} = this.state 
    const{monsterChoice} = this.state
    const{monsterTypes} = this.state
    const{finalMonsterType} = this.state

    return (
        <div>
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Dropdown onSelect={this.handleMonsterCategorySelect}>
                    <Dropdown.Toggle variant="outline-primary">
                        {monsterChoice ? monsterChoice: 'Monster Categories'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="mainMonsterMenu">
                        {monsterObjectArray.map(monsterObject => {
                            return <Dropdown.Item key={monsterObject.id} name={monsterObject.name}> {monsterObject.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                    {monsterChoice.length > 0 && (
                    <Dropdown onSelect={this.handleMonsterTypeSelect}>
                    <Dropdown.Toggle variant="outline-primary">
                        {finalMonsterType ? finalMonsterType: 'Monster Type'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    {monsterTypes.types.map(monsterTypesObject => {
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
