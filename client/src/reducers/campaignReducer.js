import {
  SET_CAMPAIGN_NAME,
  SET_PLAYER_DATA,
  SET_WORLD_DATA,
  SET_GOVERNMENT_DATA,
  SET_RELIGION,
  SET_LANGUAGES,
  SET_FACTION_ORGS,
  SET_ACTS_CLIMAX,
  SET_MAIN_GOAL,
  SET_PILLAR,
  SET_PATRON_DATA,
  SET_NPC_DATA,
  SET_VILLAIN_DATA,
  SET_LOCAL_EVENTS,
  SET_ENCOUNTERS,
  SET_RANDOM_ENCOUNTERS,
  SET_TWIST,
  SET_SIDE_QUESTS,
  SET_SETBACK,
  SET_DUNGEON_DATA,
  SET_TREASURE_DATA,
  SET_FACTION_SHOW,
  SET_LANGUAGE_SHOW,
} from "../actions/constant";

const initialState = {
  campaignName: "",
  playerData: [],
  government: "",
  currency: "",
  world: "",
  mapScale: "",
  charMeeting: "",
  religion: "",
  era: "",
  uniqueFeature: "",
  travelPointChoices: [],
  languages: [],
  factionOrgs: [],
  acts: "",
  climax: "",
  mainGoal: "",
  pillar: "",
  patronData: {},
  NPCData: [],
  villainData: {},
  localEvents: [],
  encounters: [],
  randomEncounters: [],
  twist: "",
  sideQuests: [],
  setBack: "",
  dungeonData: {},
  treasureData: {},
  factionShow: false,
  languageShow: false,
  worldImage: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAMPAIGN_NAME:
      return {
        ...state,
        campaignName: action.payload,
      };
    case SET_PLAYER_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_WORLD_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_GOVERNMENT_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_RELIGION:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    case SET_FACTION_ORGS:
      return {
        ...state,
        factionOrgs: action.payload,
      };
    case SET_ACTS_CLIMAX:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_MAIN_GOAL:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_PILLAR:
      return {
        ...state,
        pillar: action.payload,
      };
    case SET_PATRON_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_NPC_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_VILLAIN_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_LOCAL_EVENTS:
      return {
        ...state,
        localEvents: action.payload,
      };
    case SET_ENCOUNTERS:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_RANDOM_ENCOUNTERS:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_TWIST:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_SIDE_QUESTS:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_SETBACK:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_DUNGEON_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_TREASURE_DATA:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_FACTION_SHOW:
      return {
        ...state,
        [action.destination]: action.value,
      };
    case SET_LANGUAGE_SHOW:
      return {
        ...state,
        [action.destination]: action.value,
      };
    default:
      return state;
  }
}
