import logo from './logo.svg';
import './App.css';
import Car from './components/component';
import Football from './components/reactEvent';
import { Planes } from './components/component';
import {House,Cassava,Platain} from './components/component';

function App() {
  const shirtcolor = "green"
  const carinfo = {name:"ford", medel:"mustang"}
  return (
    <div className="App">
      <h1>Hello react</h1>
  <Car brand={ carinfo }/>
<Planes color={shirtcolor}/>
<Football />
<House color="pruple"/>
<Cassava  years="years"/>
<Platain/>
    </div>
  );
}
export  default App
