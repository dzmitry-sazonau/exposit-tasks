import { capitals } from './data.js';

export function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        const capital = countryId && capitals.find(element => !!element.id && element.countryId === countryId)

        if (capital) {
            resolve(capital.name)
        } else {
            reject('Capital not found');
        }
    }));
}