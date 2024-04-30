import React, { useState, useReducer, useEffect } from 'react';
import Booking from '../Components/Booking';
import BookingForm from '../Components/BookingForm';
import '../Components/Bookingpage.css';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

function updateTimes(date) {
  // Logic to update availableTimes based on the selected date
  // For now, returning the same available times regardless of the date
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

function initializeTimes() {
  // Initialize the availableTimes state
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

function availableTimesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return updateTimes(action.date);
    default:
      return state;
  }
}

function BookingPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [], initializeTimes);
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(parseInt(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  useEffect(() => {
    // Fetch available times when the date changes
    const fetchAvailableTimes = async () => {
      try {
        await fetchAPI(date);
        dispatch({ type: 'UPDATE_TIMES', date });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAvailableTimes();
  }, [date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };

    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate('/ConfirmedBooking'); // Navigate to the booking confirmed page
    } else {
      // Handle failed form submission
    }
  };

  return (
    <div className="booking-page">
      <BookingForm
        date={date}
        time={time}
        guests={guests}
        occasion={occasion}
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onGuestsChange={handleGuestsChange}
        onOccasionChange={handleOccasionChange}
        onSubmit={handleSubmit}
      />
      <Booking date={date} time={time} guests={guests} occasion={occasion} />
    </div>
  );
}

export default BookingPage;