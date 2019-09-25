import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | pagination', function(hooks) {
  setupApplicationTest(hooks);

  test('testing pagination', async function(assert) {
    await visit('/');
		await click('[data-test-next]');
		await click('[data-test-previous]');

    assert.equal(currentURL(), '/');
  });
});
