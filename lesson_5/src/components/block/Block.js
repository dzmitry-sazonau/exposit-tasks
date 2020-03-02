import React from 'react';
import PropTypes from 'prop-types';

import './block.css'

export const Block = ({status}) => {
    return (
        <div
            className={`chess-cell ${status}`.trim()}
        />
    );
};

Block.propTypes = {
    status: PropTypes.string.isRequired
};

Block.defaultProps = {
    status: ''
};

