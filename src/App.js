
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Auth from './Auth.js';
import ToDos from './Tdods.js';

class Home extends Component {
  state = {  }
  render() { 
    return ( <h1>Home Page</h1> );
  }
}
 
class App extends Component {
  state = { token: localStorage.getItem('TOKEN') };
  setToken = (val) => {
    this.setState({token: val });
  };
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
        <Route path='/signin'
          render={(...routerProps) => (
            <Auth setToken={this.setToken}
             type='signin'/>
          )}/>
      
      <Route path='/signup'
          render={(...routerProps) => (
            <Auth setToken={this.setToken}
             type='signup'/>
          )}/>
          <Route path='/todos' render={(routerProps) => this.state.token ? 
          (<ToDos {...routerProps}/>) : (<Redirect to='/signin'/>)}/>
      </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;