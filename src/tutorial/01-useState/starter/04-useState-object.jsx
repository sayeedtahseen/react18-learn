import { useState } from 'react';

const UseStateObject = () => {
  const john = {
    name: "john",
    age: "24",
  }

  const [person, setPerson] = useState(john);

  const handleShow = () => {
    const pete = {
      name: "Pete",
      age: "55",
    }

    setPerson(pete);
  };

  return (<>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <button 
      type='button' 
      className='btn'
      onClick={handleShow}>
        Show pete
      </button>
  </>);
};

export default UseStateObject;
