
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Auth from './Auth.js';
import ToDos from './Todos.js';
class Profile extends Component {}
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
        {this.state.token && (
          <NavLink to='/todos'>To Do List</NavLink>
          )} {!this.state.token && (
            <>
          <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        </>
          )}
      </header>
      <section className='main'></section>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users/:' component={Profile}/>
        <Route path='/signin'
          render={(routerProps) => (
            <Auth setToken={this.setToken}
             type='signin'
             {...routerProps}
             />
          )}/>
      
      <Route path='/signup'
          render={(routerProps) => (
            <Auth setToken={this.setToken}
             type='signup'
             {...routerProps}
             />
          )}/>
          <Route path='/todos' render={(routerProps) => this.state.token ? 
          (<ToDos token={this.state.token} {...routerProps}/>) : (<Redirect to='/signin'/>)}/>
      </Switch>
      </BrowserRouter>
     );
  }
}
 
export default App;