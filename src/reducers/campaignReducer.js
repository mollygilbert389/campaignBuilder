import {SET_CAMPAIGN_NAME, SET_VILLIAN_NAME, SET_VILLIAN_TYPE, SET_QUESTGIVER_NAME, SET_QUESTGIVER_TYPE, SET_PILLAR} from '../actions/constant'

const initialState = {
    campaignName: '',
    villianName: '',
    villianType: '',
    questGiverName: '',
    questGiverType: '',
    pillar: '',
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
        case SET_PILLAR: 
        return {
          ...state,
          pillar: action.payload  
        }
        default: 
            return state
    } 

}
