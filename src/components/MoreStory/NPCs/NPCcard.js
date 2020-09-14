import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, CardGroup} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../style.css"

class NPCCard extends Component {
    state ={
        NPCGender: "",
        NPCName: "",
        NPCHighAbility: "",
        NPCLowAbility: "",
        NPCTalentChoice: '',
        NPCMannerismChoice:'',
        NPCIdealChoice: '',
        NPCBondChoie: '',
        NPCFlawSecretChoice: '',
        NPCTraitChoice: '',
        NPCTalents: [
            {id: 1, option: "Plays a musical instrument" },
            {id: 2, option: "Speaks several languages" },
            {id: 3, option: "Unbelievably lucky" },
            {id: 4, option: "Perfect memory" },
            {id: 5, option: "Great with animals" },
            {id: 6, option: "Great with children" },
            {id: 7, option: "Great at solving puzzles" },
            {id: 8, option: "Great at one game" },
            {id: 9, option: "Great at impersonations" },
            {id: 10, option: "Draws beautifully" },
            {id: 11, option: "Paints beautifully" },
            {id: 12, option: "Sings beautifully" },
            {id: 13, option: "Drinks everyone under the table" },
            {id: 14, option: "Expert carpenter" },
            {id: 15, option: "Expert cook" },
            {id: 16, option: "Expert dart thrower" },
            {id: 17, option: "Expert juggler" },
            {id: 18, option: "Skilled actor and master of disguise" },
            {id: 19, option: "Skilled dancer" },
            {id: 20, option: "Knows thieves' can't"},
        ], 
        NPCMannerisms: [
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
        NPCInteractionTraits: [
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
        NPCIdeals: [
            {main: "Good Ideals", list: [
                {id: 1, option: "Beauty" },
                {id: 2, option: "Charity" },
                {id: 3, option: "Greater Good" },
                {id: 4, option: "Life" },
                {id: 5, option: "Respect" },
                {id: 6, option: "Self-sacrafice" },
            ]},
            {main: "Evil Ideals", list: [
                {id: 1, option: "Domination" },
                {id: 2, option: "Greed" },
                {id: 3, option: "Might" },
                {id: 4, option: "Pain" },
                {id: 5, option: "Retribution" },
                {id: 6, option: "Slaughter" },
            ]},
            {main: "Lawful Ideals", list: [
                {id: 1, option: "Community" },
                {id: 2, option: "Fairness" },
                {id: 3, option: "Honor" },
                {id: 4, option: "Logic" },
                {id: 5, option: "Responsibility" },
                {id: 6, option: "Tradition" },
            ]},
            {main: "Chaotic Ideals", list: [
                {id: 1, option: "Change" },
                {id: 2, option: "Creativity" },
                {id: 3, option: "Freedom" },
                {id: 4, option: "Independence" },
                {id: 5, option: "No limits" },
                {id: 6, option: "Whimsey" },
            ]},
            {main: "Neutral Ideals", list: [
                {id: 1, option: "Balance" },
                {id: 2, option: "Knowledge" },
                {id: 3, option: "Live and let live" },
                {id: 4, option: "Moderation" },
                {id: 5, option: "Neutrality" },
                {id: 6, option: "People" },
            ]},
            {main: "Other Ideals", list: [
                {id: 1, option: "Aspiration" },
                {id: 2, option: "Discovery" },
                {id: 3, option: "Glory" },
                {id: 4, option: "Nation" },
                {id: 5, option: "Redemption" },
                {id: 6, option: "Self-knowledge" },
            ]},
        ], 
        NPCBonds: [
            {id: 1, option: "Dedication to fulfilling a personal life goal" },
            {id: 2, option: "Protective of close family members" },
            {id: 3, option: "Protective of colleagues or compatriots" },
            {id: 4, option: "Loyal to a benefactor, patron, or employer" },
            {id: 5, option: "Captivated by a romantic interest" },
            {id: 6, option: "Drawn to a special place" },
            {id: 7, option: "Protective of a sentimental keepsake" },
            {id: 8, option: "Protective of a valuable possession" },
            {id: 9, option: "Out for revenge" },
        ],
        NPCFlawsSecrets: [
            {id: 1, option: "Forbidden love or suseptibility ro romance" },
            {id: 2, option: "Enjoys decadent pleasures" },
            {id: 3, option: "Arrogance" },
            {id: 4, option: "Envies another creature's possessions or station" },
            {id: 5, option: "Overpowering greed" },
            {id: 6, option: "Prone to rage" },
            {id: 7, option: "Has a powerful enemy" },
            {id: 8, option: "Specific phobia" },
            {id: 9, option: "Shameful or scandalous history" },
            {id: 10, option: "Secret crime or misdeed" },
            {id: 11, option: "Possession of forbidden lore" },
            {id: 12, option: "Foolhardy bravery" },
        ],

    }

    handleGenderSelect = (eventKey, event) => {
        this.setState({
            gender: event.target.text
        })
    }

    handleHighAbilitySelect = (eventKey, event) => {
        this.setState({
            NPCHighAbility: event.target.text
        })
    }

    handleLowAbilitySelect = (eventKey, event) => {
        this.setState({
            NPCLowAbility: event.target.text
        })
    }

    handleNPCTalent = (eventKey, event) => {
        this.setState({
            NPCTalentChoice: event.target.text
        })
    }

    handleNPCManner = (eventKey, event) => {
        this.setState({
            NPCMannerismChoice: event.target.text
        })
    }

    handleNPCTrait = (eventKey, event) => {
        this.setState({
            NPCTraitChoice: event.target.text
        })
    }

    handleNPCIdeal = (eventKey, event) => {
        this.setState({
            NPCIdealChoice: event.target.text
        })
    }

    handleNPCBond = (eventKey, event) => {
        this.setState({
            NPCBondChoie: event.target.text
        })
    }

    handleNPCFlawSecret = (eventKey, event) => {
        this.setState({
            NPCFlawSecretChoice: event.target.text
        })
    }



render() {  
    return (
        <div>
            <Card className="d-flex flex-column align-items-center color">
                <Card.Img className="NPCimage" variant="top" src="https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg"/>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>NPC Name</Card.Title>
                            <Dropdown onSelect={this.handleGenderSelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.gender ? this.state.gender: 'Choose your Characters Gender'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="smallFont">
                                    <Dropdown.Item>Female</Dropdown.Item>
                                    <Dropdown.Item>Male</Dropdown.Item>
                                    <Dropdown.Item>Non Binary</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            <Dropdown onSelect={this.handleHighAbilitySelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCHighAbility ? this.state.NPCHighAbility: "Choose your NPC's High Ability"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Strength-powerful, brawny, strong as an ox</Dropdown.Item>
                                    <Dropdown.Item>Dexterity-lithe, agile, graceful</Dropdown.Item>
                                    <Dropdown.Item>Consitution-hardy, hale, healthy</Dropdown.Item>
                                    <Dropdown.Item>Intelligence-studious, learned, inquisitive</Dropdown.Item>
                                    <Dropdown.Item>Wisdom-perceptive, spiritual, insightful</Dropdown.Item>
                                    <Dropdown.Item>Charisma-persuasive, forceful, born leader</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            <Dropdown onSelect={this.handleLowAbilitySelect}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCLowAbility ? this.state.NPCLowAbility: "Choose your NPC's Low Ability"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Strength-feeble, scrawny</Dropdown.Item>
                                    <Dropdown.Item>Dexterity-clumbsy, fumbling</Dropdown.Item>
                                    <Dropdown.Item>Consitution-sickly, pale</Dropdown.Item>
                                    <Dropdown.Item>Intelligence-dim-witted, slow</Dropdown.Item>
                                    <Dropdown.Item>Wisdom-oblivious, absentminded</Dropdown.Item>
                                    <Dropdown.Item>Charisma-dull, boring</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCTalent}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCTalentChoice ? this.state.NPCTalentChoice: "Choose your NPC's Talent"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCTalents.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCManner}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCMannerismChoice ? this.state.NPCMannerismChoice: "Choose your NPC's Mannerism"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCMannerisms.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCTrait}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCTraitChoice ? this.state.NPCTraitChoice: "Choose your NPC's Trait"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCInteractionTraits.map(drop => {
                                        return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCIdeal}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCIdealChoice ? this.state.NPCIdealChoice: "Choose your NPC's Ideal"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCIdeals.map(drop => {
                                        return <Dropdown.Item name={drop.main}> {drop.main}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCBond}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCBondChoie ? this.state.NPCBondChoie: "Choose your NPC's Bond"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCBonds.map(drop => {
                                        return <Dropdown.Item  key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown onSelect={this.handleNPCFlawSecret}>
                                <Dropdown.Toggle variant="outline-primary">
                                {this.state.NPCFlawSecretChoice ? this.state.NPCFlawSecretChoice: "Choose your NPC's Flaw or Secret"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {this.state.NPCFlawsSecrets.map(drop => {
                                        return <Dropdown.Item  key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                    </Card.Body>
            </Card>
        </div>
    );
}
}

export default NPCCard;