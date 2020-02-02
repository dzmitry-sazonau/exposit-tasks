import _ from 'lodash';
import { company } from './data-source/data';

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