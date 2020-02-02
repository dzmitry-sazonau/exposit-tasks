import { capitals } from '../data.js';

export function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const capital = countryId && capitals.find(element => element.countryId === countryId);

            if (capital) {
                resolve(capital.name);
            } else {
                reject('Capital not found');
            }
        }, 3000);
    }));
}
