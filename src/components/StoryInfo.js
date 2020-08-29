import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import { SET_MONSTERS } from '../actions/constant'

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
                    {campaign.playerData && (<div>
                        {campaign.playerData.map(player => {
                             return (
                             <div>
                                <div>Player: {player.name}</div>
                                <div>Class: {player.raceClass}</div>
                            </div>
                             )
                        })}
                        </div>)}
                    {campaign.pillar && (<div>{`Pillar: ${campaign.pillar}`}</div>)}
                    {campaign.meetingPlace && (
                    <div>Theme:
                        <div>{`Climate: ${campaign.climate}`}</div>
                        <div>{`World: ${campaign.world}`}</div>
                        <div>{`Meeting: ${campaign.meetingPlace}`}</div>
                    </div>
                    )}
                    {campaign.acts && (<div>{`Acts: ${campaign.acts}`}</div>)}
                    {campaign.sideQuests && (<div>{`Side Quests: ${campaign.sideQuests}`}</div>)}
                    {campaign.rooms && (
                    <div>Dungeon:
                        <div>{`Dungeon Type: ${campaign.dungeonType}`}</div>
                        <div>{`Number of Rooms: ${campaign.rooms}`}</div>
                        <div>{`Setbacks: ${campaign.setbacks}`}</div>
                        <div>{`Total Monsters: ${campaign.monsterNum}`}</div>
                    </div>
                    )}

                    {campaign.monsters.length > 0 && (<div>Monsters: 
                        {campaign.monsters.map(oneMonster => {
                             return (
                                <div>{oneMonster}</div>
                             )
                        })}
                        </div>
                        )}

                    {campaign.treasure > 0 && (<div>{`Treasure: ${campaign.treasure}`}</div>)}
                    </Card.Text>
                </Card.Body>
        </div>
    );
}
}

export default StoryInfo;