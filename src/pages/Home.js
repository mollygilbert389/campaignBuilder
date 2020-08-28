import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, OverlayTrigger, Tooltip} from 'react-bootstrap'
import "../components/home.css"

function Home() {
  return (
    <div>
    <div className="mainques">
        <h1> What kind of Campaign do you want to build?</h1>
       <div className="btnspace">
        
        <div className="btns">
            <Button variant="outline-success" size="lg" href="/shortcampaign">Short
            </Button>
        </div>

        <div className="btns">
            <OverlayTrigger overlay={
            <Tooltip>Coming Soon!</Tooltip>}>
            <span className="d-inline-block">
            <Button variant="outline-danger" size="lg" href="/mediumcampaign" disabled>Medium
            </Button>
            </span>
            </OverlayTrigger>
        </div>

        <div className="btns">
            <OverlayTrigger overlay={
            <Tooltip>Coming Soon!</Tooltip>}>
            <span className="d-inline-block">
            <Button variant="outline-danger" size="lg" href="/longcampaign" disabled>Long
            </Button>
            </span>
            </OverlayTrigger>
        </div>

        <div className="btns">
            <OverlayTrigger overlay={
            <Tooltip>Coming Soon!</Tooltip>}>
            <span className="d-inline-block">
            <Button variant="outline-danger" size="lg" href="/" disabled>Not Sure Yet
            </Button>
            </span>
            </OverlayTrigger>
        </div>

        </div>
    </div>
    </div>

  );
}

export default Home;