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
import Villain from "../components/Adventure/Villain/Villain"
// import Between from "../components/MoreStory/Between/Between"
import ExtraAdventure from "../components/MoreStory/ExtraAdventure/ExtraAdventure"
import PartyInfo from "../components/PartyInfo/PartyInfo"
import Rooms from "../components/Dungeon/Rooms"
import Setback from "../components/MoreStory/SetbacksTraps/Setback"
// import Type from "../components/Dungeon/Type"
import MonsterCard from "../components/Dungeon/MonsterCard";
import Treasure from "../components/Treasure/Treasure"
import StoryInfo from "../components/StoryInfo/StoryInfo";
import FinalScreen from "../components/FinalCampaign/FinalScreen"
// import Encounters from "../components/MoreStory/Encounters/Encounters";
// import AdventureSite from "../components/WorldBuilder/Physical/AdventureSite";
// import DiceRoller from "../components/DiceRoller"\
import {
    setCampaignName,
    setPlayers, 
    setGovernment,
    setCurrency,
    setWorld,
    setMapScale,
    setCharMeeting,
    setReligion,
    setLanguages,
    setFactionOrgs,
    setActs,
    setClimax,
    setMainGoal,
    setPillar,
    setPatronName,
    // setNPCNumber,
    setVillainName,
    setLocalEvents,
    setRandomEncounterNumber,
    setRooms, 
    setMonsterNum, 
    setMonsters, 
    setTreasureType, 
    setTreasureNumber
    // setSideQuests, 
    // setSetbacks, 
    // setDungeonType, 

} from "../actions/index"



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

setGovernment = (type) => {
    const{onSetGovernment}=this.props
    onSetGovernment(type)
}

setCurrency = (type) => {
    const{onSetCurrency}=this.props
    onSetCurrency(type)
}

setWorld = (type) => {
    const{onSetWorld}=this.props
    onSetWorld(type)
}

setMapScale = (type) => {
    const{onSetMapScale}=this.props
    onSetMapScale(type)
}

setCharMeeting = (place) => {
    const{onSetCharMeeting}=this.props
    onSetCharMeeting(place)
}

setReligion = (type) => {
    const{onSetReligion}=this.props
    onSetReligion(type)
}

setLanguages = (type) => {
    const{onSetLanguages}=this.props
    onSetLanguages(type)
}

setFactionOrgs = (names) => {
    const{onSetFactionOrgs}=this.props
    onSetFactionOrgs(names)
}

setActs = (number) => {
    const{onSetActs}=this.props
    onSetActs(number)
}

setClimax = (type) => {
    const{onSetClimax}=this.props
    onSetClimax(type)
}

setMainGoal = (type) => {
    const{onSetMainGoal}=this.props
    onSetMainGoal(type)
}

setPillar = (type) => {
    const{onSetPillar}=this.props
    onSetPillar(type)
}

setPatronName = (name) => {
    const{onSetPatronName}=this.props
    onSetPatronName(name)
}

setNPCNumber = (number) => {
    const{onSetNPCNumber}=this.props
    onSetNPCNumber(number)
}

setVillainName = (name) => {
    const{onSetVillainName}=this.props
    onSetVillainName(name)
}

setLocalEvents = (names) => {
    const{onSetLocalEvents}=this.props
    onSetLocalEvents(names)
}

setRandomEncounterNumber = (number) => {
    const{onSetRandomEncounterNumber}=this.props
    onSetRandomEncounterNumber(number)
}

setRooms = (rooms) => {
    const{onSetRooms}=this.props
    onSetRooms(rooms)
}

// setMonsterNum = (number) => {
//     const{onSetMonsterNum}=this.props
//     onSetMonsterNum(number)
// }

setMonsters = (type) => {
    const{onSetMonsters}=this.props
    onSetMonsters(type)
}

setTreasureType = (type) => {
    const{onSetTreasureType}=this.props
    onSetTreasureType(type)
}

setTreasureNumber = (number) => {
    const{onSetTreasureNumber}=this.props
    onSetTreasureNumber(number)
}

// setSideQuests = (sideQuests) => {
//     const{onSetSideQuests}=this.props
//     onSetSideQuests(sideQuests)
// }

// setSetbacks = (yesno) => {
//     const{onSetSetbacks}=this.props
//     onSetSetbacks(yesno)
// }

// setDungeonType = (type) => {
//     const{onSetDungeonType}=this.props
//     onSetDungeonType(type)
// }

    render() {
        return (
            
        <div>
            <ProgressBar animated now={this.state.progress} />
            <div className="mainques">
                <h1> Welcome to the Custom Campaign Builder</h1>
                <p>A custom campaign is open ended and there are few limits on what you can add or not add here.</p>

                {this.state.firstRoundBtns && (
                <div>
                    <p>We first need to build your world. Your leadership. Your religion, and your society.</p>
                    <div className="btnspace">
                        <CampaignNameModal 
                        setCampaignName={this.setCampaignName}
                        ></CampaignNameModal>
                    </div>
                </div>)}

                {this.state.secondRoundBtns && (
                <div>
                    <p>Let's talk characters. Let's think about the goal of this entire campaign. Do you want to start with your villain or your quest giver? Sometimes the quest giver and the villain are the same.</p>
                    <div className="btnspace">
                        <PartyInfo 
                        setPlayers={this.setPlayers}
                        ></PartyInfo>
                    </div>
                </div>)}

                {this.state.thirdRoundBtns && (
                <div>
                    <p>Now let's talk about your party. Anwser the questions below to help define the type of characters for this campaign. You may also skip this step as your party may want to decide for themselves the characters they want.</p>
                    <div className="btnspace">
                        <Physical
                        setWorld={this.setWorld}
                        setMapScale={this.setMapScale}
                        setCharMeeting={this.setCharMeeting}
                        ></Physical>
                        <Social
                        setFactionOrgs={this.setFactionOrgs}
                        campaign={this.props.campaign}
                        ></Social>
                        <Government 
                        setLanguages={this.setLanguages}
                        setGovernment={this.setGovernment}
                        setCurrency={this.setCurrency}
                        ></Government>
                        <Religion
                        setReligion={this.setReligion}
                        ></Religion>
                    </div>
                </div>)}

                {this.state.fourthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <Pillar
                        setPillar={this.setPillar}
                        ></Pillar>
                        <ActsClimax
                        setActs={this.setActs}
                        setClimax={this.setClimax}
                        ></ActsClimax>
                        <MainGoals
                        setMainGoal={this.setMainGoal}
                        ></MainGoals>
                        <PatronNPCs
                        setPatronName={this.setPatronName}
                        // setNPCNumber={this.setNPCNumber}
                        ></PatronNPCs>
                        <Villain
                        setVillainName={this.setVillainName}
                        ></Villain>
                    </div>
                </div>)}

                {this.state.fifthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <LocalEvents setLocalEvents={this.setLocalEvents}
                        ></LocalEvents>
                        <EncountersAndEvents 
                        setRandomEncounterNumber={this.setRandomEncounterNumber}
                        ></EncountersAndEvents>
                        <ExtraAdventure></ExtraAdventure>
                        <Setback 
                        setSetBacks={this.setSetbacks}
                        ></Setback>
                    </div>
                </div>)}

                {this.state.sixthRoundBtns && (
                <div>
                    <p>Now let's talk about your world in this game. Click one of the buttons below to add to your party card.</p>
                    <div className="btnspace">
                        <AdventureStart></AdventureStart>
                        {/* <Type setDungeonType={this.setDungeonType}></Type> */}
                        <Rooms 
                        setRooms={this.setRooms}
                        ></Rooms>
                        <MonsterCard 
                        campaign={this.props.campaign} 
                        setMonsterNum={this.setMonsterNum} 
                        setMonsters={this.setMonsters}
                        >
                        </MonsterCard>
                        <Treasure
                        setTreasureNumber={this.setTreasureNumber} 
                        setTreasureType={this.setTreasureType} 
                        campaign={this.props.campaign}
                        ></Treasure>
                    </div>
                </div>)}

                {this.state.seventhRoundBtns && (
                <div>
                    <p>Check out your super cool campaign below. Feel free to make edits.</p>
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
    onSetPlayers: bindActionCreators(setPlayers, dispatch),
    onSetGovernment: bindActionCreators(setGovernment, dispatch),
    onSetCurrency: bindActionCreators(setCurrency, dispatch),
    onSetWorld: bindActionCreators(setWorld, dispatch),
    onSetMapScale: bindActionCreators(setMapScale, dispatch),
    onSetCharMeeting: bindActionCreators(setCharMeeting, dispatch),
    onSetReligion: bindActionCreators(setReligion, dispatch),
    onSetLanguages: bindActionCreators(setLanguages, dispatch),
    onSetFactionOrgs: bindActionCreators(setFactionOrgs, dispatch),
    onSetActs: bindActionCreators(setActs, dispatch),
    onSetClimax: bindActionCreators(setClimax, dispatch),
    onSetMainGoal: bindActionCreators(setMainGoal, dispatch),
    onSetPillar: bindActionCreators(setPillar, dispatch),
    onSetPatronName: bindActionCreators(setPatronName, dispatch),
    // onSetNPCNumber: bindActionCreators(setNPCNumber, dispatch),
    onSetVillainName: bindActionCreators(setVillainName, dispatch),
    onSetLocalEvents: bindActionCreators(setLocalEvents, dispatch),
    onSetRandomEncounterNumber: bindActionCreators(setRandomEncounterNumber, dispatch),
    onSetRooms: bindActionCreators(setRooms, dispatch),
    onSetMonsterNum: bindActionCreators(setMonsterNum, dispatch),
    onSetMonsters: bindActionCreators(setMonsters, dispatch),
    onSetTreasureType: bindActionCreators(setTreasureType, dispatch),
    onSetTreasureNumber: bindActionCreators(setTreasureNumber, dispatch),
    // onSetSideQuests: bindActionCreators(setSideQuests, dispatch),
    // onSetSetbacks: bindActionCreators(setSetbacks, dispatch),
    // onSetDungeonType: bindActionCreators(setDungeonType, dispatch),

})

export default connect(mapStateToProps, mapDispatchtoProps)(Short);