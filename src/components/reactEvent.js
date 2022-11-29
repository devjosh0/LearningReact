function Football(){
    const shoot = () => {
        alert("nice")
    }
    return <buttom onClick={shoot} >take a shoot</buttom>
}

//Events to pass parameters
function Football1(){
    const shoot = (a) => {
        alert(a)
    }
    return <buttom onClick={()=>shoot("goal")} >take a shoot</buttom>
}
//Event Object
function Football2(){
    const shoot = (a,b) => {
        alert(b.type)
    }
    return <buttom onClick={(Event)=>shoot("goal",Event)} >Event</buttom>
}
export default Football
export {Football1, Football2}