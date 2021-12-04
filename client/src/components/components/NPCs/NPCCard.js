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
} from "react-bootstrap";
import { GenerateBtn } from "..";
import { setNPCData } from "../../../actions";
import { QUERY_NPC_DATA } from "../../../utils";
import "../../home.css";

const NPCCard = ({ onSetNPCData, campaign, index }) => {
  const imageLink = "https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg";
  const overlay = useRef(null);
  const [NPCData, setNPCData] = useState({});
  const { loading, data, error } = useQuery(QUERY_NPC_DATA);

  const setReduxNPCData = (destination, value) => {
    onSetNPCData(destination, value);
  };

  const handleSelections = (ek, e, index, type) => {
    const selection = e.target.text;
    const newNPC = [...campaign.NPCData].map((NPC) => {
      if (NPC.id === index) {
        return { ...NPC, [type]: selection };
      }
      return NPC;
    });
    setNPCData({ ...NPCData, [type]: selection });
    setReduxNPCData("NPCData", newNPC);
  };

  const handleNameorImageChange = (e, index, type) => {
    const name = e?.target?.value || e;
    console.log(name);
    const newNPC = [...campaign.NPCData].map((NPC) => {
      if (NPC.id === index) {
        return { ...NPC, [type]: name };
      }
      return NPC;
    });
    setNPCData({ ...NPCData, [type]: name });
    setReduxNPCData("NPCData", newNPC);
  };

  const handleCloseOverlay = () => {
    overlay.current.hide();
  };

  if (loading || data === undefined) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>ERROR</div>;
  } else {
    const talents = data.npcs.filter((item) => item.type === "talent");
    const appearances = data.npcs.filter((item) => item.type === "appearance");
    const mannerisms = data.npcs.filter((item) => item.type === "mannerism");
    const traits = data.npcs.filter((item) => item.type === "trait");
    const bonds = data.npcs.filter((item) => item.type === "bond");
    const flawSecrets = data.npcs.filter((item) => item.type === "flawSecret");

    return (
      <div>
        <Card
          enforceFocus={false}
          style={{ overflow: "auto" }}
          className="d-flex flex-column align-items-center color">
          <div>
            <OverlayTrigger
              trigger="click"
              ref={overlay}
              placement="top"
              overlay={
                <Popover className="makeItBigger">
                  <Popover.Title as="h3">Add Your Image!</Popover.Title>
                  <Popover.Content>
                    <div className="centerMe">
                      <FormControl
                        type="text"
                        placeholder="Image Link"
                        className="mr-sm-2"
                        value={NPCData?.NPCImage}
                        onChange={(e) => handleNameorImageChange(e, index, "NPCImage")}/>
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
                src={NPCData?.NPCImage || imageLink}/>
            </OverlayTrigger>
          </div>
          <Card.Body className="d-flex flex-column align-items-center">
            <Card.Title>
              {!NPCData.NPCName ? `NPC # ${index + 1}` : `${NPCData.NPCName}`}
            </Card.Title>
            <Form inline style={{ margin: 2 }}>
              <FormControl
                type="text"
                placeholder="NPC Name"
                className="mr-sm-2"
                value={NPCData?.NPCName}
                onChange={(e) => handleNameorImageChange(e, index, "NPCName")}/>
              <div style={{ paddingRight: "10px" }}>or</div>
              <GenerateBtn
                name={NPCData?.NPCName}
                handleGenerate={(feedback) => handleNameorImageChange(feedback, index, "NPCName")}/>
            </Form>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "gender")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.gender ? `Gender: ${NPCData.gender}` : "Choose your NPCs Gender"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Female</Dropdown.Item>
                <Dropdown.Item>Male</Dropdown.Item>
                <Dropdown.Item>Non Binary</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "appearance")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.appearance ? `Appearance: ${NPCData.appearance}` : "Choose your NPC's Appearance"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {appearances.map((item, idx) => (
                  <Dropdown.Item key={idx}>{item.option}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "highAbility")}
              cstyle={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.highAbility ? `High Ability: ${NPCData.highAbility}` : "Choose your NPC's High Ability"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Strength-powerful, brawny, strong as an ox</Dropdown.Item>
                <Dropdown.Item>Dexterity-lithe, agile, graceful</Dropdown.Item>
                <Dropdown.Item>Consitution-hardy, hale, healthy</Dropdown.Item>
                <Dropdown.Item>Intelligence-studious, learned, inquisitive</Dropdown.Item>
                <Dropdown.Item>Wisdom-perceptive, spiritual, insightful</Dropdown.Item>
                <Dropdown.Item>Charisma-persuasive, forceful, born leader</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "lowAbility")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.lowAbility ? `Low Ability: ${NPCData.lowAbility}` : "Choose your NPC's Low Ability"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Strength-feeble, scrawny</Dropdown.Item>
                <Dropdown.Item>Dexterity-clumbsy, fumbling</Dropdown.Item>
                <Dropdown.Item>Consitution-sickly, pale</Dropdown.Item>
                <Dropdown.Item>Intelligence-dim-witted, slow</Dropdown.Item>
                <Dropdown.Item>Wisdom-oblivious, absentminded</Dropdown.Item>
                <Dropdown.Item>Charisma-dull, boring</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "talent")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.talent ? `Talent: ${NPCData.talent}` : "Choose your NPC's Talent"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {talents.map((drop) => (
                  <Dropdown.Item key={drop.id} name={drop.option}>
                    {drop.option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "manner")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.manner ? `Mannerism: ${NPCData.manner}` : "Choose your NPC's Mannerism"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="bringToFront">
                {mannerisms.map((drop) => (
                  <Dropdown.Item key={drop.id} name={drop.option}>
                    {drop.option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "trait")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.trait ? `Trait: ${NPCData.trait}` : "Choose your NPC's Trait"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {traits.map((drop) => (
                  <Dropdown.Item key={drop.id} name={drop.option}>
                    {drop.option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Dropdown
                onSelect={(ek, e) => handleSelections(ek, e, index, "ideal")}
                style={{ margin: 2 }}>
                <Dropdown.Toggle variant="outline-primary">
                  {NPCData.ideal ? NPCData.ideal : "Choose your NPC's Ideal"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {data.npcIdeals.map((drop, idx) => (
                    <Dropdown.Item key={idx} name={drop.option}>
                      {drop.option}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {NPCData.ideal && (
                <Dropdown
                  onSelect={(ek, e) => handleSelections(ek, e, index, "drilledIdealChoice")}
                  style={{ margin: 2 }}>
                  <Dropdown.Toggle variant="outline-primary">
                    {NPCData.drilledIdealChoice ? NPCData.drilledIdealChoice : "Choose your NPC's Ideal"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {data.npcIdeals.find((item) => item.option === NPCData.ideal).list.map((drop, idx) => (
                      <Dropdown.Item key={idx} name={drop}>
                        {drop}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "bond")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.bond ? `Bond: ${NPCData.bond}` : "Choose your NPC's Bond"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {bonds.map((drop) => (
                  <Dropdown.Item key={drop.id} name={drop.option}>
                    {drop.option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onSelect={(ek, e) => handleSelections(ek, e, index, "flawOrSecret")}
              style={{ margin: 2 }}>
              <Dropdown.Toggle variant="outline-primary">
                {NPCData.flawOrSecret ? `Flaw/Secret: ${NPCData.flawOrSecret}` : "Choose your NPC's Flaw or Secret"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {flawSecrets.map((drop) => (
                  <Dropdown.Item key={drop.id} name={drop.option}>
                    {drop.option}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

const mapDispatchtoProps = (dispatch) => ({
  onSetNPCData: bindActionCreators(setNPCData, dispatch),
});

export default connect(mapStateToProps, mapDispatchtoProps)(NPCCard);
