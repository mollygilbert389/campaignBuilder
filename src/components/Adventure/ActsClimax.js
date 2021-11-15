import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import "./style.css";
import { setActsAndClimax } from "../../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Acts = ({ onSetActsAndClimx }) => {
    const [showModal, setShowModal] = useState(false);
    const [acts, setActs] = useState("");
    const [climax, setClimax] = useState("");
    const climaxOptions = [
        {id:1, option: "The adventurers confront the main villain and a group of minions in a bloody battle to the finish"},
        {id:2, option: "The adventurers chase the villain while dodging obstacles designed to thwart them, leading to a final confrontation in or outside the villain's refuge"},
        {id:3, option: "The actions of the adventure of villain result in a cataclysmic event that the adventures must escape"},
        {id:4, option: "The adventures race to the site where the villain is bringing a master plan to its conclusion, arriving just as the plan is about to be completed"},
        {id:5, option: "The villain and two or three lieutenants perform separate rites in a large room. The adventurers must disrupt all the rites at the same time"},
        {id:6, option: "An ally betrays the adventurers as they're about to complete the main goal"},
        {id:7, option: "A portal opens up on another plane of existance. Creatures on the other side spill out, forcing the adventurers to close the portal and deal with the villain at the same time"},
        {id:8, option: "Traps, hazards, or animated objects turn against the adventurers as the main villain attacks"},
        {id:9, option: "The dungeon begins to collapse while the adventurers face the main villain, who attempts to escape in the chaos"},
        {id:10, option: "A threat more powerful than the adventurers appears, destroys the main villain, and then turns its attention on the characters"},
        {id:11, option: "The adventurers must choose whether to pursue the fleeing villain or save an NPC they care about or a group of innocents"},
        {id:12, option: "The adventurers must discover the main villains's secret weakness before they can hope to defeat that villain"}
    ];

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
                                {climaxOptions.map((drop, idx) => (
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