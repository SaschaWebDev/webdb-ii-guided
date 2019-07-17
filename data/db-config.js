const knex = require('knex');

const knexConfig = require('../knexfile.js');

// Changing the database environment is as easy as changing this single variable
module.exports = knex(knexConfig.development);
