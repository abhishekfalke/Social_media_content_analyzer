import React from 'react'
import { useRouteError } from 'react-router'
import { useNavigate } from 'react-router'

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className='d-flex align-items-center justify-content-center flex-column' style={{height: '90vh'}}>
      <div className='alert alert-danger text-center w-75'>
        {error.message}
      </div>
      <button className='btn btn-outline-dark' onClick={() => navigate('/')}>Go to home page</button>
    </div>
  )
}

export default Error