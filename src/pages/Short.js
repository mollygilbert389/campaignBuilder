import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import VillianModal from '../components/StartingQuestInfo/VillianModal';
import CampaignNameModal from '../components/StartingQuestInfo/CampaignNameModal';
import '../components/home.css';
import QuestGiverModal from "../components/StartingQuestInfo/QuestGiverModal";
import CustomBoth from "../components/StartingQuestInfo/CustomBoth";
import {Button, Card} from 'react-bootstrap'
import './style.css'
import StoryInfo from "../components/StoryInfo/StoryInfo";
import Theme from "../components/GroundsTheme/Theme"
import Acts from "../components/GroundsTheme/Acts"
import SideQuests from "../components/GroundsTheme/SideQuests"
import Pillar from "../components/GroundsTheme/Pillar"
import PartyInfo from "../components/PartyInfo/PartyInfo"
import Treasure from "../components/Treasure/Treasure"
import Rooms from "../components/Dungeon/Rooms"
import Setback from "../components/Dungeon/Setback"
import Type from "../components/Dungeon/Type"
import MonsterCard from "../components/Dungeon/MonsterCard";
import CampaignCard from "../components/CampaignCard/CampaignCard"
import GenerateButton from "../components/GenereateBtn/GenereateBtn"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {setCampaignName, setVillianName, setVillianType, setQuestGiverType, setQuestGiverName, setPlayers, setPillar, setActs, setClimate, setWorld, setMeetingPlace, setSideQuests, setRooms, setSetbacks, setMonsterNum, setDungeonType, setTreasureType, setMonsters, setTreasureNumber} from "../actions/index"



class Short extends Component {
    state ={
        showDiv: false,
        firstRoundBtns: true,
        secondRoundBtns: false,
        thirdRoundBtns: false,
        fourthRoundBtns: false,
        fifthRoundBtns: false,
        finalRoundBtn: false,
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
            finalRoundBtn: true,
        })
    } 
}

handlePrevBtn = () => {

}

setCampaignName = (name) => {
    const{onSetCampaignName}=this.props
    onSetCampaignName(name)
}

setVillianNameAndType = (name, vType) => {
    const{onSetVillianName, onSetVillianType}=this.props
    onSetVillianName(name)
    onSetVillianType(vType)
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
                    <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villian or your quest giver? Sometimes the quest giver and the villian are the same.</p>
                    <div className="btnspace">
                        <QuestGiverModal setQuestGiver={this.setQuestGiverNameAndType}></QuestGiverModal>
                        <VillianModal setVillian={this.setVillianNameAndType}></VillianModal>
                        <CampaignNameModal setCampaignName={this.setCampaignName}></CampaignNameModal>
                        {/* <CustomBoth></CustomBoth> */}
                    </div>
                </div>)}

                {this.state.secondRoundBtns && (
                <div>
                    <p>Now let's talk about your party. Anwser the questions below to help define the type of characters for this campaign. You may also skip this step as your party may want to decide for themselves the characters they want.</p>
                    <div className="btnspace">
                        <PartyInfo setPlayers={this.setPlayers}></PartyInfo>
                    </div>
                </div>)}

                {this.state.thirdRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Pillar setPillar={this.setPillar}></Pillar>
                        <Theme setClimate={this.setClimate} setWorld={this.setWorld} setMeetingPlace={this.setMeetingPlace}></Theme>
                        <Acts setActs={this.setActs}></Acts>
                        <SideQuests setSideQuests={this.setSideQuests}></SideQuests>
                    </div>
                </div>)}

                {this.state.fourthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Type setDungeonType={this.setDungeonType}></Type>
                        <Rooms setRooms={this.setRooms}></Rooms>
                        <Setback setSetBacks={this.setSetbacks}></Setback>
                        <MonsterCard campaign={this.props.campaign} setMonsterNum={this.setMonsterNum} setMonsters={this.setMonsters}></MonsterCard>
                    </div>
                </div>)}

                {this.state.fifthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Treasure setTreasureType={this.setTreasureType} setTreasureNumber={this.setTreasureNumber} campaign={this.props.campaign}></Treasure>
                    </div>
                </div>)}

                {this.state.finalRoundBtn && (
                <div>
                    <p>Check out your super cool campaign below. Feel free to make edits.</p>
                    <div className="btnspace">
                        <GenerateButton campaign={this.props.campaign}></GenerateButton>
                    </div>
                </div>)}
            </div>

            {!this.state.finalRoundBtn && (
            <div className="nextBtn">
                <Button variant="outline-primary" size="lg" onClick={this.handleNextBtn}>Next</Button>
            </div>
            )}

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
    onSetVillianName: bindActionCreators(setVillianName, dispatch),
    onSetVillianType: bindActionCreators(setVillianType, dispatch),
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