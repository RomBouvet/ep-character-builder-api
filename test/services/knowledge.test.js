const assert = require('assert');
const app = require('../../src/app');

describe('\'knowledge\' service', () => {
  it('registered the service', () => {
    const service = app.service('knowledge');

    assert.ok(service, 'Registered the service');
  });
});
