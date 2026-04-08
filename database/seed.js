const User = require('../models/User');

async function seed() {
  await User.create({ username: 'john', email: 'john@email.com' });
  console.log('Database seeded');
}

seed();
