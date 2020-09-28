import React, {Component} from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Button, ProgressBar} from 'react-bootstrap'
import './style.css'
import "../scss/Custom.scss"
import '../components/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignNameModal from '../components/WorldBuilder/CampaignNameModal';
import Government from "../components/WorldBuilder/Government/Government"
import Religion from "../components/WorldBuilder/Religion"
import Physical from "../components/WorldBuilder/Physical/Physical"
import Social from "../components/WorldBuilder/Social/Social"
import ActsClimax from "../components/Adventure/Climax/ActsClimax"
import MainGoals from "../components/Adventure/Goals/MainGoals"
import AdventureStart from "../components/Dungeon/AdventureStart"
import LocalEvents from "../components/MoreStory/LocalEvents"
import EncountersAndEvents from "../components/MoreStory/Encounters/EncountersAndEvents"
import Pillar from "../components/Adventure/Goals/Pillar"
import PatronNPCs from "../components/Adventure/PatronNPCs/PatronNPCs"
import VillainSubVillain from "../components/Adventure/Villain/VillainSubVillain"
import ExtraAdventure from "../components/MoreStory/ExtraAdventure/ExtraAdventure"
import PartyInfo from "../components/PartyInfo/PartyInfo"
import Rooms from "../components/Dungeon/Rooms"
import Setback from "../components/MoreStory/SetbacksTraps/Setback"
import MonsterCard from "../components/Dungeon/MonsterCard";
import Treasure from "../components/Treasure/Treasure"
import StoryInfo from "../components/StoryInfo/StoryInfo";
import FinalScreen from "../components/FinalCampaign/FinalScreen"

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
} from "../actions/index"

class Custom extends Component {
    state ={
        showDiv: false,
        firstRoundBtns: true,
        secondRoundBtns: false,
        thirdRoundBtns: false,
        fourthRoundBtns: false,
        fifthRoundBtns: false,
        sixthRoundBtns: false,
        seventhRoundBtns: false,
        progress: 15,
    }
    
handleNextBtn = () => {    
    if(this.state.firstRoundBtns) {
        this.setState({
            firstRoundBtns: false,
            secondRoundBtns: true,
            progress: 30,
        })
    } 
    if(this.state.secondRoundBtns) {
        this.setState({
            secondRoundBtns: false,
            thirdRoundBtns: true,
            progress: 45
        })
    } 
    if(this.state.thirdRoundBtns) {
        this.setState({
            thirdRoundBtns: false,
            fourthRoundBtns: true,
            progress: 57
        })
    } 
    if(this.state.fourthRoundBtns) {
        this.setState({
            fourthRoundBtns: false,
            fifthRoundBtns: true,
            progress: 72
        })
    } 
    if(this.state.fifthRoundBtns) {
        this.setState({
            fifthRoundBtns: false,
            sixthRoundBtns: true,
            progress: 84
        })
    } 
    if(this.state.sixthRoundBtns) {
        this.setState({
            sixthRoundBtns: false,
            seventhRoundBtns: true,
            progress: 100
        })
    } 
}

handlePrevBtn = () => {
    if(this.state.seventhRoundBtns) {
        this.setState({
            seventhRoundBtns: false,
            sixthRoundBtns: true,
        })
    } 
    if(this.state.sixthRoundBtns) {
        this.setState({
            sixthRoundBtns: false,
            fifthRoundBtns: true,
        })
    } 
    if(this.state.fifthRoundBtns) {
        this.setState({
            fifthRoundBtns: false,
            fourthRoundBtns: true,
        })
    } 
    if(this.state.fourthRoundBtns) {
        this.setState({
            fourthRoundBtns: false,
            thirdRoundBtns: true,
        })
    } 
    if(this.state.thirdRoundBtns) {
        this.setState({
            thirdRoundBtns: false,
            secondRoundBtns: true,
        })
    } 
    if(this.state.secondRoundBtns) {
        this.setState({
            secondRoundBtns: false,
            firstRoundBtns: true,
        })
    } 
}

setCampaignName = (name) => {
    const{onSetCampaignName}=this.props
    onSetCampaignName(name)
}

setPlayers = (playerData) => {
    const{onSetPlayers}=this.props
    onSetPlayers(playerData)
}

setWorldData = (destination, value) => {
    const{onSetWorldData}=this.props
    onSetWorldData(destination, value)
}

setGovernmentData = (destinaton, value) => {
    const{onSetGovernmentData}=this.props
    onSetGovernmentData(destinaton, value)
}

setReligion = (destination, value) => {
    const{onSetReligion}=this.props
    onSetReligion(destination, value)
}

setLanguages = (type) => {
    const{onSetLanguages}=this.props
    onSetLanguages(type)
}

setFactionOrgs = (names) => {
    const{onSetFactionOrgs}=this.props
    onSetFactionOrgs(names)
}

setActsAndClimax = (destination, value) => {
    const{onSetActsAndClimx}=this.props
    onSetActsAndClimx(destination, value)
}

setMainGoal = (destination, value) => {
    const{onSetMainGoal}=this.props
    onSetMainGoal(destination, value)
}

setPillar = (type) => {
    const{onSetPillar}=this.props
    onSetPillar(type)
}

setPatronData = (destination, value) => {
    const{onSetPatronData}=this.props
    onSetPatronData(destination, value)
}

setNPCData = (destination, value) => {
    const{onSetNPCData}=this.props
    onSetNPCData(destination, value)
}

setVillainData = (destination, value) => {
    const{onSetVillainData}=this.props
    onSetVillainData(destination, value)
}

setLocalEvents = (names) => {
    const{onSetLocalEvents}=this.props
    onSetLocalEvents(names)
}

setEncounters = (destination, value) => {
    const{onSetEncounters}=this.props
    onSetEncounters(destination, value)
}

setRandomEncounters = (destination, value) => {
    const{onSetRandomEncounters}=this.props
    onSetRandomEncounters(destination, value)
}

setTwist = (destination, value) => {
    const{onSetTwist}=this.props
    onSetTwist(destination, value)
}

setSideQuests = (destination, value) => {
    const{onSetSideQuests}=this.props
    onSetSideQuests(destination, value)
}

setSetback = (destination, value) => {
    const{onSetSetback}=this.props
    onSetSetback(destination, value)
}

setDungeonData = (destination, value) => {
    const{onSetDungeonData}=this.props
    onSetDungeonData(destination, value)
}

setTreasureData = (destination, value) => {
    const{onSetTreasureData}=this.props
    onSetTreasureData(destination, value)
}

    render() {
        return (
            
        <div>
            <ProgressBar animated now={this.state.progress} />
            <div className="mainques">
                <h1> Welcome to the Custom Campaign Builder</h1>
                <p>A custom campaign is open ended and there are few limits on what you can add or not add here.</p>

                {this.state.firstRoundBtns && (
                <div>
                    <p>We first need name this campaign!</p>
                    <div className="btnspace">
                        <CampaignNameModal 
                        setCampaignName={this.setCampaignName}
                        ></CampaignNameModal>
                    </div>
                </div>)}

                {this.state.secondRoundBtns && (
                <div>
                    <p>Let's talk adventurers, do you already know who is in your party? If not you can skip this, but it will be harder to make other choices down the line.</p>
                    <div className="btnspace">
                        <PartyInfo 
                        setPlayers={this.setPlayers}
                        ></PartyInfo>
                    </div>
                </div>)}

                {this.state.thirdRoundBtns && (
                <div>
                    <p>Now we need to start planning your world. Use the buttons below to make some of those decsions.</p>
                    <div className="btnspace">
                        <Physical
                        setWorldData={this.setWorldData}
                        ></Physical>
                        <Social
                        setFactionOrgs={this.setFactionOrgs}
                        campaign={this.props.campaign}
                        ></Social>
                        <Government
                        campaign={this.props.campaign}
                        setLanguages={this.setLanguages} 
                        setGovernmentData={this.setGovernmentData}
                        ></Government>
                        <Religion
                        setReligion={this.setReligion}
                        ></Religion>
                    </div>
                </div>)}

                {this.state.fourthRoundBtns && (
                <div>
                    <p>Now that we have some ideas rolling let's give your campaign some fundamentals and some characters.</p>
                    <div className="btnspace">
                        <Pillar
                        setPillar={this.setPillar}
                        ></Pillar>
                        <ActsClimax
                        setActsAndClimax={this.setActsAndClimax}
                        ></ActsClimax>
                        <MainGoals
                        setMainGoal={this.setMainGoal}
                        ></MainGoals>
                        <PatronNPCs
                        campaign={this.props.campaign}
                        setPatronData={this.setPatronData}
                        setNPCData={this.setNPCData}
                        ></PatronNPCs>
                        <VillainSubVillain
                        setVillainData={this.setVillainData}
                        ></VillainSubVillain>
                    </div>
                </div>)}

                {this.state.fifthRoundBtns && (
                <div>
                    <p>More world planning! Let's get some of the smaller details hammers out in here!</p>
                    <div className="btnspace">
                        <LocalEvents 
                        setLocalEvents={this.setLocalEvents}
                        ></LocalEvents>
                        <EncountersAndEvents
                        setRandomEncounters={this.setRandomEncounters}
                        campaign={this.props.campaign}
                        setEncounters={this.setEncounters} 
                        ></EncountersAndEvents>
                        <ExtraAdventure
                        setTwist={this.setTwist}
                        setSideQuests={this.setSideQuests} 
                        ></ExtraAdventure>
                        <Setback
                        setSetBack={this.setSetback}
                        ></Setback>
                    </div>
                </div>)}

                {this.state.sixthRoundBtns && (
                <div>
                    <p>Dungeon time! What campaign is without a dungeon? Below you can plan your your dungeon details.</p>
                    <div className="btnspace">
                        <AdventureStart
                        campaign={this.props.campaign} 
                        setDungeonData={this.setDungeonData}
                        ></AdventureStart>
                        <Rooms 
                        campaign={this.props.campaign} 
                        setDungeonData={this.setDungeonData}
                        ></Rooms>
                        <MonsterCard 
                        campaign={this.props.campaign} 
                        setDungeonData={this.setDungeonData}
                        >
                        </MonsterCard>
                        <Treasure
                        setTreasureData={this.setTreasureData} 
                        campaign={this.props.campaign}
                        ></Treasure>
                    </div>
                </div>)}

                {this.state.seventhRoundBtns && (
                <div>
                    <p>Cool! You've made a campaign! Check ou the details below! These are meant to be suggestions. Feel free to edit this as you like! Happy Campaigning.</p>
                    <div className="btnspace">
                        <FinalScreen 
                        campaign={this.props.campaign}
                        ></FinalScreen>
                    </div>
                </div>)}
            </div>

            <div>
            {!this.state.finalRoundBtn && (
                <div className="nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={this.handleNextBtn}>Next</Button>
                </div>
                )}

                {!this.state.firstRoundBtns && (
                <div className="previousBtn nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={this.handlePrevBtn}>Previous</Button>
                </div>
                )}
            </div>

            {/* //////////////////////////////////// */}
                <div className="storyCards">
                    <StoryInfo campaign={this.props.campaign}></StoryInfo>
                </div>

            </div>
    );
  }
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
})

export default connect(mapStateToProps, mapDispatchtoProps)(Custom);