import logo from './logo.svg';
import './App.css';
import Car from './components/component';
import Football from './components/reactEvent';
import { Planes } from './components/component';
import {House,Cassava,Platain} from './components/component';
import {Football1,Football2} from './components/reactEvent';
import {Goal} from './components/react Condition';
import Traffic from './components/react Condition';
import {Ternary} from './components/react Condition';

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
<Football1 />
<Football2/>
<Goal isgoal={true}/>
<Traffic light={true} pedestrians={true}/>
<Ternary age={true} pass={true}/>
    </div>
  );
}
export  default App
