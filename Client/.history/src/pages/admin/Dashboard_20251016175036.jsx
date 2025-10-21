import React, { useState } from 'react'

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY
  const [dashboardData, setDashboardData] = useState({
    totalBooking: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser:0
  });
  const [loading, setLoading] = useState(true);

  const dashboardCa
  

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
