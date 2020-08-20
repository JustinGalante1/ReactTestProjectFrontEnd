import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'


//Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';


const theme = createMuiTheme({
  palette: {
    primary:{
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff'
    },
    secondary: {
      light: '#51d1e1',
      main: '#26c6da',
      dark: '#1a8a98',
      contrastText: '#fff'
    },
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component{
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar></Navbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}></Route>
                <Route exact path="/login" component={login}></Route>
                <Route exact path="/signup" component={signup}></Route>
              </Switch>
            </div>
          </Router>
      </div>
      </MuiThemeProvider>
    ); 
  }
}

export default App;
