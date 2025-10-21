import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div>
      <Link to={"/"}>
      <img src={assets.logo} alt="" />
      </Link>
    </div>
  )
}

export default AdminNavbar
