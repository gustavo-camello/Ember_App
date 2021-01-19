import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbotron', function(hooks) {
  setupRenderingTest(hooks);

  test ('it renders the content inside a jumbotron header', async (assert) => {
    await render(hbs`<Jumbotron>Hello World</Jumbotron>`)

    assert.dom('.jumbotron').exists();
    assert.dom('.jumbotron').hasText('Hello World');
  })
});
