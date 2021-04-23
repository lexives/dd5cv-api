const mongoose = require("mongoose")

const schema = mongoose.Schema({
    created: Date,
    updated: Date,
    name: String,
    alignment: String,
    faith: String,
    size: String,
    age: String,
    height: String,
    weight: String,
    eyes: String,
    skin: String,
    hair: String,
    languages: [ String ],
    personality_traits: String,
    ideals: String,
    bonds: String,
    flaws: String,
    player: String,
    xp: Number,
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
    classes: [
        {
            name: String,
            level: Number
        }
    ],
    saving_throws: {
        str: {
            proficient: Boolean,
            override: String
        },
        dex: {
            proficient: Boolean,
            override: String
        },
        con: {
            proficient: Boolean,
            override: String
        },
        int: {
            proficient: Boolean,
            override: String
        },
        wis: {
            proficient: Boolean,
            override: String
        },
        cha: {
            proficient: Boolean,
            override: String
        },
    },
    skills: {
        acrobatics: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        animal_handling: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        arcana: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        athletics: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        deception: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        history: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        insight: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        intimidation: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        investigation: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        medicine: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        nature: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        perception: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        performance: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        persuasion: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        religion: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        slight_of_hand: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        stealth: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        },
        survival: {
            proficient: Boolean,
            expert: Boolean,
            override: String
        }
    },
    passive_perception_override: String,
    ac_override: String,
    initiative_override: String,
    speed_override: String,
    max_hp: Number,
    current_hp: Number,
    temporary_hp: Number,
    hit_dice_override: [{
        die_type: Number,
        total: Number,
        spent: Number
    }],
    death_saves: {
        successes: {
            first: Boolean,
            second: Boolean,
            third: Boolean
        },
        failures: {
            first: Boolean,
            second: Boolean,
            third: Boolean
        }
    },
    notes: [ String ]
})

module.exports = mongoose.model("Character", schema)