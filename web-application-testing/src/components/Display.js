import React from 'react';

const Display = ({ strike, ball }) => {
    return (
        <div>
            <h1>Strikes</h1>
            <p>{strike}</p>
            <h1>Balls</h1>
            <p>{ball}</p>
        </div>
    );
};


export default Display;