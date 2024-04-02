import './App.css';
import "./global.css"
import Homepage from './pages/Homepage';
import Bookingpage from './pages/Bookingpage';
import { Route, Routes } from 'react-router-dom';
import ConfirmedBooking from './Components/ConfirmedBooking';


function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Booking" element={<Bookingpage />} />
    <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
  </Routes>
    </>

  );
}

export default App;
