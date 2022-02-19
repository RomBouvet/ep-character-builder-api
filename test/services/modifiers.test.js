const assert = require('assert');
const app = require('../../src/app');

describe('\'modifiers\' service', () => {
  it('registered the service', () => {
    const service = app.service('modifiers');

    assert.ok(service, 'Registered the service');
  });
});
