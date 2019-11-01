import React from 'react';

const Display = ({ strike, ball }) => {
    return (
        <div>
            <h1>Strikes</h1>
            <p data-testid="strikeCount">{strike}</p>
            <h1>Balls</h1>
            <p data-testid="ballCount">{ball}</p>
        </div>
    );
};


export default Display;