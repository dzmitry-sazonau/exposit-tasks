const probability = 0.05;
const countries = [
    {
        id: 1,
        name: 'Belarus'
    },
    {
        id: 2,
        name: 'Poland'
    },
    {
        id: 3,
        name: 'Russia'
    },
    {
        id: 4,
        name: 'Ukraine'
    },
    {
        id: 6,
        name: 'UUUU'
    },
    {
        id: 5,
        name: 'Canada'
    },
    {
        id: 6,
        name: 'UUUU'
    }
];

const capitals = [
    {
        id: 1,
        name: 'Minsk',
        countryId: 1
    },
    {
        id: 2,
        name: 'Ottawa',
        countryId: 5
    },
    {
        id: 3,
        name: 'Warsaw',
        countryId: 2
    },
    {
        id: 4,
        name: 'Moscow',
        countryId: 3
    },
    {
        id: 5,
        name: 'Kiev',
        countryId: 4
    },
    {
        id: 6,
        name: 'Ottawa',
        countryId: 7
    }
];

function loadCountryById(id) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const country = countries.find(element => !!element.id && element.id === id);
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

function loadCountry(searchCountry) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const country = countries
                .filter(country => fd(country, searchCountry, 'id'))
                .find(country => fd(country, searchCountry, 'name'));

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

function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            const capital = countryId && capitals.find(element => !!element.id && element.countryId === countryId)

            if (capital) {
                resolve(capital.name)
            } else {
                reject('Capital not found');
            }
        }, 3000);
    }));
}

function getCapitalByCountry({countryId, countryName}) {
    return loadCountry({id: countryId, name: countryName})
        .then(country => loadCapitalByCountryId(country.id))
}

loadCountryById(2)
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCountryById(222)
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCountry({id: 1, name: ''})
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCountry({id: 1, name: ''})
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCountry({id: 6, name: 'UUUU'})
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCountry({id: 1, name: ''})
    .then(country => console.log(country))
    .catch(error => console.log(error));

loadCapitalByCountryId(2)
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: 0, countryName: 'c'})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));

getCapitalByCountry({countryId: {}, countryName: ''})
    .then(capitalName => console.log(capitalName))
    .catch(error => console.log(error));


