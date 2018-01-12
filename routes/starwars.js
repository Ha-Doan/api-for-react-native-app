const router = require('express').Router()
const { StoryItem } = require('../models')

router.get('/starwars', (req, res, next) => {
  StoryItem.find({ category: 'StarWars' }, {item: 1, picture: 1, _id: 0})
    // Newest animals first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((starwars) => res.json(starwars))
    // Forward any errors to error handler
    .catch((error) => next(error))
})

module.exports = router
