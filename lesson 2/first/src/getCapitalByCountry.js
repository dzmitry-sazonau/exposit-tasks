import { loadCountry, loadCapitalByCountryId } from './utill';

export async function getCapitalByCountry({countryId, countryName}) {
    const country = await loadCountry({id: countryId, name: countryName});
    return await loadCapitalByCountryId(country.id)
}
