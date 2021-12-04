import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Modal } from "react-bootstrap";
import { setPlayers } from "../actions";
import { Renown, FactionOrgs } from "./components";
import "./home.css";

const Social = ({ onSetPlayers, campaign }) => {
  const [showModal, setShowModal] = useState(false);

  const setReduxPlayers = (destination, value) => {
    onSetPlayers(destination, value);
  };

  return (
    <div>
      <div className="btns">
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          The Social
        </Button>
      </div>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Let's create some organizations that might exist in this world.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Use the buttons below to make some create those organizations and
            decide if your characters will have familiartiry with them.
          </p>
          <br />
          <div className="btnspace">
            <FactionOrgs />
            <Renown setReduxPlayers={setReduxPlayers} campaign={campaign} />
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
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetPlayers: bindActionCreators(setPlayers, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Social);
