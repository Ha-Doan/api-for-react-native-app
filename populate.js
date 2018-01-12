const { StoryItem } = require('./models')

const storyItems = [
  {
    item: 'giraffe',
    picture: 'https://tinyurl.com/y9pyg5wf',
    category: 'Animals',
  },

  {
    item: 'elephant',
    picture: 'https://tinyurl.com/ycbw2j6l',
    category: 'Animals',
  },
  {
    item: 'R2D2',
    picture: 'https://tinyurl.com/ybrmb2bj',
    category: 'StarWars',
  },
  {
    item: 'Luke',
    picture: 'https://tinyurl.com/yc7ves83',
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
