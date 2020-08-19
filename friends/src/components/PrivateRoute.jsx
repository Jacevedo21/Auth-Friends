import React, { useState, useEffect } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Users from '../NewUsers/Users'
import Login from './Login'
// import axiosWithAuth from '../utils/axiosWithAuth'


const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route
    {...rest}
    render={(props) => {
      if(localStorage.getItem("token")) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/login" />
      }
    }}
  />
}
export default PrivateRoute
