import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "./home.css";

const NPCStyledCard = ({
  image,
  name,
  gender,
  highAbility,
  lowAbility,
  appearance,
  talent,
  manner,
  ideal,
  bond,
  flawOrSecret,
  trait,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="cards">
      <Card className="bg-dark text-white skinnyCard">
        <Card.Header className="fixedHeader">
          <Card.Img src={image} />
          <Card.ImgOverlay className="bottom"></Card.ImgOverlay>
        </Card.Header>
        <Button className="roundBtn" onClick={() => setShowModal(!showModal)}>
          +
        </Button>
        <Card.Body>
          {name && <div>{`Name: ${name}`}</div>}
          {gender && <div>{`Gender: ${gender}`}</div>}
          {highAbility && <div>{`High Ability: ${highAbility}`}</div>}
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {gender && <div>{`Gender: ${gender}`}</div>}
          {highAbility && <div>{`High Ability: ${highAbility}`}</div>}
          {lowAbility && <div>{`Low Ability: ${lowAbility}`}</div>}
          {appearance && <div>{`Appearance: ${appearance}`}</div>}
          {talent && <div>{`Talent: ${talent}`}</div>}
          {manner && <div>{`Manner: ${manner}`}</div>}
          {trait && <div>{`Trait: ${trait}`}</div>}
          {ideal && <div>{`Ideal: ${ideal}`}</div>}
          {bond && <div>{`Bond: ${bond}`}</div>}
          {flawOrSecret && <div>{`Flaw/Secret: ${flawOrSecret}`}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            onClick={() => setShowModal(!showModal)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NPCStyledCard;
