import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { RollBtn } from "./components";
import { Button, Dropdown, Form, FormGroup } from "react-bootstrap";
import "./home.css";
import { setWorldData } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { QUERY_PHYSICAL_DATA } from "../utils";

const Physical = ({ onSetWorldData }) => {
  const [showModal, setShowModal] = useState(false);
  const [eventCap, setEventCap] = useState(false);
  const [world, setWorld] = useState("");
  const [uniqueFeature, setUniqueFeatures] = useState("");
  const [era, setEra] = useState("");
  const [mapScale, setMapScale] = useState("");
  const [charMeeting, setCharMeeting] = useState("");
  const [travelPointChoices, setTravelPointChoices] = useState([]);
  const { data, loading, error } = useQuery(QUERY_PHYSICAL_DATA);
  const [travelPoints, setTravelPoints] = useState([]);
  const physicalData = data;

  React.useEffect(() => {
    if((physicalData?.travelPoints || []).length > 0) {
        setTravelPoints(physicalData.travelPoints)
    }
  }, [physicalData])

  const setReduxWorldData = (destination, value) => {
    onSetWorldData(destination, value);
  };

  const handleWorldImage = (name) => {
    const img = (physicalData?.worldStyles || []).find((item) => item.type === name).image
    setReduxWorldData("worldStyle", img);
  };

  const handleDropSelect = (ek, e, type) => {
    const feedback = e?.target?.text || ek;
    switch (type) {
      case "world":
        setWorld(feedback);
        handleWorldImage(feedback);
        handleTravelPointState(feedback);
        break;
      case "era":
        setEra(feedback);
        break;
      case "uniqueFeatures":
        setUniqueFeatures(feedback);
        break;
      case "charMeeting":
        setCharMeeting(feedback);
        break;
      case "mapScale":
        setMapScale(feedback);
        break;
      default:
        break;
    }
    setReduxWorldData(type, feedback);
  };

  const handleTravelPointState = (feedback) => {
    setTravelPointChoices([]);
    setTravelPoints((physicalData?.travelPoints || []).map((item) => item.type.includes(feedback) ? item : null).filter((obj) => obj !== null));
  };

  const handleAddEvent = (e) => {
    const updatedChoiceList = travelPointChoices.concat(e.target.value);
    const filteredChoiceList = updatedChoiceList.filter((item, index) => updatedChoiceList.indexOf(item) === index);
    setTravelPointChoices(filteredChoiceList);
    if (travelPointChoices.length >= 3) {
      setEventCap(true);
    }
    setReduxWorldData("travelPointChoices", filteredChoiceList);
  };

  const removeEvent = (e) => {
    const newChoiceList = travelPointChoices.filter((eventName) => eventName !== e.target.value);
    setTravelPointChoices(newChoiceList);
    if (travelPointChoices.length <= 5) {
      setEventCap(false);
    }
    setReduxWorldData("travelPointChoices", newChoiceList);
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div className="btns">
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            The Physical
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Paint with all the colors of the wind.</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <p>
              Below are some buttons to help create your ideal world! The
              decisions you make now will help create a unique campaign down the
              line!
            </p>
            <FormGroup>
              <Form inline>
                <Dropdown
                  name="world"
                  onSelect={(ek, e) => handleDropSelect(ek, e, "world")}>
                  <Dropdown.Toggle variant="outline-primary" name="world">
                    {world ? `Setting: ${world}` : "What is your setting?"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu name="world">
                    {(physicalData?.worlds || []).map((item, idx) => (
                      <Dropdown.Item key={idx} name="world">
                        {item.option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RollBtn
                  name="world"
                  handleRoll={(ek, e) => handleDropSelect(ek, e, "world")}
                  rollingArray={(physicalData?.worlds || []).map((item) => item.option)}/>
              </Form>
            </FormGroup>
            <FormGroup>
              <Form inline>
                <Dropdown
                  name="era"
                  onSelect={(ek, e) => handleDropSelect(ek, e, "era")}>
                  <Dropdown.Toggle variant="outline-primary">
                    {era
                      ? `Era: ${era}`
                      : "What era does this adventure take place?"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {(physicalData?.eras || []).map((item, idx) => (
                      <Dropdown.Item key={idx} name="era">
                        {item.option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RollBtn
                  name="era"
                  handleRoll={(ek, e) => handleDropSelect(ek, e, "era")}
                  rollingArray={(physicalData?.eras || []).map((item) => item.option)}/>
              </Form>
            </FormGroup>
            <FormGroup>
              <Form inline>
                <Dropdown
                  name="uniqueFeature"
                  onSelect={(ek, e) => handleDropSelect(ek, e, "uniqueFeatures")}>
                  <Dropdown.Toggle variant="outline-primary">
                    {uniqueFeature
                      ? `Feature: ${uniqueFeature}`
                      : "Does this world have a unique feature?"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {(physicalData?.features || []).map((item, idx) => (
                      <Dropdown.Item key={idx} name="uniqueFeature">
                        {item.option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RollBtn
                  name="uniqueFeature"
                  handleRoll={(ek, e) => handleDropSelect(ek, e, "uniqueFeatures")}
                  rollingArray={(physicalData?.features || []).map((item) => item.option)}/>
              </Form>
            </FormGroup>
            <FormGroup>
              <Form inline>
                <Dropdown
                  name="mapScale"
                  onSelect={(ek, e) => handleDropSelect(ek, e, "mapScale")}>
                  <Dropdown.Toggle variant="outline-primary">
                    {mapScale
                      ? `Size: ${mapScale}`
                      : "What kind of place are your adventurers starting?"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {(physicalData?.mapScales || []).map((item, idx) => (
                      <Dropdown.Item key={idx} name="mapScale">
                        {item.option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RollBtn
                  name="mapScale"
                  handleRoll={(ek, e) => handleDropSelect(ek, e, "mapScale")}
                  rollingArray={(physicalData?.mapScales || []).map((item) => item.option)}/>
              </Form>
            </FormGroup>
            <FormGroup>
              <Form inline>
                <Dropdown
                  name="charMeeting"
                  onSelect={(ek, e) => handleDropSelect(ek, e, "charMeeting")}>
                  <Dropdown.Toggle variant="outline-primary">
                    {charMeeting
                      ? `Meeting: ${charMeeting}`
                      : "How do your characters know each other?"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {(physicalData?.meetingLocations || []).map((item, idx) => (
                      <Dropdown.Item key={idx} name="charMeeting">
                        {item.option}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <RollBtn
                  name="charMeeting"
                  handleRoll={(ek, e) => handleDropSelect(ek, e, "charMeeting")}
                  rollingArray={(physicalData?.meetingLocations || []).map((item) => item.option)}/>
              </Form>
            </FormGroup>
            <p>
              Consider some places your adventurers might travel through. Pick
              only 3.
            </p>
            <div className="container">
              <div className="side tags">
                {(travelPoints || []).map((drop, idx) => {
                  const travelPoint = travelPointChoices?.find((item) => item === drop.option) || false;
                  const eventCap = travelPointChoices.length >= 3 ? true : false;
                  return (
                    <Button
                      key={idx}
                      name="travelPointChoices"
                      value={drop.option}
                      className="eventbtns"
                      onClick={(e) => handleAddEvent(e)}
                      disabled={eventCap || travelPoint}>
                      {drop.option}
                    </Button>
                  );
                })}
              </div>
              <div className="side tags">
                {(travelPointChoices || []).map((drop, idx) => (
                  <Button
                    key={idx}
                    name="travelPointChoices"
                    value={drop}
                    className="eventbtns"
                    onClick={removeEvent}>
                    {drop}
                  </Button>
                ))}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-success"
              onClick={() => setShowModal(!showModal)}>
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
  onSetWorldData: bindActionCreators(setWorldData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Physical);
