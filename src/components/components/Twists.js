import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Carousel } from 'react-bootstrap';
import "../home.css";
import { setTwist } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Twists = ({ onSetTwist }) => {
    const [showModal, setShowModal] = useState(false);
    const [twistYesNo, setTwistYesNo] = useState(false);
    const twists = [
        {id: 1, option: "The adventurers are racing against other creatures with the same or opposite goals"},
        {id: 2, option: "The adventurers become responsible for the safety of a noncombatant NPC"},
        {id: 3, option: "The adventurers are prohibited from killing the villain, but the villain has no compunctions about killing them"},
        {id: 4, option: "The adventurers have a time limit"},
        {id: 5, option: "The adventurers have received false or extraneous information"},
        {id: 6, option: "Completeting an adventure goal fulfills a prophecy or prevents the fulfillment of a prophecy"},
        {id: 7, option: "The adventurers have two different goals, but they can only complete one"},
        {id: 8, option: "Completing the goal secretly helps the villain"},
        {id: 9, option: "The adventurers must cooperate with a known enemy to achieve a goal"},
        {id: 10, option: "The adventurers are under magical compulsion to complete their goal"},
    ];

    const setReduxTwist = (destination, value) => {
        onSetTwist(destination, value);
    };

    const handleNo = () => {
        setTwistYesNo(false);
        setReduxTwist("");
        setShowModal(!showModal);
    };

    const style = {
        width: "350px",
        height: "125px",
        padding: "40px",
        paddingTop: "10px",
        margin: "5px",
    };

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Twists</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>This is optional, do you want to add a twist to your story?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you want to add a twist?</p>
                    <br/>
                    <div className="sideQuestBtnSpace">
                        <div className="sideQuestBtns">
                            <Button name="Yes" variant="outline-success" onClick={() => setTwistYesNo(true)}>Yes</Button>
                        </div>
                        <div className="sideQuestBtns">
                            <Button name="No" variant="outline-danger" onClick={handleNo}>No</Button>
                        </div>
                    </div>
                    {twistYesNo && (
                        <div>
                            <div className="d-flex flex-column align-items-center">
                                <p>Click through these to add a fun twist to your story.</p>
                                <Carousel interval={null}>
                                    {twists.map((drop) => (
                                        <Carousel.Item> 
                                            <div className="d-block w-100"></div> 
                                            <Button 
                                                variant="primary" 
                                                onClick={(e) => setReduxTwist(e.target.name)} 
                                                style={style} 
                                                key={drop.id} 
                                                name={drop.option}>
                                                {drop.option}
                                            </Button> 
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    )}
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
    onSetTwist: bindActionCreators(setTwist, dispatch)
});

export default connect(mapStateToProps, mapDispatchtoProps)(Twists);