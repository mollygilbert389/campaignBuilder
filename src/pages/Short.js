import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import VillianModal from '../components/QuestGiverBtns/VillianModal';
import CampaignNameModal from '../components/CampaignNameModal';
import '../components/home.css';
import QuestGiverModal from "../components/QuestGiverBtns/QuestGiverModal";
import CustomBoth from "../components/QuestGiverBtns/CustomBoth";
import {Button, Card} from 'react-bootstrap'
import './style.css'
import StoryInfo from "../components/StoryInfo";
import Theme from "../components/GroundsTheme/Theme"


class Short extends Component {

    constructor() {
        super();
        this.state ={
            showDiv: false,
        }
    }   

hiddenDiv = () => {
    let nextRound = document.getElementById("secondRoundQuestions")
    if (this.showDiv===false) {
        const hide = function (div) {
            div.style.display = 'none'
        }
        hide(nextRound)
    }
}

handleClick = () => {
    let firstQues = document.getElementById("firstRoundQuestions")
    let secondQues = document.getElementById("secondRoundQuestions")

    const show = function (div) {
        div.style.display = 'block'
    }
    const hide = function (div) {
        div.style.display = 'none'

    }

    hide(firstQues)
    show(secondQues)

}


    render() {

        return (
        <div>
            <div className="mainques">
                <h1> Welcome to the Short Campaign Builder</h1>
                <p>A short campaign is comprised of one dungeon in which our adventures find themselves in almost immediately.</p>

                
                

                <div id="firstRoundQuestions">
                <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villian or your quest giver? Sometimes the quest giver and the villian are the same.</p>
                <div className="btnspace">
                    <CampaignNameModal></CampaignNameModal>
                    <VillianModal></VillianModal>
                    <QuestGiverModal></QuestGiverModal>
                    <CustomBoth></CustomBoth>
                    </div>
                </div>

                <div id="secondRoundQuestions" style={{display:"none"}}>
                <p>Now let's talk about themes in this game.</p>
                <div className="btnspace">
                <Theme></Theme>
                </div>
                </div>

                </div>

            <div className="nextBtn">
                <Button variant="outline-primary" size="lg" onClick={this.handleClick}>Next</Button>
            </div>

            <div className="storyCards">
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Header>Short Campaign</Card.Header>
                    <StoryInfo></StoryInfo>
            </Card>
            </div>

            </div>

    );
  }
}

export default Short;