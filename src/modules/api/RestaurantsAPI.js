import Restaurant from '../modeles/Restaurant';
import { get } from './API';

export function getRestaurants(params) {
    return get('restaurants', params).then(res => Restaurant.convertsToRestaurant(res.data ?? []));
}