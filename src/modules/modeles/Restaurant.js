export default class Restaurant {
    #private_id;
    #private_name;
    #private_cuisine;

    constructor(id, name, cuisine) {
        this.#private_id = id;
        this.#private_name = name;
        this.#private_cuisine = cuisine;
    }

    get id() {
        return this.#private_id;
    }

    get name() {
        return this.#private_name;
    }

    get cuisine() {
        return this.#private_cuisine;
    }
}