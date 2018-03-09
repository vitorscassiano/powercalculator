const propToParam = {
    testType:           'testType',
    calculateProp:      'calculateProp',
    sample:             'view_sample',
    base:               'view_base',
    impact:             'view_impact',
    power:              'view_power',
    falsePosRate:       'view_falsePosRate',
    sdRate:             'view_sdRate',
    runtime:            'view_runtime',
    visitorsPerDay:     'view_visitorsPerDay',
    threshold:          'view_threshold',
    lockedField:        'nonInferiority_lockedField',
    selected:           'nonInferiority_selected',
    enabled:            'nonInferiority_enabled'
};

const paramToProp = Object.keys(propToParam).reduce((prev, cur) => {

    let {key, value} = {key: cur, value: propToParam[cur]}

    // inverting key and value

    prev[value] = key;

    return prev

}, {});

function getParam (prop) {
    return propToParam[prop]
}

function getProp (param) {
    return paramToProp[param]
}

export {
    getParam,
    getProp
}
