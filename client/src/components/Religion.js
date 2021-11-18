import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RollBtn } from "./components";
import {Button, Dropdown, Form, FormControl, OverlayTrigger, Tooltip} from 'react-bootstrap';
import "./home.css";
import { religion_data } from "./components/data";
import { setReligion } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Religion = ({ onSetReligion }) => {
    const [religion, setReligion] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [other, setOther] = useState(false);

    const setReduxReligion = (destination, value) => {
        onSetReligion(destination, value)
    };

    const handleReligion = (ek, e) => {
        if (e.target.text === "Other") {
            setOther(true);
        } else {
            const selection = e.target.text;
            setReligion(selection);
            setReduxReligion("religion", selection);
        }
    }

    const handleChange = (e) => {
        const selection = e.target.value;
        setReligion(selection);
        setReligion("religion", selection);
    };

    const handleRoll = (feedback, name) => {
        setReligion(feedback);
        setReduxReligion("religion", feedback);
    };

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
                                {religion_data.godChoices.map((item, idx) => {
                                    return (
                                        <div key={idx}>
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
                        <RollBtn name="religion" handleRoll={handleRoll} rollingArray={religion_data.godChoices.map((item) => item.option)}/>
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

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetReligion: bindActionCreators(setReligion, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Religion);