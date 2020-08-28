import {SET_CAMPAIGN_NAME, SET_VILLIAN_NAME, SET_VILLIAN_TYPE, SET_QUESTGIVER_NAME, SET_QUESTGIVER_TYPE, SET_PLAYERDATA, SET_PILLAR, SET_ACTS, SET_CLIMATE, SET_WORLD, SET_MEETING_PLACE, SET_SIDE_QUESTS, SET_ROOMS, SET_SETBACKS, SET_MONSTER_NUM} from '../actions/constant'

const initialState = {
    campaignName: '',
    villianName: '',
    villianType: '',
    questGiverName: '',
    questGiverType: '',
    playerData: [],
    pillar: '',
    acts: '',
    climate: '',
    world: '',
    meetingPlace: '',
    sideQuests: '',
    rooms: '',
    setbacks: '',
    monsterNum: '',
 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_CAMPAIGN_NAME: 
        return {
          ...state,
          campaignName: action.payload  
        }
        case SET_VILLIAN_NAME: 
        return {
          ...state,
          villianName: action.payload  
        }
        case SET_VILLIAN_TYPE: 
        return {
          ...state,
          villianType: action.payload  
        }
        case SET_QUESTGIVER_NAME: 
        return {
          ...state,
          questGiverName: action.payload  
        }
        case SET_QUESTGIVER_TYPE: 
        return {
          ...state,
          questGiverType: action.payload  
        }
        case SET_PLAYERDATA:
        return {
          ...state,
          playerData: action.payload
        }
        case SET_PILLAR: 
        return {
          ...state,
          pillar: action.payload  
        }
        case SET_ACTS: 
        return {
          ...state,
          acts: action.payload  
        }
        case SET_CLIMATE: 
        return {
          ...state,
          climate: action.payload  
        }
        case SET_WORLD: 
        return {
          ...state,
          world: action.payload  
        }
        case SET_MEETING_PLACE: 
        return {
          ...state,
          meetingPlace: action.payload  
        }
        case SET_SIDE_QUESTS: 
        return {
          ...state,
          sideQuests: action.payload  
        }
        case SET_ROOMS: 
        return {
          ...state,
          rooms: action.payload  
        }
        case SET_SETBACKS: 
        return {
          ...state,
          setbacks: action.payload  
        }
        case SET_MONSTER_NUM: 
        return {
          ...state,
          monsterNum: action.payload  
        }
        default: 
            return state
    } 

}
