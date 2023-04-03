import React from 'react'
import './not.css'

const Notfound = () => {
  return (
    <div className='not'>
      <h2>404</h2>
      <p>Page Not Found</p>
      <a className="btn btn-secondary" href='/'>Go Back</a>
    </div>
  )
}

export default Notfound
