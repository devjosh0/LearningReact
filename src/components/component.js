import React from "react"

function Car(props){
     return <h1>welcome {props.brand.name} and its {props.brand.medel}</h1>

}function Planes(props){
     return<h1>I am wearing {props.color} shirt today Available!</h1>
}

class House extends React.Component{
     constructor(props){
          super(props);
          //
          this.state={
           name:"ford",
           model:"aqua"
          }
          this.phone="iphone"
      
     } 
     //this.setState method 
     change = () => {
          this.setState({name:"bently"})}

     render(){
          return<div><h1>this is class component {this.props.color} {this.state.name} my {this.phone}</h1>
          <button onClick={this.change} style={{backgroundcolor:"aqua"}}>click to change car name</button>
          </div>

     }
}

//MOUNTING
//a. Constructor ref to line 11


// b. getDerivedStateFromProps
class Cassava extends React.Component{
     constructor(props){
          super(props);
          this.state={size:2+"inches"}
     }
  
     static getDerivedStateFromProps(props,state){
  return{size:props.years}
     }
     render(){
          return<h1>this is Cassava and its {this.state.size}</h1>
     }
}

// c. Render() ref to line 47



// d. componentDidMount
class Platain extends React.Component{
     constructor(props){
          super(props);
          this.state={color:"red"}
     }
     componentDidCatch(){
         setTimeout(()=>{
          this.setState({color:"blue"})
         },1000)
     }
     render(){
               return <h1>{this.state.color}</h1>

          }
     
}
   export default Car;
export { Planes }
export{House,Cassava,Platain}