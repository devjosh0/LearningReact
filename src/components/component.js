import React from "react"

function Car(props){
     return <h1>welcome {props.brand.name} and its {props.brand.medel}</h1>

}function Planes(props){
     return<h1>I am wearing {props.color} shirt today!</h1>
}

class House extends React.Component{
     constructor(props){
          super(props);
          this.state={
           name:"kia",
           model:"aqua"
          }
      this.setState({name:"bently"})
     }

     render(){
          return<h1>this is class component {this.props.color} {this.setState.name}</h1>
     }
}
   export default Car;
export { Planes }
export{House}