import React from 'react'
import './App.css'
import {Route,Routes,useLocation} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favourite from './pages/Favourite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Layout from './pages/admiLayout'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return(
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movie/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBooking/>}/>
      <Route path='/favourites' element={<Favourite/>}/>
      <Route path='/admin/*' element={<Layout />}>
         <Route index element={<Dashboard/>} />
         <Route path="add-shows" element={<AddShows/>} />
         <Route path="list-shows" element={<ListShows/>} />
         <Route path="list-bookings" element={<ListBooking/>} />
      </Route>
    </Routes>

     {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
