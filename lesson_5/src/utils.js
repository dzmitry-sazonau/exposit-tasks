export const availablePositions = (knight) => {
    let positions = [];
    const modifiers = [1, -1, 2, -2];

    modifiers.forEach(xStep => {
        const ySteps = [3 - Math.abs(xStep), -3 + Math.abs(xStep)];
        positions = positions.concat(
            ySteps.map(yStep => [knight.x + xStep, knight.y + yStep])
        );
    });

    return positions
        .filter(coordinates =>
            coordinates.every(position => position >= 0 && position < 8)
        )
        .map(coordinates =>
            ({x: coordinates[0], y: coordinates[1]})
        );
};

export const comparePositions = (posA, posB) => {
    return posA.x === posB.x && posA.y === posB.y;
};