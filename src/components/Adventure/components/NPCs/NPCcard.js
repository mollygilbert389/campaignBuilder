import React, { useState, useRef } from 'react';
import { Button, Dropdown, Form, FormControl, OverlayTrigger, Card, Popover } from 'react-bootstrap';
import "../../style.css";
import { setNPCData } from "../../../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const NPCCard = ({ onSetNPCData, campaign, index }) => {
    const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
    const overlay = useRef(null);
    const [NPCData, setNPCData] = useState({});
    const NPCAppearance = [
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
    ];
    const NPCTalents = [
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
    ];
    const NPCMannerisms = [
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
    ];
    const NPCInteractionTraits = [
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
    ];
    const NPCIdeals = [
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
    ]; 
    const NPCBonds = [
        {id: 1, option: "Dedication to fulfilling a personal life goal" },
        {id: 2, option: "Protective of close family members" },
        {id: 3, option: "Protective of colleagues or compatriots" },
        {id: 4, option: "Loyal to a benefactor, patron, or employer" },
        {id: 5, option: "Captivated by a romantic interest" },
        {id: 6, option: "Drawn to a special place" },
        {id: 7, option: "Protective of a sentimental keepsake" },
        {id: 8, option: "Protective of a valuable possession" },
        {id: 9, option: "Out for revenge" },
    ];
    const NPCFlawsSecrets = [
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
    ];

    const setReduxNPCData = (destination, value) => {
        onSetNPCData(destination, value)
    };

    const handleSelections = (ek, event, index, type) => {
        const selection = event.target.text;
        const newNPC = [...campaign.NPCData].map((NPC) => {
            if (NPC.id === index) {
                return {...NPC, [type]: selection}
            } return NPC
        });
        setNPCData({...NPCData, [type]: selection});
        setReduxNPCData("NPCData", newNPC);
    }; 

    const handleNameorImageChange = (e, index, type) => {
        const newNPC = [...campaign.NPCData].map((NPC) => {
            if (NPC.id === index) {
                return {...NPC, [type]: e.target.value}
            } return NPC
        })
        setNPCData({...NPCData, [type]: e.target.value});
        setReduxNPCData("NPCData", newNPC);
    };

    const handleCloseOverlay = () => {
        overlay.current.hide();
    };
 
    return (
        <div>
            <Card enforceFocus={false} className="changeOverflow d-flex flex-column align-items-center color">
                <div>
                    <OverlayTrigger 
                        trigger="click"
                        ref={overlay}
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
                                            value={NPCData?.NPCImage} 
                                            onChange={(e) => handleNameorImageChange(e, index, "NPCImage")}/>
                                        <Button onClick={handleCloseOverlay} className="imageSubmit">Submit</Button>
                                    </div>
                                </Popover.Content>
                            </Popover>}>

                        <Card.Img className="NPCimage" variant="top" src={NPCData?.NPCImage || imageLink}/> 
                    </OverlayTrigger>
                </div>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{!NPCData.NPCName ? `NPC # ${index +1}` : `${NPCData.NPCName}`}</Card.Title>
                    <Form inline className="giveMeNPCSpace">
                        <FormControl 
                            type="text" 
                            placeholder="NPC Name" 
                            className="mr-sm-2" 
                            value={NPCData?.NPCName} 
                            onChange={(e) => handleNameorImageChange(e, index, "NPCName")}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        {/* <GenerateBtn name={NPCData[index].NPCName} handleGenerate={(feedback) => setPatronData({...patronData, name:feedback})}/> */}
                    </Form>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "gender")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.gender ?  `Gender: ${NPCData.gender}`: 'Choose your NPCs Gender'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Female</Dropdown.Item>
                            <Dropdown.Item>Male</Dropdown.Item>
                            <Dropdown.Item>Non Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown  onSelect={(ek, e) => handleSelections(ek, e, index, "appearance")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.appearance ? `Appearance: ${NPCData.appearance}`: "Choose your NPC's Appearance"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCAppearance.map((item, idx) => (<Dropdown.Item key={idx}>{item.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "highAbility")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.highAbility ? `High Ability: ${NPCData.highAbility}`: "Choose your NPC's High Ability"}
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
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "lowAbility")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.lowAbility ? `Low Ability: ${NPCData.lowAbility}`: "Choose your NPC's Low Ability"}
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
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "talent")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.talent ? `Talent: ${NPCData.talent}`: "Choose your NPC's Talent"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCTalents.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "manner")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.manner? `Mannerism: ${NPCData.manner}`: "Choose your NPC's Mannerism"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="bringToFront">
                            {NPCMannerisms.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "trait")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                        {NPCData.trait ? `Trait: ${NPCData.trait}`: "Choose your NPC's Trait"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCInteractionTraits.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="center">
                        <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "ideal")} className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                                {NPCData.ideal ? NPCData.ideal: "Choose your NPC's Ideal"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {NPCIdeals.map((drop, idx) => (<Dropdown.Item key={idx} name={drop.main}>{drop.main}</Dropdown.Item>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        {NPCData.ideal && (
                            <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "drilledIdealChoice")} className="giveMeNPCSpace">
                                <Dropdown.Toggle variant="outline-primary">
                                    {NPCData.drilledIdealChoice ? NPCData.drilledIdealChoice: "Choose your NPC's Ideal"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {NPCIdeals.find((item) => item.main ===  NPCData.ideal).list.map((drop, idx) => (<Dropdown.Item key={idx} name={drop}>{drop}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </div>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "bond")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.bond ? `Bond: ${NPCData.bond}`: "Choose your NPC's Bond"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCBonds.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={(ek, e) => handleSelections(ek, e, index, "flawOrSecret")} className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {NPCData.flawOrSecret ? `Flaw/Secret: ${NPCData.flawOrSecret}`: "Choose your NPC's Flaw or Secret"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {NPCFlawsSecrets.map((drop) => (<Dropdown.Item key={drop.id} name={drop.option}>{drop.option}</Dropdown.Item>))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetNPCData: bindActionCreators(setNPCData, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(NPCCard);