// Initializes the `modifiers` service on path `/modifiers`
const { Modifiers } = require('./modifiers.class');
const createModel = require('../../models/modifiers.model');
const hooks = require('./modifiers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/modifiers', new Modifiers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('modifiers');

  service.hooks(hooks);
};
