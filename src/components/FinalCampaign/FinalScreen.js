import React, { useState } from 'react';
import { MapCard, CampaignCard, maps } from "./components";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './style.css';
import { connect } from "react-redux";

const FinalScreen = ({ campaign }) =>  {
    const [displayMap, setDisplayMap] = useState(false);
    const [randomMapId, setRandomMapId] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleGenerate = () => {
        setDisplayMap(true);
        setClicked(true);
        getMap();
    };

    function getMap () {
        const mapChoice = campaign.world || "Forest";
        let filteredMaps  = maps.filter(map => (map.world.includes(mapChoice)));        
        const chosenMap = filteredMaps.map(map => map.id);
        chosenMap.sort(function() {
            return .5 - Math.random();
        });
        let finalMapId = chosenMap[0];
        setRandomMapId(finalMapId);
    };
    
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center">
                <OverlayTrigger 
                overlay={<Tooltip>Coming Soon!</Tooltip>}>
                    <span className="d-inline-block">
                        <Button 
                            variant="outline-danger" 
                            size="lg" 
                            onClick={handleGenerate}
                            href="/"
                            disabled>
                            Generate My Campaign
                        </Button>
                    </span>
                </OverlayTrigger>
            </div>
            <br/>
            {displayMap && (
                <div>
                    <MapCard
                        id={maps[randomMapId].id}
                        key={maps[randomMapId].id}
                        image={maps[randomMapId].image}
                        name={maps[randomMapId].name}/>
                    <CampaignCard/>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

export default connect(mapStateToProps)(FinalScreen);
