import _ from 'lodash';

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

const newCompany = _.omit(
    _.cloneDeep(company),
    [
        'headDepartment.salary',
        'salesDepartment.director.salary',
        'salesDepartment.efficiency',
        'devDepartment.branches.front-end.salary',
        'devDepartment.branches.java.salary',
        'devDepartment.efficiency'
    ]
);

console.log(newCompany)