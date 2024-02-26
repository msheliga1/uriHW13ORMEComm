const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => {
  console.log('\n----- MJS TAGS SEEDING-----\n');
  console.log('tagData is ' + tagData);  // gives 8 (correct) objects
  for (const td of tagData) {
    console.log(td);   // display proper data
  }
  Tag.bulkCreate(tagData);
}

module.exports = seedTags;
