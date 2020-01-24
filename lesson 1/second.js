function heatCalculatorOne(initialTemp) {
    let oldTemperature = initialTemp;

    return function (deltaTemp) {
        let newTemperature = oldTemperature + deltaTemp;

        if (newTemperature > -273) {
            let heat = 0;

            if (oldTemperature > 0 && newTemperature < 0) {
                heat = -4.2 * oldTemperature - 330 + 1.8 * newTemperature;
            } else if (oldTemperature < 0 && newTemperature > 0) {
                heat = -1.8 * oldTemperature + 330 + 4.2 * newTemperature;
            } else if (oldTemperature > 100 && newTemperature < 100) {
                heat = -2 * (oldTemperature - 100) - 2.3 + 4.2 * (newTemperature - 100);
            } else if (oldTemperature < 100 && newTemperature > 100) {
                heat = -4.2 * (oldTemperature - 100) + 2.3 + 4.2 * (newTemperature - 100);
            } else {
                heat = 4.2 * deltaTemp;
            }
            console.log({ oldTemperature, newTemperature, heat });
            oldTemperature = newTemperature;
        } else {
            console.log('Temperature limit reached');
        }
    }
}

function heatCalculatorTwo(initialTemp, material) {
    let oldTemperature = initialTemp;

    return function (deltaTemp) {
        let newTemperature = oldTemperature + deltaTemp;

        if (newTemperature > -273) {
            let heat = 0;

            switch (material) {
                case 'water':
                    if (oldTemperature > 0 && newTemperature < 0) {
                        heat = -4.2 * oldTemperature - 330 + 1.8 * newTemperature;
                    } else if (oldTemperature < 0 && newTemperature > 0) {
                        heat = -1.8 * oldTemperature + 330 + 4.2 * newTemperature;
                    } else if (oldTemperature > 100 && newTemperature < 100) {
                        heat = -2 * (oldTemperature - 100) - 2.3 + 4.2 * (newTemperature - 100);
                    } else if (oldTemperature < 100 && newTemperature > 100) {
                        heat = -4.2 * (oldTemperature - 100) + 2.3 + 4.2 * (newTemperature - 100);
                    } else {
                        heat = 4.2 * deltaTemp;
                    }
                    break;

                case 'gold':
                    if (oldTemperature > 1064 && newTemperature < 1064) {
                        heat = -0.129 * (oldTemperature - 1064) - 67 + 0.129 * (newTemperature - 1064);
                    } else if (oldTemperature < 1064 && newTemperature > 1064) {
                        heat = -0.129 * (oldTemperature - 1064) + 67 + 0.129 * (newTemperature - 1064);
                    } else if (oldTemperature > 2807 && newTemperature < 2807) {
                        heat = -0.129 * (oldTemperature - 2807) - 66 + 0.129 * (newTemperature - 2807);
                    } else if (oldTemperature < 2807 && newTemperature > 2807) {
                        heat = -0.129 * (oldTemperature - 2807) + 66 + 0.129 * (newTemperature - 2807);
                    } else {
                        heat = 0.129 * deltaTemp;
                    }
                    break;

                case 'iron':
                    if (oldTemperature > 1538 && newTemperature < 1538) {
                        heat = -0.444 * (oldTemperature - 1538) - 277 + 0.444 * (newTemperature - 1538);
                    } else if (oldTemperature < 1538 && newTemperature > 1538) {
                        heat = -0.444 * (oldTemperature - 1538) + 277 + 0.444 * (newTemperature - 1538);
                    } else if (oldTemperature > 3050 && newTemperature < 3050) {
                        heat = -0.444 * (oldTemperature - 3050) - 6300 + 0.444 * (newTemperature - 3050);
                    } else if (oldTemperature < 3050 && newTemperature > 3050) {
                        heat = -0.444 * (oldTemperature - 3050) + 6300 + 0.444 * (newTemperature - 3050);
                    } else {
                        heat = 0.444 * deltaTemp;
                    }
                    break;

                default:
                    console.log('Unknown material');
                    return
            }
            console.log({ material, state: { oldTemperature, newTemperature, heat } });
            oldTemperature = newTemperature;
        } else {
            console.log('Temperature limit reached');
        }
    }
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