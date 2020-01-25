import { countries } from './data.js';

export function loadCountry({id, name}) {
    return new Promise(((resolve, reject) => {
        const country = (id || name) && countries.find(element => element.id === id || element.name === name);

        if (country && Object.keys(country).length != 0) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }
    }));
}