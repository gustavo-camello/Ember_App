import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | player', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a player', async function (assert){

    this.setProperties({
      player: {
        name: 'Ronaldinho Gaucho',
        nationality: 'Brazilian',
        club: 'Milan',
        age: 38,
        position: 'Attacking'
      }
    });


    await render(hbs`<Player @player={{this.player}} />`);

    assert.dom('ul').hasClass('list-details');
    assert.dom('h5').hasText('Ronaldinho Gaucho');
    assert.dom('.player-details .nationality').includesText('Nationality');
    assert.dom('.player-details .club').includesText('Club');
    assert.dom('.player-details .age').includesText('Age');
    assert.dom('.player-details .position').includesText('Position');
  })
   
});
