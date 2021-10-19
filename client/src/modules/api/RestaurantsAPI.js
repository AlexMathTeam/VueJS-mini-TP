import Restaurant from '../modeles/Restaurant';
import { get } from './API';

export function getRestaurants(params) {
    return get('restaurants', params).then(res => ({
        count: res.count,
        restaurants: Restaurant.convertsToRestaurant(res.data ?? [])
    }));
}

export function getRestaurantsCount() {
    return get('restaurants/count').then(res => res.data ?? 0);
}