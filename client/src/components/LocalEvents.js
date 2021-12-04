import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Modal } from "react-bootstrap";
import { setLocalEvents } from "../actions";
import { QUERY_LOCAL_EVENT_DATA } from "../utils";
import "./home.css";

const LocalEvents = ({ onSetLocalEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [localEventChoice, setLocalEventChoice] = useState([]);
  const [eventCap, setEventCap] = useState(false);
  const { data, loading, error } = useQuery(QUERY_LOCAL_EVENT_DATA);

  const setReduxLocalEvents = (names) => {
    onSetLocalEvents(names);
  };

  const handleAddEvent = (e) => {
    const updatedChoiceList = localEventChoice;
    updatedChoiceList.push(e.target.name);
    if (localEventChoice.length === 5) {
      setEventCap(true);
    } else {
      setLocalEventChoice(updatedChoiceList);
      setReduxLocalEvents(updatedChoiceList);
    }
  };

  const removeEvent = (e) => {
    const newChoiceList = localEventChoice.filter((eventName) => eventName !== e.target.name);
    if (newChoiceList.length < 5) {
      setEventCap(false);
      setLocalEventChoice(newChoiceList);
      setReduxLocalEvents(newChoiceList);
    }
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div style={{ margin: 10}}>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Local Events
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Anything Interesting Happening?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are there any events going on locally that could add a tone to
              your immediate world.
            </p>
            <br />
            <div style={{ display: "flex", height: 500, overflow: "scroll" }}>
              <div style={{ width: 500 }}>
                {data?.localEvents.map((drop, idx) => {
                  const localEventTrue = localEventChoice?.find((item) => item === drop.option) || false;
                  return (
                    <Button
                      name={drop.option}
                      key={idx}
                      style={{  margin: 1 }}
                      onClick={handleAddEvent}
                      disabled={eventCap || localEventTrue}>
                      {drop.option}
                    </Button>
                  );
                })}
              </div>
              <div style={{ width: 500 }}>
                {localEventChoice.map((drop, idx) => (
                  <Button
                    name={drop}
                    key={idx}
                    style={{  margin: 1 }}
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
  onSetLocalEvents: bindActionCreators(setLocalEvents, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(LocalEvents);
