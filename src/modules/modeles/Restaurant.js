import ObjIsNull from "../ObjIsNull";
import Grade from "./Grade";
import Adresse from "./Adresse";

export default class Restaurant {

    #id;
    #name;
    #cuisine;
    #grades;
    #adresse;
    #restaurant_id;

    constructor(id, name, cuisine, grades, adresse, restaurant_id) {
        this.#id = id;
        this.#name = name;
        this.#cuisine = cuisine;
        this.#grades = grades;
        this.#adresse = adresse;
        this.#restaurant_id = restaurant_id;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get cuisine() {
        return this.#cuisine;
    }

    get grades() {
        return this.#grades;
    }

    get adresse() {
        return this.#adresse;
    }

    get restaurant_id() {
        return this.#restaurant_id;
    }

    static convertToRestaurant(obj) {
        if (!ObjIsNull(obj)) {
            return new Restaurant(
                obj.id,
                obj.name,
                obj.cuisine,
                Grade.convertToGrade(obj.grades),
                Adresse.convertToAdresse(obj.adresse),
                obj.restaurant_id
            );
        }
        return null;
    }

    static convertsToRestaurant(arr) {
        if (!ObjIsNull(arr) && arr instanceof Array) {
            return arr.map<Restaurant>((obj) => this.convertTo(obj)).filter<Restaurant>(restau => !ObjIsNull(restau));
        }
        return [];
    }
}
