module.exports = function(sequelize, DataType)
{
    return sequelize.define('Inventory',
    {
        item_name:
        {
            type: DataType.STRING,
            allowNull: null
        },
        attributes:
        {
            type: DataType.STRING,
            allowNull: null
        },
        weight:
        {
            type: DataType.STRING,
            allowNull: null
        },
        damage:
        {
            type: DataType.STRING,
            allowNull: null
        },
        type:
        {
            type: DataType.STRING,
            allowNull: null
        },
        cost:
        {
            type: DataType.INTEGER,
            allowNull: null
        },

    })
}