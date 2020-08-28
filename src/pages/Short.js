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
import Type from "../components/Dungeon/Type"
import MonsterCard from "../components/Dungeon/MonsterCard";
import CampaignCard from "../components/CampaignCard/CampaignCard"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {setCampaignName, setVillianName, setVillianType, setQuestGiverType, setQuestGiverName, setPlayers, setPillar, setActs, setClimate, setWorld, setMeetingPlace, setSideQuests, setRooms, setSetbacks, setMonsterNum} from "../actions/index"



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

handleFinalClick = () => {
    let firstQues = document.getElementById("fifthRoundQuestion")
    let secondQues = document.getElementById("campaginCard")
    let storyCard = document.getElementById("storyCard")

    const show = function (div) {
        div.style.display = 'block'
    }
    const hide = function (div) {
        div.style.display = 'none'

    }

    hide(firstQues)
    hide(storyCard)
    show(secondQues)
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

    render() {

        return (
        <div>
            <div className="mainques">
                <h1> Welcome to the Short Campaign Builder</h1>
                <p>A short campaign is comprised of one dungeon in which our adventures find themselves in almost immediately.</p>

                <div id="firstRoundQuestions">
                    <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villian or your quest giver? Sometimes the quest giver and the villian are the same.</p>
                    <div className="btnspace">
                        <CampaignNameModal setCampaignName={this.setCampaignName}></CampaignNameModal>
                        <VillianModal setVillian={this.setVillianNameAndType}></VillianModal>
                        <QuestGiverModal setQuestGiver={this.setQuestGiverNameAndType}></QuestGiverModal>
                        {/* <CustomBoth></CustomBoth> */}
                    </div>

                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleFirstClick}>Next</Button>
                    </div>
                </div>

                <div id="secondRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your party. Anwser the questions below to help define the type of characters for this campaign. You may also skip this step as your party may want to decide for themselves the characters they want.</p>
                    <div className="btnspace">
                        <PartyInfo setPlayers={this.setPlayers}></PartyInfo>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleSecondClick}>Next</Button>
                    </div>
                </div>

                <div id="thirdRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Pillar setPillar={this.setPillar}></Pillar>
                        <Theme setClimate={this.setClimate} setWorld={this.setWorld} setMeetingPlace={this.setMeetingPlace}></Theme>
                        <Acts setActs={this.setActs}></Acts>
                        <SideQuests setSideQuests={this.setSideQuests}></SideQuests>
                    </div>
                    <div className="nextBtn">
                        <Button variant="outline-primary" size="lg" onClick={this.handleThirdClick}>Next</Button>
                    </div>
                </div>

                <div id="fourthRoundQuestions" style={{display:"none"}}>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Rooms setRooms={this.setRooms}></Rooms>
                        <Setback setSetBacks={this.setSetbacks}></Setback>
                        <MonsterCard campaign={this.props.campaign} setMonsterNum={this.setMonsterNum}></MonsterCard>
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
                        <Button variant="outline-primary" size="lg" onClick={this.handleFinalClick}>Next</Button>
                    </div>
                </div>

                <div id="campaginCard" style={{display:"none"}}>
                    <p>Check out your super cool campaign below. Feel free to make edits.</p>
                    <div className="btnspace">
                        <CampaignCard></CampaignCard>
                    </div>
                </div>

                </div>

            <div className="storyCards" id="storyCard">
            <Card bg="light" style={{ width: '18rem' }}>
                <Card.Header>Short Campaign</Card.Header>
                    <StoryInfo campaign={this.props.campaign}></StoryInfo>
            </Card>
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

})

export default connect(mapStateToProps, mapDispatchtoProps)(Short);