// Initializes the `bonuses` service on path `/bonuses`
const { Bonuses } = require('./bonuses.class');
const createModel = require('../../models/bonuses.model');
const hooks = require('./bonuses.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bonuses', new Bonuses(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bonuses');

  service.hooks(hooks);
};
