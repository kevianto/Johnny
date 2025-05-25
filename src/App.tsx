import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Drivers from './pages/Drivers';
import ContactUsers from './pages/ContactUsers';
import RoutesPage from './pages/Routes';
import Calendar from './pages/Calendar';
import Vehicles from './pages/Vehicles';
import Schedules from './pages/Schedules';
import AboutUs from './pages/AboutUs';
import AddDriver from './pages/AddDriver';
import AddVehicle from './pages/AddVehicle';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="drivers/add" element={<AddDriver />} />
          <Route path="contact-users" element={<ContactUsers />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="vehicles/add" element={<AddVehicle />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;