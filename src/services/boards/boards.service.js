// Initializes the `boards` service on path `/boards`
const createService = require('feathers-mongoose');
const createModel = require('../../models/boards.model');
const hooks = require('./boards.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/boards', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('boards');

  service.hooks(hooks);
};
