import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RollBtn } from "./components";
import { Button, Dropdown, Form, FormGroup } from 'react-bootstrap';
import "./home.css";
import { setWorldData } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const  Physical = ({ onSetWorldData }) => {
    const [showModal, setShowModal] = useState(false);
    const [eventCap, setEventCap] = useState(false);
    const [world, setWorld] = useState("");
    const [uniqueFeature, setUniqueFeatures] = useState("");
    const [era, setEra] = useState("");
    const [mapScale, setMapScale] = useState("");
    const [charMeeting, setCharMeeting] = useState("");
    const [travelPointChoices, setTravelPointChoices] = useState([]);
    const worldOptions = [
        "Aquatic",
        "Desert",
        "Grassland",
        "Savanna",
        "Taiga",
        "Temperate Forest",
        "Tropical Rainforest",
        "Tundra",
    ];
    const eraOptions = [
        "Beowulf Adventure Trope (The age of heros magic is common)",
        "Victorian Era (The time of romance magic is uncommon)",
        "Present Day (Modern technology magic does not exist)",
        "Steampunk Future (Technology & chivalry rule and magic is common)",
        "Dystopian Post Appocolypse (Chaos magic is uncommon)",
    ];
    const featureOptions = [
        "At the base of a dorment valcano",
        "Extreme Weather",
        "Architecutral building or Massive Statue",
        "Many moons",
        "Large Bodies of Water",
        "Large Mountains",
        "Local Ruins",
        "Large Forest",
        "Swamp or Delta",
        "Religious Site",
        "Deserted City",
        "Canyon or Gorge",
        "Northern Lights",
    ];
    const mapScaleOptions = [
        "Village",
        "Town",
        "City",
    ];
    const meetingOptions = [
        "Meet in a tavern about a contract",
        "Party has already adventured together",
        "One member brings the group together",
        "Meet at a party",
        "Meet at school",
        "Mysterious Circumstance",
    ];
    const [travelPoints, setTravelPoints] = useState([
        "Cave",
        "Forest",
        "Jungle",
        "Lake",
        "Meadow",
        "Mountains",
        "Oasis",
        "Ocean",
        "Plains",
        "Ruins",
        "Swamp",
        "Tomb",
        "Volcano"
    ])

    const setReduxWorldData = (destination, value) => {
        onSetWorldData(destination, value)
    };

    const handleWorldImage = (name) => {
    let worldStyle = ""
    switch(name){
        case "Aquatic": 
            worldStyle = `url("https://cdn.thinglink.me/api/image/751892544790462466/1240/10/scaletowidth")`
        break;
        case "Desert": 
            worldStyle = `url(https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg)`
        break;
        case "Grassland": 
            worldStyle = `url(https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1571433135/191020-patterson-grasslands-national-park-hero_hog9nh)`
        break;
        case "Savanna": 
            worldStyle = `url(https://anthropocenemagazine.org/wp-content/uploads/2019/12/Kenyan-Savanna.jpg)`
        break;
        case "Taiga": 
            worldStyle = `url(https://images.squarespace-cdn.com/content/v1/580fc948725e25ff5496284a/1485085312851-F9M3TKZWG2P7MURJIIRN/ke17ZwdGBToddI8pDm48kG87Sfbgg29A4BYEDq3OXvgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcf4OxbJOyh_wHUnyc4kQLQ6SBshRGOku7c30Y_IRDNPta8R2IY5BHMaEj1zOWoDTZ/Taiga+Forest)`
        break;
        case "Temperate Forest": 
            worldStyle = `url(https://i.pinimg.com/564x/4f/8b/5d/4f8b5dff3e22b7ca64b19587c292e70b.jpg)`
        break;
        case "Tropical Rainforest": 
            worldStyle = `url(https://cdn.europosters.eu/image/1300/wall-murals/jungle-312x219-cm-premium-non-woven-130gsm-i79054.jpg)`
        break;
        case "Tundra": 
            worldStyle = `url(https://cdn.zmescience.com/wp-content/uploads/2016/02/file6861342703862.jpg)`
        break;
        default: 
            return;
        }
        setReduxWorldData("worldStyle", worldStyle);
    }

    const handleDropSelect = (ek, e, type) => {
        const feedback = e?.target?.text || ek;
        switch(type) {
            case "world" :
                setWorld(feedback);
                break;
            case "era": 
                setEra(feedback);
                break;
            case "uniqueFeatures": 
                setUniqueFeatures(feedback);
                break;
            case "charMeeting": 
                setCharMeeting(feedback);
                break;
            case "mapScale": 
                setMapScale(feedback);
                break;
            default:
                break;   
        }
        handleWorldImage(feedback);
        setReduxWorldData(type, feedback);
        if(type === "world") {
            handleTravelPointState(feedback);
        }
    }

    const handleTravelPointState = (feedback) => {
        switch(feedback) {
            case "Aquatic":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Lake",
                    "Mountains",
                    "Ocean",
                    "Ruins",
                    "Tomb",
                    "Volcano",
                ])
            break;
            case "Desert":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Mountains",
                    "Oasis",
                    "Ruins",
                    "Tomb",
                ])
            break;
            case "Grassland":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Forest",
                    "Lake",
                    "Meadow",
                    "Plains",
                    "Ruins",
                    "Swamp",
                    "Tomb",
                ])
            break;
            case "Savanna":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Oasis",
                    "Ruins",
                    "Tomb",
                ])
            break;
            case "Taiga":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Forest",
                    "Lake",
                    "Meadow",
                    "Mountains",
                    "Rivers",
                    "Ruins",
                    "Tomb",
                    "Volcano",
                ])
            break;
            case "Temperate Forest":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Forest",
                    "Lake",
                    "Meadow",
                    "Mountains",
                    "Rivers",
                    "Ruins",
                    "Tomb",
                    "Volcano",
                ])
            break;
            case "Tropical Rainforest":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Jungle",
                    "Rivers",
                    "Ruins",
                    "Swamp",
                    "Tomb",
                ])
            break;
            case "Tundra":
                setTravelPointChoices([])
                setTravelPoints([
                    "Cave",
                    "Forest",
                    "Lake",
                    "Mountains",
                    "Ocean",
                    "Ruins",
                    "Tomb",
                ])
            break;
            default: 
                setTravelPointChoices([]);
                setTravelPoints([]);
            break;
        }
    }

    const handleAddEvent = (e) => {
        const updatedChoiceList = travelPointChoices.concat(e.target.value);
        const filteredChoiceList = updatedChoiceList.filter((item, index) => updatedChoiceList.indexOf(item) === index);
        setTravelPointChoices(filteredChoiceList);
        if (travelPointChoices.length >= 3) {
            setEventCap(true);
        }
        setReduxWorldData("travelPointChoices", filteredChoiceList);
    }

    const removeEvent = (e) => {
        console.log(e.target.value);
        const newChoiceList = travelPointChoices.filter((eventName) => eventName !== e.target.value);
        setTravelPointChoices(newChoiceList);
        if (travelPointChoices.length <= 5) {
            setEventCap(false);
        } 
        setReduxWorldData("travelPointChoices", newChoiceList);
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>The Physical</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Paint with all the colors.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>
                        Below are some buttons to help create your ideal world! 
                        The decisions you make now will help create a unique campaign down the line!
                    </p>
                    <FormGroup>
                        <Form inline>
                            <Dropdown name="world" onSelect={(ek, e) => handleDropSelect(ek, e, "world")}>
                                <Dropdown.Toggle variant="outline-primary" name="world">
                                    {world ? `Setting: ${world}`: 'What is your setting?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu name="world">
                                    {worldOptions.map((item, idx) => (<Dropdown.Item key={idx} name="world">{item}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="world" handleRoll={(ek, e) => handleDropSelect(ek, e, "world")} rollingArray={worldOptions}/>
                        </Form>
                    </FormGroup>
                    <FormGroup>
                        <Form inline>
                            <Dropdown name="era" onSelect={(ek, e) => handleDropSelect(ek, e, "era")}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {era ? `Era: ${era}`: 'What era does this adventure take place?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {eraOptions.map((item, idx) => (<Dropdown.Item key={idx} name="era">{item}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="era" handleRoll={(ek, e) => handleDropSelect(ek, e, "era")} rollingArray={eraOptions}/>
                        </Form>
                    </FormGroup>
                    <FormGroup>
                        <Form inline>
                            <Dropdown name="uniqueFeature" onSelect={(ek, e) => handleDropSelect(ek, e, "uniqueFeatures")}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {uniqueFeature ? `Feature: ${uniqueFeature}`: 'Does this world have a unique feature?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {featureOptions.map((item, idx) => (<Dropdown.Item key={idx} name="uniqueFeature">{item}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="uniqueFeature" handleRoll={(ek, e) => handleDropSelect(ek, e, "uniqueFeatures")} rollingArray={featureOptions}/>
                        </Form>
                    </FormGroup>
                    <FormGroup>
                        <Form inline>
                            <Dropdown name="mapScale" onSelect={(ek, e) => handleDropSelect(ek, e, "mapScale")}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {mapScale ? `Size: ${mapScale}` : 'What kind of place are your adventurers starting?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {mapScaleOptions.map((item, idx) => (<Dropdown.Item key={idx} name="mapScale">{item}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="mapScale" handleRoll={(ek, e) => handleDropSelect(ek, e, "mapScale")} rollingArray={mapScaleOptions}/>
                        </Form>
                    </FormGroup>
                    <FormGroup>
                        <Form inline>
                            <Dropdown name="charMeeting" onSelect={(ek, e) => handleDropSelect(ek, e, "charMeeting")}>
                                <Dropdown.Toggle variant="outline-primary">
                                    {charMeeting ? `Meeting: ${charMeeting}`: 'How do your characters know each other?'}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {meetingOptions.map((item, idx) => (<Dropdown.Item key={idx} name="charMeeting">{item}</Dropdown.Item>))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <RollBtn name="charMeeting" handleRoll={(ek, e) => handleDropSelect(ek, e, "charMeeting")} rollingArray={meetingOptions}/>
                        </Form>
                    </FormGroup>
                    <p>Consider some places your adventurers might travel through. Pick only 3.</p>
                    <div className="container">
                        <div className="side tags">
                            {travelPoints.map((drop, idx) => {
                                const travelPoint = travelPointChoices?.find((item) => item === drop) || false;
                                const eventCap = travelPointChoices.length >= 3 ? true : false;
                                return (
                                    <Button 
                                        key={idx}
                                        name="travelPointChoices" 
                                        value={drop} 
                                        className="eventbtns" 
                                        onClick={handleAddEvent} 
                                        disabled={eventCap || travelPoint}> 
                                        {drop}
                                    </Button>
                                )
                            })}
                        </div>
                        <div className="side tags">
                        {travelPointChoices.map((drop, idx) => (
                            <Button 
                                key={idx}
                                name="travelPointChoices" 
                                value={drop} 
                                className="eventbtns" 
                                onClick={removeEvent}> 
                                {drop}
                            </Button>
                        ))}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetWorldData: bindActionCreators(setWorldData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Physical);
