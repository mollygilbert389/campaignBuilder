import React, {Component} from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {setCampaignName, setVillainName, setVillainType, setQuestGiverType, setQuestGiverName, setPlayers, setPillar, setActs, setClimate, setWorld, setMeetingPlace, setSideQuests, setRooms, setSetbacks, setMonsterNum, setDungeonType, setTreasureType, setMonsters, setTreasureNumber} from "../actions/index"
import {Button} from 'react-bootstrap'
import './style.css'
import '../components/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CampaignNameModal from '../components/WorldBuilder/CampaignNameModal';
import Government from "../components/WorldBuilder/Government/Government"
import Physical from "../components/WorldBuilder/Physical/Physical"
import Social from "../components/WorldBuilder/Social/Social"
import ActsClimax from "../components/Adventure/Climax/ActsClimax"
import MainGoals from "../components/Adventure/Goals/MainGoals"
import AdventureStart from "../components/Dungeon/AdventureStart"
import Pillar from "../components/Adventure/Goals/Pillar"
import PatronAllies from "../components/Adventure/PatronAllies/PatronAllies"
import Villain from "../components/Adventure/Villain/Villain"
import Between from "../components/MoreStory/Between/Between"
import NPCs from "../components/MoreStory/NPCs/NPCs"
import Twists from "../components/MoreStory/Twists/Twists"
import PartyInfo from "../components/PartyInfo/PartyInfo"
import Rooms from "../components/Dungeon/Rooms"
import Setback from "../components/MoreStory/Setback"
import Type from "../components/Dungeon/Type"
import MonsterCard from "../components/Dungeon/MonsterCard";
import Treasure from "../components/Treasure/Treasure"
import StoryInfo from "../components/StoryInfo/StoryInfo";
import FinalScreen from "../components/FinalCampaign/FinalScreen"
// import DiceRoller from "../components/DiceRoller"



class Short extends Component {
    state ={
        showDiv: false,
        firstRoundBtns: true,
        secondRoundBtns: false,
        thirdRoundBtns: false,
        fourthRoundBtns: false,
        fifthRoundBtns: false,
        sixthRoundBtns: false,
        seventhRoundBtns: false,
    }
    
handleNextBtn = () => {    
    if(this.state.firstRoundBtns) {
        this.setState({
            firstRoundBtns: false,
            secondRoundBtns: true,
        })
    } 
    if(this.state.secondRoundBtns) {
        this.setState({
            secondRoundBtns: false,
            thirdRoundBtns: true,
        })
    } 
    if(this.state.thirdRoundBtns) {
        this.setState({
            thirdRoundBtns: false,
            fourthRoundBtns: true,
        })
    } 
    if(this.state.fourthRoundBtns) {
        this.setState({
            fourthRoundBtns: false,
            fifthRoundBtns: true,
        })
    } 
    if(this.state.fifthRoundBtns) {
        this.setState({
            fifthRoundBtns: false,
            sixthRoundBtns: true,
        })
    } 
    if(this.state.sixthRoundBtns) {
        this.setState({
            sixthRoundBtns: false,
            seventhRoundBtns: true,
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

setVillainNameAndType = (name, vType) => {
    const{onSetVillainName, onSetVillainType}=this.props
    onSetVillainName(name)
    onSetVillainType(vType)
}

setQuestGiverNameAndType = (name, qType) => {
    const{onSetQuestGiverName, onSetQuestGiverType}=this.props
    onSetQuestGiverName(name)
    onSetQuestGiverType(qType)
}

setPlayers = (playerData) => {
    const{onSetPlayers}=this.props
    onSetPlayers(playerData)
}

setPillar = (name) => {
    const{onSetPillar}=this.props
    onSetPillar(name)
}

setActs = (name) => {
    const{onSetActs}=this.props
    onSetActs(name)
}

setClimate = (climateType) => {
    const{onSetClimate}=this.props
    onSetClimate(climateType)
}

setWorld = (worldType) => {
    const{onSetWorld}=this.props
    onSetWorld(worldType)
}

setMeetingPlace = (meetingPlace) => {
    const{onSetMeetingPlace}=this.props
    onSetMeetingPlace(meetingPlace)
}

setSideQuests = (sideQuests) => {
    const{onSetSideQuests}=this.props
    onSetSideQuests(sideQuests)
}

setRooms = (rooms) => {
    const{onSetRooms}=this.props
    onSetRooms(rooms)
}

setSetbacks = (yesno) => {
    const{onSetSetbacks}=this.props
    onSetSetbacks(yesno)
}

setMonsterNum = (number) => {
    const{onSetMonsterNum}=this.props
    onSetMonsterNum(number)
}

setDungeonType = (type) => {
    const{onSetDungeonType}=this.props
    onSetDungeonType(type)
}

setTreasureType = (type) => {
    const{onSetTreasureType}=this.props
    onSetTreasureType(type)
}

setTreasureNumber = (number) => {
    const{onSetTreasureNumber}=this.props
    onSetTreasureNumber(number)
}

setMonsters = (type) => {
    const{onSetMonsters}=this.props
    onSetMonsters(type)
}

    render() {
        return (
        <div>
            <div className="mainques">
                <h1> Welcome to the Short Campaign Builder</h1>
                <p>A short campaign is comprised of one dungeon in which our adventures find themselves in almost immediately.</p>

                {this.state.firstRoundBtns && (
                <div>
                    <p>We first need to build your world. Your leadership. Your religion, and your society.</p>
                    <div className="btnspace">
                        {!this.props.campaign.campaignName && (<CampaignNameModal setCampaignName={this.setCampaignName}></CampaignNameModal>)}
                        <Government></Government>
                        <Physical></Physical>
                        <Social></Social>

                    </div>
                </div>)}

                {this.state.secondRoundBtns && (
                <div>
                    <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villain or your quest giver? Sometimes the quest giver and the villain are the same.</p>
                    <div className="btnspace">
                        <ActsClimax></ActsClimax>
                        <MainGoals></MainGoals>
                        <Pillar></Pillar>
                        <PatronAllies></PatronAllies>
                        <Villain></Villain>

                    </div>
                </div>)}

                {this.state.thirdRoundBtns && (
                <div>
                    <p>Now let's talk about your party. Anwser the questions below to help define the type of characters for this campaign. You may also skip this step as your party may want to decide for themselves the characters they want.</p>
                    <div className="btnspace">
                        <PartyInfo setPlayers={this.setPlayers}></PartyInfo>
                    </div>
                </div>)}

                {this.state.fourthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        {/* <Pillar setPillar={this.setPillar}></Pillar>
                        <Acts setActs={this.setActs}></Acts>
                        <SideQuests setSideQuests={this.setSideQuests}></SideQuests> */}
                        <Between></Between>
                        <NPCs></NPCs>
                        <Twists></Twists>
                        <Setback setSetBacks={this.setSetbacks}></Setback>
                    </div>
                </div>)}

                {this.state.fifthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <AdventureStart></AdventureStart>
                        <Type setDungeonType={this.setDungeonType}></Type>
                        <Rooms setRooms={this.setRooms}></Rooms>
                        <MonsterCard campaign={this.props.campaign} setMonsterNum={this.setMonsterNum} setMonsters={this.setMonsters}></MonsterCard>
                    </div>
                </div>)}

                {this.state.sixthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Treasure setTreasureType={this.setTreasureType} setTreasureNumber={this.setTreasureNumber} campaign={this.props.campaign}></Treasure>
                    </div>
                </div>)}

                {this.state.seventhRoundBtns && (
                <div>
                    <p>Check out your super cool campaign below. Feel free to make edits.</p>
                    <div className="btnspace">
                        <FinalScreen campaign={this.props.campaign}></FinalScreen>
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

                <div>
                    {/* <DiceRoller></DiceRoller> */}
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
    onSetVillainName: bindActionCreators(setVillainName, dispatch),
    onSetVillainType: bindActionCreators(setVillainType, dispatch),
    onSetQuestGiverName: bindActionCreators(setQuestGiverName, dispatch),
    onSetQuestGiverType: bindActionCreators(setQuestGiverType, dispatch),
    onSetPlayers: bindActionCreators(setPlayers, dispatch),
    onSetPillar: bindActionCreators(setPillar, dispatch),
    onSetActs: bindActionCreators(setActs, dispatch),
    onSetClimate: bindActionCreators(setClimate, dispatch),
    onSetWorld: bindActionCreators(setWorld, dispatch),
    onSetMeetingPlace: bindActionCreators(setMeetingPlace, dispatch),
    onSetSideQuests: bindActionCreators(setSideQuests, dispatch),
    onSetRooms: bindActionCreators(setRooms, dispatch),
    onSetSetbacks: bindActionCreators(setSetbacks, dispatch),
    onSetMonsterNum: bindActionCreators(setMonsterNum, dispatch),
    onSetDungeonType: bindActionCreators(setDungeonType, dispatch),
    onSetTreasureType: bindActionCreators(setTreasureType, dispatch),
    onSetTreasureNumber: bindActionCreators(setTreasureNumber, dispatch),
    onSetMonsters: bindActionCreators(setMonsters, dispatch),

})

export default connect(mapStateToProps, mapDispatchtoProps)(Short);