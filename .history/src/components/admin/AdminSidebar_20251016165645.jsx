import React from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'

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
        { name: "List Bookings", path: "/admin/list-bookings", icon: ListCollapseIcon },
    ]

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:w-60 border-r border-gray-300/30 text-sm'>
      <img src= {} alt="" />
    </div>
  )
}

export default AdminSidebar
