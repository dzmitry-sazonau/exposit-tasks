const probability = 0.05;
const countries = [
    {
        id: 1,
        country: 'Belarus'
    },
    {
        id: 2,
        country: 'Poland'
    },
    {
        id: 3,
        country: 'Russia'
    },
    {
        id: 4,
        country: 'Ukraine'
    },
    {
        id: 5,
        country: 'Canada'
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
    }
];

function loadCountryById(id) {
    return new Promise(((resolve, reject) => {
        const country = countries.find(element => element.id === id);

        if (country.length != 0) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }

        if (Math.random() < probability) {
            reject('Could not retrieve the data');
        }
    }));
}

function loadCountry({id, name}) {
    return new Promise(((resolve, reject) => {
        const country = (id || name) && countries.find(element => element.id === id || element.name === name);

        if (country && Object.keys(country).length != 0) {
            setTimeout(resolve(country), 3000);
        } else {
            reject('Country not found');
        }
    }));
}

function loadCapitalByCountryId(countryId) {
    return new Promise(((resolve, reject) => {
        const capital = countryId && capitals.find(element => element.countryId === countryId)

        if (capital && Object.keys(capital).length != 0) {
            resolve(capital.name)
        } else {
            reject('Capital not found');
        }
    }));
}

function getCapitalByCountry({countryId, countryName}) {
    return loadCountry({id: countryId, name: countryName})
        .then(country => loadCapitalByCountryId(country.id))
}

loadCountryById(2)
    .then(country => console.log(country));

loadCountry({id: 1, name: ''})
    .then(country => console.log(country));

loadCapitalByCountryId(2)
    .then(capitalName => console.log(capitalName));

getCapitalByCountry({countryId: 5, countryName: ''})
    .then(capitalName => console.log(capitalName));

