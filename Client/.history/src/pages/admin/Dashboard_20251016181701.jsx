import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from './Title';

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
      <Title text1="Admin" text2="Dashboard" />

      <div className="relative flex flex-wrap gap-4 mt-6"></div>
    </>
  ) : <Loading />
}

export default Dashboard
