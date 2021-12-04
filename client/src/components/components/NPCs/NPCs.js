import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Carousel, Modal } from "react-bootstrap";
import { Slider } from "@material-ui/core";
import { NPCCard } from ".";
import { setNPCData } from "../../../actions";
import "../../home.css";

const NPCs = ({ onSetNPCData }) => {
  const [NPCData, setNPCData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const setReduxNPCData = (destination, value) => {
    onSetNPCData(destination, value);
  };

  const handleSlider = (e, value) => {
    let NPCData = [];
    for (let i = 0; i < value; i++) {
      let newObj = { id: i };
      NPCData.push(newObj);
    }
    setNPCData(NPCData);
    setReduxNPCData("NPCData", NPCData);
  };

  return (
    <div>
      <div style={{ margin: 10}}>
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          NPCs
        </Button>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        enforceFocus={false}>
        <Modal.Header closeButton>
          <Modal.Title>Let's get some NPCs added to your campaign.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <p>
            Below are some buttons to help you pick some NPCs. This modal is for
            NPCs that play a bigger part in your campaign, not necesarily the
            shopkeeper your characters will buy things from.
          </p>
          <br />
          <Slider
            min={0}
            max={5}
            defaultValue={0}
            style={{ color: "#576490" }}
            onChangeCommitted={handleSlider}
            valueLabelDisplay="on"/>
          {NPCData.length > 0 && (
            <Carousel style={{ display: "flex", justifyContent: "center" }} interval={null}>
              {NPCData.map((item, index) => (
                  <Carousel.Item key={index}>
                    <NPCCard index={index} key={item.id} name={item.id} />
                  </Carousel.Item>
                ))}
            </Carousel>
          )}
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
  onSetNPCData: bindActionCreators(setNPCData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(NPCs);
