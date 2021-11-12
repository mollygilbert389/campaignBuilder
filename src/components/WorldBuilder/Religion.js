import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RollBtn } from "../StaticComps";
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap';
import "./style.css";

const Religion = () => {
    const [religion, setReligion] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [godChoices, setGodCoices] = useState([
        {id: 1, option: "Loose Pantheons (Suggested)", toolTipData: "Most campaigns have a loose pantheos of gods. A multitude of deities rule the various aspects of your world in either peace or conflict. People gather in public shrines to worship gods of life and wisdom." },
        {id: 2, option: "Tight Pantheons", toolTipData: "In contrast to loose pantheos, a tight pantheos focuses on a single religion whose teachings and edicts embrace a small group of deities." },
        {id: 3, option: "Mystery Cults", toolTipData: "This is a secretive religious organization based on a ritutal initiation. Mystery cults are intensly personal." },
        {id: 4, option: "Monotheism", toolTipData: "This religion revere's only one deity, and in some cases dny the existance of any other deity. For this to work you need to decide whether other gods exist." },
        {id: 5, option: "Dualism", toolTipData: "This religion views the world as the stage for a conflict between two diametrically opposed deities or divine forces. Most often, the opposed forces are good and evil." },
        {id: 6, option: "Animism", toolTipData: "This is the belief that spirits inhabit every part of the natural world. In an animistic worldview, everything has a spirit." },
        {id: 7, option: "Other", toolTipData: "Any religious pathos you want to have!" }
    ]);
    const [other, setOther] = useState(false);

    const handleReligion = (eventKey, event) => {
        if (event.target.text === "Other") {
            setOther(true);
        } else {
            const selection = event.target.text;
            setReligion(selection);
            this.props.setReligion("religion", selection);
        }
    }

    // const handleClick = () => {
    //     this.setState({
    //         showModal: !this.state.showModal,
    //     })
    // }

    const handleChange = (event) => {
        const selection = event.target.value;
        setReligion(selection);
        this.props.setReligion("religion", selection);
    }

    const handleRoll = (feedback, name) => {
        setReligion(feedback)
        this.props.setReligion("religion", feedback)
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Religion</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Gods Oversee the World.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you set up your gods.</p>
                    <br/>
                    <Form inline>
                        <Dropdown onSelect={handleReligion}>
                            <Dropdown.Toggle variant="outline-primary">
                                {religion ? `Religion: ${religion}`: 'Choose Your Religious Philosophy'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {godChoices.map( item => {
                                    return (
                                        <div>
                                            <OverlayTrigger overlay={<Tooltip>{item.toolTipData}</Tooltip>}>
                                                <span className="d-inline-block">
                                                    <Dropdown.Item key={item.id} name={item.option}>{item.option}</Dropdown.Item>
                                                </span>
                                            </OverlayTrigger>
                                        </div>
                                    )
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="religion" handleRoll={handleRoll} rollingArray={godChoices.map(item => item.option)}/>
                    </Form>
                    <br/>
                    {other && (
                        <FormControl type="text" placeholder="Add Religion" className="mr-sm-2" value={religion} onChange={handleChange}/>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Religion;