import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import Navbar from './components/Navbar';
import CourseList from './pages/CourseList';
import Footer from './components/Footer';
import Payment from './pages/Payment';
import CourseListCard from './components/courselist/CourseListCard';
import Register from './auth/Register';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import PasswordReset from './auth/PasswordReset';
import ChangePassword from './auth/ChangePassword';
import { useUserStore } from './store';

function App() {
  const [userData, setUserData] = useState('');
  const currentPath = window.location.pathname;
  const { users, fetchUsers } = useUserStore();
  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    const parsedUserData = JSON.parse(storedUserData);
    setUserData(parsedUserData);
    fetchUsers();
  }, []);

  console.log('use', userData);

  return (
    <>
      <Router>
        {/* Use Routes instead of Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course-list-card" element={<CourseListCard />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
