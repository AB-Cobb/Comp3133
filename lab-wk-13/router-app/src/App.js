import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";

import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error' 
import Student from './components/Student'
import Redirect from './components/Redirect'

import customHist from "./components/History"

const NewRoute = () =>{
  return (
    <div>
      <h1>New Route</h1>
      <p> Hello from new route</p>
    </div>
  )
}
const Home = () =>{
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter history ={customHist}>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newroute">New</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/student/Andrew/12345">Student</Link>
          </li>
          <li>
            <Link to="/redirect">Redirect</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/newroute" component={NewRoute}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/student/:stuname/:stuid?" component={Student}/>
          <Route path="/redirect" component={Redirect}/>
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
