import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import "./style.css"

class StoryInfo extends Component {

render() {  

    const{campaign}=this.props

    return (
      <div className="cardStyle">
      <Card className="text-center" style={{ width: '600px' }}>
        <Card.Header>{(campaign.campaignName && <Card.Title>{`Campaign Name: ${campaign.campaignName}`}</Card.Title>)}</Card.Header>
        <Card.Body>

          <div className="=questInfo grouping">
          {campaign.questGiverName || campaign.villianName && (<Card.Title className="title">Quest Info:</Card.Title>)}
          <div>
            {campaign.questGiverName && (<div>{`Quest Giver: ${campaign.questGiverName}`}</div>)}
            {campaign.questGiverType && (<div>{`Quest Giver Type: ${campaign.questGiverType}`}</div>)}
            {campaign.villianName && (<div> {`Villian Name: ${campaign.villianName}`}</div>)}
            {campaign.villianType && (<div>{`Villian Type: ${campaign.villianType}`}</div>)}
          </div>
          </div>

          <br></br> 
          <div className="playerInfo grouping">
          {campaign.playerData.length > 0 && (<Card.Title className="title">Player Info:</Card.Title>)}
          <div>
          {campaign.playerData && (
          
          <div>
            {campaign.playerData.map(player => {
                  return (
                  <div>
                    <div>Player: {player.name}</div>
                    <div>Class: {player.raceClass}</div>
                </div>
                  )
            })}
            </div>)}
          </div>
          </div>

          <br></br> 
          <div className="camapignInfo grouping">
          {campaign.pillar && ( <Card.Title className="title">Campaign Info:</Card.Title>)}
          <div>
          {campaign.pillar && (<div>{`Pillar: ${campaign.pillar}`}</div>)}
          {campaign.acts && (<div>{`Acts: ${campaign.acts}`}</div>)}
          {campaign.sideQuests && (<div>{`Side Quests: ${campaign.sideQuests}`}</div>)}
          <br></br>
          <div>
            {campaign.meetingPlace && (
              <div className="theme grouping"><Card.Subtitle>Theme:</Card.Subtitle>
                  <div>{`Climate: ${campaign.climate}`}</div>
                  <div>{`World: ${campaign.world}`}</div>
                  <div>{`Meeting: ${campaign.meetingPlace}`}</div>
              </div>
              )}
          </div>
          </div>
          </div>

          <br></br> 
          <div>
          
          {campaign.rooms && (
          <div className="dungeonInfo grouping"><Card.Title className="title">Dungeon Info:</Card.Title>
              <div>{`Dungeon Type: ${campaign.dungeonType}`}</div>
              <div>{`Number of Rooms: ${campaign.rooms}`}</div>
              <div>{`Setbacks: ${campaign.setbacks}`}</div>
          </div>
          )}
          </div>

          <br></br> 
          {campaign.monsters.length > 0 && ( <div className="monsterInfo grouping"> <Card.Title>Monsters Chosen:</Card.Title>
          {campaign.monsters.map(oneMonster => {
            return (
              <div>{oneMonster}</div>
            )
          })}
          </div>
          )}

          <br></br> 
          {campaign.treasure.length > 0 && (<div className="treasureInfo grouping"><Card.Title className="title">Treasure:</Card.Title>
              {campaign.treasure.map(oneTreasure => {
              return (
                      <div>{oneTreasure}</div>
                  )
              })}
              </div>
          )}

        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
        </div>
    );
}
}

export default StoryInfo;