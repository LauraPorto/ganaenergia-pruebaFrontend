import './App.css';
import './css/main.css';
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
          <Route path='/' exact component={Login}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/store' exact component={Store}/>
        </Switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
