//Using map()
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  // Keys
  function Employess(props){
    return <li>I am {props.empoly}</li>
  }
  function Company(){
    const emprole= [
        {id:1,empoly:"manager"},
        {id:2,empoly:"HR"},
        {id:3,empoly:"HD"}
    ];
    return <>
    <ul>
    {emprole.map((role)=><Employess key={role.id} empoly={role.empoly}/>)}
    </ul>
   </> 
  }
  function Grocery(){
    const items = [
        {id:1,name:"bread"},
        {id:2,name:"Cheese"},
        {id:3,name:"Milk"}
    ]
    return<>
    <h2>My grocery list</h2>
    {items.map((item)=><li>{item.name}</li>)}
    </>
  }
  export {Company,Grocery}
export default Garage