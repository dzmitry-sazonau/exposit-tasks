const _ = require('lodash');

const company = {
    headDepartment: {
        director: 'Vasya',
        salary: 100500
    },
    devDepartment: {
        branches: {
            'front-end': {
                director: 'Dima',
                salary: 1000
            },
            java: {
                director: 'Kolya',
                salary: 500
            },
            qweqwewe: {
                director: 'Kolya',
                salary: 500
            },
            director2: {
                director: 'Kolya',
                salary: 500
            }
        },
        efficiency: 200
    },
    salesDepartment: {
        director: {
            name: 'Nastya',
            salary: 1000
        },
        efficiency: 200
    }
};
const newCompany = {};
const paths = [];
const searchValue = 'director';

let path = '';

// pass searchValue as 2nd parameter
function passageOfTheObject(object) {
    walkthrough(object);

    //pass path as 2nd parameter
    function walkthrough(object) {
        for (let key in object) {
            path += key + '.';

            if (typeof (object[key]) === 'object' && key !== searchValue) {
                walkthrough(object[key]);
                // path = ''
            } else if (key === searchValue) {
                paths.push(path.slice(0, path.length - 1))
            }
        }
    }
}

passageOfTheObject(company);

paths.forEach(element => _.set(newCompany, element, _.get(company, element)));
 
console.log(paths);
console.log(newCompany);