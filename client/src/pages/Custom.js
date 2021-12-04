import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ProgressBar } from 'react-bootstrap';
import './style.css';
import "../scss/Custom.scss";
import '../components/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Government, 
    Religion, 
    Physical, 
    Social, 
    ActsClimax, 
    MainGoals, 
    Pillar, 
    PatronNPCs, 
    VillainSubVillain,
    AdventureStart, 
    Rooms, 
    MonsterCard,
    LocalEvents, 
    EncountersAndEvents, 
    ExtraAdventure, 
    Setback,
    PartyInfo,
    Treasure,
    StoryInfo,
    FinalScreen 
} from "../components";
import { CampaignNameModal } from "../components/components";

const CustomCampaign = ({ campaign }) => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            {/* <ProgressBar animated now={progress} /> */}
            <div style={{ paddingTop: 10, paddingLeft: 10 }}>
                <h1> Welcome to the Custom Campaign Builder</h1>
                <p>A custom campaign is open ended and there are few limits on what you can add or not add here.</p>
                {index === 0 && (
                    <div>
                        <p>We first need name this campaign!</p>
                        <div className="btnspace">
                            <CampaignNameModal/>
                        </div>
                    </div>
                )}
                {index === 1 && (
                    <div>
                        <p>Let's talk adventurers, do you already know who is in your party? If not you can skip this, but it will be harder to make other choices down the line.</p>
                        <div className="btnspace">
                            <PartyInfo/>
                        </div>
                    </div>
                )}
                {index === 2 && (
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
                {index === 3 && (
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
                {index === 4 && (
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
                {index === 5 && (
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
                {index === 6 && (
                    <div>
                        <p>Cool! You've made a campaign! Check ou the details below! These are meant to be suggestions. Feel free to edit this as you like! Happy Campaigning.</p>
                        <div className="btnspace">
                            <FinalScreen/>
                        </div>
                    </div>
                )}
            </div>
            <div>
            {index <= 6 && (
                <div className="nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={() => setIndex(index+1)}>Next</Button>
                </div>
            )}
            {index > 0 && (
                <div className="previousBtn nextBtn">
                    <Button variant="outline-primary" size="lg" onClick={() => setIndex(index-1)}>Previous</Button>
                </div>
            )}
            </div>
                <div style={{ margin: 30 }}>
                    {campaign.campaignName && (<StoryInfo/>)}
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {campaign: state.campaignReducer}
}

export default connect(mapStateToProps)(CustomCampaign);