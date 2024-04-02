import React from 'react';
import "./Bookingform.css"
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

function BookingForm({ date, time, guests, occasion, availableTimes, onDateChange, onTimeChange, onGuestsChange, onOccasionChange }) {
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    onDateChange(e);
  };

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
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className='bookingformh2'>Booking Form</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

   
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={onTimeChange}>
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={onGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={onOccasionChange}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;