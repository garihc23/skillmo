import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from 'react-icons/fi';
import { FaFire, FaCaretRight, FaHome } from 'react-icons/fa';
import firstPic from '../assets/images/Rectangle 103045.png';
import headerPic from '../assets/images/Rectangle 103044.png';
import image from '../assets/images/medium-shot-engineer-architect-looking-camera 1.png';
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from '../assets/customcss/CustomCss';
import '../assets/css/CourseDetails.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
const CourseDetails = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const location = useLocation();
  const { coursesData } = location?.state;
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  console.log('database', coursesData);
  return (
    <div /* style={{ marginTop: '50px' }} */>
      <Navbar></Navbar>
      <div
        className="py-4"
        style={{ backgroundColor: 'rgba(241, 243, 249, 1)' }}
      >
        <div className="container">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <p
                className="d-flex justify-content-between"
                style={{
                  color: 'gray',
                  letterSpacing: '2px',
                  fontSize: '12px',
                  fontWeight: 600,
                }}
              >
                <span>
                  <FaHome />
                  &nbsp;&nbsp;Home / {
                    coursesData.course_category.lang_en
                  } / {coursesData.title_en}
                </span>
                <span>Course Code: {coursesData.id}</span>
              </p>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <div /* className="d-flex " */>
                    <span className="category-tag">
                      {coursesData.course_category.lang_en}
                    </span>
                    <span className="category-tag">
                      {coursesData.trades_category.lang_en}
                    </span>
                    <span className="category-tag">
                      {coursesData.trades_sub_category.lang_en}
                      ...
                      <FiInfo />
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span /* className="me-2" */>
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 15 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 9.75V6.75M13.75 4.5L12.25 3M5.5 1.5H8.5M7 15.75C5.4087 15.75 3.88258 15.1179 2.75736 13.9926C1.63214 12.8674 1 11.3413 1 9.75C1 8.1587 1.63214 6.63258 2.75736 5.50736C3.88258 4.38214 5.4087 3.75 7 3.75C8.5913 3.75 10.1174 4.38214 11.2426 5.50736C12.3679 6.63258 13 8.1587 13 9.75C13 11.3413 12.3679 12.8674 11.2426 13.9926C10.1174 15.1179 8.5913 15.75 7 15.75Z"
                            stroke="#09B970"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      &nbsp;&nbsp; New Start at:&nbsp;&nbsp;&nbsp;&nbsp;
                      <strong>{coursesData.courseStartsAt}</strong>
                    </div>
                  </div>
                  <div>
                    <h3 className="fw-bold mt-4 mb-4">
                      {coursesData.title_en}
                    </h3>
                    <p>{coursesData.short_desc_en}</p>
                  </div>
                  <div>
                    <button
                      className="btn m-1 px-3 py-2 reg-course-btn"
                      type="submit"
                      style={{
                        background: 'rgba(4, 201, 119, 1)',
                        fontSize: '14px',
                        color: '#fafafa',
                      }}
                    >
                      REGISTER TO THE COURSE
                    </button>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <img
                    src={headerPic}
                    alt="Photo"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        <h6
          style={{
            color: '#39128C',
            fontFamily: 'Metropolis,sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '7px',
          }}
        >
          Overview
        </h6>
        <div>
          <h3 className="fw-bold mt-4 mb-4">About the course</h3>
        </div>
        <div>
          <p>
            {coursesData.about_course_en}
            <strong style={{ color: 'green' }}>link at the text.</strong>
          </p>
        </div>
        <div>
          <h5 className="fw-bold mt-4 mb-4">Listing of bullet points:</h5>
          <div>
            <ul>
              <li className="green-bullet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{' '}
              </li>
              <li className="green-bullet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{' '}
              </li>
              <li className="green-bullet">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt{' '}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="fw-bold">Accreditation</h5>
          <p>{coursesData.accredition}</p>
          <img src={firstPic} alt="pic" />
        </div>

        <div className="mt-5">
          <h3 className="fw-bold mt-4 mb-4">Available dates</h3>
          <div className="d-flex">
            <p className="my-1 mx-3">Choose By Period:</p>
            <div className="date-range-picker">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="date-picker"
              />
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
                className="date-picker"
              />
            </div>
          </div>

          <div className="container my-4">
            <table className="table">
              <thead>
                <tr style={{ backgroundColor: 'black' }}>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Location</th>
                  <th scope="col">Book Now</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="fw-bold mt-4 mb-4">Company</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h6 className="mt-4 fw-bold" style={{ color: 'green' }}>
            MORE DETAILS <FaCaretRight />
          </h6>
        </div>
      </div>

      <Row
        className="wrapper mt-5 row get-advice-banner"
        style={{ display: 'flex' }}
      >
        <Col
          className="get-advice-banner-text"
          xs={12}
          md={12}
          lg={7}
          style={{ padding: '6%' }}
        >
          <h4 style={{ color: '#fafafa' }}>
            Need a consultation? Speak with an education advisor.
          </h4>
          <p style={{ color: '#fafafa' }}>
            Our education advisors are here to answer your questions.
          </p>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            className="button get-advice-banner-btn"
            style={{
              backgroundColor: '#10D382',
              color: '#fafafa',
              fontWeight: 700,
              fontSize: '16px',
              padding: '15px 25px',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            GET THE ADVICE
          </button>
        </Col>
      </Row>

      <div className="container">
        <div className="mt-5 mb-5">
          <h6
            style={{
              color: '#39128C',
              fontFamily: 'Metropolis,sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '7px',
            }}
          >
            Relevant courses
          </h6>
          <h3 className="fw-bold mt-3">You may also be interested in</h3>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <Card>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray' }}
                />
                <div>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="danger"
                    style={subNewTag}
                  >
                    <FaFire className="me-1" />
                    {'  '}
                    New
                  </p>
                  <p
                    className="position-absolute top-0 m-3 px-2 py-1"
                    variant="success"
                    style={subCertifiedTag}
                  >
                    <FiCheckCircle className="me-1" />
                    {'  '} Certified
                  </p>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="warning"
                    style={subTopRatedTag}
                  >
                    <FiStar className="me-1" />
                    {'  '}
                    Top Rated
                  </p>
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4"
                    variant="danger"
                    style={titleTag}
                  >
                    facebook{' '}
                  </h5>
                </div>
              </div>
              <Card.Body>
                <div className="d-flex">
                  <span style={categoryTag}>Category Name</span>
                  <span style={categoryTag}>Category Name</span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    Explore our more popular courses...
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiClock style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4 className="fw-bold mt-4 mb-4" style={{ color: 'green' }}>
                    $60
                  </h4>
                  <span className="ms-3">× 3 Payments</span>
                  <span className="ms-2">
                    <FiInfo />
                  </span>
                </div>
                <Row>
                  <Col>
                    <Button
                      className="w-100 fw-bold add-cart"
                      variant="success"
                    >
                      <FiShoppingCart className="me-1" />
                      CART
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="w-100"
                      variant="info"
                      style={{
                        background: '#fff',
                        padding: '10px 12px',
                        fontWeight: '700',
                        fontSize: '14px',
                        borderColor: '#f1f1fe',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    >
                      <FiInfo className="me-1" />
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray' }}
                />
                <div>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="danger"
                    style={subNewTag}
                  >
                    <FaFire className="me-1" />
                    {'  '}
                    New
                  </p>
                  <p
                    className="position-absolute top-0 m-3 px-2 py-1"
                    variant="success"
                    style={subCertifiedTag}
                  >
                    <FiCheckCircle className="me-1" />
                    {'  '} Certified
                  </p>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="warning"
                    style={subTopRatedTag}
                  >
                    <FiStar className="me-1" />
                    {'  '}
                    Top Rated
                  </p>
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4"
                    variant="danger"
                    style={titleTag}
                  >
                    facebook{' '}
                  </h5>
                </div>
              </div>
              <Card.Body>
                <div className="d-flex">
                  <span style={categoryTag}>Category Name</span>
                  <span style={categoryTag}>Category Name</span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    Explore our more popular courses...
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiClock style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4 className="fw-bold mt-4 mb-4" style={{ color: 'green' }}>
                    $60
                  </h4>
                  <span className="ms-3">× 3 Payments</span>
                  <span className="ms-2">
                    <FiInfo />
                  </span>
                </div>
                <Row>
                  <Col>
                    <Button className="w-100 add-cart" variant="success">
                      <FiShoppingCart className="me-1" />
                      Cart
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="w-100"
                      variant="info"
                      style={{
                        background: '#fff',
                        padding: '10px 12px',
                        fontWeight: '700',
                        fontSize: '14px',
                        borderColor: '#f1f1fe',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    >
                      <FiInfo className="me-1" />
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray' }}
                />
                <div>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="danger"
                    style={subNewTag}
                  >
                    <FaFire className="me-1" />
                    {'  '}
                    New
                  </p>
                  <p
                    className="position-absolute top-0 m-3 px-2 py-1"
                    variant="success"
                    style={subCertifiedTag}
                  >
                    <FiCheckCircle className="me-1" />
                    {'  '} Certified
                  </p>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="warning"
                    style={subTopRatedTag}
                  >
                    <FiStar className="me-1" />
                    {'  '}
                    Top Rated
                  </p>
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4"
                    variant="danger"
                    style={titleTag}
                  >
                    facebook{' '}
                  </h5>
                </div>
              </div>
              <Card.Body>
                <div className="d-flex">
                  <span style={categoryTag}>Category Name</span>
                  <span style={categoryTag}>Category Name</span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    Explore our more popular courses...
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiClock style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4 className="fw-bold mt-4 mb-4" style={{ color: 'green' }}>
                    $60
                  </h4>
                  <span className="ms-3">× 3 Payments</span>
                  <span className="ms-2">
                    <FiInfo />
                  </span>
                </div>
                <Row>
                  <Col>
                    <Button className="w-100 add-cart" variant="success">
                      <FiShoppingCart className="me-1" />
                      Cart
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="w-100"
                      variant="info"
                      style={{
                        background: '#fff',
                        padding: '10px 12px',
                        fontWeight: '700',
                        fontSize: '14px',
                        borderColor: '#f1f1fe',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    >
                      <FiInfo className="me-1" />
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray' }}
                />
                <div>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="danger"
                    style={subNewTag}
                  >
                    <FaFire className="me-1" />
                    {'  '}
                    New
                  </p>
                  <p
                    className="position-absolute top-0 m-3 px-2 py-1"
                    variant="success"
                    style={subCertifiedTag}
                  >
                    <FiCheckCircle className="me-1" />
                    {'  '} Certified
                  </p>
                  <p
                    className="position-absolute top-0 my-3 px-2 py-1"
                    variant="warning"
                    style={subTopRatedTag}
                  >
                    <FiStar className="me-1" />
                    {'  '}
                    Top Rated
                  </p>
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4"
                    variant="danger"
                    style={titleTag}
                  >
                    facebook{' '}
                  </h5>
                </div>
              </div>
              <Card.Body>
                <div className="d-flex">
                  <span style={categoryTag}>Category Name</span>
                  <span style={categoryTag}>Category Name</span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    Explore our more popular courses...
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiClock style={{ color: 'green' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>20 Feb 2023</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4 className="fw-bold mt-4 mb-4" style={{ color: 'green' }}>
                    $60
                  </h4>
                  <span className="ms-3">× 3 Payments</span>
                  <span className="ms-2">
                    <FiInfo />
                  </span>
                </div>
                <Row>
                  <Col>
                    <Button className="w-100 add-cart" variant="success">
                      <FiShoppingCart className="me-1" />
                      Cart
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="w-100"
                      variant="info"
                      style={{
                        background: '#fff',
                        padding: '10px 12px',
                        fontWeight: '700',
                        fontSize: '14px',
                        borderColor: '#f1f1fe',
                        shadowColor: '#000',
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    >
                      <FiInfo className="me-1" />
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
