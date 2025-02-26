import { createContext } from "react";

export const LanguageContext = createContext("it");

//abbiamo creato un oggetto che abbiamo chiamato LAnguage context.
//avendolo creato tramite la function create context, abbiamo un oggetto che contiene un provider e un consumer

//l'argomento che passiamo al createcontext è il DEFAULT VALUE

//DEFAULT VALUE è il valore del contesto per qualsiasi componente che non fa parte del compontent three del context provider. 