import Model, {attr} from '@ember-data/model';

export default class PlayerModel extends Model {
    @attr name;
    @attr nationality;
    @attr club;
    @attr age;
    @attr position;
    @attr category;
    @attr image;
}