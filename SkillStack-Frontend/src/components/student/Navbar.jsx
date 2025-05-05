import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src={assets.skillStackLogo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div>
            <button>Become Educator</button>
            | <Link to={'/my-enrollments'}>My Enrollments</Link>
          </div>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar
