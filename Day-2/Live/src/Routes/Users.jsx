import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div>
      <h3>Users Page</h3>
      {data.map((user) => (
        <div key={user.id}>
          <h3> {user.first_name}</h3>
          <img width="100px" src={user.avatar} alt={user.id} />
          <div>
            <Link to={`/users/${user.id}`}>Show more details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
