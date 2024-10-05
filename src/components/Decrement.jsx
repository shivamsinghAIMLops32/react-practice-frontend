import React from 'react';

const Decrement = ({ count, updateCount ,children}) => {
    const handleClick = () => {
        updateCount();
    }
    
    return (
        <div>
            <h2>Count: {count}</h2>
            {children}
            <button onClick={handleClick}>Decrement</button>
        </div>
    );
}

export default Decrement;
