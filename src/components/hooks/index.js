import React,{useState} from 'react';

function Component() {
  const [count, setCount] = useState(0);
  return (
    <div>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
    </div>
    </div>
  );
}
export default Component;
