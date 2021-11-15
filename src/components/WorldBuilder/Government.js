import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { governmentData, Languages } from "./components";
import { RollBtn } from "../StaticComps";
import { Button, Dropdown, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import "./style.css"
import { setGovernmentData, setLanguageShow } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Government = ({ onSetGovernmentData, onSetLanguageShow }) => {
    const setReduxGovernmentData = (destinaton, value) => {
        onSetGovernmentData(destinaton, value)
    }
    const setReduxLanguageShow = (destination, value) => {
        onSetLanguageShow(destination, value)
    }
    const [government, setGovernment] = useState("");
    const [currency, setCurrency] = useState("");
    const [showModal, setShowModal] = useState(false);
    const currencyOptions = [
        "Common Coinage",
        "Common Coinage (No Electum)",
        "Trade Bars",
        "Barter System",
        "Odd Currency",
    ];

    const handleDropSelect = (ek, e, type) => {
        const feedback = e?.target?.text;
        if(type ===  "government") {
            setGovernment(e.target.text);
            setReduxGovernmentData(type, feedback);
        } else {
            setCurrency(e.target.text);
            setReduxGovernmentData(type, feedback);
        }
    };

    const handleClose = () => {
        setShowModal(!showModal);
    };

    const handleRoll = (name, feedback, type) => {
      if(type ===  "government") {
        setGovernment(name);
        setReduxGovernmentData(type, name)
      } else {
        setCurrency(name);
        setReduxGovernmentData(type, name)
      }
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Government</Button>
            </div>
            <Modal   size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's pick a government some local languages and our world's currency.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>Below are some buttons to help you make those decisions.</p>
                    <br/>
                    <Form inline>
                        <Dropdown onSelect={(ek, e) => handleDropSelect(ek, e, "government")}>
                            <Dropdown.Toggle variant="outline-primary">
                                {government ? government: 'Choose Your Government'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {governmentData.map((item, idx) => (
                                        <div key={idx}>
                                            <OverlayTrigger overlay={<Tooltip>{item.description}</Tooltip>}>
                                                <span className="d-inline-block">
                                                    <Dropdown.Item key={item.id} name="government">{item.name}</Dropdown.Item>
                                                </span>
                                            </OverlayTrigger> 
                                        </div>
                                    ))}       
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="government" handleRoll={(name, feedback) => handleRoll(name, feedback, "government")} rollingArray={governmentData.map((item) => item.name)}/>
                    </Form>
                    <br/>
                    <Form inline>
                        <Dropdown onSelect={(ek, e) => handleDropSelect(ek, e, "currency")}>
                            <Dropdown.Toggle variant="outline-primary">
                                {currency ? currency: 'Choose Your Currency'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {currencyOptions.map((item, idx) => (<Dropdown.Item key={idx} name="currency">{item}</Dropdown.Item>))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="currency" handleRoll={(name, feedback) => handleRoll(name, feedback, "currency")} rollingArray={currencyOptions}/>
                    </Form>
                    <Languages/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetGovernmentData: bindActionCreators(setGovernmentData, dispatch),
    onSetLanguageShow: bindActionCreators(setLanguageShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Government);