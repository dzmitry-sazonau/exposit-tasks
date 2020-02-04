import { countries, probability } from '../data-source/data';

export function loadCountry(searchCountry) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const country = countries
                .filter(country => findCountry(country, searchCountry, 'id'))
                .find(country => findCountry(country, searchCountry, 'name'));

            if (Math.random() < probability) {
                reject('Could not retrieve the data');
            }
            if (country) {
                resolve(country);
            } else {
                reject('Country not found');
            }
        }, 3000);
    }));
}

function findCountry(country, searchCountry, param) {
    const typeOfParam = param === 'id' ? 'number' : 'string';
    return(
        param in searchCountry &&
        typeof searchCountry[param] === typeOfParam &&
        country[param] === searchCountry[param]
    )
}