import './App.css';
import "./global.css"
import Homepage from './pages/Homepage';
import Booking from './pages/Booking';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Booking" element={<Booking />} />
  </Routes>
    </>

  );
}

export default App;
