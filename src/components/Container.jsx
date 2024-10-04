import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Container</h2>
      {children} {/* This will render any child elements passed to the Container */}
    </div>
  );
};

export default Container;

