const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type  Icon {
    prefix: String
    iconName: String
    icon: [String]
  }  

  type PlayerFactions {
    id: ID
    name: String
    playerNumId: Int
    icon: Icon
  }

  type Player {
    id: ID
    name: String
    level: String
    raceClass: String
    factions: [PlayerFactions] 
  }

  type Factions {
    id: ID
    name: String
    icon: Icon
  }

  type Patron {
    factions: [Factions]
    name: String
    image: String
    gender: String
    type: String
    manner: String
    trait: String
  }

  type NPC {
    id: ID
    NPCImage: String
    NPCName: String
    gender: String
    appearance: String
    highAbility: String
    lowAbility: String
    talent: String
    manner: String
    trait: String
    ideal: String
    drilledIdealChoice: String
    bond: String
    flawOrSecret: String
  }

  type Villain {
    image: String
    name: String
    type: String
    gender: String
    villainCatChoice: String
    villainMethodCatChoice: String
    finalVillainObjectiveChoice: String
    weakness: String
  }

  type Encounter {
    id: ID
    type: String
    difficulty: String
  }

  type Monster {
    id: ID
    category: String
    finalSelection: String
  }

  type dungeonMonster {
    id: ID
    category: String
    monsterName: String
  }

  type Quest {
    id: ID
    type: String
  }

  type Dungeon {
    dungeonLocation: String
    dungeonDetail: String
    monsterNum: Int
    maxMonsterNum: Int
    rooms: Int
    monsterList: [dungeonMonster]
  }

  type Treasure {
    treasureTypes: [String]
    treasureNumber: Int
  }

  type Setback {
    type: String
    category: String
    name: String
  }
 
  type Campaign {
    _id: ID
    campaignName: String
    playerData: [Player]
    government: String
    currency: String
    world: String
    mapScale: String
    charMeeting: String
    religion: String
    era: String
    uniqueFeature: String
    travelPointChoices: [String]
    languages: [String]
    factionOrgs: [Factions]
    acts: String
    climax: String
    mainGoal: String
    pillar: String
    patronData: Patron
    NPCData: [NPC]
    villainData: Villain
    localEvents: [String]
    encounters: [Encounter]
    randomEncounters: [Monster]
    twist: String
    sideQuests: [Quest]
    setback: Setback
    dungeonData: Dungeon
    treasureData: Treasure
    factionShow: Boolean
    languageShow: Boolean
    worldImage: String
  }

  type IDOptions {
    id: Int
    option: String
  }

  type Query {
    campaigns: [Campaign]
    campaign (campaignName: String!): Campaign
    meetingLocations: [IDOptions]
    climaxes: [IDOptions]
    nonDungeonLocations: [IDOptions]
    dungeonLocations: [IDOptions]
  }

  type Mutation {
    addCampaign(campaignName: String!): Campaign
  }
`;

module.exports = typeDefs;
