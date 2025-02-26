import { useEffect, useState } from "react";

function UseFetch(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return data;
  
}
export default UseFetch;
