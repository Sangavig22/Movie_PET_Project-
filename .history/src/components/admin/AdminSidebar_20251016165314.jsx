import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, ListIcon, PlusSquareIcon } from 'lucide-react'

const AdminSidebar = () => {

    const user ={
        name: "Admin",
        lastName: "User",
        imageUrl: assets.profile,
    }

    const adminNavlinks =[
        { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
        { name: "Add Shows", path: "/admin/add-shows", icon: PlusSquareIcon },
        { name: "List Shows", path: "/admin/list-shows", icon: ListIcon },
        { name: "List Bookings", path: "/admin/list-bookings", icon: ListColl },
    ]

  return (
    <div>
      
    </div>
  )
}

export default AdminSidebar
