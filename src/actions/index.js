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

export const setGovernment = (type) => ({
    type: SET_GOVERNMENT,
    payload: type
}) 

export const setCurrency = (type) => ({
    type: SET_CURRENCY,
    payload: type
})

export const setWorld = (type) => ({
    type: SET_WORLD,
    payload: type
}) 

export const setMapScale = (type) => ({
    type: SET_MAP_SCALE,
    payload: type
}) 

export const setCharMeeting = (place) => ({
    type: SET_CHAR_MEETING,
    payload: place
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

export const setActs = (number) => ({
    type: SET_ACTS,
    payload: number
})

export const setClimax = (type) => ({
    type: SET_CLIMAX,
    payload: type
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

