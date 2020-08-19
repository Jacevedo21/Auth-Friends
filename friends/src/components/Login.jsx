import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function Login(props) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const login = e => {
    e.preventDefault()
    axiosWithAuth().post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)
        props.history.push('/members')
      })
      props.setLoggedState(true)
    localStorage.setItem('loggedState', true)
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  }

  return (
    <div className="loginForm">
      <h3>Sign In</h3>
      <form onSubmit={e => login(e)}>
        <div className="inputContainer">
          <label htmlFor="password">Username</label>
          <input
            type="name"
            name="username"
            value={credentials.username}
            placeholder="Username"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Password"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="inputContainer button">
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>

  )
}