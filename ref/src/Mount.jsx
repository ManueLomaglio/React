import { useEffect } from "react";
import { useRef } from "react";

function Mount (){
    
    const mounted=useRef(false)

    useEffect(()=>{
        if(!mounted.current){
            mounted.current=true;
            console.log("mounted for the fist time")
           
        }else{console.log("re-mounting");}
    },[])
}export default Mount;