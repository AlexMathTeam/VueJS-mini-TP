import Adresse from "./Adresse";

export default class Restaurant {
    #_id;
    #_name;
    #_cuisine;
    #_grades;
    #_adresse;
    #_restaurant_id;

    constructor(id, name, cuisine, grades, adresse, restaurant_id) {
        this.#_id = id;
        this.#_name = name;
        this.#_cuisine = cuisine;
        this.#_grades = grades;
        this.#_adresse = adresse;
        this.#_restaurant_id = restaurant_id;
    }

    get id() {
        return this.#_id ?? '';
    }

    get name() {
        return this.#_name ?? '';
    }

    get cuisine() {
        return this.#_cuisine ?? '';
    }

    get grades() {
        return this.#_grades ?? [];
    }

    get adresse() {
        return this.#_adresse ?? new Adresse();
    }

    get restaurant_id() {
        return this.#_restaurant_id ?? '';
    }

    static convertTo(obj) {
        if (!!obj) {
            return Object.assign(new Restaurant(), obj);
        }
    }

    static convertsTo(arr) {
        if (!!arr) {
            return arr.map<Restaurant>((obj) => this.convertTo(obj));
        }
    }
}