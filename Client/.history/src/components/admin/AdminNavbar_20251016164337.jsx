import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-10 h-16 border'>
      <Link to={"/"}>
      <img src={assets.logo} alt="logo" />
      </Link>
    </div>
  )
}

export default AdminNavbar
