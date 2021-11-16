const faker = require('faker');

const db = require('../config/connection');
const { Campaign } = require('../models');

db.once('open', async () => {
  await Campaign.deleteMany({});

  // create user data
  const campaignData = [];

  for (let i = 0; i < 20; i++) {
    const title = faker.company.catchPhrase();
    const author = faker.name.findName();
    const pages = faker.random.number();

    // campaignData.push({ title, author, pages });
  }
  await Campaign.collection.insertMany(campaignData);

  console.log('all done!');
  process.exit(0);
});
