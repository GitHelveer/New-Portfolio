import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';

jest.mock('./Components/BookingForm', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('BookingForm', () => {
  test('Renders the BookingForm heading', () => {
    BookingForm.defaultProps = {
      initializeTimes: () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    };

    render(<BookingForm />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
  });

  test('initializeTimes returns the expected initial available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
    const initialTimes = BookingForm.defaultProps.initializeTimes();
  
    expect(initialTimes).toEqual(expectedTimes);
  });
  
  test('updateTimes returns the same available times as the state', () => {
    const selectedDate = '2022-01-01';
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
    const updatedTimes = BookingForm.defaultProps.updateTimes([], selectedDate);
  
    expect(updatedTimes).toEqual(expectedTimes);
  });
});