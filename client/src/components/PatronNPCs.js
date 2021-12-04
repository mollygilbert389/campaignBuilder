import React, { useState } from "react";
import { Button, Modal} from "react-bootstrap";
import { NPCs, Patron } from "./components";
import "./home.css";

const PatronNPCs = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div style={{ margin: 10 }}>
        <Button
          id="questGiver"
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          Patrons And NPCs
        </Button>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        enforcefocus={false}>
        <Modal.Header closeButton>
          <Modal.Title>Who's On Your Team?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Let's figure out some details about the NPCs you get the play in the
            game. Firstly, let's plan your patron who will be the benefactor of
            the adventure goal. You can also use this to add some NPC characters
            to your story to make things interesting.
          </p>
          <br />
          <div className="btnspace">
            <Patron />
            <NPCs />
          </div>
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

export default PatronNPCs;
