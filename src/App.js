import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

class App extends Component{
  render() {
    return (
      <div className="App">
          <Router>
             <Switch>
               <Route exact path="/" component={home}></Route>
               <Route exact path="/login" component={login}></Route>
               <Route exact path="/signup" component={signup}></Route>
             </Switch>
          </Router>
      </div>
    ); 
  }
}

export default App;
