import React, {useState} from 'react';
import './knight.css'

export const Knight = (props) => {
    // eslint-disable-next-line
    const [position, setPosition] = useState({
        x: 1,
        y: 0
    });

    return (
        <div className="knight">♘</div>
    )
};