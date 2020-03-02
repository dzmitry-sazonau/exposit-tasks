import React from 'react';
import PropTypes from 'prop-types';

import './knight.css'

export const Knight = ({coordinate}) => (
    <div
        style={{
            left: `${coordinate.x * 50}px`,
            top: `${coordinate.y * 50}px`
        }}
        className="knight"
    />
);

Knight.propTypes = {
    coordinate: PropTypes.object.isRequired
};