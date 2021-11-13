import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Carousel } from 'react-bootstrap';
import { Slider } from '@material-ui/core';
import NPCCard from ".";
import "../../style.css";

const NPCs = ({ setReduxNPCData, campaign }) => {
    const [NPCNum, setNPCNum] = useState(null);
    const [NPCData, setNPCData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSlider = (event, value) => {
        let NPCData = []
        for(let i=0; i < value; i++ ) {
            let newObj = {id:i}
            NPCData.push(newObj)
        }
        setNPCNum(value);
        setNPCData(NPCData);
        setReduxNPCData("NPCData", NPCData)
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>NPCs</Button>
            </div>
            <Modal 
                size="lg" 
                show={showModal} 
                onHide={() => setShowModal(!showModal)}
                enforceFocus={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's get some NPCs added to your campaign.</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column align-items-center">
                    <p>
                        Below are some buttons to help you pick some NPCs. 
                        This modal is for NPCs that play a bigger part in your campaign, not necesarily the shopkeeper your characters will buy things from.
                    </p>
                    <br/>
                    <Slider
                        min={1}
                        max={5}
                        defaultValue={3}
                        className="sliderclass"
                        onChangeCommitted={handleSlider}
                        valueLabelDisplay="on"/>
                        {NPCData.length > 0 && (
                            <Carousel className="center" interval={null}>
                                {NPCData.map((item, index) => 
                                    {return (
                                        <Carousel.Item>
                                            <NPCCard 
                                                index={index} 
                                                key={item.id} 
                                                name={item.id}
                                                campaign={campaign}
                                                setNPCData={setNPCData}/>
                                        </Carousel.Item>
                                    )}
                                )}
                            </Carousel>
                        )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={() => setShowModal(!showModal)}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default NPCs;