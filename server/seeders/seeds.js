const faker = require('faker');
const { 
  meeting_location_data, 
  climax_data, 
  non_dungeon_locations_data,
  encounter_data,
  faction_data,
  local_event_data,
  map_data,
  mini_boss_data,
  monster_data,
  religion_data,
  side_quest_data,
  twist_data,
  goal_data,
  language_data,
  currency_data,
  government_data,
  era_data,
  feature_data,
  map_scale_data,
  meeting_selection_data,
  travel_point_data,
  world_data,
  world_style_data,
  trap_data,
  world_shaking_event_data
} = require("./data")
const db = require('../config/connection');
const { 
  Campaign, 
  MeetingLocations, 
  NonDungeonLocations, 
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
  WorldShakingEvents
} = require('../models');

db.once('open', async () => {
  await Campaign.deleteMany({});
  await Climax.deleteMany({});
  await MeetingLocations.deleteMany({});
  await NonDungeonLocations.deleteMany({});
  await Encounters.deleteMany({});
  await Factions.deleteMany({});
  await LocalEvents.deleteMany({});
  await Maps.deleteMany({});
  await MiniBosses.deleteMany({});
  await Monsters.deleteMany({});
  await Religion.deleteMany({});
  await SideQuests.deleteMany({});
  await Twists.deleteMany({});
  await Goals.deleteMany({});
  await Languages.deleteMany({});
  await Currency.deleteMany({});
  await Governments.deleteMany({});
  await Eras.deleteMany({});
  await Features.deleteMany({});
  await MapScales.deleteMany({});
  await MeetingSelections.deleteMany({});
  await TravelPoints.deleteMany({});
  await Worlds.deleteMany({});
  await WorldStyles.deleteMany({});
  await Traps.deleteMany({});
  await WorldShakingEvents.deleteMany({});
 
  await Climax.collection.insertMany(climax_data);
  await MeetingLocations.collection.insertMany(meeting_location_data);
  await NonDungeonLocations.collection.insertMany(non_dungeon_locations_data);
  await Encounters.collection.insertMany(encounter_data);
  await Factions.collection.insertMany(faction_data);
  await LocalEvents.collection.insertMany(local_event_data);
  await Maps.collection.insertMany(map_data);
  await MiniBosses.collection.insertMany(mini_boss_data);
  await Monsters.collection.insertMany(monster_data);
  await Religion.collection.insertMany(religion_data);
  await SideQuests.collection.insertMany(side_quest_data);
  await Twists.collection.insertMany(twist_data);
  await Goals.collection.insertMany(goal_data);
  await Languages.collection.insertMany(language_data);
  await Currency.collection.insertMany(currency_data);
  await Governments.collection.insertMany(government_data);
  await Eras.collection.insertMany(era_data);
  await Features.collection.insertMany(feature_data);
  await MapScales.collection.insertMany(map_scale_data);
  await MeetingSelections.collection.insertMany(meeting_selection_data);
  await TravelPoints.collection.insertMany(travel_point_data);
  await Worlds.collection.insertMany(world_data);
  await WorldStyles.collection.insertMany(world_style_data);
  await Traps.collection.insertMany(trap_data);
  await WorldShakingEvents.collection.insertMany(world_shaking_event_data);

  const campaignData = [];

  for (let i = 0; i < 3; i++) {
    const campaignName = faker.company.catchPhrase();
    const playerData = [
      {
      id: 0,
      name: faker.name.firstName(),
      raceClass: faker.animal.cat(),
      level: faker.datatype.number(),
      factions: [
        {
          name: 'Harpers',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'beer',
            icon: [
              448,
              512,
              [],
              'f0fc',
              'M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z'
            ]
          }
        },
        {
          name: 'Order of the Guantlet',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'shield-alt',
            icon: [
              512,
              512,
              [],
              'f3ed',
              'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
            ]
          }
        }
      ]
    },
    {
      id: 1,
      name: faker.name.firstName(),
      raceClass: faker.animal.cat(),
      level: faker.datatype.number(),
      factions: [
        {
          name: 'Harpers',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'beer',
            icon: [
              448,
              512,
              [],
              'f0fc',
              'M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z'
            ]
          }
        },
        {
          name: 'Order of the Guantlet',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'shield-alt',
            icon: [
              512,
              512,
              [],
              'f3ed',
              'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: faker.name.firstName(),
      raceClass: faker.animal.cat(),
      level: faker.datatype.number(),
      factions: [
        {
          name: 'Harpers',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'beer',
            icon: [
              448,
              512,
              [],
              'f0fc',
              'M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z'
            ]
          }
        },
        {
          name: 'Order of the Guantlet',
          playerNumId: 0,
          icon: {
            prefix: 'fas',
            iconName: 'shield-alt',
            icon: [
              512,
              512,
              [],
              'f3ed',
              'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
            ]
          }
        }
      ]
    }
    ];
    const government = faker.company.bsBuzz();
    const currency =  faker.finance.currencyName();
    const world = faker.address.country();
    const mapScale = faker.address.cityName();
    const charMeeting = faker.lorem.sentence();
    const religion = faker.name.jobTitle();
    const era = faker.address.timeZone();
    const uniqueFeature = faker.address.county();
    const travelPointChoices = [ faker.address.state(), faker.address.state(), faker.address.state()];
    const languages = [ faker.vehicle.model(),  faker.vehicle.model(), faker.vehicle.model() ];
    const factionOrgs = [
      {
        id: 1,
        name: 'Harpers',
        icon: {
          prefix: 'fas',
          iconName: 'beer',
          icon: [
            448,
            512,
            [],
            'f0fc',
            'M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z'
          ]
        }
      },
      {
        id: 2,
        name: 'Order of the Guantlet',
        icon: {
          prefix: 'fas',
          iconName: 'shield-alt',
          icon: [
            512,
            512,
            [],
            'f3ed',
            'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
          ]
        }
      },
      {
        id: 3,
        name: 'Emerald Enclave',
        icon: {
          prefix: 'fas',
          iconName: 'gem',
          icon: [
            576,
            512,
            [],
            'f3a5',
            'M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z'
          ]
        }
      },
      {
        id: 4,
        name: 'Lord\'s Alliance',
        icon: {
          prefix: 'fas',
          iconName: 'crown',
          icon: [
            640,
            512,
            [],
            'f521',
            'M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z'
          ]
        }
      },
      {
        id: 5,
        name: 'Zhentarim',
        icon: {
          prefix: 'fas',
          iconName: 'dragon',
          icon: [
            640,
            512,
            [],
            'f6d5',
            'M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z'
          ]
        }
      }
    ];
    const acts = faker.datatype.number();
    const climax = faker.lorem.sentence();
    const mainGoal = faker.lorem.sentence();
    const pillar = "Combat";
    const patronData = {
      factions: [
        {
          id: 1,
          name: 'Harpers',
          icon: {
            prefix: 'fas',
            iconName: 'beer',
            icon: [
              448,
              512,
              [],
              'f0fc',
              'M368 96h-48V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24v-42.11l80.606-35.977C429.396 365.063 448 336.388 448 304.86V176c0-44.112-35.888-80-80-80zm16 208.86a16.018 16.018 0 0 1-9.479 14.611L320 343.805V160h48c8.822 0 16 7.178 16 16v128.86zM208 384c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16zm-96 0c-8.836 0-16-7.164-16-16V144c0-8.836 7.164-16 16-16s16 7.164 16 16v224c0 8.836-7.164 16-16 16z'
            ]
          }
        },
        {
          id: 2,
          name: 'Order of the Guantlet',
          icon: {
            prefix: 'fas',
            iconName: 'shield-alt',
            icon: [
              512,
              512,
              [],
              'f3ed',
              'M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
            ]
          }
        }
      ],
      name: faker.name.firstName(),
      image: faker.image.animals(),
      gender:  "Female",
      type: faker.animal.cat(),
      manner: faker.lorem.word(),
      trait: faker.lorem.word()
    }
    const NPCData = [{
      id: 0,
      NPCImage: faker.image.animals(),
      NPCName: faker.name.firstName(),
      gender:  "Male",
      appearance: faker.lorem.word(),
      highAbility: faker.lorem.word(),
      lowAbility:  faker.lorem.word(),
      talent: faker.lorem.word(),
      ideal: faker.lorem.word(),
      drilledIdealChoice: faker.lorem.word(),
      bond:  faker.lorem.word(),
      flawOrSecret: faker.lorem.word(),
      manner: faker.lorem.word(),
      trait: faker.lorem.word()
    },{
      id: 1,
      NPCImage: faker.image.animals(),
      NPCName: faker.name.firstName(),
      gender:  "Male",
      appearance: faker.lorem.word(),
      highAbility: faker.lorem.word(),
      lowAbility:  faker.lorem.word(),
      talent: faker.lorem.word(),
      ideal: faker.lorem.word(),
      drilledIdealChoice: faker.lorem.word(),
      bond:  faker.lorem.word(),
      flawOrSecret: faker.lorem.word(),
      manner: faker.lorem.word(),
      trait: faker.lorem.word()
    },{
      id: 2,
      NPCImage: faker.image.animals(),
      NPCName: faker.name.firstName(),
      gender:  "Male",
      appearance: faker.lorem.word(),
      highAbility: faker.lorem.word(),
      lowAbility:  faker.lorem.word(),
      talent: faker.lorem.word(),
      ideal: faker.lorem.word(),
      drilledIdealChoice: faker.lorem.word(),
      bond: faker.lorem.word(),
      flawOrSecret: faker.lorem.word(),
      manner: faker.lorem.word(),
      trait: faker.lorem.word()
    }];
    const villainData = {
      image: faker.image.animals(),
      name: faker.name.firstName(),
      type: faker.animal.cat(),
      gender: "Female",
      villainCatChoice: faker.lorem.word(),
      villainMethodCatChoice: faker.lorem.word(),
      finalVillainObjectiveChoice: faker.lorem.word(),
      weakness: faker.lorem.word()
    };
    const localEvents = [faker.commerce.department(), faker.commerce.department(), faker.commerce.department()];
    const encounters = [{
      id: 0,
      type: faker.lorem.sentence(),
      difficulty: "Easy"
    },{
      id: 1,
      type: faker.lorem.sentence(),
      difficulty: "Easy"
    },{
      id: 2,
      type: faker.lorem.sentence(),
      difficulty: "Easy"
    }];
    const randomEncounters = [{
      id: 0,
      category: faker.commerce.productName(),
      finalSelection: faker.commerce.productName(),
    },{
      id: 1,
      category: faker.commerce.productName(),
      finalSelection: faker.commerce.productName(),
    },{
      id: 2,
      category: faker.commerce.productName(),
      finalSelection: faker.commerce.productName(),
    }];
    const twist = faker.lorem.sentence();
    const sideQuests = [{
      id: 0,
      type: faker.lorem.sentence()
    },{
      id: 1,
      type: faker.lorem.sentence()
    },{
      id: 2,
      type: faker.lorem.sentence()
    }];
    const setback = {
      type: faker.lorem.word(),
      category: faker.commerce.productName(),
      name: faker.lorem.sentence()
    };
    const dungeonData = {
      dungeonLocation: faker.address.state(),
      dungeonDetail: faker.lorem.sentence(),
      monsterNum: faker.datatype.number(),
      maxMonsterNum: faker.datatype.number(),
      rooms: faker.datatype.number(),
      monsterList: [{
        id: 0,
        category: faker.company.companyName(),
        monsterName: faker.commerce.productName()
      },{
        id: 1,
        category: faker.company.companyName(),
        monsterName: faker.commerce.productName()
      },{
        id: 2,
        category: faker.company.companyName(),
        monsterName: faker.commerce.productName()
      }]
    };
    const treasureData = {
      treasureTypes: [faker.finance.currencyName(), faker.finance.currencyName(), faker.finance.currencyName()],
      treasureNumber: faker.datatype.number()
    };
    const factionShow = true;
    const languageShow = true;
    const worldImage = faker.image.nature();
    const worldStyle = faker.lorem.word();

    campaignData.push({ 
      campaignName, playerData, government, currency, world, mapScale, 
      charMeeting, religion, era, uniqueFeature, travelPointChoices, languages,
      factionOrgs, acts, climax, mainGoal, pillar, patronData, NPCData, villainData, localEvents,
      encounters, randomEncounters, twist, setback, sideQuests, dungeonData, treasureData, factionShow, languageShow,
      worldImage, worldStyle
    });

  }
  await Campaign.collection.insertMany(campaignData);

  console.log('all done!');
  process.exit(0);
});
