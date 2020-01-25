import { loadCapitalByCountryId } from './loadCapitalByCountryId.js';
import { loadCountry } from './loadCountry.js';

function getCapitalByCountry({countryId, countryName}) {
    return loadCountry({id: countryId, name: countryName})
        .then(country => loadCapitalByCountryId(country.id))
}

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName));