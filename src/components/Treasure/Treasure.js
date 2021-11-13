import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FormControlLabel, Checkbox, FormGroup, Slider } from '@material-ui/core';
import "./style.css";

const Treasure = ({ campaign, setReduxTreasureData }) => {
    const [showModal, setShowModal] = useState(false);
    const [equipment, setEquipment] = useState(false);
    const [magicItem, setMagicItem] = useState(false);
    const [gems, setGems] = useState(false);
    const [money, setMoney] = useState(false);
    const [tradeGoods, setTradeGoods] = useState(false);
    const [justXp, setJustXp] = useState(false);
    const [treasures, setTreasures] = useState([]);
    const [treasureNumber, setTreasureNumber] = useState(0);
    const [suggestedTreasure, setSuggestedTreasure] = useState(0);

    // const handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.checked 
    //     });
    // }

    const suggestMeTreasure = () =>{
        let rooms = campaign.dungeonData.rooms;
        rooms = parseInt(rooms);
        rooms = Math.round(rooms / 2);
        rooms = rooms -1;
        setSuggestedTreasure(rooms);
        setTreasureNumber(rooms);
    };

    const handleClick = () => {
        setShowModal(!showModal);
        suggestMeTreasure();
    }

    const close = () => {
        let treasueHolder = [];
        if (equipment) {
            treasueHolder = treasueHolder.concat("Equipment");
        }
        if (magicItem) {
            treasueHolder = treasueHolder.concat("Magic Items");
        }
        if (gems) {
            treasueHolder = treasueHolder.concat("Gems, Jewelry, Art");
        }
        if (money) {
            treasueHolder = treasueHolder.concat("Money");
        }
        if (tradeGoods) {
            treasueHolder = treasueHolder.concat("Trade Goods");
        }
        if (justXp) {
            treasueHolder = treasueHolder.concat("XP Points");
        }
        setShowModal(!showModal);
        setTreasures(treasueHolder);
        const currentTrasureData=campaign.treasureData;
        const destructedData = {...currentTrasureData, treasureTypes: treasueHolder, treasureNumber: treasureNumber}
        setReduxTreasureData("treasureData", destructedData);
    };

    // handleModalClose = () => {
    //     this.setState({
    //         showModal: !this.state.showModal,
    //     })
    // }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={handleClick}>Treasure</Button>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's talk Treasure!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some buttons to help create the tresure and experience earned for your game!</p>
                    <p>
                        You have selected {campaign.rooms} rooms and a short campaign. 
                        Due to this reason we suggest you have {suggestedTreasure} treasures excluding the quest price. 
                        Please check the boxes below of items you'd like to include and we'll generate them for you.
                    </p>
                    <br/>
                    <Slider
                    min={1}
                    max={10}
                    defaultValue={suggestedTreasure}
                    onChangeCommitted={(e,  value) => treasureNumber(value)}
                    valueLabelDisplay="on"/>
                    <FormGroup>
                        <FormControlLabel disabled={(justXp) ? true: false}
                        control={
                            <Checkbox 
                            checked={equipment} 
                            onChange={(e) => setEquipment(e.target.checked)} 
                            name="equipment"
                            value="Equipment" 
                            color="primary"/>}
                        label="Equipment"/>
                        <FormControlLabel disabled={(justXp) ? true: false}
                        control={
                            <Checkbox 
                            checked={magicItem} 
                            onChange={(e) => setMagicItem(e.target.checked)} 
                            name="magicItem"
                            value="Magic Item" 
                            color="primary"/>}
                        label="Magic Items"/>
                        <FormControlLabel disabled={(justXp) ? true: false}
                        control={
                            <Checkbox 
                            checked={gems} 
                            onChange={(e) => setGems(e.target.checked)} 
                            name="gems"
                            value="Gems, Jewelry, Art" 
                            color="primary"/>}
                        label="Gems, Jewelry, Art"/>
                        <FormControlLabel disabled={(justXp) ? true: false}
                        control={
                            <Checkbox 
                            checked={tradeGoods} 
                            onChange={(e) => setTradeGoods(e.target.checked)} 
                            name="tradeGoods" 
                            value="Trade Goods"
                            color="primary"/>}
                        label="Trade Goods"/>
                        <FormControlLabel disabled={(justXp) ? true: false}
                        control={
                            <Checkbox 
                            checked={money} 
                            onChange={(e) => setMoney(e.target.checked)} 
                            name="money" 
                            value="Money"
                            color="primary"/>}
                        label="Money"/>
                        <FormControlLabel disabled={(tradeGoods || gems || magicItem || equipment || money) ? true: false}
                        control={
                            <Checkbox 
                            checked={justXp} 
                            onChange={(e) => setJustXp(e.target.checked)} 
                            name="justXp" 
                            value="XP Points"
                            color="primary"/>}
                        label="Just XP"/>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={close}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Treasure;