import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import "./home.css";
import { climax_data } from "./components/data";
import { setActsAndClimax } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Acts = ({ onSetActsAndClimx }) => {
    const [showModal, setShowModal] = useState(false);
    const [acts, setActs] = useState("");
    const [climax, setClimax] = useState("");

    const setReduxActsAndClimax = (destination, value) => {
        onSetActsAndClimx(destination, value)
    };

    const handleActBtn = (e) => {
        let choice = e.target.name;
        setReduxActsAndClimax('acts', choice);
        setActs(choice);
    };

    const handleClimax = (e) => {
        setClimax(e.target.name);
        setReduxActsAndClimax("climax", e.target.name);
    };
 
    const style = {
        width: "350px",
        height: "200px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Acts</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deciding on Acts.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Here were will decide how many acts this campaign should be. 
                            Like a play a campaing should have at least three acts. 
                            A party meeting, a dungeon exploration, and a final battle or acheivement of the end goal.
                        </p>
                        <div className="actBtnSpace">
                            <div className="actBtns">
                                <Button name="3" variant="outline-primary" onClick={handleActBtn}>3</Button>
                            </div>
                            <div className="actBtns">
                                <Button name="4" variant="outline-primary" onClick={handleActBtn}>4</Button>
                            </div>
                            <div className="actBtns">
                                <Button name="5" variant="outline-primary" onClick={handleActBtn}>5</Button>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p>Let's also plan your end goal. Click one of the boxes in the slider below.</p>
                            <Carousel interval={null}>
                                {climax_data.climaxOptions.map((drop, idx) => (
                                        <Carousel.Item key={idx}> 
                                            <div className="d-block w-100"></div> 
                                            <Button 
                                                variant="primary" 
                                                onClick={handleClimax} 
                                                key={drop.id} 
                                                style={style} 
                                                name={drop.option}>
                                                    {drop.option}
                                            </Button>
                                        </Carousel.Item>
                                    ))}
                            </Carousel>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-success" onClick={() => setShowModal(!showModal)}>Save</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetActsAndClimx: bindActionCreators(setActsAndClimax, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Acts);