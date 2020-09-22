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
    SET_PATRON_NAME,
    // SET_NPC_NUMBER,
    SET_VILLAIN_NAME,
    SET_LOCAL_EVENTS,
    SET_RANDOM_ENOUNTER_NUMBER,
    SET_ROOMS,
    SET_MONSTER_NUM,
    SET_MONSTERS,
    SET_TREASURE_TYPE, 
    SET_TREASURE_NUMBER,
 

    // SET_SIDE_QUESTS,
    // SET_SETBACKS,
    // SET_DUNGEON_TYPE,
    
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


export const setReligion = (type) => ({
    type: SET_RELIGION,
    payload: type
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

export const setMainGoal = (type) => ({
    type: SET_MAIN_GOAL,
    payload: type
}) 

export const setPillar = (type) => ({
    type: SET_PILLAR,
    payload: type
}) 

export const setPatronName = (name) => ({
    type: SET_PATRON_NAME,
    payload: name
}) 

// export const seetNPCNumber = (number) => ({
//     type: SET_NPC_NUMBER,
//     payload: number
// }) 

export const setVillainName = (name) => ({
    type: SET_VILLAIN_NAME,
    payload: name
}) 

export const setLocalEvents = (names) => ({
    type: SET_LOCAL_EVENTS,
    payload: names
}) 

export const setRandomEncounterNumber = (number) => ({
    type: SET_RANDOM_ENOUNTER_NUMBER,
    payload: number
}) 

export const setRooms = (number) => ({
    type: SET_ROOMS,
    payload: number
}) 

export const setMonsterNum = (number) => ({
    type: SET_MONSTER_NUM,
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

// export const setSideQuests = (name) => ({
//     type: SET_SIDE_QUESTS,
//     payload: name
// }) 

// export const setSetbacks = (name) => ({
//     type: SET_SETBACKS,
//     payload: name
// }) 

// export const setDungeonType = (name) => ({
//     type: SET_DUNGEON_TYPE,
//     payload: name
// }) 

