import React, { useState } from 'react';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

const App = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <Increment count={count} updateCount={() => setCount(count + 1)} ><h2>children : {count}</h2></Increment>
            <Decrement count={count} updateCount={() => setCount(count - 1)} ><h2>children : {count}</h2></Decrement>
        </div>
    );
}

export default App;
