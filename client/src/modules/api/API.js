import ObjIsNull from "../ObjIsNull";

const url = 'http://localhost:8080/api';

export function get(path, params) {
    const link = `${url}/${path}`;
    let strParams = '';

    if (!ObjIsNull(params) && !paramsEmpty(params)) {
        const paramsEntries = Object.entries(params);
        strParams = strParams.concat('?').concat(
            (paramsEntries.map(([key, value]) => {
            return `${key}=${value}`;
            }).join('&'))
        );
    }

    return fetch(link + strParams).then(reponseJSON => reponseJSON.json());
}

export function post(path, params) {
    const formParams = new FormData();
    const appendForm = ([key, value]) => formParams.append(key, value);
    
    if (params instanceof FormData) {
        params.entries().forEach(appendForm);
    }
    else {
        Object.entries(params).forEach(appendForm)
    }

    return fetch(`${url}/${path}`, {
        method: 'POST',
        body: formParams,
    }).then(reponseJSON => reponseJSON.json());
}

function paramsEmpty(obj) {
    return Object.values(obj).length <= 0;
}
