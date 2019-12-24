import React, { useState } from 'react';


function Component() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click plus
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click minus
      </button>
    </div>
  );
}

export default Component;