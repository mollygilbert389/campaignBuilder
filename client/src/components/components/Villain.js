import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  OverlayTrigger,
  Card,
  Popover,
  Modal,
  Col, 
  Row
} from "react-bootstrap";
import { GenerateBtn, RollBtn } from ".";
import { setVillainData } from "../../actions";
import { QUERY_VILLAIN_DATA } from "../../utils";
import "../home.css";

const VillainModal = ({ onSetVillainData }) => {
  const overlay = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
  const [villainData, setVillainData] = useState({});
  const { loading, data, error } = useQuery(QUERY_VILLAIN_DATA);

  const setReduxVillainData = (destination, value) => {
    onSetVillainData(destination, value);
  };

  const handleVillainObjectiveCatSelect = (ek, e) => {
    const objectives = (data?.villainObjectives || []).find((item) => item.category === e.target.text)?.objectives;
    setVillainData({
      ...villainData,
      villainObjectiveCatChoice: e.target.text,
      villainObjectivesPossible: objectives,
      finalVillainObjectiveChoice: ""

    });
  };

  const handleVillainMethodCatSelect = (ek, e) => {
    const methods = (data?.villainMethods || []).find((item) => item.category === e.target.text)?.methods;
    setVillainData({
      ...villainData,
      villainMethodCatChoice: e.target.text,
      villainMethodPossible: methods,
      finalVillainMethodChoice: ""
    });
  };

  const handleCloseOverlay = () => {
    overlay.current.hide();
  };

  const hanelSave = () => {
    setShowModal(!showModal);
    setReduxVillainData("villainData", villainData);
  };

  const handleRoll = (name, f, type) => {
    setVillainData({ ...villainData, 
      [type]: name 
    });
};

console.log(data)

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
            Villain
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}
          enforceFocus={false}>
          <Modal.Header closeButton>
            <Modal.Title>Let's Create Your Villain!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <p>Below are some buttons to create your villain</p>
            <div className="d-flex flex-column align-items-center">
            <Form>
            <Card 
              style={{ border: "none" }} 
              className="d-flex flex-column align-items-center"
              enforceFocus={false}>
              <OverlayTrigger
                trigger="click"
                ref={overlay}
                placement="top"
                overlay={
                  <Popover className="makeItBigger">
                    <Popover.Title as="h3">
                      Add Your Image!
                    </Popover.Title>
                    <Popover.Content>
                      <div className="centerMe">
                        <FormControl
                          type="text"
                          placeholder="Image Link"
                          className="mr-sm-2"
                          value={villainData?.image}
                          onChange={(e) => setVillainData({...villainData, image: e.target.value})}/>
                        <Button
                          onClick={handleCloseOverlay}
                          style={{ marginLeft: 5 }}>
                          Submit
                        </Button>
                      </div>
                    </Popover.Content>
                  </Popover>
                }>
                <Card.Img
                  style={{ width: 150, height: 150 }}
                  variant="top"
                  src={villainData?.image || imageLink}/>
              </OverlayTrigger>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>
                  {villainData.name && `Name: ${villainData.name}`}
                </Card.Title>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                  <Col>
                    <FormControl
                      type="text"
                      placeholder="Villain Name"
                      className="mr-sm-2"
                      value={villainData?.name}
                      onChange={(e) => setVillainData({ ...villainData, name: e.target.value })}/>
                  </Col>
                  <Col xs={2} style={{textAlign: "center"}}>
                    or
                  </Col>
                  <Col>
                    <GenerateBtn
                      name="villainName"
                      handleGenerate={(feedback) => setVillainData({ ...villainData, name: feedback })}/>
                  </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                  <Col>
                    <Dropdown onSelect={(ek, e) => setVillainData({ ...villainData, gender: e.target.text })}>
                      <Dropdown.Toggle variant="outline-primary">
                        {villainData.gender ? `Gender: ${villainData.gender}` : "Choose your Adventure Villain"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Female</Dropdown.Item>
                        <Dropdown.Item>Male</Dropdown.Item>
                        <Dropdown.Item>Non Binary</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <RollBtn
                      handleRoll={(name, feedback) => handleRoll(name, feedback, "gender")}
                      rollingArray={["Female", "Male", "Non Binary"]}/>
                  </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                  <Col>
                    <Dropdown onSelect={(ek, e) => setVillainData({ ...villainData, type: e.target.text })}>
                      <Dropdown.Toggle variant="outline-primary">
                        {villainData.type ? `Type: ${villainData.type}` : "Choose your Adventure Villain"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {data.villain.map((item) => (
                            <Dropdown.Item key={item.id} name={item.option}>
                              {item.option}
                            </Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <RollBtn
                      handleRoll={(name, feedback) => handleRoll(name, feedback, "type")}
                      rollingArray={data.villain.map((item) => item.option)}/>
                  </Col>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                  <Col>
                    <Dropdown onSelect={handleVillainObjectiveCatSelect}>
                      <Dropdown.Toggle variant="outline-primary">
                        {villainData.villainObjectiveCatChoice ? `Objective Category: ${villainData.villainObjectiveCatChoice}` : "Choose your Villain's Main Objective"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {data.villainObjectives.map((item) => (
                          <Dropdown.Item key={item.id} name={item.category}>
                            {item.category}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col>
                    <RollBtn
                      handleRoll={(name, feedback) => handleRoll(name, feedback, "villainObjectiveCatChoice")}
                      rollingArray={data.villainObjectives.map((item) => item.option)}/>
                  </Col>
                </Row>
                    {villainData?.villainObjectivesPossible?.length > 0 && (
                      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                        <Col>
                          <Dropdown onSelect={(ek, e) => setVillainData({...villainData, finalVillainObjectiveChoice: e.target.text})}>
                            <Dropdown.Toggle variant="outline-primary">
                              {villainData.finalVillainObjectiveChoice ? `Objective: ${villainData.finalVillainObjectiveChoice}` : "Choose your Villain's Main Objective"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {villainData.villainObjectivesPossible.map((item) => (
                                <Dropdown.Item name={item}>{item}</Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                        <Col>
                          <RollBtn
                            handleRoll={(name, feedback) => handleRoll(name, feedback, "finalVillainObjectiveChoice")}
                            rollingArray={villainData.villainObjectivesPossible.map((item) => item.option)}/>
                        </Col>
                      </Row>
                    )}
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                      <Col>
                        <Dropdown onSelect={handleVillainMethodCatSelect}>
                          <Dropdown.Toggle variant="outline-primary">
                            {villainData.villainMethodCatChoice ? `Method Category: ${villainData.villainMethodCatChoice}` : "Choose your Villain's Method"}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {data.villainMethods.map((item) => (
                              <Dropdown.Item key={item.id} name={item.category}>
                                {item.category}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col>
                        <RollBtn
                          handleRoll={(name, feedback) => handleRoll(name, feedback, "villainMethodCatChoice")}
                          rollingArray={data.villainMethods.map((item) => item.option)}/>
                      </Col>
                    </Row>
                    {villainData?.villainMethodPossible?.length > 0 && (
                      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                        <Col>
                          <Dropdown onSelect={(ek, e) => setVillainData({...villainData, finalVillainMethodChoice: e.target.text})}>
                            <Dropdown.Toggle variant="outline-primary">
                              {villainData.finalVillainMethodChoice ? `Method: ${villainData.finalVillainMethodChoice}` : "Choose your Villain's Method"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              {villainData.villainMethodPossible.map((item) => (
                                <Dropdown.Item name={item}>{item}</Dropdown.Item>
                              ))}
                            </Dropdown.Menu>
                          </Dropdown>
                        </Col>
                        <Col>
                          <RollBtn
                            handleRoll={(name, feedback) => handleRoll(name, feedback, "finalVillainMethodChoice")}
                            rollingArray={villainData.villainMethodPossible}/>
                        </Col>
                      </Row>
                    )}
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                      <Col>
                        <Dropdown onSelect={(ek, e) => setVillainData({...villainData, weakness: e.target.text})}>
                          <Dropdown.Toggle variant="outline-primary">
                            {villainData.weakness ? `Weakness: ${villainData.weakness}` : "Choose your Villain's Weakness"}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {data.villainWeaknesses.map((item) => (
                              <Dropdown.Item key={item.id} name={item.option}>
                                {item.option}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col>
                        <RollBtn
                          handleRoll={(name, feedback) => handleRoll(name, feedback, "weakness")}
                          rollingArray={data.villainWeaknesses.map((item) => item.option)}/>
                      </Col>
                    </Row>
              </Card.Body>
            </Card>
            </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={hanelSave}>
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
  onSetVillainData: bindActionCreators(setVillainData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(VillainModal);
