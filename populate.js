const { StoryItem } = require('./models')

const storyItems = [
  {
    item: 'giraffe',
    picture: 'https://tinyurl.com/y8qvygxl',
    category: 'Animals',
  },

  {
    item: 'elephant',
    picture: 'https://tinyurl.com/y96ufmc9',
    category: 'Animals',
  },
  {
    item: 'R2D2',
    picture: 'https://tinyurl.com/y92w7r6k',
    category: 'StarWars',
  },
  {
    item: 'Luke',
    picture: 'https://tinyurl.com/yaopd66j',
    category: 'StarWars',
  }
]
// Go through each story item
storyItems.map(data => {
  // Initialize a model with movie data
const storyItem = new StoryItem(data);
// and save it into the database
  storyItem.save();
});
