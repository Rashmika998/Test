import React, { useState, useCallback } from 'react';
import Child from './Child';

const Parent = () => {
  console.log('Parent is rendered');

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onClick={increment} />
    </div>
  );
};

export default Parent;
