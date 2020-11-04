import './App.css';
import  {Component} from 'react';
import Navigationbar from './components/layout/Navbar';
//import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
        <Navigationbar />
       
  
      <div className="container">
         <Route exact path="/register" component={ Register } />
         <Route exact path="/login" component={ Login } />
       </div>
      
      </div>
      </Router>
      
    );
  }
  }


export default App;
