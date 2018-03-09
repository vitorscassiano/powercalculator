import url from './url.js'
import storeManager from './storeManager.js'
import urlPlugin from './url-plugin.js'


// flag to debug
Vue.config.devtools = true;

let { powerCalculator, store } = require('powercalculator');

const storeInstance = new Vuex.Store({
    ...storeManager({
        store,
        data: url.parse(window.location.search)
    }),
    plugins: [urlPlugin]
})

new Vue({
    store: storeInstance,
    el: '.power-calculator',
    ...powerCalculator
});
