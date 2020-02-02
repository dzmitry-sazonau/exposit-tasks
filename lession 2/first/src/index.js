import { getCapitalByCountry } from './getCapitalByCountry';

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 0, countryName: 'c'})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: {}, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));
