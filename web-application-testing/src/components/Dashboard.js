import React, { useState, useEffect } from 'react';

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
        <div></div>
    )
};

export default Dashboard;