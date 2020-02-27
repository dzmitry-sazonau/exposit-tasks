import React from 'react';
import './block.css'

export const Block = ({x, y}) => (
    <div
        className="chess-cell"
        data-x={x}
        data-y={y}
    />
);
