
import React from 'react';

const Increment = ({ count, updateCount ,children}) => {
    const handleClick = () => {
        updateCount();
    }
    
    return (
        <div>
            <h2>Count: {count}</h2>
            {children}
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Increment;
