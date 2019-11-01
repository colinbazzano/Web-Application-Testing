import React, { useState, useEffect } from 'react';

// local imports
import Display from './Display';

const Dashboard = () => {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);

    useEffect(() => {
        if (strike === 3 || ball === 4) {
            setStrike(0);
            setBall(0);
        }
    },[strike, ball]);

    const handleHit = () => {
        setStrike(0);
        setBall(0);
    };

    const handleFoul = () => {
        if (strike < 2) {
            setStrike(num => ++num);
        }
    };
    
    return (
        <div>
            <Display strike={strike} ball={ball} />
            <button data-testid="strikeButton" onClick={() => setStrike(num => ++num)}>Strike</button>
            <button data-testid="ballButton" onClick={() => setBall(num => ++num)}>Ball</button>
            <button data-testid="hitButton" onClick={handleHit}>Hit</button>
            <button data-testid="foulButton" onClick={handleFoul}>Foul</button>
        </div>
    )
};

export default Dashboard;