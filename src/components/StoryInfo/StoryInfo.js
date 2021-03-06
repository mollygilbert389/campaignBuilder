import React, {Component} from 'react'
import {Card, CardGroup, Table, Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NPCCards from "./NPCCards"
import "./style.css"

class StoryInfo extends Component {

  render() {  
    const{campaign}=this.props
    
    return (
      <div className="cardStyle d-flex flex-column align-items-center">
        <Card className="text-center" style={{ width: '800px' }}>
          <Card.Header>{(campaign.campaignName && 
            <Card.Title>{`Campaign Name: ${campaign.campaignName}`}</Card.Title>)}
          </Card.Header>
          <Card.Body>
            <div className="dualData">
              {campaign.playerData.length > 0 && (
              <div className="playerInfo grouping pair">
                <Card.Title className="title">Player Info:</Card.Title>
                <div>
                  <div className="d-flex flex-column align-items-center">
                    {campaign.playerData.map(player => {
                    return (
                    <div className="playerCards">
                      <div>Player: {player.name}</div>
                      <div>Class: {player.raceClass}</div>
                      <div>Level: {player.level}</div>
                      <div className="iconHolder">
                        {player.factions && (
                          player.factions[0].map(icon => {return <div className="iconSpace">
                            <FontAwesomeIcon className="playerIcon" icon={icon.icon}/>
                          </div>
                          })
                        )}
                      </div>
                    </div>)
                    })}
                </div>
                </div>
              </div>)}

              {campaign.world && (<div className="cliamteImage" style={{backgroundImage:campaign.worldStyle}}></div>)}

              {campaign.world && (
                <div className="grouping pair">
                  <Card.Title className="title">World Info:</Card.Title>
                  {campaign.world && (<div><strong>World Type:</strong>{` ${campaign.world}`}</div>)}
                  {campaign.era && (<div><strong>Era:</strong>{` ${campaign.era}`}</div>)}
                  {campaign.religion && (<div><strong>Religion:</strong>{` ${campaign.religion}`}</div>)}
                  {campaign.government && (<div><strong>Government:</strong>{` ${campaign.government}`}</div>)}
                  {campaign.currency && (<div><strong>Currency:</strong>{` ${campaign.currency}`}</div>)}
                  {campaign.mapScale && (<div><strong>Starting Size:</strong>{` ${campaign.mapScale}`}</div>)}
                  {campaign.uniqueFeature && (<div><strong>Unique Feature:</strong>{` ${campaign.uniqueFeature}`}</div>)}
                  {campaign.charMeeting && (<div><strong>Charaters Meet:</strong>{` ${campaign.charMeeting}`}</div>)}
                  {campaign.factionShow && (<div className="miniSection">
                    <div><strong>Factions and Organizations:</strong></div>
                    {campaign.factionOrgs.map(oneFaction => {
                      return (<div className="iconHolder"> {`-${oneFaction.name}`}
                        <FontAwesomeIcon className="iconSpace" icon={oneFaction.icon}/>
                      </div>)
                      })}
                  </div>)}
                  {campaign.languageShow && (<div>                    
                      <div><strong>Languages:</strong></div>
                      {campaign.languages.map(oneLanguage => {
                        return (<div> {`-${oneLanguage}`}</div>)
                        })}
                    </div>)}
              </div>
              )}
            </div>

            <div className="dualData dataBoxes">
              {campaign.pillar && (
              <div className="grouping dataBoxes">
                <Card.Title className="title">General Campaign Info:</Card.Title>
                <div>
                  {campaign.pillar && (<div><strong>Campaign Type:</strong>{` ${campaign.pillar}`}</div>)}
                  {campaign.acts && (<div><strong>Acts:</strong>{` ${campaign.acts}`}</div>)}
                  {campaign.climax && (<div><strong>Ending:</strong>{` ${campaign.climax}`}</div>)}
                  {campaign.mainGoal && (<div><strong>Main Dungeon Goal:</strong>{` ${campaign.mainGoal}`}</div>)}
                </div>
              </div>
              )}

                {campaign.patronData.name && (
                <div className="grouping dataBoxes">
                  <Card className="bg-dark text-white skinnyCard">
                    <Card.Header className="fixedHeader">
                      <Card.Img src={campaign.patronData.image}/>
                      <Card.ImgOverlay className="bottom">
                      </Card.ImgOverlay>
                    </Card.Header>
                    <Card.Body>
                      {campaign.patronData.name && (<div>{`Patron Name: ${campaign.patronData.name}`}</div>)}
                      {campaign.patronData.gender && (<div>{`Gender: ${campaign.patronData.gender}`}</div>)}
                      {campaign.patronData.manner && (<div>{`Manner: ${campaign.patronData.manner}`}</div>)}
                      {campaign.patronData.trait && (<div>{`Trait: ${campaign.patronData.trait}`}</div>)}
                      {campaign.patronData.type && (<div>{`Type: ${campaign.patronData.type}`}</div>)}
                      {campaign.patronData.factions && (<div className="iconHolder">
                          {campaign.patronData.factions.map(icon => { return <div>
                            <FontAwesomeIcon className="iconSpace" icon={icon.icon}/>
                            </div>
                          })}

                          </div>
                          )}
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>

            {campaign.NPCData.length > 0 && (
              <div className="grouping dataBoxes">
                <Card.Title className="title">NPCs & Allies</Card.Title>
                  <CardGroup className="cardContainer">
                    {campaign.NPCData.map(NPC => {return <div>
                    <NPCCards
                    image={NPC.NPCImage} 
                    name={NPC.NPCName}
                    gender={NPC.gender} 
                    highAbility={NPC.highAbility}
                    lowAbility={NPC.lowAbility}
                    appearance={NPC.appearance}
                    talent={NPC.talent}
                    manner={NPC.manner}
                    trait={NPC.trait}
                    ideal={NPC.ideal}
                    specificIdeal={NPC.drilledIdealChoice}
                    bond={NPC.bond}
                    flawOrSecret={NPC.flawOrSecret}
                    ></NPCCards>
                    </div>
                    })}
                  </CardGroup>
              </div>
            )}

            {campaign.villainData.name && (
              <div className="dualData">
                <div className="grouping dataBoxes">
                  <Card className="bg-dark text-white skinnyCard">
                    <Card.Header className="fixedHeader">
                      <Card.Img src={campaign.villainData.image}/>
                      <Card.ImgOverlay className="bottom">
                      </Card.ImgOverlay>
                    </Card.Header>
                    <Card.Body>
                      {campaign.villainData.name && (<div>{`Villain Name: ${campaign.villainData.name}`}</div>)}
                      {campaign.villainData.type && (<div>{campaign.villainData.type}</div>)}
                    </Card.Body>
                  </Card>
                </div>

                <div className="centerData">
                  {campaign.villainData.gender && (<div><strong>Gender:</strong>{` ${campaign.villainData.gender}`}</div>)}
                  {campaign.villainData.finalVillainObjectiveChoice && (<div><strong>Objective:</strong>{` ${campaign.villainData.finalVillainObjectiveChoice}`}</div>)}
                  {campaign.villainData.finalVillainMethodChoice && (<div><strong>Method:</strong>{` ${campaign.villainData.finalVillainMethodChoice}`}</div>)}
                  {campaign.villainData.weakness && (<div><strong>Weakness:</strong>{` ${campaign.villainData.weakness}`}</div>)}
                </div>
              </div>
            )}


            <div className="dualData">
              {campaign.localEvents.length > 0 && (
                <div className="grouping pair">
                  <Card.Title className="title">More Story Info:</Card.Title>
                  <div>
                    {campaign.twist && (<div><strong>Twist:</strong>{`${campaign.twist}`}</div>)}
                    {campaign.setback && (<div><strong>Setback:</strong>{`${campaign.setback}`}</div>)}
                    <div className="miniSection">
                      {campaign.localEvents && (<div><strong>Local Events:</strong></div>)}
                      {campaign.localEvents.map(localEvent => {
                      return (<div> {`-${localEvent}`}</div>)
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="eventImage"></div>

              {campaign.encounters.length > 0 && (
                <div className="grouping pair dataBoxes">
                  <Card.Title className="title">Planned Encouonters:</Card.Title>
                    <div>
                      {campaign.encounters.map(encounter => {
                        return (<div> 
                          <div>{`${encounter.type}`}</div>
                          <div>{`${encounter.difficulty}`}</div>
                          </div>)
                        })}
                    </div>
                </div>
              )}
            </div>

            {campaign.randomEncounters.length > 0 && (
              <div className="grouping dataBoxes">
                <Card.Title className="title">Random Encouonter Table:</Card.Title>
                <div>
                  <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>d12+8</th>
                      <th>Enounter</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2</td>
                      <td>{`Trader`}</td>
                      <td>You're adventurer's come across a trader who is trapped.Do you help?</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>{`Monsters`}</td>
                      <td>You're adventurer's are ambusheed by a group of goblins.</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>{`Fight some cultists`}</td>
                      <td>You're adventurers come across a cellar, do they go inside?</td>
                    </tr>
                  </tbody>
                  </Table>
                </div>
              </div>
            )}

            {campaign.sideQuests.length > 0 && (
              <div className="grouping dataBoxes">
                <Card.Title className="title">Side Quests:</Card.Title>
                {campaign.sideQuests.length > 0 && (
                  <div className="sideQuestTable">
                  {campaign.sideQuests.map(sidequest => {
                    return (<div className="sideQuestTableItem">
                        <strong>{`${sidequest.type}`}</strong>
                        <p>To succeed you must believe. When you believe, you will succeed. I’m up to something. Fan luv. The key is to drink coconut, fresh coconut, trust me.</p>
                      </div>)
                    })}
                  </div>)}
              </div>
            )}

            <div className="dualData">
              {campaign.dungeonData.dungeonLocation && (
                <div className="grouping dataBoxes centerData">
                <Card.Title className="title">Dungeon Info:</Card.Title>
                {campaign.dungeonData.rooms && (<div><strong>Rooms:</strong>{` ${campaign.dungeonData.rooms }`}</div>)}
                {campaign.dungeonData.dungeonLocation && (<div><strong>Location:</strong>{` ${campaign.dungeonData.dungeonLocation }`}</div>)}
                {campaign.dungeonData.dungeonDetail && (<div><strong>Detail:</strong>{` ${campaign.dungeonData.dungeonDetail }`}</div>)}
                {campaign.dungeonData.monsterList && (
                  <div>
                    <div><strong>Monsters Chosen:</strong></div>
                    <div className="monsterSection"> 
                      {console.log(campaign.dungeonData)}
                      {campaign.dungeonData.monsterList.map(monster => {
                      return (<div className="monsterItem">{monster.monsterName}</div>) 
                      })}
                    </div>
                  </div>
                  )}
                </div>
              )}

              <div className="dungeonImage"></div>

              {campaign.treasureData.treasureTypes && (
                <div className="grouping treasure dataBoxes">
                  <Card.Title className="title">Treasure: {campaign.treasureData.treasureNumber}</Card.Title>
                  {campaign.treasureData.treasureTypes.map(oneTreasure => {
                    return (<div> {`-${oneTreasure}`}</div>)
                    })}
                </div>
              )}
            </div>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </div>
    );
}
}

export default StoryInfo;