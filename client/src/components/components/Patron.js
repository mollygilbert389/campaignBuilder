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
  Popover,
  Card,
  Modal,
  Row,
  Col
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { GenerateBtn, RollBtn } from ".";
import { setPatronData } from "../../actions";
import { QUERY_PATRON_DATA } from "../../utils";
import "../home.css";

const Patron = ({ onSetPatronData, campaign }) => {
  const target = useRef(null);
  const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
  const [showModal, setShowModal] = useState(false);
  const [patronData, setPatronData] = useState({ factions: [] });
  const { loading, data, error } = useQuery(QUERY_PATRON_DATA);
  const patronInfo = data?.patron || [];

  const setReduxPatronData = (destination, value) => {
    onSetPatronData(destination, value);
  };

  const close = () => {
    setShowModal(false);
    setReduxPatronData("patronData", patronData);
  };

  const handleCloseOverlay = () => {
    target.current.hide();
  };

  const handleCheckBoxChange = (e) => {
    let checked = e.target.checked;
    let name = e.target.name;
    if (checked) {
      const updatedArr = patronData.factions;
      const factionOrg = campaign.factionOrgs.find(
        (facObj) => facObj.name === name
      );
      updatedArr.push(factionOrg);
      setPatronData({ ...patronData, factions: updatedArr });
    } else {
      const updatedFactions = patronData.factions.filter(
        (item) => item.name !== name
      );
      setPatronData({ ...patronData, factions: updatedFactions });
    }
  };

  const handleRoll = (name, f, type) => {
      setPatronData({ ...patronData, 
        [type]: name 
      });
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
      const mannerisms = patronInfo.filter((item) => item.type === "mannerism");
      const traits = patronInfo.filter((item) => item.type === "trait");
      const types  = patronInfo.filter((item) => item.type === "choice");

    return (
      <div>
        <div style={{ margin: 10}}>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}>
            Patron
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}
          enforceFocus={false}>
          <Modal.Header closeButton>
            <Modal.Title>Let's Create A Patron!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Below are some buttons to help create your patron. Click the image
              to upload an image of your own.
            </p>
            <div className="d-flex flex-column align-items-center">
              <Form>
                <div style={{ display: "flex" }}>
                  <div>
                    <Card
                      style={{ border: "none" }}
                      className="d-flex flex-column align-items-center"
                      enforceFocus={false}>
                      <div>
                        <OverlayTrigger
                          trigger="click"
                          placement="top"
                          target={target.current}
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
                                    value={patronData?.image}
                                    onChange={(e) => setPatronData({...patronData, image: e.target.value})}/>
                                  <Button
                                    onClick={handleCloseOverlay}
                                    ref={target}
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
                            src={patronData?.image || imageLink}/>
                        </OverlayTrigger>
                      </div>
                      <Card.Body className="d-flex flex-column align-items-center">
                        <Card.Title>
                          {patronData.name && `Name: ${patronData.name}`}
                        </Card.Title>
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                          <Col>
                            <FormControl
                              type="text"
                              placeholder="Patron Name"
                              className="mr-sm-2"
                              value={patronData?.name}
                              onChange={(e) => setPatronData({ ...patronData, name: e.target.value })}/>
                          </Col>
                          <Col xs={2} style={{textAlign: "center"}}>
                            or
                          </Col>
                          <Col>
                            <GenerateBtn
                              name="patronName"
                              handleGenerate={(feedback) => setPatronData({ ...patronData, name: feedback })}/>
                          </Col>
                        </Row>
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                          <Col>
                            <Dropdown onSelect={(ek, e) => setPatronData({...patronData, gender: e.target.text})}>
                              <Dropdown.Toggle variant="outline-primary">
                                {patronData.gender ? `Gender: ${patronData.gender}` : "Choose your Patron's Gender"}
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
                            <Dropdown onSelect={(ek, e) => setPatronData({ ...patronData, type: e.target.text })}>
                              <Dropdown.Toggle variant="outline-primary">
                                {patronData.type ? `Type: ${patronData.type}` : "Choose your Patron's Type"}
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {types.map((item, idx) => (
                                  <Dropdown.Item key={idx} name={item.option}>
                                    {item.option}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col>
                            <RollBtn
                              handleRoll={(name, feedback) => handleRoll(name, feedback, "type")}
                              rollingArray={types.map((item) => item.option)}/>
                          </Col>
                        </Row>
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                          <Col>
                            <Dropdown
                              onSelect={(ek, e) => setPatronData({...patronData, manner: e.target.text})}
                              style={{ margin: 2 }}>
                              <Dropdown.Toggle variant="outline-primary">
                                {patronData.manner ? `Mannerism: ${patronData.manner}` : "Choose your Patron's Mannerism"}
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {mannerisms.map((drop) => (
                                  <Dropdown.Item key={drop.id} name={drop.option}>
                                    {drop.option}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col>
                            <RollBtn
                              handleRoll={(name, feedback) => handleRoll(name, feedback, "manner")}
                              rollingArray={mannerisms.map((item) => item.option)}/>
                          </Col>
                        </Row>
                        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                          <Col>
                            <Dropdown
                              onSelect={(ek, e) => setPatronData({ ...patronData, trait: e.target.text })}
                              style={{ margin: 2 }}>
                              <Dropdown.Toggle variant="outline-primary">
                                {patronData.trait ? `Trait: ${patronData.trait}` : "Choose your Patron's Trait"}
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                {traits.map((drop) => (
                                  <Dropdown.Item key={drop.id} name={drop.option}>
                                    {drop.option}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col>
                            <RollBtn
                              handleRoll={(name, feedback) => handleRoll(name, feedback, "trait")}
                              rollingArray={traits.map((item) => item.option)}/>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </div>
                  <div>
                    {campaign.factionOrgs.length > 0 &&
                      campaign.factionOrgs.map((item, idx) => (
                        <div key={idx}>
                          <FontAwesomeIcon style={{ margin: 3 }} icon={item.icon}/>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) => handleCheckBoxChange(e, item.icon)}
                                name={item.name}
                                defaultChecked={patronData.factions.find((facName) => facName.name === item.name)?.id ? true : false}
                                inputProps={item.icon}
                                color="primary"/>
                            }
                            label={item.name}/>
                        </div>
                      ))}
                  </div>
                </div>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={close}>
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
  onSetPatronData: bindActionCreators(setPatronData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Patron);
