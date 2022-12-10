import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navigation/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './componentes/paginas/Home';
import Historia from './componentes/paginas/Historia';
import Registro from './componentes/paginas/Registro';

function App() {
  return(
  <div className='App'>
      <Router>
        <Navbar/>
        <div className='color' id='centro'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/registro' component={Registro}/>
          <Route exact path='/historia' component={Historia}/>
        </Switch>
        </div>
      </Router>
      
    </div>
  )
}

export default App;

