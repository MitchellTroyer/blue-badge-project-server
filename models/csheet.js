module.exports = function(sequelize, DataType)
{                             
    return sequelize.define('CharacterSheets', 
    {
        characterName: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        owner_id: 
        {
            type: DataType.INTEGER,
            allowNull: false
        },
        class: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        race: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        proficiency: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        background: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        level: 
        {
            type: DataType.STRING,
            allowNull: true
        },
        health:
        {
            type: DataType.STRING,
            allowNull: true
        },
        armorclass:
        {
            type: DataType.STRING,
            allowNull: true
        },
        initiative:
        {
            type: DataType.STRING,
            allowNull: true
        },
        speed:
        {
            type: DataType.STRING,
            allowNull: true
        },
        hitdice:
        {
            type: DataType.STRING,
            allowNull: true
        },
        deathsaves:
        {
            type: DataType.STRING,
            allowNull: true
        },
        personalitytraits:
        {
            type: DataType.STRING,
            allowNull: true
        },
        bonds:
        {
            type: DataType.STRING,
            allowNull: true
        },
        ideals:
        {
            type: DataType.STRING,
            allowNull: true
        },
        flaws:
        {
            type: DataType.STRING,
            allowNull: true
        },
        strength:
        {
            type: DataType.INTEGER,
            allowNull: true 
        },
        strengthAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        dexterity:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        dexterityAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        constitution:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        constitutionAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        intelligence:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        intelligenceAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        wisdom:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        wisdomAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        charisma:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        charismaAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        inventory:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        backstory:
        {
            type: DataType.INTEGER,
            allowNull: true
        }
    })
}