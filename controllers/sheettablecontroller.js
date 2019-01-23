var express = require('express');
var router = express.Router();
var db = require('../db');
var sheet = db.import('../models/csheet');

router.get('/allSheets', (req, res) => 
{
    sheet.findAll({where:{sheets_id: req.user.id}})
    .then(
        function Successful(data)
        {
            res.status(200).json(
                {
                    sheets: data,
                    message: 'Data retrieved'
                })
        },
        function fail()
        {
            res.status(500).json({message: "Data not found"})
        }
    )
})

router.post('/CreateCharacter', (req, res) =>
{
    const sheetobj =
    {
        characterName: req.body.charactersheet.characterName,
        owner_id: req.user.id,
        class: req.body.charactersheet.class,
        race: req.body.charactersheet.race,
        health: req.body.charactersheet.health,
        armorclass: req.body.charactersheet.armorclass,
        initiative: req.body.charactersheet.initiative,
        strength: req.body.charactersheet.strength,
        strengthAbilityScore: req.body.charactersheet.strengthAbilityScore,
        dexerity: req.body.charactersheet.dexerity,
        dexerityAbilityScore: req.body.charactersheet.dexerityAbilityScore,
        constituton: req.body.charactersheet.constituton,
        constitutonAbilityScore: req.body.charactersheet.constitutonAbilityScore,
        intelligence: req.body.charactersheet.intelligence,
        intelligenceAbilityScore: req.body.charactersheet.intelligenceAbilityScore,
        wisdom: req.body.charactersheet.wisdom,
        wisdomAbilityScore: req.body.charactersheet.wisdomAbilityScore,
        charisma: req.body.charactersheet.charisma,
        charismaAbilityScore: req.body.charactersheet.charismaAbilityScore,
        inventory: req.body.charactersheet.inventory,
        backstory: req.body.charactersheet.backstory
    }

    User.create(sheetobj)
    .then(
        function Successful()
    {
        res.status(200).json(
            {
                character: character,
                message: "character created."
            },

            function createFail(err) 
            {
                res.status(500).send(err.message)
            }
        )
    })
})

module.exports = router;