const { Campaign } = require('../models');

const resolvers = {
  Query: {
    campaigns: async () => {
      return Campaign.find();
    },
    // campaign: async (parent, { campaignName }) => {
    //   return Campaign.findOne({ campaignName });
    // }
  },
  Mutation: {
    addCampaign: async (parent, args) => {
      const campaign = await campaign.create(args);
      return campaign;
    }
  }
};

module.exports = resolvers;