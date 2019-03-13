var express = require('express');
var router = express.Router();
var db = require('../db');
var User = db.import('../models/user'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/CreateUser', (req, res) =>
{
    const userobj =
    {
        username: req.body.user.username,
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 10)
    }

    User.create(userobj)
    .then(user => 
        {
            var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
            res.status(200).json(
                {
                    user: user,
                    message: 'created',
                    token: token
                })
        })
})

router.post('/signIn', function(req, res)
{
    User.findOne({where:{username:req.body.user.username}})
    .then(user => 
        {
            if(user) 
            {
                bcrypt.compare(req.body.user.password, user.password, function(err, matches)
                {
                    if(matches)
                    {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
                        res.json(
                            {
                                user: user,
                                message: "successfully authenticated",
                                sessionToken: token
                            })
                    }else
                    {
                        res.status(502).send({error: "failed"})
                    }
                })
            }else
            {
                res.status(500).send({error: "failed to authentiate"})
            }
        }
    )
})

module.exports = router;