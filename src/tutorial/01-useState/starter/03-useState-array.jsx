import { useState} from "react";
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePeople = (id) => {
    setPeople(people.filter(pp => pp.id != id));
  }
  return (<>
    <h2>useState array example</h2>
    {people.map((peep) => {
      return (
      <div key={peep.id}>
        <h3>{peep.name}</h3>
        <button type="button" className="btn" onClick={() => removePeople(peep.id)}>Remove</button>
      </div>
      )
    })}

    <button className="btn" onClick={() => setPeople([])}>Clear</button>
    </>)
};
  

export default UseStateArray;
