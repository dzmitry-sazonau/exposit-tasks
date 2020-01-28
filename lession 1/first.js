const source = [
    { name: "Pavel", age: 33 },
    { name: "Anton", age: 24 },
    { name: "Igor", age: 33 },
    18,
    null,
    [],
    "",
    "fdfdfsff",
    { name: 'Pavel', age: {}},
    { name: 'Anna', age: {}}
];
const emptyObject = {};

// 1
function getSlicedValuesOne(source, param = "age") {
    return source
        .filter(element => element && element.hasOwnProperty(param) && element[param])
        .map(element => element[param]);
}

console.log(getSlicedValuesOne(source, "age"));
console.log(getSlicedValuesOne(source, "lastName"));
console.log(getSlicedValuesOne(source, null));
console.log('<------ End of 1 output ---->');

// 2
function getSlicedValuesThree(source, param) {
    return source
        .filter(element => element && element.hasOwnProperty(param) && element[param])
        .map(element => checkEmptyObject(element[param]) ? emptyObject : element[param])
        .filter((element, index, array) => index === array.indexOf(element))
}

console.log(getSlicedValuesThree(source, "age"));
console.log(getSlicedValuesThree(source, "lastName"));
console.log('<------ End of 2 output ---->');

// 3
function getSlicedValuesFour(source, checkParam) {
    return source
        .map(element => checkParam(element, 'age'))
        .filter(element => !!element)
        .filter((element, index, array) => index === array.indexOf(element));
}

function checkParam(object, param) {
    return object && object.hasOwnProperty(param) && (checkEmptyObject(object[param]) ? emptyObject : object[param])
}

function checkEmptyObject(object) {
    return object !== null && typeof(object) === 'object' && Object.keys(object).length === 0
}

console.log(getSlicedValuesFour(source, checkParam));
console.log(getSlicedValuesFour(source, checkParam));
console.log('<---- End of 3 output ---->');
