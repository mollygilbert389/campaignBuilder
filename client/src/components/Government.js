import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useQuery } from "@apollo/client";
import {
  Button,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Form,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { setGovernmentData, setLanguageShow, setLanguages } from "../actions";
import { RollBtn, Languages } from "./components";
import { QUERY_GOVERNMENT_DATA } from "../utils";
import "./home.css";

const Government = ({
  campaign,
  onSetGovernmentData,
  onSetLanguages,
  onSetLanguageShow,
}) => {
  const [government, setGovernment] = useState("");
  const [currency, setCurrency] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState({});
  const [suggestedTags, setSuggestedTags] = useState([]);
  const { loading, data, error } = useQuery(QUERY_GOVERNMENT_DATA);
  const governmentData = data || [];

  React.useEffect(() => {
    if ((governmentData?.languages || []).length > 0) {
      setSuggestedTags(governmentData?.languages);
    }
  }, [governmentData]);

  const setReduxLanguages = (type) => {
    onSetLanguages(type);
  };

  const setReduxLanguageShow = (destination, value) => {
    onSetLanguageShow(destination, value);
  };

  const setReduxGovernmentData = (destinaton, value) => {
    onSetGovernmentData(destinaton, value);
  };

  const handleDropSelect = (ek, e, type) => {
    if (type === "government") {
      setGovernment(e.target.text);
      setReduxGovernmentData(type, e?.target?.text);
    } else {
      setCurrency(e.target.text);
      setReduxGovernmentData(type, e?.target?.text);
    }
  };

  const handleClose = () => {
    if (campaign.languages.length === 0) {
      setReduxLanguages(suggestedTags);
    }
    setShowModal(!showModal);
  };

  const handleRoll = (name, f, type) => {
    if (type === "government") {
      setGovernment(name);
      setReduxGovernmentData(type, name);
    } else {
      setCurrency(name);
      setReduxGovernmentData(type, name);
    }
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    return (
      <div>
        <div style={{ margin: 10 }}>
          <Button
            variant="outline-success"
            size="lg"
            onClick={() => setShowModal(!showModal)}
          >
            Government
          </Button>
        </div>
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(!showModal)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Let's pick a government some local languages and our world's
              currency.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column align-items-center">
            <p>Below are some buttons to help you make those decisions.</p>
            <Form>
              <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                <Col>
                  <Dropdown onSelect={(ek, e) => handleDropSelect(ek, e, "government")}>
                    <Dropdown.Toggle variant="outline-primary">
                      {government ? government : "Choose Your Government"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {(data?.governments || []).map((item, idx) => (
                        <div key={idx}>
                          <OverlayTrigger overlay={<Tooltip>{item.description}</Tooltip>}>
                            <span className="d-inline-block">
                              <Dropdown.Item key={item.id} name="government">
                                {item.name}
                              </Dropdown.Item>
                            </span>
                          </OverlayTrigger>
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  <RollBtn
                    handleRoll={(name, feedback) => handleRoll(name, feedback, "government")}
                    rollingArray={(data?.governments || []).map((item) => item.name)}
                  />
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 5 }}>
                <Col>
                  <Dropdown onSelect={(ek, e) => handleDropSelect(ek, e, "currency")}>
                    <Dropdown.Toggle variant="outline-primary">
                      {currency ? currency : "Choose Your Currency"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {(data?.currency || []).map((item, idx) => (
                        <Dropdown.Item key={idx} name="currency">
                          {item.option}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                <RollBtn
                  handleRoll={(name, feedback) => handleRoll(name, feedback, "currency")}
                  rollingArray={(data?.currency || []).map((item) => item.option)}/>
                </Col>
              </Row>
            </Form>
            <Languages
              setReduxLanguages={setReduxLanguages}
              setReduxLanguageShow={setReduxLanguageShow}
              suggestedTags={suggestedTags}
              setSuggestedTags={setSuggestedTags}
              value={value}
              setValue={setValue}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
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
  onSetGovernmentData: bindActionCreators(setGovernmentData, dispatch),
  onSetLanguageShow: bindActionCreators(setLanguageShow, dispatch),
  onSetLanguages: bindActionCreators(setLanguages, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Government);
