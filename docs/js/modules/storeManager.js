
function merge ({store, data}) {

    const moduleNames = Object.keys(store.modules);

    moduleNames.forEach((name) => {
        const keys = Object.keys(store.modules[name].state);

        keys.forEach((key) => {
            if (data[key]) {
                store.modules[name].state[key] = data[key];
            }
        })
    })

    return store
}

export default merge
