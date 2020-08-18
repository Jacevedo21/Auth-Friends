import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import Info from './Info'
import Add from './Add'

export default function Members() {
  const [friends, setFriends] = useState([])
  const [input, setInput] = useState({})

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends', JSON.stringify(localStorage.getItem('token')))
      .then(res => {
        setFriends(res.data)
      })

  }, [])

  const handleDelete = (e) => {
    axiosWithAuth().delete(`http://localhost:5000/api/friends/${e.target.id}`, e.target.id).then(res => setFriends(res.data))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    axiosWithAuth().put(`http://localhost:5000/api/friends/${input.id}`, input)
      .then(res => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err))

  }

  const handleChange = e => {
    setInput({ ...input, id: Date.now(), [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="friendContainer">
        <Add handleSubmit={handleSubmit} handleChange={handleChange} />
        {friends.map(friend => {
          return (
            <Info friend={friend} handleDelete={handleDelete} />
          )
        })}
      </div >
    </>
  )
}