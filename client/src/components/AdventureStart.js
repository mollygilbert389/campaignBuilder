import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Button, Dropdown } from "react-bootstrap";
import { setDungeonData } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { QUERY_ADVENTURE_DATA } from "../utils";
import "./home.css";

const AdventureStart = ({ campaign, onSetDungeonData }) => {
  const [showModal, setShowModal] = useState(false);
  const [dungeonTypeLocationSelected, setDungeonTypeLocationSelected] = useState(true);
  const [nondungeonTypeLocationSelected, setNondungeonTypeLocationSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const { data, loading, error } = useQuery(QUERY_ADVENTURE_DATA);

  const setReduxDungeonData = (destination, value) => {
    onSetDungeonData(destination, value);
  };

  const handleClick = () => {
    setShowModal(!showModal);
    setNondungeonTypeLocationSelected(false);
    setDungeonTypeLocationSelected(false);
  };

  const handleDungeonClick = (e) => {
    switch (e.target.name) {
      case "dungeonLocatios":
        setSelectedPlace("");
        setNondungeonTypeLocationSelected(false);
        setDungeonTypeLocationSelected(false);
        break;
      case "nondungeonLocatios":
        setNondungeonTypeLocationSelected(true);
        setDungeonTypeLocationSelected(true);
        setSelectedPlace("");
        break;
      default:
        return;
    }
  };

  const handleFinalEvent = (ek, e) => {
    const destructedData = { ...campaign.dungeonData, dungeonLocation:  e.target.text };
    setSelectedPlace(e.target.text);
    setReduxDungeonData("dungeonData", destructedData);
  };

  const handleAdventureStartDetail = (e) => {
    const destructedData = { ...campaign.dungeonData, dungeonDetail: e.target.name };
    setReduxDungeonData("dungeonData", destructedData);
  };

  const style = {
    width: "350px",
    height: "200px",
    padding: "40px",
    paddingTop: "10px",
    margin: "5px",
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div className="btns">
          <Button variant="outline-success" size="lg" onClick={handleClick}>
            Dungeon Start
          </Button>
        </div>
        <Modal size="lg" show={showModal} onHide={handleClick}>
          <Modal.Header closeButton>
            <Modal.Title>Let's figure out some dungeon details.</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <p>
              First let's figure out where your dungeon is. Then let's pick how
              your characters find themselves there.
            </p>
            <div>
              <Button
                className="giveMeSpace"
                onClick={handleDungeonClick}
                name={"dungeonLocatios"}>
                Dungeon Locations
              </Button>
              <Button
                className="giveMeSpace"
                onClick={handleDungeonClick}
                name={"nondungeonLocatios"}>
                Exotic Loactions
              </Button>
            </div>
            {!dungeonTypeLocationSelected && (
              <div className="giveMeSpace">
                <Dropdown onSelect={handleFinalEvent}>
                  <Dropdown.Toggle variant="outline-primary">
                    {selectedPlace ? selectedPlace : "Choose your Dungeon Location"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {data?.dungeonLocations.map((drop) => (
                        <Dropdown.Item key={drop.id} name={drop.option}>
                          {drop.option}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
            {nondungeonTypeLocationSelected && (
              <div className="giveMeSpace">
                <Dropdown onSelect={handleFinalEvent}>
                  <Dropdown.Toggle variant="outline-primary">
                    {selectedPlace ? selectedPlace : "Choose your Exotic Location"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {data?.nonDungeonLocations.map((drop) => (
                        <Dropdown.Item key={drop.id} name={drop.option}>
                          {drop.option}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
            <Carousel interval={null}>
              {data?.meetingSelections.map((drop) => (
                  <Carousel.Item key={drop.id}>
                    <Button
                      variant="primary"
                      onClick={handleAdventureStartDetail}
                      style={style}
                      name={drop.option}>
                      {drop.option}
                    </Button>
                  </Carousel.Item>
                ))}
            </Carousel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClick}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetDungeonData: bindActionCreators(setDungeonData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(AdventureStart);
