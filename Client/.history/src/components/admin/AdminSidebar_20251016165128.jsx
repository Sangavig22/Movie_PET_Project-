import React from 'react'
import { assets } from '../../assets/assets'

const AdminSidebar = () => {

    const user ={
        name: "Admin",
        lastName: "User",
        imageUrl: assets.profile,
    }

    const adminNavlinks =[
        { name: "Dashboard", path: "/admin" },
        { name: "Add Shows", path: "/admin/add-shows" },
        { name: "List Shows", path: "/admin/list-shows" },
        { name: "List Bookings", path: "/admin/list-bookings" },
    ]

  return (
    <div>
      
    </div>
  )
}

export default AdminSidebar
