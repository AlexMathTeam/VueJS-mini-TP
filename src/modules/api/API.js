import ObjIsNull from "../ObjIsNull";

const url = 'http://localhost:8080/api/';

export function get(path, params) {
    return fetch(`${url}/${path}` + (!ObjIsNull(params) && paramsEmpty(params) ? () => {
        const paramsArray = Object.entries(params);
        return '?'.concat(paramsArray.map(([key, value], index) => {
            return `${key}=${value}` + index < paramsArray.length ? '&' : '';
        }));
    } : '')).then(reponseJSON => reponseJSON.json());
}

export function post(path, params) {
    const formParams = new FormData();
    Object.entries(params).forEach(([key, value]) => formParams.append(key, value));

    return fetch(`${url}/${path}`, {
        method: 'POST',
        body: formParams,
    }).then(reponseJSON => reponseJSON.json());
}

function paramsEmpty(obj) {
    return Object.keys(obj).length <= 0;
}
