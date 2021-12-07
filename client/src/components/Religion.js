import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  OverlayTrigger,
  Tooltip,
  Modal
} from "react-bootstrap";
import { setReligion } from "../actions";
import { RollBtn } from "./components";
import { QUERY_RELIGION_DATA } from "../utils";
import "./home.css";

const Religion = ({ onSetReligion }) => {
  const [religion, setReligion] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [other, setOther] = useState(false);
  const { data, loading, error } = useQuery(QUERY_RELIGION_DATA);

  const setReduxReligion = (destination, value) => {
    onSetReligion(destination, value);
  };

  const handleReligion = (ek, e) => {
    if (e.target.text === "Other") {
      setOther(true);
    } else {
      const selection = e.target.text;
      setReligion(selection);
      setReduxReligion("religion", selection);
    }
  };

  const handleChange = (e) => {
    const selection = e.target.value;
    setReligion(selection);
    setReligion("religion", selection);
  };

  const handleRoll = (feedback) => {
    setReligion(feedback);
    setReduxReligion("religion", feedback);
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
            Religion
          </Button>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>Gods Oversee the World.</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <p>Below are some buttons to help you set up your gods.</p>
            <br />
            <Form inline>
              <Dropdown onSelect={handleReligion}>
                <Dropdown.Toggle variant="outline-primary">
                  {religion ? `Religion: ${religion}` : "Choose Your Religious Philosophy"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {(data?.religion || []).map((item, idx) => (
                    <div key={idx}>
                      <OverlayTrigger
                        overlay={<Tooltip>{item.toolTipData}</Tooltip>}>
                        <span className="d-inline-block">
                          <Dropdown.Item key={item.id} name={item.option}>
                            {item.option}
                          </Dropdown.Item>
                        </span>
                      </OverlayTrigger>
                    </div>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <RollBtn
                name="religion"
                handleRoll={handleRoll}
                rollingArray={(data?.religion || []).filter((item) => item.option !== "Other").map((item) => item.option)}/>
            </Form>
            <br />
            {other && (
              <FormControl
                type="text"
                placeholder="Add Religion"
                className="mr-sm-2"
                value={religion}
                onChange={handleChange}/>
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
  }
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetReligion: bindActionCreators(setReligion, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Religion);
