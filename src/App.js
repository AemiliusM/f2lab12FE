
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Auth from './Auth.js';
class Home extends Component {
  state = {  }
  render() { 
    return ( <h1>Home Page</h1> );
  }
}
 
export default Home;

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <BrowserRouter>
      <header>
        <NavLink to='/' exact>
          Home
        </NavLink>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </header>
      <section className='main'></section>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signin'>
          <Auth type='signin'/>
        </Route>
        <Route path='/signup'>
          <Auth type='signup'/>
        </Route>
      </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;