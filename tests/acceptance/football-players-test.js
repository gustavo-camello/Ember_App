import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | football players', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async (assert)=> {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h1').hasText('Welcome to Football Players');

    assert.dom('.jumbotron .btn').hasText('About Us');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/about')
  })

  test('visiting /about', async (assert)=> {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h1').hasText('About Football Players');

    assert.dom('.jumbotron .btn').hasText('Contact Page');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/getting-in-touch')
  })

  test('visiting /getting-in-touch', async (assert)=> {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h1').hasText('Contact Us');

    assert.dom('.jumbotron .btn').hasText('Home');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/')
  })

  
});
