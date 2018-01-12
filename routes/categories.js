const router = require('express').Router()
const { StoryItem } = require('../models')

router.get('/categories', (req, res, next) => {

  StoryItem.find({ }, { category: 1, _id: 0})
    // Send the data in JSON format
    .then((storyItems) => {
      const categories = [...new Set(storyItems.map(item => item.category))]
      var obj = {category: ''}
      const newCategories = categories.map(item => { obj.category = item
                                                     return {...obj}})

      res.json(newCategories)})
    // Forward any errors to error handler
    .catch((error) => next(error))
})

module.exports = router
