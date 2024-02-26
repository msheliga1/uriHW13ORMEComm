const express = require('express');
const routes = require('./routes');
// import sequelize connection - Added MJS 2.26
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
// turn on connection to db and server. Force: false unless you change the models, 
// in which case you set force to true, so that the entire DB reloads
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`MJS HW13 App listening on port ${PORT}!`));
});

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
