const { Campaign } = require('../models');

const resolvers = {
  Query: {
    campaigns: async () => {
      return Campaign.find();
    },
    // campaign: async (parent, { title }) => {
    //   return Campaign.findOne({ title });
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