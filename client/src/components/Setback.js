import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Dropdown, FormControl, Modal } from "react-bootstrap";
import { setSetback } from "../actions";
import { QUERY_SETBACK_DATA } from "../utils";
import "./home.css";

const Setback = ({ onSetSetback }) => {
  const [showModal, setShowModal] = useState(false);
  const [setback, setSetback] = useState(false);
  const [largeSetback, setLargeSetback] = useState(false);
  const [smallSetback, setSmallSetback] = useState(false);
  const [setbackCat, setSetbackCat] = useState("");
  const [largeSetBackOptions, setLargeSetbackOptions] = useState([]);
  const [finalSetback, setFinalSetback] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { data, loading, error } = useQuery(QUERY_SETBACK_DATA);

  const setReduxSetback = (destination, value) => {
    onSetSetback(destination, value);
  };

  const setbackFunc = (e) => {
    switch (e.target.name) {
      case "Yes":
        setSetback(true);
        break;
      case "No":
        setSetbackCat(null);
        setFinalSetback(null);
        setShowInput(false);
        setLargeSetback(false);
        setSmallSetback(false);
        setReduxSetback("setback", "");
        setSetback(false);
        setShowModal(!showModal);
        break;
      default:
        break;
    }
  };

  const handleSetbackSelect = (ek, e, type) => {
    setShowInput(false);
    setFinalSetback(null);
    if (type === "large") {
      const largeEventOptions = data?.worldShakingEvents.find((item) => item.option === e.target.name).possible;
      setSetbackCat(e.target.name);
      setLargeSetbackOptions(largeEventOptions);
      setShowInput(largeEventOptions.length > 0 ? false : true);
    } else if (type === "small") {
      setSetbackCat(e.target.name);
      setFinalSetback(e.target.name);
    } else if (type === "subLarge") {
      setFinalSetback(e.target.name);
    }
  };

  const handleInput = (e) => {
    setFinalSetback(e.target.value);
  };

  const handleSave = () => {
    if (finalSetback) {
      let type;
      if (largeSetback) {
        type = "large";
      } else if (smallSetback) {
        type = "small";
      }
      const setbackObj = {
        type: type,
        category: setbackCat,
        name: finalSetback,
      };
      setReduxSetback("setback", setbackObj);
    }
    setShowModal(!showModal);
  };

  const handleSetbackBtn = (e) => {
    setSetbackCat(null);
    setFinalSetback(null);
    setShowInput(false);
    setLargeSetback(false);
    setSmallSetback(false);
    switch (e.target.name) {
      case "large":
        setLargeSetback(true);
        break;
      case "small":
        setSmallSetback(true);
        break;
      default:
        break;
    }
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
            Setback
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Uh Oh Setbacks.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You might want to make the campaign a little more interesting by
              adding a setback. Would you like to throw a wrench in their plans?
            </p>
            <div className="sideQuestBtnSpace">
              <div className="sideQuestBtns">
                <Button
                  name="Yes"
                  variant="outline-success"
                  value={true}
                  onClick={setbackFunc}>
                  Yes
                </Button>
              </div>
              <div className="sideQuestBtns">
                <Button
                  name="No"
                  variant="outline-danger"
                  value={false}
                  onClick={setbackFunc}>
                  No
                </Button>
              </div>
            </div>
            {setback && (
              <div className="setbackContainer">
                <div className="setBackItem d-flex flex-column align-items-center">
                  <Button onClick={handleSetbackBtn} name="large">
                    Large Setback Options
                  </Button>
                  {largeSetback && (
                    <div>
                      <Dropdown
                        className="setBackItemchild"
                        onSelect={(ek, e) => handleSetbackSelect(ek, e, "large")}>
                        <Dropdown.Toggle variant="outline-primary">
                          {setbackCat ? setbackCat : "Choose Your Setback Category"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {data?.worldShakingEvents.map((drop) => (
                            <Dropdown.Item key={drop.id} name={drop.option}>
                              {drop.option}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                      {largeSetBackOptions.length > 0 && (
                        <div className="d-flex flex-column align-items-center">
                          <Dropdown
                            onSelect={(ek, e) => handleSetbackSelect(ek, e, "subLarge")}>
                            <Dropdown.Toggle variant="outline-primary">
                              {finalSetback ? finalSetback : "Choose your event"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {largeSetBackOptions.map((drop, idx) => (
                                <Dropdown.Item key={idx} name={drop.option}>
                                  {drop.option}
                                </Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      )}
                    </div>
                  )}
                  {showInput && (
                    <div>
                      <FormControl
                        type="text"
                        placeholder="Name Your Event"
                        value={finalSetback || null}
                        className="mr-sm-2"
                        onChange={handleInput}/>
                    </div>
                  )}
                </div>
                <div className="setBackItem d-flex flex-column align-items-center">
                  <Button onClick={handleSetbackBtn} name="small">
                    Small Setback Options
                  </Button>
                  {smallSetback && (
                    <div>
                      <Dropdown
                        className="setBackItemchild"
                        onSelect={(ek, e) => handleSetbackSelect(ek, e, "small")}>
                        <Dropdown.Toggle variant="outline-primary">
                          {setbackCat ? setbackCat : "Choose Your Trap"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {data?.traps.map((drop) => (
                            <Dropdown.Item key={drop.id} name={drop.option}>
                              {drop.option}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleSave}>
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
  onSetSetback: bindActionCreators(setSetback, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Setback);
