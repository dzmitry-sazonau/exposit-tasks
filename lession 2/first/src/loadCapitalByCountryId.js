import { capitals } from './data.js';

export function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        const capital = countryId && capitals.find(element => element.countryId === countryId)

        if (capital && Object.keys(capital).length != 0) {
            resolve(capital.name)
        } else {
            reject('Capital not found');
        }
    }));
}