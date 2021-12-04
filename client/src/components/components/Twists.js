import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import { Button, Carousel, Modal } from "react-bootstrap";
import { setTwist } from "../../actions";
import { QUERY_TWIST_DATA } from "../../utils";
import "../home.css";

const Twists = ({ onSetTwist }) => {
  const [showModal, setShowModal] = useState(false);
  const [twistYesNo, setTwistYesNo] = useState(false);
  const { data, loading, error } = useQuery(QUERY_TWIST_DATA);

  const setReduxTwist = (destination, value) => {
    onSetTwist(destination, value);
  };

  const handleNo = () => {
    setTwistYesNo(false);
    setReduxTwist("twist", "");
    setShowModal(!showModal);
  };

  const style = {
    width: "350px",
    height: "125px",
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
        <div style={{ margin: 10}}>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Twists
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}>
          <Modal.Header closeButton>
            <Modal.Title>
              This is optional, do you want to add a twist to your story?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you want to add a twist?</p>
            <br />
            <div className="sideQuestBtnSpace">
              <div style={{ margin: 2 }}>
                <Button
                  name="Yes"
                  variant="outline-success"
                  onClick={() => setTwistYesNo(true)}>
                  Yes
                </Button>
              </div>
              <div style={{ margin: 2 }}>
                <Button name="No" variant="outline-danger" onClick={handleNo}>
                  No
                </Button>
              </div>
            </div>
            {twistYesNo && (
              <div>
                <div className="d-flex flex-column align-items-center">
                  <p>Click through these to add a fun twist to your story.</p>
                  <Carousel interval={null}>
                    {data?.twists.map((drop) => (
                      <Carousel.Item key={drop.id}>
                        <div className="d-block w-100"></div>
                        <Button
                          variant="primary"
                          onClick={(e) => setReduxTwist("twist", e.target.name)}
                          style={style}
                          key={drop.id}
                          name={drop.option}>
                          {drop.option}
                        </Button>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
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
  onSetTwist: bindActionCreators(setTwist, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Twists);
