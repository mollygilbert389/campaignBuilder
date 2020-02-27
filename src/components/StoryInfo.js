import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

class StoryInfo extends Component {

    campaignFilller = () => {
        
    }

render() {  

    return (
        <div className="storyCards">
                <Card.Body>
                    <Card.Title id="cardCampaignName">Campaign Name:</Card.Title>
                    <Card.Text>
                    <p id="villianNameSpace">Villian:</p>
                    <p id="questGiverNameSpace">Quest Giver:</p>
                    <p id="heroNameSpace">Hero:</p>

                    </Card.Text>
                </Card.Body>
        </div>
    );
}
}

export default StoryInfo;