import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from '../Home'
import Users from '../PrivateRoute/Users'
import Login from '../Login'
// import axiosWithAuth from '../../utils/axiosWithAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={props => {
      return localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }}
  />
}

export const Nav = (props) => {
  const [loggedState, setLoggedState] = useState(false || JSON.parse(localStorage.getItem('loggedState')))
  const logOut = () => {
    console.log("log out");
    localStorage.removeItem('token')
    localStorage.setItem('loggedState', false)
  }
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to={loggedState ? "/members" : "/"}>The Homies</Link>
          </li>
          <li>
            {loggedState ? <a onClick={() => logOut()} href="/">Sign Out</a> : <Link to="/members">Sign In</Link>}
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={(props)=> <Login setLoggedState={setLoggedState} {...props}/>} />
        <PrivateRoute path="/members" component={Users} />
      </Switch>
    </div>
  )
}