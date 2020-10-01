import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip, Card, CardGroup, Popover} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FormControlLabel, Checkbox} from '@material-ui/core'
import "../style.css"

class Patron extends Component {
    state ={
        showModal: false,
        patronData: {
            factions: []
        },
        show: false,
        imageLink: "",
        setImageLink: "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg",
        isDisabled: true,
        patronMannerisms: [
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
        patronInteractionTraits: [
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
            {id: 12, option: "Beautiful" },
            {id: 12, option: "Humorous" },
            {id: 12, option: "Generous" },
        ], 
        patronChoices: [
            "Retired Adventurer",
            "Local Ruler",
            "Military Officer",
            "Temple Official",
            "Sage",
            "Respected Elder",
            "Deity or Celestial",
            "Mysterious Fey",
            "Old Friend",
            "Former Teacher",
            "Parent or Family Member",
            "Desprate Commoner",
            "Embattled Merchant",
            "Villain posing as a patron",
            "Something else",
        ]
    }

    close = () =>  {
        this.setState({
            showModal: false,
        })

        this.props.setPatronData("patronData", this.state.patronData)
    }

    handleChange = (event) => {
        const patronName = event.target.value
        this.setState({
            patronData: {...this.state.patronData, name:patronName}
        })
    }

    handleClick = () => {
        this.setState({
            showModal: !this.state.showModal,
        })
    }

    handleGenderSelect = (eventKey, event) => {
        const selection = event.target.text
        
        this.setState({
            patronData: {...this.state.patronData, gender:selection}
        })
    }

    handleManner = (eventKey, event) => {
        const selection = event.target.text

        this.setState({
            patronData: {...this.state.patronData, manner:selection},
        })
    }

    handleTrait = (eventKey, event) => {
        const selection = event.target.text
        this.setState({
            patronData: {...this.state.patronData, trait:selection},
        })
    }

    handlePatronSlect = (eventkey, event) => {
        const selection = event.target.text
        this.setState({
            patronData: {...this.state.patronData, type:selection},
        })
    }

    handleImageLink = (event) => {
        this.setState({
            imageLink: event.target.value,
        })
    }

    handleImageSubmit = () => {
        let image = this.state.imageLink.trim()

        if (image !== "") {
            image = image
        } else {
            image = "https://journeypurebowlinggreen.com/wp-content/uploads/2018/05/placeholder-person-300x300.jpg"
        }

        this.setState({
            setImageLink: image,
            patronData: {...this.state.patronData, image:image},
        })
        
        this.refs.overlay.hide();
    }

    handleCheckBoxChange = (event, icon) => {
        let checked = event.target.checked
        let name = event.target.name

        if(checked) {
            
            let factions = [...this.state.patronData.factions]
            factions.push({name, icon})

            const newPatronData = {...this.state.patronData, factions:factions}
            this.setState({
                patronData: newPatronData
            })
        } else if (checked === false) {
                const patronFactionsKeep = this.state.patronData.factions.filter(item => (item.name !== name))
                
                this.setState({
                    patronData: {...this.state.patronData, factions:patronFactionsKeep}
                })
            }
    }


render() {  
    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={this.handleClick}>Patron
                </Button>
            </div>
            <Modal 
            size="lg" 
            show={this.state.showModal} 
            onHide={this.handleClick}
            enforceFocus={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Let's Create A Patron!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help create your patron.</p>
                    
                    <div className="d-flex flex-column align-items-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Patron Name" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}/>
                            <div style={{paddingRight: "10px"}}>or</div> 

                            <OverlayTrigger overlay={
                                <Tooltip>Coming Soon!</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button variant="outline-primary" style={{ pointerEvents: 'none' }} disabled>Generate</Button>
                                </span>
                            </OverlayTrigger>
                        </Form>

                        <br></br>

                        <div className="patronContainer">
                            <div>
                                <Card className="d-flex flex-column align-items-center villainPatronCard"
                                enforceFocus={false}
                                >
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
                                                        <FormControl type="text" placeholder="Image Link" className="mr-sm-2" value={this.state.imageLink} onChange={this.handleImageLink}/>
                                                        <Button onClick={this.handleImageSubmit} className="imageSubmit">Submit</Button>
                                                    </div>
                                                </Popover.Content>
                                            </Popover>
                                            }
                                            >
                                            <Card.Img className="NPCimage" variant="top" src={this.state.setImageLink}/> 
                                        </OverlayTrigger>
                                    </div>
                                    
                                    
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <Card.Title>{this.state.patronData.name && (`Name: ${this.state.patronData.name}`)}</Card.Title>
                                        <Dropdown onSelect={this.handleGenderSelect} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                            {this.state.patronData.gender ?  `Gender: ${this.state.patronData.gender}`: "Choose your Patron's Gender"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>Female</Dropdown.Item>
                                                <Dropdown.Item>Male</Dropdown.Item>
                                                <Dropdown.Item>Non Binary</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown onSelect={this.handlePatronSlect} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                            {this.state.patronData.type ? `Type: ${this.state.patronData.type}` : "Choose your Patron's Type"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {this.state.patronChoices.map(item => {
                                                    return <Dropdown.Item name={item}>{item}</Dropdown.Item>})}
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown onSelect={this.handleManner} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                            {this.state.patronData.manner ? `Mannerism: ${this.state.patronData.manner}`: "Choose your Patron's Mannerism"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {this.state.patronMannerisms.map(drop => {
                                                    return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown onSelect={this.handleTrait} className="giveMeNPCSpace">
                                            <Dropdown.Toggle variant="outline-primary">
                                                {this.state.patronData.trait ? `Trait: ${this.state.patronData.trait }`: "Choose your Patron's Trait"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {this.state.patronInteractionTraits.map(drop => {
                                                    return <Dropdown.Item key={drop.id} name={drop.option}> {drop.option}</Dropdown.Item>
                                                })}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                {this.props.campaign.factionOrgs.map(item => {
                                    return <div>
                                        <FontAwesomeIcon className="iconSpace" icon={item.icon}></FontAwesomeIcon>
                                        <FormControlLabel
                                        control={
                                        <Checkbox
                                        onChange={(event) => this.handleCheckBoxChange(event, item.icon)} 
                                        name={item.name}
                                        value={item.name}
                                        inputProps={item.icon}
                                        color="primary"/>}
                                        label={item.name}
                                        />
                                    </div>
                                    })}
                            </div>
                        </div>

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-success" onClick={this.close} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
}

export default Patron;