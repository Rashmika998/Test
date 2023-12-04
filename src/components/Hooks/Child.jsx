import React from 'react';

const Child = ({ onClick }) => {
  console.log('Child is rendered');
  return (
    <button onClick={onClick}>
      Click me (Child)
    </button>
  );
};

export default Child;
