import React from 'react';
import "./Booking.css"

function Booking({ date, time, guests, occasion }) {
  return (
    <>
      <div className="booking-container">
        <h2>Bookings</h2>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Number of guests: {guests}</p>
        <p>Occasion: {occasion}</p>
      </div>
    </>
  );
}

export default Booking;