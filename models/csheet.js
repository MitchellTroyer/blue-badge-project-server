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
        health:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        armorclass:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        initiative:
        {
            type: DataType.INTEGER,
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
        dexerity:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        dexerityAbilityScore:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        constituton:
        {
            type: DataType.INTEGER,
            allowNull: true
        },
        constitutonAbilityScore:
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
            type: DataType.STRING,
            allowNull: true
        },
        backstory:
        {
            type: DataType.STRING,
            allowNull: true
        }
    })
}