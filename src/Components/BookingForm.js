import React, { useState } from 'react';
import "./Bookingform.css"
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../api';

function BookingForm({ date, time, guests, occasion, availableTimes, onDateChange, onTimeChange, onGuestsChange, onOccasionChange }) {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(true);

  const handleDateChange = (e) => {
    onDateChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
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
    }
  };

  const validateForm = () => {
    const form = document.querySelector('.booking-form');
    setIsFormValid(form.checkValidity());
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} onChange={validateForm}>
      <h2 className='bookingformh2'>Booking Form</h2>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={onTimeChange} required>
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={onGuestsChange} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={onOccasionChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} />
    </form>
  );
}

export default BookingForm;