const users = require('./users/users.service.js');
const stats = require('./stats/stats.service.js');
const aspects = require('./aspects/aspects.service.js');
const knowledge = require('./knowledge/knowledge.service.js');
const skills = require('./skills/skills.service.js');
const bonuses = require('./bonuses/bonuses.service.js');
const modifiers = require('./modifiers/modifiers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(stats);
  app.configure(aspects);
  app.configure(knowledge);
  app.configure(skills);
  app.configure(bonuses);
  app.configure(modifiers);
};
