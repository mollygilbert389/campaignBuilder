import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import "../../../home.css";

const Renown = ({ campaign, setReduxPlayers }) => {
    const playerInfo = campaign.playerData
    const [playerOrgs, setPlayerOrgs] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event, index, icon) => {
        let checked = event.target.checked;
        let name = event.target.name;
        
        if(checked) {
            const newPlayerOrgs = [...playerOrgs, {name:name, playerNumId:index, icon:icon}];
            setPlayerOrgs(newPlayerOrgs);
        } else if (checked === false) {
            const allPlayersFactions = playerOrgs.filter((item) => (item.playerNumId !== index));
            const playersFactions = playerOrgs.filter((item) => (item.playerNumId === index));
            const itemsByPlayerToKeep = playersFactions.filter((item) => (item.name !== name));
            const finalPlayerFactions = [...allPlayersFactions, ...itemsByPlayerToKeep];
            setPlayerOrgs(finalPlayerFactions);
        }
    }

    const handleSave = () => {
        const players = campaign.playerData;
        const playersByID = [];
        players.forEach((player, index) => {
            player.factions = [];
            let playersFactions = playerOrgs.filter((item) => (item.playerNumId === index));
            player.factions.push(playersFactions);
            playersByID.push(player);
        })
        setShowModal(!showModal);
        setReduxPlayers("playerData", playersByID);
    }

    return (
        <div>
            <div className="btns">
                <Button variant="outline-success" size="lg" onClick={() => setShowModal(!showModal)}>Renown</Button>
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Do your characters have any renown with your factions/organizations?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below select the renown that each character has with each faction (can be none).</p>
                    <br/>
                    {playerInfo.length > 0 && (
                        <div className="characterRenownContainer">
                            {playerInfo.map((player, idx) => {
                                return (
                                    <div key={idx}>
                                        <div>{player.name}</div>
                                        {campaign.factionOrgs.map((faction, index) => {
                                            return (
                                                <div key={index}>
                                                    <FontAwesomeIcon className="iconSpace" icon={faction.icon}/>
                                                    <FormControlLabel
                                                        label={faction.name} 
                                                        control={
                                                            <Checkbox
                                                            onChange={(event) => handleChange(event, idx, faction.icon)} 
                                                            name={faction.name}
                                                            defaultChecked={player?.factions?.flat()?.find((item) => item.name === faction.name)?.name ? true : false}
                                                            inputProps={faction.icon}
                                                            color="primary"/>}/> 
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                                })}
                        </div>
                    )}
                    {playerInfo.length < 1 && (
                        <div className="characterRenownContainer">
                            <div>
                                <p>
                                    You haven't added charcters to your campaign yet! 
                                    If you're like to add certain renown to certain characters go back and a some characters in!
                                </p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleSave} >Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Renown;