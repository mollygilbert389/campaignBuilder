import {
  SET_CAMPAIGN_NAME,
  SET_PLAYER_DATA,
  SET_GOVERNMENT,
  SET_CURRENCY,
  SET_WORLD,
  SET_MAP_SCALE,
  SET_CHAR_MEETING,
  SET_RELIGION,
  SET_LANGUAGES,
  SET_FACTION_ORGS,
  SET_ACTS,
  SET_CLIMAX,
  SET_MAIN_GOAL,
  SET_PILLAR,
  SET_PATRON_NAME,
  // SET_NPC_NUMBER,
  SET_VILLAIN_NAME,
  SET_LOCAL_EVENTS,
  SET_RANDOM_ENOUNTER_NUMBER,
  SET_ROOMS,
  SET_MONSTER_NUM,
  SET_MONSTERS,
  SET_TREASURE_TYPE,
  SET_TREASURE_NUMBER

} from '../actions/constant'

const initialState = {
    campaignName: "",
    playerData: [],
    government: "",
    currency: "",
    world: "",
    mapScale: "",
    charMeeting: "",
    religion: "",
    language: "",
    factionOrgs: [            
      "Harpers",
      "Order of the Guantlet",
      "Emerald Enclave",
      "Lord's Alliance",
      "Zhentarim",
    ],
    acts: "",
    climax: "",
    mainGoal: "",
    pillar: "",
    patronName: "",
    // NPCNumber: "",
    villainName: "",
    localEvents: [],
    randomEncounterNumber: "",
    rooms: "",
    monsterNum: "",
    monsters: [],
    treasure: [],
    treasureNum: "",

    // sideQuests: '',
    // setbacks: '',
    // dungeonType: '',

 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CAMPAIGN_NAME: 
        return {
            ...state,
            campaignName: action.payload  
          }
        case SET_PLAYER_DATA:
        return {
            ...state,
            playerData: action.payload
          }
        case SET_GOVERNMENT:
          return {
            ...state,
            government: action.payload
          }
        case SET_CURRENCY:
          return {
            ...state,
            currency: action.payload
          }
        case SET_WORLD:
          return {
            ...state,
            world: action.payload
          }
        case SET_MAP_SCALE:
          return {
            ...state,
            mapScale: action.payload
          }
        case SET_CHAR_MEETING:
          return {
            ...state,
            charMeeting: action.payload
          }
        case SET_RELIGION:
          return {
            ...state,
            religion: action.payload
          }
        case SET_LANGUAGES:
          return {
            ...state,
            languages: action.payload
          }
        case SET_FACTION_ORGS:
          return {
            ...state,
            factionOrgs: action.payload
          }
        case SET_ACTS:
          return {
            ...state,
            acts: action.payload
          }
        case SET_CLIMAX:
          return {
            ...state,
            climax: action.payload
          }
        case SET_MAIN_GOAL:
          return {
            ...state,
            mainGoal: action.payload
          }
        case SET_PILLAR: 
        return {
          ...state,
          pillar: action.payload  
        }
        case SET_PATRON_NAME: 
        return {
          ...state,
          patronName: action.payload  
        }
        // case SET_NPC_NUMBER: 
        // return {
        //   ...state,
        //   NPCNumber: action.payload  
        // }
        case SET_VILLAIN_NAME: 
        return {
          ...state,
          villainName: action.payload  
        }
        case SET_LOCAL_EVENTS: 
        return {
          ...state,
          localEvents: action.payload  
        }
        case SET_RANDOM_ENOUNTER_NUMBER: 
        return {
          ...state,
          randomEncounterNumber: action.payload  
        }
        case SET_ROOMS: 
        return {
          ...state,
          rooms: action.payload  
        }
        case SET_MONSTER_NUM: 
        return {
          ...state,
          monsterNum: action.payload  
        }
        case SET_MONSTERS: 
        return {
          ...state,
          monsters: action.payload  
        }
        case SET_TREASURE_TYPE: 
        return {
          ...state,
          treasure: action.payload  
        }
        case SET_TREASURE_NUMBER: 
        return {
          ...state,
          treasureNum: action.payload  
        }
        // case SET_SIDE_QUESTS: 
        // return {
        //   ...state,
        //   sideQuests: action.payload  
        // }
        // case SET_SETBACKS: 
        // return {
        //   ...state,
        //   setbacks: action.payload  
        // }
        // case SET_DUNGEON_TYPE: 
        // return {
        //   ...state,
        //   dungeonType: action.payload  
        // }

        default: 
            return state
    } 

}
