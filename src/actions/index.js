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

    SET_ROOMS,
    SET_MONSTERS,
    SET_TREASURE_TYPE, 
    SET_TREASURE_NUMBER,

  
} from './constant'

export const setCampaignName = (name) => ({
    type: SET_CAMPAIGN_NAME,
    payload: name
})  

export const setPlayers = (playerData) => ({
    type: SET_PLAYER_DATA,
    payload: playerData
})

export const setGovernmentData = (destination, value) => ({
    type: SET_GOVERNMENT_DATA,
    destination,
    value
})

export const setWorldData = (destination, value) => ({
    type: SET_WORLD_DATA,
    destination,
    value
})

export const setReligion = (destination, value) => ({
    type: SET_RELIGION,
    destination,
    value
}) 

export const setLanguages = (type) => ({
    type: SET_LANGUAGES,
    payload: type
}) 

export const setFactionOrgs = (names) => ({
    type: SET_FACTION_ORGS,
    payload: names
})

export const setActsAndClimax = (destination, value) => ({
    type: SET_ACTS_CLIMAX,
    destination,
    value
})

export const setMainGoal = (destination, value) => ({
    type: SET_MAIN_GOAL,
    destination,
    value
}) 

export const setPillar = (type) => ({
    type: SET_PILLAR,
    payload: type
}) 

export const setPatronData = (destination, value) => ({
    type: SET_PATRON_DATA,
    destination,
    value
}) 

export const setNPCData = (destination, value) => ({
    type: SET_NPC_DATA,
    destination,
    value
}) 

export const setVillainData = (destination, value) => ({
    type: SET_VILLAIN_DATA,
    destination,
    value
}) 

export const setLocalEvents = (names) => ({
    type: SET_LOCAL_EVENTS,
    payload: names
}) 

export const setEncounters = (destination, value) => ({
    type: SET_ENCOUNTERS,
    destination,
    value
}) 

export const setRandomEncounters = (destination, value) => ({
    type: SET_RANDOM_ENCOUNTERS,
    destination,
    value
})

export const setTwist = (destination, value) => ({
    type: SET_TWIST,
    destination,
    value
}) 

export const setSideQuests = (destination, value) => ({
    type: SET_SIDE_QUESTS,
    destination,
    value
}) 

export const setSetback = (destination, value) => ({
    type: SET_SETBACK,
    destination,
    value
}) 

export const setRooms = (number) => ({
    type: SET_ROOMS,
    payload: number
}) 

export const setMonsters = (name) => ({
    type: SET_MONSTERS,
    payload: name
}) 

export const setTreasureType = (type) => ({
    type: SET_TREASURE_TYPE,
    payload: type
}) 

export const setTreasureNumber = (number) => ({
    type: SET_TREASURE_NUMBER,
    payload: number
}) 

