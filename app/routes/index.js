import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model () {
        let response = await fetch('/api/players.json');
        let {data} = await response.json();

        return data.map((model) => {
            let { id, attributes } = model;
            console.log(model)
            return {id, ...attributes}
        })
        
    }

}