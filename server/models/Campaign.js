const { Schema, model } = require('mongoose');

const CampaignSchema = new Schema({
  campaignName: {
    type: String,
    required: true,
  },
  playerData: [{
    id: { type: Number },
    name: { type: String },
    raceClass: { type: String },
    level: { type: Number },
    factions: [{
      name: { type: String },
      playerNumId: { type: Number },
      icon: {
        prefix: { type: String },
        iconName: { type: String },
        icon: [{
          prefix: { type: String },
          iconName: { type: String },
          icon: { type: [Schema.Types.Mixed] },
         }]
      }
    }]
  }],
  government: {
    type: String,
  },
  currency: {
    type: String,
  },
  world: {
    type: String,
  },
  mapScale: {
    type: String,
  },
  charMeeting: {
    type: String,
  },
  religion: {
    type: String,
  },
  era: {
    type: String,
  },
  uniqueFeature: {
    type: String,
  },
  travelPointChoices: {
    type: [String],
  },
  languages: [{
    type: String,
  }], 
  factionOrgs: [{
    id: { type: Number },
    name: { type: String },
    icon: {
      prefix: { type: String },
      iconName: { type: String },
      icon: { type: [Schema.Types.Mixed] },
     }
  }],
  acts: {
    type: String,
  },
  climax: {
    type: String,
  },
  mainGoal: {
    type: String,
  },
  pillar: {
    type: String,
  },
  patronData: {
    factions: [{
      id: { type: Number },
      name: { type: String },
      icon: {
        prefix: { type: String },
        iconName: { type: String },
        icon: { type: [Schema.Types.Mixed] },
       },
    }],
    name: { type: String },
    image: { type: String },
    gender:  { type: String },
    type: { type: String },
    manner: { type: String },
    trait: { type: String }
  },
  NPCData: [{
    id: { type: String },
    NPCImage: { type: String },
    NPCName: { type: String },
    gender:  { type: String },
    appearance: { type: String },
    highAbility: { type: String },
    lowAbility:  { type: String },
    talent: { type: String },
    ideal: { type: String },
    drilledIdealChoice:  { type: String },
    bond:  { type: String },
    flawOrSecret: { type: String },
    manner: { type: String },
    trait: { type: String }
  }],
  villainData: {
    image: { type: String },
    name: { type: String },
    type: { type: String },
    gender: { type: String },
    villainCatChoice: { type: String },
    villainMethodCatChoice: { type: String },
    finalVillainObjectiveChoice: { type: String },
    weakness: { type: String }
  },
  localEvents: {
    type: [String],
  },
  encounters: [{
    id: { type: Number },
    type: { type: String },
    difficulty: { type: String }
  }],
  randomEncounters: [{
    id: { type: Number },
    category: { type: String },
    finalSelection: { type: String },
  }],
  twist: {
    type: String,
  },
  sideQuests: [{
    id: { type: Number },
    type: {type: String}
  }],
  setback: {
    type: { type: String },
    category: { type: String },
    name: { type: String }
  },
  dungeonData: {
    dungeonLocation: { type: String },
    dungeonDetail: { type: String },
    monsterNum: { type: Number },
    maxMonsterNum: { type: Number },
    rooms: { type: Number },
    monsterList: [{
      id: { type: Number },
      category: { type: String },
      monsterName: { type: String }
    }]
  },
  treasureData: {
    treasureTypes: { type: [String] },
    treasureNumber: { type: Number }
  },
  factionShow: {
    type: Boolean,
  },
  languageShow: {
    type: Boolean,
  },
  worldImage: {
    type: String,
  },
  worldStyle: {
    type: String,
  }
});

const Campaign = model('Campaign', CampaignSchema);

module.exports = Campaign;