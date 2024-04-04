import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('HTML5 validation attributes are applied', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('required', '');

    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();

    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('required', '');
  });

  test('JavaScript validation functions work correctly', () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText('Choose date');
    const timeSelect = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });

    // Test valid form submission
    fireEvent.change(dateInput, { target: { value: '2024-04-03' } });
    fireEvent.change(timeSelect, { target: { value: '12:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.click(submitButton);
    // Add assertions to check if the form is submitted successfully

    // Test invalid form submission
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.change(timeSelect, { target: { value: '' } });
    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.change(occasionSelect, { target: { value: '' } });
    fireEvent.click(submitButton);
    // Add assertions to check if the form is not submitted due to validation errors
  });
});