import { getParam, getProp } from './param-map.js'

function parse(str) {
    let result = str.replace(/^\?/, '').split(/&|;/)

    return result.reduce((prev, cur) => {
        let [key, value] = cur.split('=');

        switch (value) {
            case 'true':
                value = true;
            break;
            case 'false':
                value = false;
            break;
            case !isNaN(+value):
                value = +value;
            break;
            default:
            break;
        }


        prev[getProp(key)] = value;

        return prev
    }, {})
}

function serialize (obj) {
    return Object.keys(obj).reduce((prev, cur, i) => {
        if (i > 0) {
            prev += '&'
        }

        prev += `${getParam(cur)}=${obj[cur]}`

        return prev
    }, '')
}

export default {
    parse,
    serialize
}
