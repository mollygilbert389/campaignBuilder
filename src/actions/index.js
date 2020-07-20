import {
    SET_CAMPAIGN_NAME,
    SET_VILLIAN_NAME,
    SET_VILLIAN_TYPE,
    SET_QUESTGIVER_NAME,
    SET_QUESTGIVER_TYPE,
    SET_PILLAR,

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