// 1
// const source = [
//     '123123',
//     'sadsad',
//     'asd',
//     2,
//     '',
//     'ad',
// ];
// const param = 'param';

// function getSlicedValues(source, param) {
//     return source.map(element => typeof(element) === 'string' && element ? element : param);
// }

// console.log(getSlicedValues(source, param));

// 2
// const source = [
//     '123123',
//     'sadsad',
//     'asd',
//     2,
//     '',
//     'ad',
// ];
// const param = 'param';

// function getSlicedValues(source, param) {
//     return source.map((element, index) => typeof(element) === 'string' && element ? element : `${param}-${index}`)
// }

// console.log(getSlicedValues(source, param));

// 3
const source = [
    '123123',
    'sadsad',
    'asd',
    2,
    '',
    'ad',
];

function getSlicedValues(source, func) {
    return source.map((element, index) => func(element) ? element : `some text - ${index}`)
}

function checkParam(param) {
    return typeof(param) === 'string' && param
}

console.log(getSlicedValues(source, checkParam));