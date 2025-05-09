import React, { useState } from 'react';
import './Counter.css';

function Counter({ initialValue = 0, label = "Compteur" }) {
    const [count, setCount] = useState(initialValue);

    return (
        <div className="counter">
            <h3>{label}</h3>
            <div className="counter-value">{count}</div>
            <div className="counter-controls">
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className="reset-button" onClick={() => setCount(initialValue)}>Réinitialiser</button>
        </div>
    );
}

export default Counter;