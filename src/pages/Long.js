import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignNameModal from "../components/CampaignNameModal"
import VillianModal from "../components/QuestGiverBtns/VillianModal"
import QuestGiverModal from "../components/QuestGiverBtns/QuestGiverModal"
import CustomBoth from "../components/QuestGiverBtns/CustomBoth"
import '../components/home.css';

function Long() {
    return (
        <div>
            <div className="mainques">
                <h1> Welcome to the Long Campaign Builder</h1>
                <p>A Long campaign.</p>
                <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villian or your quest giver? Sometimes the quest giver and the villian are the same.</p>

                <div className="btnspace">
                <CampaignNameModal></CampaignNameModal>
                <VillianModal></VillianModal>
                <QuestGiverModal></QuestGiverModal>
                <CustomBoth></CustomBoth>
                </div>
            </div>
        </div>
    );
  }
  
  export default Long;