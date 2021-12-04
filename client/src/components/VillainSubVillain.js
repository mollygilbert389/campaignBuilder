import React, { useState } from "react";
import { EvilNPCs, Villain } from "./components";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import "./home.css";

const VillainSubVillain = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="btns">
        <Button
          variant="outline-success"
          size="lg"
          onClick={() => setShowModal(!showModal)}>
          Villains
        </Button>
      </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        enforcefocus={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Let's talk about the main villain and the mini bosses.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Now let's plan our your villain, their drives and goals, and who is
            on their team.
          </p>
          <br />
          <div className="btnspace">
            <Villain />
            <OverlayTrigger overlay={<Tooltip>Coming Soon!</Tooltip>}>
              <span className="d-inline-block">
                <EvilNPCs />
              </span>
            </OverlayTrigger>
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

export default VillainSubVillain;
