import { timeout } from './Utils';

export async function getImageRestaurantRandom() {
    await timeout(300);
    const res =  await fetch('https://source.unsplash.com/1600x900/?restaurant');
    const blob = res.blob();
    return URL.createObjectURL(blob);
}