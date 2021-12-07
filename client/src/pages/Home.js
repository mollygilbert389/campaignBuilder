import React from "react";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import "../components/home.css";
import { SavedCampaigns } from "../components"


function Home() {
  return (
    <div>
        <div style={{ paddingTop: 10, paddingLeft: 10 }}>
            <h1> What kind of Campaign do you want to build?</h1>
            <div className="btnspace">
                <div style={{ margin: 10}}>
                    <OverlayTrigger overlay={<Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                            <Button variant="outline-danger" size="lg" href="/shortcampaign" disabled>Short</Button>
                        </span>
                    </OverlayTrigger>
                </div>
                <div style={{ margin: 10}}>
                    <OverlayTrigger overlay={<Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                            <Button variant="outline-danger" size="lg" href="/mediumcampaign" disabled>Medium</Button>
                        </span>
                    </OverlayTrigger>
                </div>
                <div style={{ margin: 10}}>
                    <OverlayTrigger overlay={<Tooltip>Coming Soon!</Tooltip>}>
                        <span className="d-inline-block">
                            <Button variant="outline-danger" size="lg" href="/longcampaign" disabled>Long</Button>
                        </span>
                    </OverlayTrigger>
                </div>
                <div style={{ margin: 10}}>
                    <Button variant="outline-success" size="lg" href="/customcampaign">Custom</Button>
                </div>
            </div>
        </div>
        <SavedCampaigns/>
    </div>

  );
}

export default Home;