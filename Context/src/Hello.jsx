import { useContext } from "react";

import { LanguageContext } from "./LanguageContext";
// importiamo il contest operchè vogliamo avere acesso al valore all'interno del contesto 
//per qeusto usiamo l'hook usecontext

//ci permette di accedere a qulunque contex che gli passiamo come parametro,
//ci rida il valore contenuto in quel contesto 

function Hello(){
 const language= useContext(LanguageContext)

    return (
    <p>{language=== "en"? "helloworld":"ciao mondo"}</p>)
}
export default Hello;
