import React, { useState } from 'react';
import Header from '../components/home/Header';
import Category from '../components/home/Category';
import Courses from '../components/home/Courses';
import Platform from '../components/home/Platform';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { GlobalStyle } from '../assets/customcss/CustomCss';
import firstImg from '../assets/images/students-walk-downstairsdd-with-books-library 1 1.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WhyUs from '../components/home/WhyUs';
import AboutUsStrip from '../components/home/AboutUsStrip';
import Register from '../components/home/Register';
import '../assets/css/home/Home.css';
const Home = () => {
  // const handleShowMore = () => {
  //   setShowMore(true);
  // };

  return (
    <>
      <GlobalStyle />
      <div>
        <Navbar></Navbar>
        <div>
          <Header></Header>
          <Category></Category>
          <div
            style={{ background: 'rgba(246, 245, 251, 1)', marginTop: '80px' }}
          >
            <WhyUs></WhyUs>
            <Courses></Courses>
          </div>
          <AboutUsStrip></AboutUsStrip>
          <Platform></Platform>
          <Testimonials></Testimonials>
          <Register></Register>
        </div>
        {/* <AboutUsStrip></AboutUsStrip>
        <Platform></Platform>
        <Testimonials></Testimonials>
        <Register></Register> */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
