import React, { Component } from 'react';
import { BrowserRouter, Route ,Redirect} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ToDo from './components/ToDo/ToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <section>
            <Route exact path="/" component={Home} />
            <Route exact path="/todo" component={ToDo} />
            <Redirect to="/"></Redirect>
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
