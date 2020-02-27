import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap';
import "../components/home.css"
import StoryInfo from "../components/StoryInfo";


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
            <Button variant="outline-success" size="lg" href="/mediumcampaign">Medium
            </Button>
        </div>

        <div className="btns">
            <Button variant="outline-success" size="lg" href="/longcampaign">Long
            </Button>
        </div>

        <div className="btns">
            <Button variant="outline-success" size="lg" href="/customcampaign">Not Sure Yet
            </Button>
        </div>

        </div>
    </div>

    <div id="savedCampaigns">

    </div>

    </div>

  );
}

export default Home;