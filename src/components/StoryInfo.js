import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

class StoryInfo extends Component {
 

render() {  

    return (
        <div className="storyCards">
                <Card.Body>
                    <Card.Title id="cardCampaignName">Campaign Name:</Card.Title>
                    <Card.Text>
                    <div id="partyInfoSapce"></div>
                    <div id="questGiverNameSpace"></div>
                    <div id="villianNameSpace"></div>
                    <div id="pillarTypeSpace"></div>
                    <div id="themeSpace"></div>
                    <div id="actsSpace"></div>
                    <div id="sideQuestSpace"></div>
                    <div id="dungeonTypeSpace"></div>
                    <div id="roomsSpace"></div>
                    <div id="setbackSpace"></div>
                    <div id="monstersSpace"></div>
                    <div id="treasueSpace"></div>
                    </Card.Text>
                </Card.Body>
        </div>
    );
}
}

export default StoryInfo;