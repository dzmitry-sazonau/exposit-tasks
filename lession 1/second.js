const materials = ['water', 'gold', 'iron'];
const list = {
    water: {
        heatL: 4.2,
        heatS: 1.8,
        heatSt: 2,
        cryst: 330,
        eva: 2.3,
        crystT: 0,
        evaT: 100,
    },
    iron: {
        heatL: 0.444,
        heatS: 0.444,
        heatSt: 0.444,
        cryst: 277,
        eva: 6300,
        crystT: 1538,
        evaT: 3050,
    },
    gold: {
        heatL: 0.129,
        heatS: 0.129,
        heatSt: 0.129,
        cryst: 67,
        eva: 66,
        crystT: 1064,
        evaT: 2807,
    }
};

// 1
function heatCalculatorOne(initialTemp) {
    let oldTemp = initialTemp;

    if (oldTemp <= -273) {
        console.log('Temperature limit reached')
    } else {
        return function (deltaTemp) {
            let newTemp = oldTemp + deltaTemp;

            if (newTemp <= -273) {
                console.log('Temperature limit reached');
            } else {
                let heat = 0;

                calculatorForHeat(oldTemp, newTemp, deltaTemp, 'water')
                oldTemp = newTemp;
            }
        }
    }
}

// 2
function heatCalculatorTwo(initialTemp, material) {
    let oldTemp = initialTemp;

    if (oldTemp <= -273) {
        console.log('Temperature limit reached');
    } else {
        return function (deltaTemp) {
            const isMaterial = materials.includes(material);

            if (!isMaterial) {
                console.log('Unknown material')
            } else {
                let newTemp = oldTemp + deltaTemp;

                if (newTemp <= -273) {
                    console.log('Temperature limit reached');
                } else {
                    calculatorForHeat(oldTemp, newTemp, deltaTemp, material)
                    oldTemp = newTemp;
                }
            }
        }
    }
}

function calculatorForHeat(oldTemp, newTemp, deltaTemp, material) {
    let heat = 0;

    if (oldTemp >= list[material].crystT && oldTemp < list[material].evaT && newTemp <= list[material].crystT && oldTemp != newTemp) {
        heat = -list[material].heatL * (oldTemp - list[material].crystT) - list[material].cryst + list[material].heatS * (newTemp - list[material].crystT)
    } else if (oldTemp <= list[material].crystT && newTemp >= list[material].crystT && oldTemp != newTemp) {
        if (newTemp >= list[material].evaT) {
            heat = -list[material].heatS * (oldTemp - list[material].crystT) + list[material].cryst + list[material].heatL * list[material].evaT + list[material].eva + list[material].heatSt * (newTemp - list[material].evaT)
        }
        else {
            heat = -list[material].heatS * (oldTemp - list[material].crystT) + list[material].cryst + list[material].heatL * (newTemp - list[material].crystT)
        }
    } else if (oldTemp >= list[material].evaT && newTemp <= list[material].evaT && oldTemp != newTemp) {
        if (newTemp <= list[material].crystT) {
            heat = -list[material].heatSt * (oldTemp - list[material].evaT) - list[material].eva - list[material].heatL * (newTemp - list[material].evaT) - list[material].cryst + list[material].heatS * (newTemp - list[material].crystT)
        }
        else {
            heat = -list[material].heatSt * (oldTemp - list[material].evaT) - list[material].eva + list[material].heatL * (newTemp - list[material].evaT)
        }
    } else if (oldTemp <= list[material].evaT && newTemp >= list[material].evaT && oldTemp != newTemp) {
        heat = -list[material].heatL * (oldTemp - list[material].evaT) + list[material].eva + list[material].heatSt * (newTemp - list[material].evaT)
    } else {
        heat = list[material].heatL * deltaTemp;
    }
    console.log({ oldTemp, newTemp, heat });
}

const calculator = heatCalculatorOne(0);

calculator(20);
calculator(-10);

const ironCalculator = heatCalculatorTwo(50, 'iron');
const waterCalculattor = heatCalculatorTwo(0, 'water');
const goldCalculator = heatCalculatorTwo(0, 'gold');
const errorCalculator = heatCalculatorTwo(0, 'op');

ironCalculator(-30);
ironCalculator(30);
waterCalculattor(10);
goldCalculator(1000);
errorCalculator(10);