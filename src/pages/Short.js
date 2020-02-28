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
import Acts from "../components/GroundsTheme/Acts"
import SideQuests from "../components/GroundsTheme/SideQuests"
import Pillar from "../components/GroundsTheme/Pillar"
import PartyInfo from "../components/PartyInfo/PartyInfo"
import Treasure from "../components/Treasure/Treasue"
import Rooms from "../components/Dungeon/Rooms"
import Setback from "../components/Dungeon/Setback"
import SideMonsters from "../components/Dungeon/SideMonsters"
import Type from "../components/Dungeon/Type"



class Short extends Component {

    constructor() {
        super();
        this.state ={
            showDiv: false,
        }
    } 

handleFirstClick = () => {
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


handleSecondClick = () => {
    let firstQues = document.getElementById("secondRoundQuestions")
    let secondQues = document.getElementById("thirdRoundQuestions")

    const show = function (div) {
        div.style.display = 'block'
    }
    const hide = function (div) {
        div.style.display = 'none'

    }

    hide(firstQues)
    show(secondQues)
}

handleThirdClick = () => {
    let firstQues = document.getElementById("thirdRoundQuestions")
    let secondQues = document.getElementById("fourthRoundQuestions")

    const show = function (div) {
        div.style.display = 'block'
    }
    const hide = function (div) {
        div.style.display = 'none'

    }

    hide(firstQues)
    show(secondQues)
}

handleFourthClick = () => {
    let firstQues = document.getElementById("fourthRoundQuestions")
    let secondQues = document.getElementById("fifthRoundQuestion")

    const show = function (div) {
        div.style.display = 'block'
    }
    const hide = function (div) {
        div.style.display = 'none'

    }

    hide(firstQues)
    show(secondQues)
}

handleLastClick = () => {

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

                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleFirstClick}>Next</Button>
                    </div>
                </div>

                <div id="secondRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your party. Anwser the questions below to help define the type of characters for this campaign. You may also skip this step as your party may want to decide for themselves the characters they want.</p>
                    <div className="btnspace">
                        <PartyInfo></PartyInfo>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleSecondClick}>Next</Button>
                    </div>
                </div>

                <div id="thirdRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Pillar></Pillar>
                        <Theme></Theme>
                        <Acts></Acts>
                        <SideQuests></SideQuests>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleThirdClick}>Next</Button>
                    </div>
                </div>

                <div id="fourthRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Rooms></Rooms>
                        <Setback></Setback>
                        <SideMonsters></SideMonsters>
                        <Type></Type>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleFourthClick}>Next</Button>
                    </div>
                </div>

                <div id="fifthRoundQuestion" style={{display:"none"}}>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Treasure></Treasure>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleLastClick}>Next</Button>
                    </div>
                </div>

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