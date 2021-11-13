import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ProgressBar } from 'react-bootstrap';
import './style.css';
import "../scss/Custom.scss";
import '../components/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CampaignNameModal, Government, Religion, Physical, Social } from "../components/WorldBuilder";
import { ActsClimax, MainGoals, Pillar, PatronNPCs, VillainSubVillain} from "../components/Adventure";
import { AdventureStart, Rooms, MonsterCard } from "../components/Dungeon";
import { LocalEvents, EncountersAndEvents, ExtraAdventure, Setback } from "../components/MoreStory";
import { PartyInfo } from "../components/PartyInfo";
import { Treasure } from "../components/Treasure";
import { StoryInfo } from "../components/StoryInfo";
import { FinalScreen } from "../components/FinalCampaign";

const CustomCampaign = ({ campaign }) => {
    const [showDiv, setShowDiv] = useState(false);
    const [firstRoundBtns, setFirstRoundBtns] = useState(true);
    const [secondRoundBtns, setSecondRoundBtns] = useState(false);
    const [thirdRoundBtns, setThirdRoundBtns] = useState(false);
    const [fourthRoundBtns, setFourthRoundBtns] = useState(false);
    const [fifthRoundBtns, setFifthRoundBtns] = useState(false);
    const [sixthRoundBtns, setSixthRoundBtns] = useState(false);
    const [seventhRoundBtns, setSeventhRoundBtns] = useState(false);
    const [finalRoundBtn, setFinalRoundBtns] = useState(false);
    const progress = 15

    const handleNextBtn = () => {    
        if(firstRoundBtns) {
            setFirstRoundBtns(false);
            setSecondRoundBtns(true);
        } 
        if(secondRoundBtns) {
            setSecondRoundBtns(false);
            setThirdRoundBtns(true);
        } 
        if(thirdRoundBtns) {
            setThirdRoundBtns(false);
            setFourthRoundBtns(true);
        } 
        if(fourthRoundBtns) {
            setFourthRoundBtns(false);
            setFifthRoundBtns(true);
        } 
        if(fifthRoundBtns) {
            setFifthRoundBtns(false);
            setSixthRoundBtns(true);
        } 
        if(sixthRoundBtns) {
            setSixthRoundBtns(false);
            setSeventhRoundBtns(true);
        } 
    }

    const handlePrevBtn = () => {
        //combine these functions and refactor
    }

    return (
        <div>
            <ProgressBar animated now={progress} />
            <div className="mainques">
                <h1> Welcome to the Custom Campaign Builder</h1>
                <p>A custom campaign is open ended and there are few limits on what you can add or not add here.</p>
                {firstRoundBtns && (
                    <div>
                        <p>We first need name this campaign!</p>
                        <div className="btnspace">
                            <CampaignNameModal/>
                        </div>
                    </div>
                )}
                {secondRoundBtns && (
                    <div>
                        <p>Let's talk adventurers, do you already know who is in your party? If not you can skip this, but it will be harder to make other choices down the line.</p>
                        <div className="btnspace">
                            <PartyInfo/>
                        </div>
                    </div>
                )}
                {thirdRoundBtns && (
                    <div>
                        <p>Now we need to start planning your world. Use the buttons below to make some of those decsions.</p>
                        <div className="btnspace">
                            <Physical/>
                            <Religion/>
                            <Social/>
                            <Government/>
                        </div>
                    </div>
                )}
                {fourthRoundBtns && (
                    <div>
                        <p>Now that we have some ideas rolling let's give your campaign some fundamentals and some characters.</p>
                        <div className="btnspace">
                            <Pillar/>
                            <ActsClimax/>
                            <MainGoals/>
                            <PatronNPCs/>
                            <VillainSubVillain/>
                        </div>
                    </div>
                )}
                {fifthRoundBtns && (
                    <div>
                        <p>More world planning! Let's get some of the smaller details hammers out in here!</p>
                        <div className="btnspace">
                            <LocalEvents/>
                            <Setback/>
                            <EncountersAndEvents/>
                            <ExtraAdventure/>
                        </div>
                    </div>
                )}
                {sixthRoundBtns && (
                    <div>
                        <p>Dungeon time! What campaign is without a dungeon? Below you can plan your your dungeon details.</p>
                        <div className="btnspace">
                            <AdventureStart/>
                            <Rooms/>
                            <MonsterCard/>
                            <Treasure/>
                        </div>
                    </div>
                )}
                {seventhRoundBtns && (
                    <div>
                        <p>Cool! You've made a campaign! Check ou the details below! These are meant to be suggestions. Feel free to edit this as you like! Happy Campaigning.</p>
                        <div className="btnspace">
                            <FinalScreen campaign={campaign}/>
                        </div>
                    </div>
                )}
            </div>
            <div>
            {!finalRoundBtn && (
                <div className="nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={handleNextBtn}>Next</Button>
                </div>
            )}
            {!firstRoundBtns && (
                <div className="previousBtn nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={handlePrevBtn}>Previous</Button>
                </div>
            )}
            </div>
                <div className="storyCards">
                    <StoryInfo campaign={campaign}/>
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

export default connect(mapStateToProps)(CustomCampaign);