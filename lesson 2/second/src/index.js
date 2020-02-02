import _ from 'lodash';

const company = {
    headDepartment: {
        director: 'Vasya',
        salary: 100500,
        newDirector: {
            director: 'new'
        }
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

function passageOfTheObject(object, searchValue) {
    walkThrough(object, '');

    function walkThrough(object, path) {
        Object.keys(object).forEach(element => {
            if (typeof object[element] === "object" && element !== searchValue){
                path += `${element}.`;
                walkThrough(object[element], path);
                path = path.slice(0, path.lastIndexOf(element));
            }
            if (element === searchValue) {
                paths.push(path + searchValue);
            }
        });
    }
}

passageOfTheObject(company, 'director');
paths.forEach(path => _.set(newCompany, path, _.get(company, path)));
 
console.log(paths);
console.log(newCompany);