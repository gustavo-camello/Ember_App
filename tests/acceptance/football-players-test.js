import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | football players', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async (assert)=> {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('.navbar-brand').hasText('Football Players');
    assert.dom('h1').hasText('Welcome to Football Players');

    assert.dom('.jumbotron .btn').hasText('About Us');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/about')
  })

  test('visiting /about', async (assert)=> {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('.navbar-brand').hasText('Football Players');
    assert.dom('h1').hasText('About Football Players');

    assert.dom('.jumbotron .btn').hasText('Contact Page');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/getting-in-touch')
  })

  test('visiting /getting-in-touch', async (assert)=> {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('.navbar-brand').hasText('Football Players');
    assert.dom('h1').hasText('Contact Us');

    assert.dom('.jumbotron .btn').hasText('Home');
    await click('.jumbotron .btn');

    assert.equal(currentURL(), '/')
  })

  test('navigating using the navbar component', async (assert) => {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav .home').hasText('Home');
    assert.dom('nav .about').hasText('About');
    assert.dom('nav .contact').hasText('Contact');

    await click('nav .about');
    assert.equal(currentURL(), '/about');

    await click('nav .contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav .home');
    assert.equal(currentURL(), '/');
  })
  
  
  
});
