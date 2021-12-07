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
  Goals,
  Languages,
  Currency,
  Governments,
  Eras,
  Features,
  MapScales,
  MeetingSelections,
  TravelPoints,
  Worlds,
  WorldStyles,
  Traps,
  WorldShakingEvents,
  Names,
  CampaignNames,
  Rooms,
  EvilNPCSubtypes,
  NPCs,
  NPCIdeals,
  Patron,
  VillainWeaknesses,
  VillainObjectives,
  VillainMethods,
  Villain
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
    languages: async () => {
      return Languages.find();
    },
    currency: async () => {
      return Currency.find();
    },
    governments: async () => {
      return Governments.find();
    },
    eras: async () => {
      return Eras.find();
    },
    features: async () => {
      return Features.find();
    },
    mapScales: async () => {
      return MapScales.find();
    },
    meetingSelections: async () => {
      return MeetingSelections.find();
    },
    travelPoints: async () => {
      return TravelPoints.find();
    },
    worlds: async () => {
      return Worlds.find();
    },
    worldStyles: async () => {
      return WorldStyles.find();
    },
    traps: async () => {
      return Traps.find();
    },
    worldShakingEvents: async () => {
      return WorldShakingEvents.find();
    },
    names: async () => {
      return Names.find();
    },
    campaignNames: async () => {
      return CampaignNames.find();
    },
    rooms: async () => {
      return Rooms.find();
    },
    evilNPCSubtypes: async () => {
      return EvilNPCSubtypes.find();
    },
    npcs: async () => {
      return NPCs.find();
    },
    npcIdeals: async () => {
      return NPCIdeals.find();
    },
    patron: async () => {
      return Patron.find();
    },
    villainWeaknesses: async () => {
      return VillainWeaknesses.find();
    },
    villainObjectives: async () => {
      return VillainObjectives.find();
    },
    villainMethods: async () => {
      return VillainMethods.find();
    },
    villain: async () => {
      return Villain.find();
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