module.exports = function(sequelize, DataType)
{                             //create table
    return sequelize.define('user', 
    {
        username:
        {
            type: DataType.STRING,
            allowNull: false
        },
        email:
        {
            type: DataType.STRING,
            allowNull: false
        }, 
        password:
        {
            type: DataType.STRING,
            allowNull: false
        } 
    })
}