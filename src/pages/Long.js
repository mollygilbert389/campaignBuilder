import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignNameModal from "../components/WorldBuilder/CampaignNameModal"
import '../components/home.css';

function Long() {
    return (
        <div>
            <div className="mainques">
                <h1> Welcome to the Long Campaign Builder</h1>
                <p>A Long campaign.</p>
                <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villain or your quest giver? Sometimes the quest giver and the villain are the same.</p>

                <div className="btnspace">
                <CampaignNameModal></CampaignNameModal>
                </div>
            </div>
        </div>
    );
  }
  
  export default Long;