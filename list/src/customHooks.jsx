import { useEffect } from "react";
import { useState } from "react"

// usare il prefisso use nel nome della funzione
function useCustomHook(){}
//logica interna dell'hook
return 
//di un oggetto di tutte le funzionui che vogliamo rendere disponibili nei componentei 
export function useFetch(url){

    const [data,setData]= useState(null)
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState(null);

    useEffect(()=>{setLoading(true);fetch(url).then(r=>r.json()). then((data)=>{setLoading(false);}).catch((err)=>{setError(err);}).finally()},[url])
}