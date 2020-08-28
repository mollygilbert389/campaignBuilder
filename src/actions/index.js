import {
    SET_CAMPAIGN_NAME,
    SET_VILLIAN_NAME,
    SET_VILLIAN_TYPE,
    SET_QUESTGIVER_NAME,
    SET_QUESTGIVER_TYPE,
    SET_PLAYERDATA,
    SET_PILLAR,
    SET_ACTS,
    SET_CLIMATE,
    SET_WORLD,
    SET_MEETING_PLACE,
    SET_SIDE_QUESTS,
    SET_ROOMS,
    SET_SETBACKS,
    SET_MONSTER_NUM,
    


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

export const setPlayers = (name) => ({
    type: SET_PLAYERDATA,
    payload: name
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

export const setSideQuests = (name) => ({
    type: SET_SIDE_QUESTS,
    payload: name
}) 

export const setRooms = (name) => ({
    type: SET_ROOMS,
    payload: name
}) 

export const setSetbacks = (name) => ({
    type: SET_SETBACKS,
    payload: name
}) 

export const setMonsterNum = (name) => ({
    type: SET_MONSTER_NUM,
    payload: name
}) 