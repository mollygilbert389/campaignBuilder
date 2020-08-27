import {
    SET_CAMPAIGN_NAME,
    SET_VILLIAN_NAME,
    SET_VILLIAN_TYPE,
    SET_QUESTGIVER_NAME,
    SET_QUESTGIVER_TYPE,
    SET_PILLAR,
    SET_ACTS,
    SET_CLIMATE,
    SET_WORLD,
    SET_MEETING_PLACE,

} from './constant'

export const setCampaignName = (name) => ({
    type: SET_CAMPAIGN_NAME,
    payload: name
})  

export const setVillianName = (name) => ({
    type: SET_VILLIAN_NAME,
    payload: name
})  

export const setVillianType = (vType) => ({
    type: SET_VILLIAN_TYPE,
    payload: vType
})  

export const setQuestGiverName = (name) => ({
    type: SET_QUESTGIVER_NAME,
    payload: name
}) 

export const setQuestGiverType = (qType) => ({
    type: SET_QUESTGIVER_TYPE,
    payload: qType
}) 

export const setPillar = (name) => ({
    type: SET_PILLAR,
    payload: name
}) 

export const setActs = (name) => ({
    type: SET_ACTS,
    payload: name
}) 

export const setClimate = (name) => ({
    type: SET_CLIMATE,
    payload: name
}) 

export const setWorld = (name) => ({
    type: SET_WORLD,
    payload: name
}) 

export const setMeetingPlace = (name) => ({
    type: SET_MEETING_PLACE,
    payload: name
}) 