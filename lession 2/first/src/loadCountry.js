import { countries } from './data.js';

export function loadCountry({id, name}) {
    return new Promise(((resolve, reject) => {
        const country = (id || name) && countries.find(element => (!!element.id && element.id === id) || (!!element.name && element.name === name));

        if (country) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }
    }));
}