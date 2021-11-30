const { Campaign, MeetingLocations, NonDungeonLocations, DungeonLocations, Climax, Encounters, Factions } = require('../models');

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
    }
  },
  Mutation: {
    addCampaign: async (parent, args) => {
      const campaign = await campaign.create(args);
      return campaign;
    }
  }
};

module.exports = resolvers;