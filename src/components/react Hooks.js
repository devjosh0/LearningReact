import { useState } from "react";
function Funhook(){
    const [color, setColor] = useState("red")
  
    return<> 
    <h1>{color}</h1>
    <button onClick={()=>setColor("blue")}></button>
    </>
}export default Funhook