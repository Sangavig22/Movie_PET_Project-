import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';

const Dashboard = () => {

  const currency = import.meta.env.VITE_CURRENCY
  const [dashboardData, setDashboardData] = useState({
    totalBooking: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser:0
  });
  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    { title: "Total Bookings", value: dashboardData.totalBooking || "0", icon: ChartLineIcon },
    { title: "Total Revenue", value: dashboardData.totalRevenue || "0", icon: CircleDollarSignIcon },
    { title: "Active Shows", value: dashboardData.activeShows.length || "0", icon: PlayCircleIcon },
    { title: "Total Users", value: dashboardData.totalUser || "0", icon: UsersIcon }

  ]

  const fetchDashboardData = async ()=> {
    setDashboardData(dummyDashboardData)
    setLoading(false)
  };

  useEffect(()=> {
    fetchDashboardData();
  }, []);  

  return !loading ? (
    <>
      {dashboardCards.map((card, index) => (
        <div key={index} className='bg-white p-4 rounded-lg shadow-md'>
          <div className='flex items-center'>
            <card.icon className='h-6 w-6 text-primary mr-2' />
            <h2 className='font-medium'>{card.title}</h2>
          </div>
          <p className='text-2xl font-bold'>{currency}{card.value}</p>
        </div>
      ))}
    </>
  ) : <Loading />
}

export default Dashboard
