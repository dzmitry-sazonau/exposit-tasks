const chessboard = document.querySelector('#root');
const arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const absoluteHourse = document.createElement('div');

const drawChessboard = () => {
    const letters = document.querySelectorAll('.letters');
    const numbers = document.querySelectorAll('.numbers');
    let outLetter = '';
    let outNumber = '';
    let wrapper;
    let block;

    for (let i = 0; i < 8; i++) {
        wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        outLetter += `<div class="letter">${arrayLetters[i]}</div>`;
        outNumber += `<div class="number">${i + 1}</div>`
        for (let j = 0; j < 8; j++) {
            block = document.createElement('div');
            block.setAttribute('data-x', j);
            block.setAttribute('data-y', i);
            block.classList.add('block');
            wrapper.appendChild(block);
        }
        chessboard.appendChild(wrapper);
    }

    document.querySelector('.block[data-x="1"][data-y="7"]').classList.add('hourse');
    absoluteHourse.classList.add('animated-hourse');
    chessboard.appendChild(absoluteHourse)
    animatHourse();

    letters[0].innerHTML = outLetter;
    letters[1].innerHTML = outLetter;

    numbers[0].innerHTML = outNumber;
    numbers[1].innerHTML = outNumber;
}

const animatHourse = (x = 1, y = 7) => absoluteHourse.style.transform = `translate(${x * 50}px, ${y * 50}px)`;

const removeStep = () =>
    document.querySelectorAll('.step').forEach(square => square.classList.remove('step'));

const renderPaths = (paths) =>
    paths.forEach(path => document.querySelector(`.block[data-x="${path[0]}"][data-y="${path[1]}"]`).classList.add('step'));

const getPossiblePosition = (x, y) => {
    let positions = []
    const modifiers = [1, -1, 2, -2]

    modifiers.forEach(xStep => {
        const ySteps = [3 - Math.abs(xStep), -3 + Math.abs(xStep)]
        positions = positions.concat(ySteps.map(yStep => ([x + xStep, y + yStep])))
    })

    return positions.filter(coordinates => coordinates.every(position => position >= 0 && position < 8))
}

function handleHorse(event) {
    const block = event.target;
    const hourse = document.querySelector('.hourse');
    removeStep();

    if (block.classList.contains('hourse')) {
        renderPaths(getPossiblePosition(+block.dataset.x, +block.dataset.y));
    } else if (block.classList.contains('step')) {
        removeStep();
        hourse.classList.remove('hourse');
        block.classList.add('hourse');
        animatHourse(+block.dataset.x, +block.dataset.y);
    } else {
        const paths = getPossiblePosition(+hourse.dataset.x, +hourse.dataset.y);
        const step = paths.find(element => element[1] === +block.dataset.y && element[0] === +block.dataset.x);

        if (step) {
            hourse.classList.remove('hourse');
            block.classList.add('hourse');
            animatHourse(+block.dataset.x, +block.dataset.y);
        } else {
            block.classList.add('error')
            setTimeout(() => block.classList.remove('error'), 1000)
        }
    }
}

drawChessboard();
chessboard.addEventListener('click', handleHorse);