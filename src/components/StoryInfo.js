import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

class StoryInfo extends Component {

render() {  

    const{campaign}=this.props

    return (
        <div className="storyCards">
                <Card.Body>
                {(campaign.campaignName && <Card.Title>{`Campaign Name: ${campaign.campaignName}`}</Card.Title>)}
                    <Card.Text>
                    {campaign.villianName && (<div> {`Villian Name: ${campaign.villianName}`}</div>)}
                    {campaign.villianType && (<div>{`Villian Type: ${campaign.villianType}`}</div>)}
                    {campaign.questGiverName && (<div>{`Quest Giver: ${campaign.questGiverName}`}</div>)}
                    {campaign.questGiverType && (<div>{`Quest Giver Type: ${campaign.questGiverType}`}</div>)}
                    <div id="partyInfoSapce"></div>
                    {campaign.pillar && (<div>{`Pillar: ${campaign.pillar}`}</div>)}
                    {/* {campaign.theme && (<div>{`Theme: ${campaign.pillar}`}</div>)} */}
                    <div id="actsSpace"></div>
                    <div id="sideQuestSpace"></div>
                    <div id="dungeonTypeSpace"></div>
                    <div id="roomsSpace"></div>
                    <div id="setbackSpace"></div>
                    <div>
                        <div id="monsterOneTypeSpace"></div>
                        <div id="monsterTwoTypeSpace"></div>
                        <div id="monsterThreeTypeSpace"></div>
                    </div>
                    <div id="dungeonType"></div>
                    <div id="treasureSpace"></div>
                    </Card.Text>
                </Card.Body>
        </div>
    );
}
}

export default StoryInfo;