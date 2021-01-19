import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async (assert) => {
    await render(hbs`
      <Player::Image
      src="https://images.unsplash.com/photo-1516742720271-6ae39cbc5bd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
      alt="image of a player"
      />
    `)

    assert.dom('.image-container img').exists()
    .hasAttribute('alt', 'image of a player')
  });

});
