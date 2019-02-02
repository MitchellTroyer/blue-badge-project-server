var jwt = require('jsonwebtoken');
var db = require('../db');
var User = db.import('../models/user');

module.exports = function(req, res, next)
{
    var sessionToken = req.headers.authorization; //1-->created to hold a token
        console.log(sessionToken) //2-->printed to show it was passed in
        if (!sessionToken) return res.status(403).send({ auth: false, message: 'No token provided.' }); //3--> if no token then 403 error
        else 
        { //4-->no user provided so only token is checked, checks to prevent unautherized use of a token assigned to a different user
            jwt.verify(sessionToken, process.env.JWT_SECRET, (err, decoded) => 
            { //5-->verify decodes the token with the secret, then sends a callback with two vairbales. success or fail
                if(decoded){
                    User.findOne({where: { id: decoded.id}}).then(user => 
                    { //6-->if decoded has value the sequelize findone method looks for an id in th eusers table that matches decoded.id property.
                        req.user = user; //7-->callback sets the user value for the request(req.user) as the id value passed to it then sneds the rquest on to its next destintation
                        next();
                    },
                    function()
                    { //8-->if not matching id is found, an error message is thrown
                        res.status(401).send({error: 'Not authorized'});
                    });
                } else 
                { //9-->if no value for decoded, an error message is thrown
                    res.status(400).send({error: 'Not authorized'});
                }
            });
        }
}