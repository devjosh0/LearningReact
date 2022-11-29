//If condition

 function Goal(props){
    function Missedgoal(){
        return <h1>Missedgoal</h1>
     }
     function Scoredgoal(){
        return<h1>Scoredgoal</h1>
     }
    const isgoal = props.isgoal
    if (isgoal){
        return<Scoredgoal/>
    }
    else{
        return<Missedgoal/>
    }
 }

 //Logical Opeartor
 function Traffic(props){
    const light = props.light
    const pedestrians = props.pedestrians
    function Go(){
        return<h1>Go</h1>
    }
    function Stopp(){
        return <h1>stop</h1>
    }
    if (light && pedestrians){
        return <Stopp/>
    }
    else{
        return<Go/>
    }
 }

 function Ternary(props){
    const age=props.age
   const pass = props.pass
    function Failed(){
        return<h1>failed</h1>
    }
    function Passed(){
        return <h1>Passed</h1>
    }
    if (age && pass){
    return <Passed/>
    }else{
        return <Failed/>
    }


}
 export default Traffic
    export {Goal}
    export{Ternary}