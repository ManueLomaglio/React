import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import Hello from "./Hello";

function App() {
  const [language, setLanguage] = useState("it");
  //settiamo uno state per permettere che al click di un bottone il cambio di una lignua
  //forniamo un argomento tramite prop che cambiera il valore del provider 
  // e quindi passerà la prop ai suoi figli 
  function eventHandler (language){
    setLanguage(language)
  }
  
  return (
    <main>
    {/* mettiamo la funzione dell'onclick come arrow poichè così possiamo passare un valore al parametro all'eventHandler */}
    <button onClick={()=>eventHandler("it")}>IT</button>
    <button onClick={()=>eventHandler("en")}>EN</button> 
    <LanguageContext.Provider value={language}>
     {/* mettiamo una prop con un valore a tutti i provider, questa prop riceve il valore che vogliamo che ogni child o descendet ottenga  */}
      
      
      <Hello />
    </LanguageContext.Provider></main>
  );
}

export default App;
