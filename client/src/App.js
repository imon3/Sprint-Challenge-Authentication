import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import SignIn from './component/signin/SignIn';
import SignUp from './component/signup/SignUp';
import JokesContainer from './component/jokes/JokesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <NavLink to='/sign-in'>Sign In</NavLink>
            <NavLink to='/jokes'>Jokes</NavLink>
          </nav>
        </header>

        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='jokes' component={JokesContainer} />
      </div>
    );
  }
}

export default App;
