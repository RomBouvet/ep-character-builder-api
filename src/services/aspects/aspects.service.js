// Initializes the `aspects` service on path `/aspects`
const { Aspects } = require('./aspects.class');
const createModel = require('../../models/aspects.model');
const hooks = require('./aspects.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/aspects', new Aspects(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('aspects');

  service.hooks(hooks);
};
