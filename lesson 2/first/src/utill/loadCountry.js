import { countries } from '../data-source/data';

export function loadCountry(searchCountry) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const country = countries
                .filter(country => findCountry(country, searchCountry, 'id'))
                .find(country => findCountry(country, searchCountry, 'name'));

            if (country) {
                resolve(country);
            } else {
                reject('Country not found');
            }
        }, 3000);
    }));
}

function findCountry(country, searchCountry, param) {
    if ( !(param in searchCountry && searchCountry[param]) ) {
        return 1
    } else if (country[param] === searchCountry[param]) {
        return 1
    } else {
        return 0
    }
}