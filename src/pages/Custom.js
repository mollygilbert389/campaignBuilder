import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

import {
    setCampaignName,
    setPlayers, 
    setWorldData,
    setGovernmentData,
    setReligion,
    setLanguages,
    setFactionOrgs,
    setActsAndClimax,
    setMainGoal,
    setPillar,
    setPatronData,
    setNPCData,
    setVillainData,
    setLocalEvents,
    setEncounters,
    setRandomEncounters,
    setTwist,
    setSideQuests,
    setSetback, 
    setDungeonData,
    setTreasureData, 
    setFactionShow,
    setLanguageShow,
} from "../actions/index"

const CustomCampaign = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [firstRoundBtns, setFirstRoundBtns] = useState(false);
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

    const setCampaignName = (name) => {
        const{onSetCampaignName}=this.props
        onSetCampaignName(name)
    }

    const setPlayers = (destination, value) => {
        const{onSetPlayers}=this.props
        onSetPlayers(destination, value)
    }

    const setWorldData = (destination, value) => {
        const{onSetWorldData}=this.props
        onSetWorldData(destination, value)
    }

    const setGovernmentData = (destinaton, value) => {
        const{onSetGovernmentData}=this.props
        onSetGovernmentData(destinaton, value)
    }

    const setReligion = (destination, value) => {
        const{onSetReligion}=this.props
        onSetReligion(destination, value)
    }

    const setLanguages = (type) => {
        const{onSetLanguages}=this.props
        onSetLanguages(type)
    }

    const setFactionOrgs = (names) => {
        const{onSetFactionOrgs}=this.props
        onSetFactionOrgs(names)
    }

    const setActsAndClimax = (destination, value) => {
        const{onSetActsAndClimx}=this.props
        onSetActsAndClimx(destination, value)
    }

    const setMainGoal = (destination, value) => {
        const{onSetMainGoal}=this.props
        onSetMainGoal(destination, value)
    }

    const setPillar = (type) => {
        const{onSetPillar}=this.props
        onSetPillar(type)
    }

    const setPatronData = (destination, value) => {
        const{onSetPatronData}=this.props
        onSetPatronData(destination, value)
    }

    const setNPCData = (destination, value) => {
        const{onSetNPCData}=this.props
        onSetNPCData(destination, value)
    }

    const setVillainData = (destination, value) => {
        const{onSetVillainData}=this.props
        onSetVillainData(destination, value)
    }

    const setLocalEvents = (names) => {
        const{onSetLocalEvents}=this.props
        onSetLocalEvents(names)
    }

    const setEncounters = (destination, value) => {
        const{onSetEncounters}=this.props
        onSetEncounters(destination, value)
    }

    const setRandomEncounters = (destination, value) => {
        const{onSetRandomEncounters}=this.props
        onSetRandomEncounters(destination, value)
    }

    const setTwist = (destination, value) => {
        const{onSetTwist}=this.props
        onSetTwist(destination, value)
    }

    const setSideQuests = (destination, value) => {
        const{onSetSideQuests}=this.props
        onSetSideQuests(destination, value)
    }

    const setSetback = (destination, value) => {
        const{onSetSetback}=this.props
        onSetSetback(destination, value)
    }

    const setDungeonData = (destination, value) => {
        const{onSetDungeonData}=this.props
        onSetDungeonData(destination, value)
    }

    const setTreasureData = (destination, value) => {
        const{onSetTreasureData}=this.props
        onSetTreasureData(destination, value)
    }

    const setFactionShow = (destination, value) => {
        const{onSetFactionShow}=this.props
        onSetFactionShow(destination, value)
    }

    const setLanguageShow = (destination, value) => {
        const{onSetLanguageShow}=this.props
        onSetLanguageShow(destination, value)
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
                            <CampaignNameModal setCampaignName={setCampaignName}/>
                        </div>
                    </div>
                )}
                {secondRoundBtns && (
                    <div>
                        <p>Let's talk adventurers, do you already know who is in your party? If not you can skip this, but it will be harder to make other choices down the line.</p>
                        <div className="btnspace">
                            <PartyInfo setPlayers={setPlayers}/>
                        </div>
                    </div>
                )}
                {thirdRoundBtns && (
                    <div>
                        <p>Now we need to start planning your world. Use the buttons below to make some of those decsions.</p>
                        <div className="btnspace">
                            <Physical setWorldData={setWorldData}/>
                            <Religion setReligion={setReligion}/>
                            <Social
                                setPlayers={setPlayers}
                                setFactionOrgs={setFactionOrgs}
                                setFactionShow={setFactionShow}
                                campaign={this.props.campaign}/>
                            <Government
                                campaign={this.props.campaign}
                                setLanguages={setLanguages}
                                setLanguageShow={setLanguageShow} 
                                setGovernmentData={setGovernmentData}/>
                        </div>
                    </div>
                )}
                {fourthRoundBtns && (
                    <div>
                        <p>Now that we have some ideas rolling let's give your campaign some fundamentals and some characters.</p>
                        <div className="btnspace">
                            <Pillar setPillar={setPillar}/>
                            <ActsClimax setActsAndClimax={setActsAndClimax}/>
                            <MainGoals setMainGoal={setMainGoal}/>
                            <PatronNPCs
                                campaign={this.props.campaign}
                                setPatronData={setPatronData}
                                setNPCData={setNPCData}/>
                            <VillainSubVillain setVillainData={setVillainData}/>
                        </div>
                    </div>
                )}
                {fifthRoundBtns && (
                    <div>
                        <p>More world planning! Let's get some of the smaller details hammers out in here!</p>
                        <div className="btnspace">
                            <LocalEvents setLocalEvents={setLocalEvents}/>
                            <Setback setSetBack={setSetback}/>
                            <EncountersAndEvents
                                setRandomEncounters={setRandomEncounters}
                                campaign={this.props.campaign}
                                setEncounters={setEncounters}/>
                            <ExtraAdventure setTwist={setTwist} setSideQuests={setSideQuests}/>
                        </div>
                    </div>
                )}
                {sixthRoundBtns && (
                    <div>
                        <p>Dungeon time! What campaign is without a dungeon? Below you can plan your your dungeon details.</p>
                        <div className="btnspace">
                            <AdventureStart campaign={this.props.campaign} setDungeonData={setDungeonData}/>
                            <Rooms campaign={this.props.campaign} setDungeonData={setDungeonData}/>
                            <MonsterCard campaign={this.props.campaign} setDungeonData={setDungeonData}/>
                            <Treasure setTreasureData={setTreasureData} campaign={this.props.campaign}/>
                        </div>
                    </div>
                )}
                {seventhRoundBtns && (
                    <div>
                        <p>Cool! You've made a campaign! Check ou the details below! These are meant to be suggestions. Feel free to edit this as you like! Happy Campaigning.</p>
                        <div className="btnspace">
                            <FinalScreen campaign={this.props.campaign}/>
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
                    <StoryInfo campaign={this.props.campaign}/>
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

const mapDispatchtoProps = (dispatch) => ({
    onSetCampaignName: bindActionCreators(setCampaignName, dispatch),
    onSetPlayers: bindActionCreators(setPlayers, dispatch),
    onSetWorldData: bindActionCreators(setWorldData, dispatch),
    onSetGovernmentData: bindActionCreators(setGovernmentData, dispatch),
    onSetReligion: bindActionCreators(setReligion, dispatch),
    onSetLanguages: bindActionCreators(setLanguages, dispatch),
    onSetFactionOrgs: bindActionCreators(setFactionOrgs, dispatch),
    onSetActsAndClimx: bindActionCreators(setActsAndClimax, dispatch),
    onSetMainGoal: bindActionCreators(setMainGoal, dispatch),
    onSetPillar: bindActionCreators(setPillar, dispatch),
    onSetPatronData: bindActionCreators(setPatronData, dispatch),
    onSetNPCData: bindActionCreators(setNPCData, dispatch),
    onSetVillainData: bindActionCreators(setVillainData, dispatch),
    onSetLocalEvents: bindActionCreators(setLocalEvents, dispatch),
    onSetEncounters: bindActionCreators(setEncounters, dispatch),
    onSetRandomEncounters: bindActionCreators(setRandomEncounters, dispatch),
    onSetTwist: bindActionCreators(setTwist, dispatch),
    onSetSideQuests: bindActionCreators(setSideQuests, dispatch),
    onSetSetback: bindActionCreators(setSetback, dispatch),
    onSetDungeonData: bindActionCreators(setDungeonData, dispatch),
    onSetTreasureData: bindActionCreators(setTreasureData, dispatch),
    onSetFactionShow: bindActionCreators(setFactionShow, dispatch),
    onSetLanguageShow: bindActionCreators(setLanguageShow, dispatch),
})

export default connect(mapStateToProps, mapDispatchtoProps)(CustomCampaign);