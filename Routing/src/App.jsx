import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Catalogue from "./Catalogue";
import Container from "./Container";
import Product from "./Product";

function App() {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <Container
      title={
        <header>
          <h1>my APP</h1>
          <div>
            <Link to="/">Home</Link> | <Link to="products">Products</Link>
          </div>
        </header>
      }>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/:name" element={<Welcome />}></Route>
        <Route path="login" element={<Login onLogin={handleLogin} />}></Route> */}
          <Route path="products" element={<Catalogue />}>
            <Route index element={<h3>Select a product</h3>} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Not found</p>

                <Link to="/">Go home</Link>
              </div>
            }></Route>
        </Routes>
      </div>
    </Container>
  );
}

export default App;
//index è praticamente volore di default quando abbiamo un nesting di route. 
// verrà mostrato quando nell'utrl saremo in catalogue/ ma non avremmo ancora richiesto nessun prodotto e quindi nell'url non ci sarà nessun reinderizzamento  
//tramite link ad uno dei prodotti
