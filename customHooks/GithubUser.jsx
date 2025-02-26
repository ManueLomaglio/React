import { useEffect, useState } from "react";
import UseFetch from "./src/UseFetch";


function GithubUser({ username }) {
  const data= UseFetch(username)

  return (
    <div>
      {data && <h4>{data.name}</h4>}
      {data && <h5>{data.login} </h5>}
      {data && <img src={data.avatar_url} alt={data.name} width={200} height={200}></img>}
    </div>
    //operatore AND, se data è vero e h1... è vero, printa h1...
  );
}
export default GithubUser;
//potrei fare lo stesso con async/await
//NB useeffect non puo essere una fuznione async quindi dobbiamo adnare a fare il fetch fuori lo useeffect
//poi eseguire la funzione nell'useffect passandogli la prop che mi serve(in questo caso username)