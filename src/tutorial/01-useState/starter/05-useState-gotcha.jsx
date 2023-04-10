import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount( (prevCount) => {
      const newCount = prevCount + 1;
      return newCount;
    })
  }
  return (<>
    <h2>useState "gotcha"</h2>
    <h3>Count {count}</h3>
    <button onClick={handleClick}>Count</button>
    </>
  )
};

export default UseStateGotcha;
