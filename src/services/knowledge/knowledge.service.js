// Initializes the `knowledge` service on path `/knowledge`
const { Knowledge } = require('./knowledge.class');
const createModel = require('../../models/knowledge.model');
const hooks = require('./knowledge.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/knowledge', new Knowledge(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('knowledge');

  service.hooks(hooks);
};
