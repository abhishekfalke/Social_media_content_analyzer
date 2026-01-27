import React from 'react'
import { useNavigate } from 'react-router'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='not-found'>
      <h1>404 | Page not found!</h1>
      <button onClick={() => navigate('/')}>Go to home page</button>
    </div>
  )
}

export default NotFound