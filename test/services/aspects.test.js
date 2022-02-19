const assert = require('assert');
const app = require('../../src/app');

describe('\'aspects\' service', () => {
  it('registered the service', () => {
    const service = app.service('aspects');

    assert.ok(service, 'Registered the service');
  });
});
