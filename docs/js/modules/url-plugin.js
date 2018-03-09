import url from './url.js'

let urlUpdateEnabled = true;

function updateUrl (store) {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
        // called after every mutation.
        // The mutation  comes in the format of `{ type, payload }`.

        if (!urlUpdateEnabled) {
            return;
        }

        urlUpdateEnabled = false;

        setTimeout(() => {
            let stateClone = new urlManager(state);

            stateClone
                .flattenState()
                .serialize(stateClone)
                .pushNewUrlState(stateClone);

            urlUpdateEnabled = true;
        }, 100)

    })
}

class urlManager {

    constructor (stateWithObservers) {

        this._data = JSON.parse(JSON.stringify(stateWithObservers));
    }

    flattenState () {
        const props = Object.keys(this._data);

        this._data = props.reduce((prev, cur) => {

            prev = {
                ...prev,
                ...this._data[cur]
            };

            return prev
        }, {})

        return this;
    }

    serialize () {
        this._data = url.serialize(this._data)

        return this;
    }

    pushNewUrlState () {

        history.pushState({}, '', `/?${this._data}`)

        return this;
    }

}

export default updateUrl
