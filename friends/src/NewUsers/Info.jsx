import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function Card(props) {
  const { friend } = props;


  return (
    <div className="friendCard">
      <h4>{friend.name}</h4>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <button id={friend.id} onClick={(e) => props.handleDelete(e)}>Remove</button>
    </div>
  )
}