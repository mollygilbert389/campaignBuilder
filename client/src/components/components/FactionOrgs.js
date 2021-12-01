import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { setFactionOrgs, setFactionShow } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { icons } from "./Icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer, faGem, faCrown, faDragon, faDiceD20, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import "../home.css";

const FactionOrgs = ({ onSetFactionOrgs, onSetFactionShow }) => {
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentBtnId, setCurrentBtnId] = useState(null);
  const [showMiniModal, setShowMiniModal] = useState(false);
  const [suggestedTags, setSuggestedTags] = useState([
    { id: 1, name: "Harpers", icon: faBeer },
    { id: 2, name: "Order of the Guantlet", icon: faShieldAlt },
    { id: 3, name: "Emerald Enclave", icon: faGem },
    { id: 4, name: "Lord's Alliance", icon: faCrown },
    { id: 5, name: "Zhentarim", icon: faDragon },
  ]);

  const setReduxFactionOrgs = (names) => {
    onSetFactionOrgs(names);
  };

  const setReduxFactionShow = (destination, value) => {
    onSetFactionShow(destination, value);
  };

  const handleRemove = (e) => {
    let removedItem = e.target.name;
    let currentTags = suggestedTags;
    const removedFaction = currentTags.filter((item) => item.name !== removedItem);
    setSuggestedTags(removedFaction);
  };

  const handleAddFaction = () => {
    let currentTags = suggestedTags;
    let newName = value;
    let id = currentTags.length + 1;
    let icon = faDiceD20;
    const updatedFactions = [...currentTags, { id: id, name: newName, icon: icon }];
    setSuggestedTags(updatedFactions);
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddFaction();
    }
  };

  const handleSave = () => {
    setShowModal(!showModal);
    setReduxFactionOrgs(suggestedTags);
    setReduxFactionShow("factionShow", true);
  };

  const handleIconSelect = (e) => {
    const btnId = e.target.id;
    setShowMiniModal(!showMiniModal);
    setCurrentBtnId(btnId);
  };

  const hanleIconFinalSelection = (e) => {
    const btnId = parseInt(currentBtnId);
    const iconId = parseInt(e.target.id);
    const updatedIcon = icons.filter((item) => item.id === iconId);
    const finalIcon = updatedIcon[0].icon;
    const factionIcons = [...suggestedTags].map((item) => {
      if (item.id === btnId) {
        return { ...item, icon: finalIcon };
      }
      return item;
    });
    setSuggestedTags(factionIcons);
    setShowMiniModal(!showMiniModal);
  };

  return (
    <div>
      <div className="btns">
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          Factions and Organizations
        </Button>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        enforcefocus={false}>
        <Modal.Header closeButton>
          <Modal.Title>Let's add some organizations to your world.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <p>
            We have a few factions and organizations suggestions. Feel free to
            add and remove as many or as little as you want.
          </p>
          <br />
          <div className="tagsArea centeredItems">
            {suggestedTags.map((item, idx) => (
              <ButtonGroup key={idx} className="factionButtons">
                <OverlayTrigger
                  placement="left"
                  overlay={<Tooltip>Change Me!</Tooltip>}>
                  <Button id={item.id} onClick={handleIconSelect}>
                    <FontAwesomeIcon className="iconImage" icon={item.icon} />
                  </Button>
                </OverlayTrigger>
                <Button className="iconImage" name={item.name}>
                  {item.name}
                </Button>
                <Button name={item.name} onClick={handleRemove}>
                  X
                </Button>
              </ButtonGroup>
            ))}
            <Modal
              size="sm"
              aria-labelledby="example-modal-sizes-title-sm"
              show={showMiniModal}
              onHide={() => setShowMiniModal(!showMiniModal)}>
              <Modal.Header closeButton>
                <Modal.Title>Choose your Icon</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="wrapIcons">
                  {icons.map((icon, idx) => (
                    <Button
                      key={idx}
                      className="icons"
                      id={icon.id}
                      iconObject={icon.icon}
                      onClick={hanleIconFinalSelection}>
                      <FontAwesomeIcon className="iconImage" icon={icon.icon} />
                    </Button>
                  ))}
                </div>
              </Modal.Body>
            </Modal>
            <div className="inputAndBtn factionButtons">
              <input
                className="factionInput"
                placeholder="Add Faction or Organization Here"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={(e) => onKeyDown(e)}/>
              <Button
                size="sm"
                variant="outline-success"
                onClick={handleAddFaction}>
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleSave}>
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
  onSetFactionOrgs: bindActionCreators(setFactionOrgs, dispatch),
  onSetFactionShow: bindActionCreators(setFactionShow, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(FactionOrgs);
