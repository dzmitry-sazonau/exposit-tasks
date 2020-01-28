import { loadCapitalByCountryId } from './loadCapitalByCountryId.js';
import { loadCountry } from './loadCountry.js';

async function getCapitalByCountry({countryId, countryName}) {
    const country = await loadCountry({id: countryId, name: countryName})
    return await loadCapitalByCountryId(country.id)
}

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName));