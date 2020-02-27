import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

class StoryInfo extends Component {


render() {  

    return (
        <div className="storyCards">
                <Card.Body>
                    <Card.Title id="cardCampaignName">Campaign Name:</Card.Title>
                    <Card.Text>
                    <p id="partyInfoSapce"></p>
                    <p id="questGiverNameSpace"></p>
                    <p id="villianNameSpace"></p>
                    <p id="pillarTypeSpace"></p>
                    <p id="themeSpace"></p>
                    <p id="actsSpace"></p>
                    <p id="sideQuestSpace"></p>
                    <p id="dungeonTypeSpace"></p>
                    <p id="roomsSpace"></p>
                    <p id="setbackSpace"></p>
                    <p id="monstersSpace"></p>
                    <p id="treasueSpace"></p>
                    </Card.Text>
                </Card.Body>
        </div>
    );
}
}

export default StoryInfo;