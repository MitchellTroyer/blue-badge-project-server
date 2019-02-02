var express = require('express');
var router = express.Router();
var db = require('../db'); 
var sheet = db.import('../models/csheet'); 
const validateSession = require('../middleware/validate-session')

router.get('/allSheets', validateSession, (req, res) => 
{
    sheet.findAll({where:{owner_id: req.user.id}})
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({error: err}))
})

router.post('/CreateCharacter', validateSession, (req, res) =>
{
    const sheetobj =
    {
        characterName: req.body.charactersheet.characterName,
        owner_id: req.user.id,
        class: req.body.charactersheet.class,
        race: req.body.charactersheet.race,
        proficiency: req.body.charactersheet.proficiency,
        background: req.body.charactersheet.background,
        level: req.body.charactersheet.level,
        health: req.body.charactersheet.health,
        armorclass: req.body.charactersheet.armorclass,
        initiative: req.body.charactersheet.initiative,
        speed: req.body.charactersheet.speed,
        hitdice: req.body.charactersheet.hitdice,
        deathsaves: req.body.charactersheet.deathsaves,
        personalitytraits: req.body.charactersheet.personalitytraits,
        bonds: req.body.charactersheet.bonds,
        ideals: req.body.charactersheet.ideals,
        flaws: req.body.charactersheet.flaws,
        strength: req.body.charactersheet.strength,
        strengthAbilityScore: req.body.charactersheet.strengthAbilityScore,
        dexterity: req.body.charactersheet.dexterity,
        dexterityAbilityScore: req.body.charactersheet.dexterityAbilityScore,
        constitution: req.body.charactersheet.constitution,
        constitutionAbilityScore: req.body.charactersheet.constitutionAbilityScore,
        intelligence: req.body.charactersheet.intelligence,
        intelligenceAbilityScore: req.body.charactersheet.intelligenceAbilityScore,
        wisdom: req.body.charactersheet.wisdom,
        wisdomAbilityScore: req.body.charactersheet.wisdomAbilityScore,
        charisma: req.body.charactersheet.charisma,
        charismaAbilityScore: req.body.charactersheet.charismaAbilityScore,
        inventory: req.body.charactersheet.inventory,
        backstory: req.body.charactersheet.backstory
    }

    sheet.create(sheetobj) 
    .then( data =>
    { 
        res.status(200).json(
            {
                message: "character created."
            }
        )
            .catch(err => 
            {
                res.status(500).send({error: err})
            })
    })
})


router.delete('/delete/:id', validateSession, (req, res) => 
{
    sheet.destroy({where:{id: req.params.id}})
    .then(sheets => res.status(200).json(sheets))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/update/:id', validateSession, (req, res) => 
{
    sheet.update(
        {
            characterName: req.body.charactersheet.characterName,
            owner_id: req.user.id,
            class: req.body.charactersheet.class,
            race: req.body.charactersheet.race,
            proficiency: req.body.charactersheet.proficiency,
            background: req.body.charactersheet.background,
            level: req.body.charactersheet.level,
            health: req.body.charactersheet.health,
            armorclass: req.body.charactersheet.armorclass,
            initiative: req.body.charactersheet.initiative,
            speed: req.body.charactersheet.speed,
            hitdice: req.body.charactersheet.hitdice,
            deathsaves: req.body.charactersheet.deathsaves,
            personalitytraits: req.body.charactersheet.personalitytraits,
            bonds: req.body.charactersheet.bonds,
            ideals: req.body.charactersheet.ideals,
            flaws: req.body.charactersheet.flaws,
            strength: req.body.charactersheet.strength,
            strengthAbilityScore: req.body.charactersheet.strengthAbilityScore,
            dexterity: req.body.charactersheet.dexterity,
            dexterityAbilityScore: req.body.charactersheet.dexterityAbilityScore,
            constitution: req.body.charactersheet.constitution,
            constitutionAbilityScore: req.body.charactersheet.constitutionAbilityScore,
            intelligence: req.body.charactersheet.intelligence,
            intelligenceAbilityScore: req.body.charactersheet.intelligenceAbilityScore,
            wisdom: req.body.charactersheet.wisdom,
            wisdomAbilityScore: req.body.charactersheet.wisdomAbilityScore,
            charisma: req.body.charactersheet.charisma,
            charismaAbilityScore: req.body.charactersheet.charismaAbilityScore,
            inventory: req.body.charactersheet.inventory,
            backstory: req.body.charactersheet.backstory
        },
        {where:{id: req.params.id}})
        .then(sheets => res.status(200).json(sheets))
        .catch(err => res.status(500).json({error: err}))
})

module.exports = router;