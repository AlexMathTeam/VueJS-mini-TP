import ObjIsNull from "../ObjIsNull";

const url = 'http://localhost:8080';

export function get(path, params) {
    return fetch(`${url}/${path}` + (!ObjIsNull(params) && paramsEmpty(params) ? () => {
        const paramsArray = Object.entries(params);
        return '?'.concat(paramsArray.map(([key, value], index) => {
            return `${key}=${value}` + index < paramsArray.length ? '&' : '';
        }));
    } : ''));
}

export function post(path, params) {
    return fetch(`${url}/${path}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params),
    })
}

function paramsEmpty(obj) {
    return Object.keys(obj).length <= 0;
}
