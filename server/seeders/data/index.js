const dungeon_locations_data = require("./dungeonTypeLocationData.json");
const non_dungeon_locations_data = require("./nonDungeonTypeLocationData.json");
const meeting_selection_data = require("./meetingSelectionData.json");
const climax_data = require("./climaxData.json");
const encounter_data = require("./encounterData.json");
const evil_NPC_data = require("./evilNPCSubTypes.json");
const faction_data = require("./factionData.json");
const goal_data = require("./goalData.json");
const government_data = require("./govrenmentData.json");
const language_data = require("./languageData.json");
const currency_data = require("./currencyData.json");
const local_event_data = require("./localEventData.json");
const map_data = require("./mapData.json");
const mini_boss_data = require("./miniBossData.json");
const monster_data = require("./monsterData.json");
const name_data = require("./nameData.json");
const NPC_data = require("./NPCData.json");
const patron_data = require("./patronData.json");
const world_data = require("./worldData.json");
const era_data = require("./eraData.json");
const feature_data = require("./featureData.json");
const map_scale_data = require("./mapScaleData.json");
const meeting_location_data = require("./meetingLocationData.json");
const travel_point_data = require("./travelPointsData.json");
const world_style_data = require("./worldStyleData.json");
const religion_data = require("./religionData.json");
const setback_data = require("./setbackData.json");
const side_quest_data = require("./sideQuestData.json");
const twist_data = require("./twistData.json");
const villain_data = require("./villainData.json");
const side_monster_data = require("./sideMonsterData.json");
const room_data = require("./roomsData.json");

module.exports = {
    mini_boss_data,
    monster_data,
    side_monster_data,
    map_data,
    room_data,
    government_data,
    language_data,
    currency_data,
    world_data,
    era_data,
    feature_data,
    map_scale_data,
    meeting_location_data,
    travel_point_data,
    world_style_data,
    dungeon_locations_data,
    non_dungeon_locations_data,
    meeting_selection_data,
    climax_data,
    encounter_data,
    evil_NPC_data,
    faction_data,
    name_data,
    NPC_data,
    patron_data,
    religion_data,
    setback_data,
    side_quest_data,
    twist_data,
    villain_data,
    goal_data,
    local_event_data
}