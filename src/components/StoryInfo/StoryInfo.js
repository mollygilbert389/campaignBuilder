import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import "./style.css"

class StoryInfo extends Component {
render() {  

    const{campaign}=this.props
 
    return (
      <div className="cardStyle d-flex flex-column align-items-center">
        <Card className="text-center" style={{ width: '600px' }}>
          <Card.Header>{(campaign.campaignName && 
            <Card.Title>{`Campaign Name: ${campaign.campaignName}`}</Card.Title>)}
          </Card.Header>
          <Card.Body>

          <br></br> 

          {campaign.playerData.length > 0 && (
          <div className="playerInfo grouping">
            <Card.Title className="title">Player Info:</Card.Title>
              <div>
                <div className="d-flex flex-column align-items-center">
                  {campaign.playerData.map(player => {
                        return (
                        <div className="playerCards">
                          <div>Player: {player.name}</div>
                          <div>Class: {player.raceClass}</div>
                          <div>Level: {player.level}</div>
                      </div>
                        )
                  })}
                  </div>
              </div>
          </div>)}

          {campaign.world && (
            <div className="grouping">
            <Card.Title className="title">World Info:</Card.Title>
              <div>
                {campaign.world && (<div>{`World Type: ${campaign.world}`}</div>)}
                {campaign.mapScale && (<div>{`Starting Size: ${campaign.mapScale}`}</div>)}
                {campaign.charMeeting && (<div>{`Charaters Meet: ${campaign.charMeeting}`}</div>)}
                {campaign.government && (<div>{`Government: ${campaign.government}`}</div>)}
                {campaign.currency && (<div>{`Currency: ${campaign.currency}`}</div>)}
              </div>
          </div>
          )}

        {campaign.pillar && (
            <div className="grouping">
            <Card.Title className="title">General Campaign Info:</Card.Title>
              <div>
                {campaign.pillar && (<div>{`Campaign Type: ${campaign.pillar}`}</div>)}
                {campaign.acts && (<div>{`Acts: ${campaign.acts}`}</div>)}
                {campaign.climax && (<div>{`Ending: ${campaign.climax}`}</div>)}
                {campaign.mainGoal && (<div>{`Main Dungeon Goal: ${campaign.mainGoal}`}</div>)}
              </div>
          </div>
          )}

        {campaign.patronName && (
            <div className="grouping">
            <Card.Title className="title">Villain, Patron & NPC Info:</Card.Title>
              <div>
                {campaign.patronName && (<div>{`Patron Name: ${campaign.patronName}`}</div>)}
                {campaign.villainName && (<div>{`Villain Name: ${campaign.villainName}`}</div>)}
              </div>
          </div>
          )}

        {campaign.localEvents.length > 0 && (
            <div className="grouping">
            <Card.Title className="title">More Story Info:</Card.Title>
              <div>
                {campaign.localEvents && (<div>{`Local Events:`}</div>)}
                  {campaign.localEvents.map(localEvent => {
                    return (
                      <div> {` -${localEvent}`}</div>
                        )
                  })}
              </div>
              {campaign.randomEncounterNumber && (<div>{`Random Enounters: ${campaign.randomEncounterNumber}`}</div>)}
          </div>
          )}

            <br></br> 
            
            <div>
            {campaign.dungeonType && (
              <div className="dungeonInfo grouping">
                <Card.Title className="title">Dungeon Info:</Card.Title>
                <div>{`Number of Rooms: ${campaign.rooms}`}</div>
              </div>
            )}
            </div>

            <br></br>

            {campaign.monsters.length > 0 && (
              <div className="monsterInfo grouping">
                <Card.Title>Monsters Chosen:</Card.Title>
                {campaign.monsters.map(oneMonster => {
                  return (
                      <div>{oneMonster}</div>
                      )
                  })}
              </div>
            )}

            <br></br>

            {campaign.treasure.length > 0 && (
              <div className="treasureInfo grouping">
                <Card.Title className="title">Treasure: {campaign.treasureNum}</Card.Title>
                    {campaign.treasure.map(oneTreasure => {
                      return (
                        <div> {` -${oneTreasure}`}</div>
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