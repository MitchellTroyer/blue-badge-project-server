module.exports = function(sequelize, DataType)
{                             
    return sequelize.define('user', 
    {
        username:
        {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        email:
        {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        }, 
        password:
        {
            type: DataType.STRING,
            allowNull: false
        } 
    })
}