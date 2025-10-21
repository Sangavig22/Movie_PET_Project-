import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='flex items-center  '>
      <Link to={"/"}>
      <img src={assets.logo} alt="logo" />
      </Link>
    </div>
  )
}

export default AdminNavbar
