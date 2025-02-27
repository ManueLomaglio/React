import { BrowserRouter } from "react-router-dom";
import App from "./App";

export function Root() {
  return <BrowserRouter>
  
  <App/>
  
  </BrowserRouter>
}
// in questo modo stiamo utilizzando le caratteristiche della prop children 
//infatti tutto quello contenuto nel browserRouter avrà accesso alle funzioni di routing della libreria
// non solo i figli diretti contenuti direttamente in browser ma anche i discendenti dei figli diretti.
//essendo app il componente che contiene tutto il nostro progetto, diamo le funzionalità del routing a TUTTO il progetto
