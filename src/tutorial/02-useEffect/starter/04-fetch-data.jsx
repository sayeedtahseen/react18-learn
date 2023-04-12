const url = 'https://api.github.com/users';
import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  
  useEffect( () => {
    const fetchUsers = async () => {
      try{
        const data = await fetch(url);
        // const users = await data.json();
        // console.log(users)
        setUsers( await data.json());
      } catch(error){
        console.error(error);
      }
    }
    
    fetchUsers();
  });
  return (<>
  <h2>fetch data example</h2>
  {users.map((user, index) => {
    return (<div key={index}>
      {user.login}
    </div>)
  })}
  </>);
};
export default FetchData;
