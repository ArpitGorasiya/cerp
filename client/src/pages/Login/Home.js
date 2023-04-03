import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className="back">
      <div className="h-screen w-screen backdrop-blur-md flex justify-center" >
        <div className="flex flex-col items-center space-y-32">
          <h1 className="text-3xl font-semibold bg-black text-white w-10 text-center py-4 rounded-2">
            Sutex Institute of Technology
          </h1>
          <div className="home-container">
            <div className="products">

              <div className="product bg-light">
                <h3 className='tex'>ADMIN</h3>
                <img src='https://secure.webtoolhub.com/static/resources/icons/set108/b5cdab07.png' alt='' />
                <button><Link to="/adminlogin" className='text-white'>Login</Link></button>
              </div>
              <div className="product bg-light">
                <h3 className='tex'>FACULTY</h3>
                <img src='https://secure.webtoolhub.com/static/resources/icons/set98/c0d49403.png' alt='' />
                <button><Link to="/facultylogin" className='text-white'>Login</Link></button>

              </div>
              <div className="product bg-light">
                <h3 className='tex'>STUDENT</h3>
                <img src='https://cdn-icons-png.flaticon.com/512/5850/5850276.png' alt='' />
                <button><Link to="/studentlogin" className='text-white'>Login</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
