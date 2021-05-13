import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Rutas
import Home from './views/Home/home';
import Login from './views/Login/login';
import Profile from './views/Profile/profile';
import Store from './views/Store/store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/store' exact component={Store}/>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
