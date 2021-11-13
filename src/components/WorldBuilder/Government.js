import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { governmentData, Languages } from "./components";
import { RollBtn } from "../StaticComps";
import { Button, Dropdown, OverlayTrigger, Tooltip, Form } from 'react-bootstrap';
import "./style.css"
import { setGovernmentData, setLanguages, setLanguageShow } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Government = ({ onSetGovernmentData, onSetLanguages, onSetLanguageShow, campaign }) => {
    const setReduxGovernmentData = (destinaton, value) => {
        onSetGovernmentData(destinaton, value)
    }
    const setReduxLanguages = (type) => {
        onSetLanguages(type)
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

    const handleDropSelect = (e, type) => {
        const name = e.target.name;
        const feedback = e.target.text;
        if(type ===  "government") {
            setGovernment(e.target.text);
        } else {
            setCurrency(e.target.text);
        }
        setReduxGovernmentData(name, feedback);
    };

    const handleClose = () => {
        setShowModal(!showModal);
        setReduxLanguageShow("languageShow", true);
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
                        <Dropdown onSelect={handleDropSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {government ? government: 'Choose Your Government'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {governmentData.map(item => {
                                    return <div>
                                        <OverlayTrigger overlay={<Tooltip>{item.description}</Tooltip>}>
                                            <span className="d-inline-block">
                                                <Dropdown.Item key={item.id} name="government">{item.name}</Dropdown.Item>
                                            </span>
                                        </OverlayTrigger> 
                                    </div>
                                    })}       
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="government" handleRoll={(name, feedback) => setReduxGovernmentData(name, feedback)} rollingArray={governmentData.map((item) => item.name)}/>
                    </Form>
                    <br/>
                    <Form inline>
                        <Dropdown onSelect={handleDropSelect}>
                            <Dropdown.Toggle variant="outline-primary">
                                {currency ? currency: 'Choose Your Currency'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {currencyOptions.map(item => {return <Dropdown.Item name="currency">{item}</Dropdown.Item>})}
                            </Dropdown.Menu>
                        </Dropdown>
                        <RollBtn name="currency" handleRoll={(name, feedback) => setReduxGovernmentData(name, feedback)} rollingArray={currencyOptions}/>
                    </Form>
                    <Languages
                        campaign={this.props.campaign}
                        setLanguageShow={this.props.setLanguageShow}
                        setLanguages={this.props.setLanguages}/>
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
    onSetLanguages: bindActionCreators(setLanguages, dispatch),
    onSetLanguageShow: bindActionCreators(setLanguageShow, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Government);