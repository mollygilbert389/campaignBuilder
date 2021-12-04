import React from "react";
import { connect } from "react-redux";
import { Card, CardGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NPCCards } from ".";
import "./home.css";

const StoryInfo = ({ campaign }) => {
  const worldData =
    campaign.world ||
    campaign.era ||
    campaign.religion ||
    campaign.government ||
    campaign.currency ||
    campaign.mapScale ||
    campaign.uniqueFeature ||
    campaign.charMeeting ||
    campaign.factionShow ||
    campaign.languages.length > 0;

    const moreAdventureData = 
    campaign.localEvents.length > 0 ||
    campaign.twist || 
    campaign.setback;

    const playerData = 
    campaign.patronData.name ||
    campaign.patronData.gender ||
    campaign.patronData.manner ||
    campaign.patronData.trait ||
    campaign.patronData.type ||
    campaign.patronData.factions;

    const generalData = 
    campaign.pillar ||
    campaign.acts ||
    campaign.climax ||
    campaign.mainGoal;

    const dungeonData = 
    campaign.dungeonData.rooms ||
    campaign.dungeonData.dungeonLocation ||
    campaign.dungeonData.dungeonDetail ||
    campaign.dungeonData.monsterList;

  return (
    <div style={{ marginTop: "10%" }} d-flex flex-column align-items-center>
      <Card className="text-center" style={{ width: "800px" }}>
        <Card.Header>
          {campaign.campaignName && (
            <Card.Title>{`Campaign Name: ${campaign.campaignName}`}</Card.Title>
          )}
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {campaign.playerData.length > 0 && (
              <div style={{ width: 400 }} className="playerInfo grouping">
                <Card.Title className="title">Player Info:</Card.Title>
                <div>
                  <div className="d-flex flex-column align-items-center">
                    {campaign.playerData.map((player, idx) => (
                      <div key={idx} className="playerCards">
                        <div>Player: {player.name}</div>
                        <div>Class: {player.raceClass}</div>
                        <div>Level: {player.level}</div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          {player.factions &&
                            player.factions[0].map((icon, index) => (
                              <div key={index} style={{ margin: 3 }}>
                                <FontAwesomeIcon
                                  className="playerIcon"
                                  icon={icon.icon}
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {campaign.worldStyle && (
              <div style={{ backgroundImage: campaign.worldStyle, width: 200 }}/>
            )}
            {worldData && (
              <div style={{ width: 400 }} className="grouping">
                <Card.Title className="title">World Info:</Card.Title>
                {campaign.world && (
                  <div>
                    <strong>World Type:</strong>
                    {` ${campaign.world}`}
                  </div>
                )}
                {campaign.era && (
                  <div>
                    <strong>Era:</strong>
                    {` ${campaign.era}`}
                  </div>
                )}
                {campaign.government && (
                  <div>
                    <strong>Government:</strong>
                    {` ${campaign.government}`}
                  </div>
                )}
                {campaign.currency && (
                  <div>
                    <strong>Currency:</strong>
                    {` ${campaign.currency}`}
                  </div>
                )}
                {campaign.mapScale && (
                  <div>
                    <strong>Starting Size:</strong>
                    {` ${campaign.mapScale}`}
                  </div>
                )}
                {campaign.uniqueFeature && (
                  <div>
                    <strong>Unique Feature:</strong>
                    {` ${campaign.uniqueFeature}`}
                  </div>
                )}
                {campaign.charMeeting && (
                  <div>
                    <strong>Charaters Meet:</strong>
                    {` ${campaign.charMeeting}`}
                  </div>
                )}
                {campaign.religion && (
                  <div>
                    <strong>Religion:</strong>
                    {` ${campaign.religion}`}
                  </div>
                )}
                {campaign.factionShow && (
                  <div style={{ border: "solid 1px rgb(182, 177, 177)" }}>
                    <div>
                      <strong>Factions and Organizations:</strong>
                    </div>
                    {campaign.factionOrgs.map((oneFaction, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "center" }}>
                        {`-${oneFaction.name}`}
                        <FontAwesomeIcon style={{ margin: 3 }} icon={oneFaction.icon}/>
                      </div>
                    ))}
                  </div>
                )}
                {campaign.languages.length > 0 && (
                  <div>
                    <div>
                      <strong>Languages:</strong>
                    </div>
                    {campaign.languages.map((oneLanguage, idx) => (
                      <div key={idx}> {`-${oneLanguage.option}`}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }} className="dataBoxes">
            {generalData && (
              <div className="grouping dataBoxes">
                <Card.Title className="title">
                  General Campaign Info:
                </Card.Title>
                <div>
                  {campaign.pillar && (
                    <div>
                      <strong>Campaign Type:</strong>
                      {` ${campaign.pillar}`}
                    </div>
                  )}
                  {campaign.acts && (
                    <div>
                      <strong>Acts:</strong>
                      {` ${campaign.acts}`}
                    </div>
                  )}
                  {campaign.climax && (
                    <div>
                      <strong>Ending:</strong>
                      {` ${campaign.climax}`}
                    </div>
                  )}
                  {campaign.mainGoal && (
                    <div>
                      <strong>Main Dungeon Goal:</strong>
                      {` ${campaign.mainGoal}`}
                    </div>
                  )}
                </div>
              </div>
            )}
            {playerData && (
              <div className="grouping dataBoxes">
                <Card style={{ width: 250, border: "none" }} className="bg-dark text-white">
                  <Card.Header style={{ width: 250, padding: 0 }}>
                    <Card.Img src={campaign.patronData.image} />
                    <Card.ImgOverlay style={{ marginTop: "35%" }} />
                  </Card.Header>
                  <Card.Body>
                    {campaign.patronData.name && (
                      <div>{`Patron Name: ${campaign.patronData.name}`}</div>
                    )}
                    {campaign.patronData.gender && (
                      <div>{`Gender: ${campaign.patronData.gender}`}</div>
                    )}
                    {campaign.patronData.manner && (
                      <div>{`Manner: ${campaign.patronData.manner}`}</div>
                    )}
                    {campaign.patronData.trait && (
                      <div>{`Trait: ${campaign.patronData.trait}`}</div>
                    )}
                    {campaign.patronData.type && (
                      <div>{`Type: ${campaign.patronData.type}`}</div>
                    )}
                    {campaign.patronData.factions && (
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        {campaign.patronData.factions.map((icon, idx) => (
                          <div key={idx}>
                            <FontAwesomeIcon style={{ margin: 3 }} icon={icon.icon}/>
                          </div>
                        ))}
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
              <CardGroup style={{ justifyContent: "center" }}>
                {campaign.NPCData.map((NPC, idx) => (
                  <div key={idx}>
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
                    />
                  </div>
                ))}
              </CardGroup>
            </div>
          )}
          {(campaign.villainData.name || campaign.villainData.type) && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="grouping dataBoxes">
                <Card style={{ width: 250, border: "none" }} className="bg-dark text-white">
                  <Card.Header style={{ width: 250, padding: 0 }}>
                    {campaign.villainData.image && (
                      <Card.Img src={campaign.villainData.image} />
                    )}
                    <Card.ImgOverlay style={{ marginTop: "35%" }} />
                  </Card.Header>
                  <Card.Body>
                    {campaign.villainData.name && (
                      <div>{`Villain Name: ${campaign.villainData.name}`}</div>
                    )}
                    {campaign.villainData.type && (
                      <div>{campaign.villainData.type}</div>
                    )}
                  </Card.Body>
                </Card>
              </div>
              <div className="centerData">
                {campaign.villainData.gender && (
                  <div>
                    <strong>Gender:</strong>
                    {`${campaign.villainData.gender}`}
                  </div>
                )}
                {campaign.villainData.finalVillainObjectiveChoice && (
                  <div>
                    <strong>Objective:</strong>
                    {`${campaign.villainData.finalVillainObjectiveChoice}`}
                  </div>
                )}
                {campaign.villainData.finalVillainMethodChoice && (
                  <div>
                    <strong>Method:</strong>
                    {`${campaign.villainData.finalVillainMethodChoice}`}
                  </div>
                )}
                {campaign.villainData.weakness && (
                  <div>
                    <strong>Weakness:</strong>
                    {`${campaign.villainData.weakness}`}
                  </div>
                )}
              </div>
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {moreAdventureData && (
              <div style={{ width: 400 }} className="grouping">
                <Card.Title className="title">More Story Info:</Card.Title>
                <div>
                  {campaign?.twist && (
                    <div>
                      <strong>Twist:</strong>
                      {`${campaign.twist}`}
                    </div>
                  )}
                  {campaign.setback.type === "large" && (
                      <div>
                        <strong>Setback: </strong>
                          {`${campaign.setback.category} - ${campaign.setback.name}`}
                      </div>
                    )}
                    {campaign.setback.type === "small" && (
                      <div>
                        <strong>Setback: </strong>
                          {`${campaign.setback.name}`}
                      </div>
                    )}
                  <div style={{ border: "solid 1px rgb(182, 177, 177)" }}>
                    {campaign.localEvents && (
                      <div>
                        <strong>Local Events:</strong>
                      </div>
                    )}
                    {campaign.localEvents.map((localEvent, idx) => (
                      <div key={idx}> {`-${localEvent}`}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="eventImage" />
            {campaign.encounters.length > 0 && (
              <div style={{ width: 400 }} className="grouping dataBoxes">
                <Card.Title className="title">Planned Encouonters:</Card.Title>
                <div>
                  {campaign.encounters.map((encounter, idx) => (
                    <div key={idx}>
                      <div>{`${encounter.type}`}</div>
                      <div>{`${encounter.difficulty}`}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {campaign.randomEncounters.length > 0 && (
            <div className="grouping dataBoxes">
              <Card.Title className="title">
                Random Encouonter Table:
              </Card.Title>
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
                      <td>
                        You're adventurer's come across a trader who is
                        trapped.Do you help?
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>{`Monsters`}</td>
                      <td>
                        You're adventurer's are ambusheed by a group of goblins.
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>{`Fight some cultists`}</td>
                      <td>
                        You're adventurers come across a cellar, do they go
                        inside?
                      </td>
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
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {campaign.sideQuests.map((sidequest, idx) => (
                    <div key={idx} className="sideQuestTableItem">
                      <strong>{`${sidequest.type}`}</strong>
                      <p>
                        To succeed you must believe. When you believe, you will
                        succeed. I’m up to something. Fan luv. The key is to
                        drink coconut, fresh coconut, trust me.
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            {dungeonData && (
              <div className="grouping dataBoxes centerData">
                <Card.Title className="title">Dungeon Info:</Card.Title>
                {campaign.dungeonData.rooms && (
                  <div>
                    <strong>Rooms:</strong>
                    {`${campaign.dungeonData.rooms}`}
                  </div>
                )}
                {campaign.dungeonData.dungeonLocation && (
                  <div>
                    <strong>Location:</strong>
                    {`${campaign.dungeonData.dungeonLocation}`}
                  </div>
                )}
                {campaign.dungeonData.dungeonDetail && (
                  <div>
                    <strong>Detail:</strong>
                    {`${campaign.dungeonData.dungeonDetail}`}
                  </div>
                )}
                {campaign.dungeonData.monsterList && (
                  <div>
                    <div>
                      <strong>Monsters Chosen:</strong>
                    </div>
                    <div className="monsterSection">
                      {campaign.dungeonData.monsterList.map((monster, idx) => (
                        <div key={idx} className="monsterItem">
                          {monster.monsterName}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="dungeonImage" />
            {campaign.treasureData.treasureTypes && (
              <div style={{ width: 250 }} className="grouping dataBoxes">
                <Card.Title className="title">
                  Treasure: {campaign.treasureData.treasureNumber}
                </Card.Title>
                {campaign.treasureData.treasureTypes.map((oneTreasure, idx) => (
                  <div key={idx}> {`-${oneTreasure}`}</div>
                ))}
              </div>
            )}
          </div>
        </Card.Body>
        <Card.Footer className="text-muted" />
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { campaign: state.campaignReducer };
};

export default connect(mapStateToProps)(StoryInfo);
