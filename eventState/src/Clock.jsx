import { useEffect, useState } from "react";

function Clock() {
    const [time,setTime]=useState(new Date())
    
useEffect(()=>{
    const update= setInterval(() => {
        setTime(new Date())
    }, 1000);
    return () => clearInterval(update); 
  }, []);//array condizionale

return(
    <h2>time right now:{time.toLocaleTimeString()}</h2>
)};
export default Clock;





