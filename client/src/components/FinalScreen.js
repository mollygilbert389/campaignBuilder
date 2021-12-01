import React, { useState } from "react";
import { MapCard, CampaignCard } from "./components";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";
import "./home.css";

const FinalScreen = ({ campaign }) => {
  const [displayMap, setDisplayMap] = useState(false);
  const [randomMapId, setRandomMapId] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleGenerate = () => {
    setDisplayMap(true);
    setClicked(true);
    getMap();
  };

  function getMap() {
    // const mapChoice = campaign.world || "Forest";
    // let filteredMaps  = map_data.filter(map => (map.world.includes(mapChoice)));
    // const chosenMap = filteredMaps.map(map => map.id);
    // chosenMap.sort(function() {
    //     return .5 - Math.random();
    // });
    // let finalMapId = chosenMap[0];
    // setRandomMapId(finalMapId);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column align-items-center">
        <OverlayTrigger overlay={<Tooltip>Coming Soon!</Tooltip>}>
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
      <br />
      {displayMap && (
        <div>
          {/* <MapCard
            id={map_data[randomMapId].id}
            key={map_data[randomMapId].id}
            image={map_data[randomMapId].image}
            name={map_data[randomMapId].name}/> */}
          <CampaignCard />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

export default connect(mapStateToProps)(FinalScreen);
