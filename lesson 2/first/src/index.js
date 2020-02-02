import { getCapitalByCountry } from './getCapitalByCountry';

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 5, countryName: 'C'})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: {}, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 1, countryName: ''})
    .then(country => console.log(country))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 6, countryName: 'UUUU'})
    .then(country => console.log(country))
    .catch(error => console.log(error));