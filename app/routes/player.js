import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model (params) {
        let response = await fetch(`/api/players/${params.player_id}.json`);
        let {data} = await response.json();

        let {id, attributes} = data;

        return { id, ...attributes};
        
    }
}