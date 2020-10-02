import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import GenerateBtn from "../../../StaticComps/GenerateBtn"
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, CardGroup, Popover} from 'react-bootstrap'
import {FormControlLabel, Checkbox, FormGroup, Slider} from '@material-ui/core'
import "../../style.css"

class NPCCard extends Component {
    state ={
        imageLink: "",
        setImageLink: "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg",
        NPCData: {},
        isDisabled: true,
        NPCAppearance: [
            {id: 1, option: "Distinctive Jewelry: earrings, necklace, circlet, braclets"},
            {id: 2, option: "Piercings"},
            {id: 3, option: "Flamboyent or outlandish clothes"},
            {id: 4, option: "Formal, clean clothes"},
            {id: 5, option: "Ragged, dirty clothes"},
            {id: 6, option: "Pronounced scar"},
            {id: 7, option: "Missing teeth"},
            {id: 8, option: "Missing fingers"},
            {id: 9, option: "Unusual eye color"},
            {id: 10, option: "Tattoos"},
            {id: 11, option: "Birthmark"},
            {id: 12, option: "Unusual skin color"},
            {id: 13, option: "Bald"},
            {id: 14, option: "Braided beard or hair"},
            {id: 15, option: "Unusual hair color"},
            {id: 16, option: "Nervous eye twitch"},
            {id: 17, option: "Distinctive nose"},
            {id: 18, option: "Distinctive posture"},
            {id: 19, option: "Exceptionally beautiful"},
            {id: 20, option: "Exceptionally ugly"},
        ],
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
            {id: 1,
            main: "Good Ideals", 
            list: [
                "Beauty",
                "Charity",
                "Greater Good",
                "Life" ,
                "Respect",
                "Self-sacrafice",
            ]},
            {id: 2,
            main: "Evil Ideals", 
            list: [
                "Domination",
                "Greed",
                "Might" ,
                "Pain" ,
                "Retribution" ,
                "Slaughter",
            ]},
            {id: 3,
            main: "Lawful Ideals", 
            list: [
                "Community",
                "Fairness",
                "Honor" ,
                "Logic" ,
                "Responsibility",
                "Tradition",
            ]},
            {id: 4,
            main: "Chaotic Ideals", 
            list: [
                "Change",
                "Creativity",
                "Freedom",
                "Independence",
                "No limits",
                "Whimsey",
            ]},
            {id: 5,
            main: "Neutral Ideals", 
            list: [
                "Balance",
                "Knowledge",
                "Live and let live",
                "Moderation",
                "Neutrality",
                "People" ,
            ]},
            {id: 6,
            main: "Other Ideals", 
            list: [
                "Aspiration",
                "Discovery",
                "Glory",
                "Nation",
                "Redemption",
                "Self-knowledge",
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

    handleGenderSelect = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, gender:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, gender:selection},
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleHighAbilitySelect = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, highAbility:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, highAbility:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleLowAbilitySelect = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, lowAbility:selection}
            } return NPC
        })
        this.setState({
            NPCData: {...this.state.NPCData, lowAbility:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleApperanceSelect = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, appearance:selection}
            } return NPC
        })
        
        this.setState({
            NPCData: {...this.state.NPCData, appearance:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCTalent = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, talent:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, talent:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCManner = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, manner:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, manner:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCTrait = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, trait:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, trait:selection}
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCIdeal = (eventKey, event, index) => {
        const choice = event.target.text.trim()
        const drilledChoices = this.state.NPCIdeals.find(item => item.main === choice)
        const idealsOptions = drilledChoices.list

        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, ideal:choice}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, ideal:choice, finalIdeal:idealsOptions},
            isDisabled: false,
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleDrilledIdeal = (eventKey, event, index) => {
        const choice = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, drilledIdealChoice:choice}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, drilledIdealChoice:choice},
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCBond = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, bond:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, bond:selection},
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleNPCFlawSecret = (eventKey, event, index) => {
        const selection = event.target.text
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, flawOrSecret:selection}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, flawOrSecret:selection},
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleChange = (event, index) => {
        const name = event.target.value
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, NPCName:name}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, NPCName:name},
        })

        this.props.setNPCData("NPCData", newNPC)
    }

    handleImageLink = (event) => {
        const image = event.target.value

        this.setState({
            NPCData: {...this.state.NPCData, NPCImage:image},
        })
    }

    handleImageSubmit = (event, index) => {
        let image=this.state.NPCData.NPCImage

        const reduxNPCData = this.props.campaign.NPCData

        if (image !== "") {
            image=image
        } else {
            image= "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg"
        }

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, NPCImage:image}
            } return NPC
        })

        this.setState({
            setImageLink: image,
            NPCData: {...this.state.NPCData, NPCImage:image},
        })

        this.props.setNPCData("NPCData", newNPC)

        this.refs.overlay.hide();
    }

    handleGenerateBtn = (index, name, feedback) => {
        const reduxNPCData = this.props.campaign.NPCData
        
        console.log("index", index)
        console.log("name", name)
        console.log("feedback", feedback)

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, NPCName:name}
            } return NPC
        })

        this.setState({
            NPCData: {...this.state.NPCData, NPCName:name},
        })

        this.props.setNPCData("NPCData", newNPC)
    }



render() { 
    return (
        
        <div>
            <Card className="changeOverflow d-flex flex-column align-items-center color">
                
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
                                    <FormControl type="text" placeholder="Image Link" className="mr-sm-2" value={this.state.value} onChange={this.handleImageLink}/>
                                    <Button onClick={(event) => this.handleImageSubmit(event, this.props.index)} className="imageSubmit">Submit</Button>
                                </div>
                            </Popover.Content>
                        </Popover>
                        }
                        >
                        <Card.Img className="NPCimage" variant="top" src={this.state.setImageLink}/> 
                    </OverlayTrigger>
                </div>
                
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{!this.state.NPCData.NPCName ? `NPC # ${this.props.name +1}` : `${this.state.NPCData.NPCName}`}</Card.Title>

                    <Form inline className="giveMeNPCSpace">
                        <FormControl type="text" placeholder="NPC Name" className="mr-sm-2" value={this.state.value} onChange={(event) => this.handleChange(event, this.props.index)}/>
                        <div style={{paddingRight: "10px"}}>or</div> 

                        {/* <OverlayTrigger overlay={
                            <Tooltip>Coming Soon!</Tooltip>}>
                            <span className="d-inline-block">
                                <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                            </span>
                        </OverlayTrigger> */}

                        <GenerateBtn name="NPCS" handleGenerate={(name, feedback) => this.handleGenerateBtn(this.props.index, name, feedback)}></GenerateBtn>
                    </Form>

                    <Dropdown onSelect={(keyEvent, event) => this.handleGenderSelect(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.gender ?  `Gender: ${this.state.NPCData.gender}`: 'Choose your NPCs Gender'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Female</Dropdown.Item>
                            <Dropdown.Item>Male</Dropdown.Item>
                            <Dropdown.Item>Non Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown  onSelect={(keyEvent, event) => this.handleApperanceSelect(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.appearance ? `Appearance: ${this.state.NPCData.appearance}`: "Choose your NPC's Appearance"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.NPCAppearance.map(item => {return <Dropdown.Item>{item.option}</Dropdown.Item>})}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={(keyEvent, event) => this.handleHighAbilitySelect(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.highAbility ? `High Ability: ${this.state.NPCData.highAbility}`: "Choose your NPC's High Ability"}
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


                    <Dropdown onSelect={(keyEvent, event) => this.handleLowAbilitySelect(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.lowAbility ? `Low Ability: ${this.state.NPCData.lowAbility}`: "Choose your NPC's Low Ability"}
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

                    <Dropdown onSelect={(keyEvent, event) => this.handleNPCTalent(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.talent ? `Talent: ${this.state.NPCData.talent}`: "Choose your NPC's Talent"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.NPCTalents.map(drop => {
                                return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={(keyEvent, event) => this.handleNPCManner(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.manner? `Mannerism: ${this.state.NPCData.manner}`: "Choose your NPC's Mannerism"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bringToFront">
                            {this.state.NPCMannerisms.map(drop => {
                                return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={(keyEvent, event) => this.handleNPCTrait(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.trait ? `Trait: ${this.state.NPCData.trait}`: "Choose your NPC's Trait"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.NPCInteractionTraits.map(drop => {
                                return <Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="center">
                        <Dropdown onSelect={(keyEvent, event) => this.handleNPCIdeal(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                            {this.state.NPCData.ideal ? this.state.NPCData.ideal: "Choose your NPC's Ideal"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.NPCIdeals.map(drop => {
                                    return <Dropdown.Item name={drop.main}>{drop.main}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        {this.state.NPCData.ideal && (<Dropdown onSelect={(keyEvent, event) => this.handleDrilledIdeal(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary" disabled={this.state.isDisabled}>
                            {this.state.NPCData.drilledIdealChoice ? this.state.NPCData.drilledIdealChoice: "Choose your NPC's Ideal"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.state.NPCData.finalIdeal.map(drop => {
                                    return <Dropdown.Item name={drop}>{drop}</Dropdown.Item>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>)}
                    </div>

                    <Dropdown onSelect={(keyEvent, event) => this.handleNPCBond(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.bond ? `Bond: ${this.state.NPCData.bond}`: "Choose your NPC's Bond"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.NPCBonds.map(drop => {
                                return <Dropdown.Item  key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown onSelect={(keyEvent, event) => this.handleNPCFlawSecret(keyEvent, event, this.props.index)} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {this.state.NPCData.flawOrSecret ? `Flaw/Secret: ${this.state.NPCData.flawOrSecret}`: "Choose your NPC's Flaw or Secret"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.NPCFlawsSecrets.map(drop => {
                                return <Dropdown.Item  key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>
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