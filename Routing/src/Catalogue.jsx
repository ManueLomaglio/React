import { Link, Outlet } from "react-router-dom";
function Catalogue() {
  return (
    <div>
      <h2>all products</h2>
      <ul>
        <li>
          <Link to="/products/1">Prodotto 1</Link>{" "}
        </li>
        <li>
          <Link to="/products/2">Prodotto 2</Link>{" "}
        </li>
        <li>
          <Link to="/products/3">Prodotto 3</Link>{" "}
        </li>
        <li>
          <Link to="/products/4">Prodotto 4</Link>{" "}
        </li>
        <li>
          <Link to="/products/5">Prodotto 5</Link>{" "}
        </li>
      </ul>
      <hr/>
      <Outlet/>
    </div>
  );
}
export default Catalogue;

//link è la stessa cosa del tag a di html, ma ci permettere di navigare tra le pagine senza causare rendering inutili 
