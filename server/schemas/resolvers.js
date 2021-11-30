const { 
  Campaign, 
  MeetingLocations, 
  NonDungeonLocations, 
  DungeonLocations, 
  Climax, 
  Encounters, 
  Factions, 
  LocalEvents,
  Maps,
  MiniBosses,
  Monsters,
  Religion,
  SideQuests,
  Twists,
  Goals
} = require('../models');

const resolvers = {
  Query: {
    campaigns: async () => {
      return Campaign.find();
    },
    campaign: async (parent, { campaignName }) => {
      return Campaign.findOne({ campaignName });
    },
    meetingLocations: async () => {
      return MeetingLocations.find();
    },
    nonDungeonLocations: async () => {
      return NonDungeonLocations.find();
    },
    dungeonLocations: async () => {
      return DungeonLocations.find();
    },
    climaxes: async () => {
      return Climax.find();
    },
    factions: async () => {
      return Factions.find();
    },
    encounters: async () => {
      return Encounters.find();
    },
    localEvents: async () => {
      return LocalEvents.find();
    },
    maps: async () => {
      return Maps.find();
    },
    miniBosses: async () => {
      return MiniBosses.find();
    },
    monsters: async () => {
      return Monsters.find();
    },
    religion: async () => {
      return Religion.find();
    },
    sideQuests: async () => {
      return SideQuests.find();
    },
    twists: async () => {
      return Twists.find();
    },
    goals: async () => {
      return Goals.find();
    },
  },
  Mutation: {
    addCampaign: async (parent, args) => {
      const campaign = await campaign.create(args);
      return campaign;
    }
  }
};

module.exports = resolvers;