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
    // SET_VILLAIN_NAME,
    // SET_VILLAIN_TYPE,
    // SET_QUESTGIVER_NAME,
    // SET_QUESTGIVER_TYPE,
    // SET_PILLAR,
    // SET_ACTS,
    // SET_CLIMATE,
    // SET_WORLD,
    // SET_MEETING_PLACE,
    // SET_SIDE_QUESTS,
    // SET_ROOMS,
    // SET_SETBACKS,
    // SET_MONSTER_NUM,
    // SET_DUNGEON_TYPE,
    // SET_TREASURE_TYPE, 
    // SET_MONSTERS,
    // SET_TREASURE_NUMBER,
    


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

// export const setVillainName = (name) => ({
//     type: SET_VILLAIN_NAME,
//     payload: name
// })  

// export const setVillainType = (vType) => ({
//     type: SET_VILLAIN_TYPE,
//     payload: vType
// })  

// export const setQuestGiverName = (name) => ({
//     type: SET_QUESTGIVER_NAME,
//     payload: name
// }) 

// export const setQuestGiverType = (qType) => ({
//     type: SET_QUESTGIVER_TYPE,
//     payload: qType
// }) 



// export const setPillar = (name) => ({
//     type: SET_PILLAR,
//     payload: name
// }) 

// export const setActs = (name) => ({
//     type: SET_ACTS,
//     payload: name
// }) 

// export const setClimate = (name) => ({
//     type: SET_CLIMATE,
//     payload: name
// }) 

// export const setWorld = (name) => ({
//     type: SET_WORLD,
//     payload: name
// }) 

// export const setMeetingPlace = (name) => ({
//     type: SET_MEETING_PLACE,
//     payload: name
// }) 

// export const setSideQuests = (name) => ({
//     type: SET_SIDE_QUESTS,
//     payload: name
// }) 

// export const setRooms = (name) => ({
//     type: SET_ROOMS,
//     payload: name
// }) 

// export const setSetbacks = (name) => ({
//     type: SET_SETBACKS,
//     payload: name
// }) 

// export const setMonsterNum = (name) => ({
//     type: SET_MONSTER_NUM,
//     payload: name
// }) 

// export const setDungeonType = (name) => ({
//     type: SET_DUNGEON_TYPE,
//     payload: name
// }) 

// export const setTreasureType = (name) => ({
//     type: SET_TREASURE_TYPE,
//     payload: name
// }) 

// export const setMonsters = (name) => ({
//     type: SET_MONSTERS,
//     payload: name
// }) 

// export const setTreasureNumber = (name) => ({
//     type: SET_TREASURE_NUMBER,
//     payload: name
// }) 