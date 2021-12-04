import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Modal } from "react-bootstrap";
import { setPillar } from "../actions";
import "./home.css";

const Pillar = ({ onSetPillar }) => {
  const [showModal, setShowModal] = useState(false);

  const setReduxPillar = (type) => {
    onSetPillar(type);
  };

  const handlePillarBtn = (e) => {
    setReduxPillar(e.target.name);
    setShowModal(!showModal);
  };

  return (
    <div>
      <div style={{ margin: 10}}>
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          Pillar
        </Button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Let's Figure Out Some Goals</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Use the dropdown below to decicde.</p>
          <br />
          <p>
            Here you will choose your adventure type. We reccomend a Combat
            pillar for a short campaign, but you can have any type of campaign
            you choose!
          </p>
          <div>
            <Button
              onClick={handlePillarBtn}
              variant="outline-success"
              name="Combat"
              size="lg"
              block>
              Combat
            </Button>
            <Button
              onClick={handlePillarBtn}
              variant="outline-warning"
              name="Interaction"
              size="lg"
              block>
              Interaction
            </Button>
            <Button
              onClick={handlePillarBtn}
              variant="outline-danger"
              name="Exploration"
              size="lg"
              block>
              Exploration
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetPillar: bindActionCreators(setPillar, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Pillar);
