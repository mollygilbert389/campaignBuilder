query campaign {
  campaigns{
    _id
    campaignName
    playerData {
      id
      name
      level
      raceClass
    }
    government
    currency
    world
    mapScale
    charMeeting
    religion
    era
    uniqueFeature
    travelPointChoices
    languages
    factionOrgs {
      id
      name
      icon {
        iconName
      }
    }
    acts
    climax
    mainGoal
    pillar
    patronData {
      factions {
        id
        name
        icon {
          iconName
        }
      }
      name
      gender
      type
      manner
      trait
    }
    NPCData {
      id
      NPCName
      NPCImage
      gender
      appearance
      highAbility
      lowAbility
      talent
      manner
      trait
      ideal
      drilledIdealChoice
      bond
      flawOrSecret
    }
    villainData {
      image
      name
      type
      gender
      villainObjectiveCatChoice
      finalVillainMethodChoioce
      weakness
    }
    localEvents
    encounters  {
      id
      type
      difficulty
    }
    randomEncounters {
      id
      category
      finalSelection
    }
    twist
    sideQuests {
      id
      type
    }
    setback {
      type
      category
      name
    }
    dungeonData {
      dungeonDetail
      dungeonLocation
      monsterNum
      rooms
      monsterList {
        id
        category
        monsterName
      }
      maxMonsterNum
    }
    treasureData {
      treasureTypes
      treasureNumber
    }
    factionShow
    languageShow
    worldImage
  }
}

TO DO: 
