import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <div>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/course-list" component={CourseList} />
            <Route path="/course-list-card" component={CourseListCard} />
            <Route path="/course-details" component={CourseDetails} />
            <Route path="/payment" component={Payment} />
          </div>
          <div>
            <Route path="/login" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/password-reset" component={PasswordReset} />
            <Route path="/change-password" component={ChangePassword} />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
