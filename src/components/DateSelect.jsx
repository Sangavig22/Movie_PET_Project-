import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';
import BlurCircle from './BlurCircle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { dummyShowsData } from '../assets/assets'; // 🧩 to get movie details for booking

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const onBookHandler = () => {
    if (!selected) {
      return toast.error('Please select a date');
    }

    // 🧠 Find the movie info from dummy data
    const selectedShow = dummyShowsData.find((show) => show._id === id);
    if (!selectedShow) {
      return toast.error('Movie not found!');
    }

    // 🧾 Create a booking object
    const newBooking = {
      show: {
        movie: selectedShow,
        showDateTime: selected,
      },
      bookedSeats: ['A1', 'A2'], // dummy seats (you can modify later)
      amount: 400,
      isPaid: false,
    };

    // 💾 Save to localStorage
    const existingBookings = JSON.parse(localStorage.getItem('myBookings')) || [];
    const updatedBookings = [...existingBookings, newBooking];
    localStorage.setItem('myBookings', JSON.stringify(updatedBookings));

    
    navigate(`/movies/${id}/${selected}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-30">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 bg-primary/10 border border-primary/20 rounded-lg">
        <BlurCircle top="-100px" left="-100px" />
        <BlurCircle top="100px" right="0px" />

        <div>
          <p className="text-lg font-semibold">Choose Date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} />
            <span className="grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4">
              {Object.keys(dateTime).map((date) => (
                <button
                  onClick={() => setSelected(date)}
                  key={date}
                  className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer ${
                    selected === date
                      ? 'bg-primary text-white'
                      : 'bg-white border border-primary/70'
                  }`}
                >
                  <span>{new Date(date).getDate()}</span>
                  <span>{new Date(date).toLocaleDateString('en-US', { month: 'short' })}</span>
                </button>
              ))}
            </span>
            <ChevronRightIcon width={28} />
          </div>
        </div>

        <button
          onClick={onBookHandler}
          className="bg-primary text-white px-8 py-2 mt-6 rounded hover:bg-primary/90 transition-all cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
