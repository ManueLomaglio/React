import { Link, useNavigate, useParams } from "react-router-dom";

function Welcome() {
  const { name="boy" } = useParams();
  const navigate = useNavigate();

  function handleClickLogin() {
    navigate("/Login");
  }

  return (
    <div>
      <h1>Buongiono, {name}</h1>
      {/* <Link to="/Login">login </Link> */}
      <div>
        <button onClick={handleClickLogin}>open the login</button>
      </div>
    </div>
  );
}
export default Welcome;
