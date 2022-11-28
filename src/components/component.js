import React from "react"

function Car(props){
     return <h1>welcome {props.brand.name} and its {props.brand.medel}</h1>

}function Planes(props){
     return<h1>I am wearing {props.color} shirt today Available!</h1>
}

class House extends React.Component{
     constructor(props){
          super(props);
          this.state={
           name:"kia",
           model:"aqua"
          }
      
     } 
     //this.setState method 
     change = () => {
          this.setState({name:"bently"})}

     render(){
          return<div><h1>this is class component {this.props.color} {this.state.name}</h1>
          <button onClick={this.change}></button>
          </div>

     }
}
   export default Car;
export { Planes }
export{House}