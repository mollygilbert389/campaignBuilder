import React, { useState } from 'react';
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, Popover} from 'react-bootstrap';
import "../../style.css";

const EvilNPCCard = () => {
    const [showModal, setShowModal] = useState(false);
    const [imageLink, setImageLink] = useState("https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg");
    const [evilNPCData, setEvilNPCData] = useState({});
    const [subTypes, setSubTypes] = useState([
        "Beast or monstrosity with no particular agenda",
        "Abberation bent on corruption or desruction",
        "Dragon bent on domination and plunder",
        "Giant bent on plunder",
        "Undead with any agenda",
        "Fey with a mysterious goal",
        "Hummanoid cultist",
        "Hummanoid conqueror",
        "Hummanoid seeking revenge",
        "Hummanoid schemer seeking to rule",
        "Hummanoid criminal mastermind",
        "Hummanoid raider or ravager",
        "Hummanoid under a curse",
        "Misguided hummanoid zealot",
        "Something else"
    ]);
    
    const handleChange = (event, index) => {
        const name = event.target.value
        const reduxNPCData = this.props.campaign.NPCData

        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, NPCName:name}
            } return NPC
        })

        setEvilNPCData({...setEvilNPCData, NPCName:name})
        this.props.setNPCData("NPCData", newNPC)
    }

    const handleImageLink = (event) => {
        const image = event.target.value
        setEvilNPCData({...setEvilNPCData, NPCName:image})
    }

    const handleImageSubmit = (event, index) => {
        let image= setEvilNPCData.NPCImage
        const reduxNPCData = this.props.campaign.NPCData
        const newNPC = [...reduxNPCData].map(NPC => {
            if (NPC.id === index) {
                return {...NPC, NPCImage:image}
            } return NPC
        })
        setEvilNPCData({...setEvilNPCData, NPCName:image})
        this.props.setNPCData("NPCData", newNPC)
        this.refs.overlay.hide();
    }

    return (
        <div>
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
                                    <FormControl type="text" placeholder="Image Link" className="mr-sm-2" value={imageLink} onChange={handleImageLink}/>
                                    <Button onClick={handleImageSubmit} className="imageSubmit">Submit</Button>
                                </div>
                            </Popover.Content>
                        </Popover>
                    }>
                    <Card.Img className="NPCimage" variant="top" src={imageLink}/> 
                </OverlayTrigger>
                <Card.Body className="d-flex flex-column align-items-center">
                    <Form inline>
                        <FormControl type="text" placeholder="villain Name" className="mr-sm-2" value={evilNPCData?.name || ""} onChange={handleChange}/>
                        <div style={{paddingRight: "10px"}}>or</div> 
                        <OverlayTrigger overlay={
                            <Tooltip>Coming Soon!</Tooltip>}>
                            <span className="d-inline-block">
                                <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                            </span>
                        </OverlayTrigger>
                    </Form>
                    <Card.Title>{evilNPCData && (`Name: ${evilNPCData.name}`)}</Card.Title>
                <div className="d-flex flex-column align-items-center">
                    <Dropdown className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {'Choose your some evil NPC Types'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Beast or monstrosity with no particular agenda</Dropdown.Item>
                            <Dropdown.Item>Abberation bent on corruption or desruction</Dropdown.Item>
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
                    <Dropdown className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {'Choose your Adventure Villain'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Female</Dropdown.Item>
                            <Dropdown.Item>Male</Dropdown.Item>
                            <Dropdown.Item>Non Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="dualDrop giveMeNPCSpace">
                        <Dropdown className="giveMeNPCSpace">
                            <Dropdown.Toggle variant="outline-primary">
                                {"Choose your Villain's Main Objective"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* {this.state.villainObjectives.map(item => {
                                return <Dropdown.Item key={item.id} name={item.objectiveCat}>{item.objectiveCat}</Dropdown.Item>})} */}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                            {"Choose your Villain's Main Objective"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* {this.state.villainData.villainObjectivesPossible.map(item => {
                                return <Dropdown.Item name={item}>{item}</Dropdown.Item>})} */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="dualDrop giveMeNPCSpace">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                                {"Choose your Villain's Method"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* {this.state.villainMethods.map(item => {
                                return <Dropdown.Item key={item.id} name={item.methodCat}>{item.methodCat}</Dropdown.Item>})} */}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-primary">
                            {"Choose your Villain's Method"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {/* {this.state.villainData.villainMethodPossible.map(item => {
                                return <Dropdown.Item name={item}>{item}</Dropdown.Item>})} */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Dropdown className="giveMeNPCSpace">
                        <Dropdown.Toggle variant="outline-primary">
                            {"Choose your Villain's Weakness"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* {this.state.villainWeaknessChoices.map(item => {
                            return <Dropdown.Item key={item.id} name={item.option}>{item.option}</Dropdown.Item>})} */}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default EvilNPCCard;