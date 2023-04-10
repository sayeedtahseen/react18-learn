import { useState } from "react";

const UseStateBasics = () => { 
  // useState(initial Value)
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1) 
  }

  return (<>
    <h2>useState basics</h2>
    <h2>Count {count}</h2>
    <button className='btn' onClick={handleClick}>
        Click me
      </button>
  </>)
};

export default UseStateBasics;
