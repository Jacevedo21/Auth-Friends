import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function Homepage() {
  const [newUser, setNewUser] = useState({ name: '', user: '', password: '' })

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('submitted');
    axiosWithAuth().post('http://localhost:5000/api/signup', newUser)
  }

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="homePage">
      <h1>Address Book</h1>
      <Link to="/login">Sign In</Link>
    </div>
  )
}