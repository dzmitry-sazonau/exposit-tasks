import React, {useState, useEffect, Fragment} from "react";
import {Block} from "../block";
import {Knight} from "../knight";
import { availablePositions, comparePositions } from '../../utils';

import './board.css';

export const Board = () => {
    const [knight, setKnight] = useState({x: 1, y: 7});
    const [validPositions, setValidPositions] = useState([]);
    const [error, setError] = useState({});
    const [highlight, setHighlight] = useState([]);

    const clickHandler = (event, position) => {
        setHighlight([]);
        if (comparePositions(position, knight)) {
            setHighlight(validPositions);
        } else if (
            validPositions.some(element => comparePositions(element, position))
        ) {
            setKnight({...position});
        } else {
            setError({...position});
            setTimeout(() => setError({}), 500)
        }
    };

    useEffect(() => {
        setValidPositions(availablePositions(knight))
    },[knight]);

    const setStatus = (position) => {
        if (highlight.some(block => comparePositions(block, position))) return 'highlight';
        if (comparePositions(error, position)) return 'error'
    };

    return (
        <div className="chess">
            {[...Array(8)].map((_, y) => (
                <Fragment key={y}>
                    {[...Array(8)].map((_, x) => (
                        <div
                            onClick={event => clickHandler(event, {x, y})}
                            key={`${x}${y}`}
                            className="wrapper-block"
                        >
                            <Block status={setStatus({x, y})}/>
                        </div>
                    ))}
                </Fragment>
            ))}
            <Knight coordinate={knight}/>
        </div>
    )
};