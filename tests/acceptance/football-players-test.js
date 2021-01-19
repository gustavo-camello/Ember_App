import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | football players', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async (assert)=> {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Welcome to Football Players');

    assert.dom('.jumbotron a.btn').hasText('About Us');
    await click('jumbotron a.btn');

    assert.equal(currentURL(), '/about')
  })
});
