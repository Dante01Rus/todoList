import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersApi } from "./api";
import "./styles.css";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  if (!data || data.length === 0) {
    return <h2>No data</h2>;
  }

  return (
    <div className="App">
      <h1>Testing todos</h1>
      {data.map((element) => (
        <Link to={`/user/${element.id}`} key={element.id}>
          {element.name} aka {element.username}
        </Link>
      ))}
    </div>
  );
}

async function fetchData() {
  try {
    const response = await fetch(usersApi);
    return await response.json();
  } catch (error) {
    console.log("error is:", error);
  }
}
