import React from 'react';
import Container from './components/Container';

const App = () => {
  return (
    <div>
      <Container>
        <p>This is some content inside the container.</p>
        <button>Click Me!</button>
      </Container>


      <Container>
        <h3>Another container with different content!</h3>
        <button>submit</button>
      </Container>
    </div>
  );
};

export default App;
