import React, { useState } from 'react';

function Fun() {
    const [count, setCount] = useState(0); 

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
    function resetCounter() {
        setCount(0);
    }

    return (
        <div className="fun-container">
            <h2>Fun Counter</h2>
            <div className="counter-container">
                <button className="counter-button" onClick={decrement}>-</button>
                <h1 className="counter-display">{count}</h1>
                <button className="counter-button" onClick={increment}>+</button>
                <button className="counter-button" onClick={resetCounter}>R</button>
            </div>
        </div>
    );
}

export default Fun;