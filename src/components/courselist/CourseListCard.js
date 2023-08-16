import React, { useEffect, useState } from 'react';
import {
  Form,
  Row,
  Col,
  Dropdown,
  FormControl,
  Button,
  Container,
  Card,
} from 'react-bootstrap';
import image from '../../assets/images/students-walk-downstairsdd-with-books-library.png';
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from 'react-icons/fi';
import {
  FaFire,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaMapMarkerAlt,
  FaBullseye,
} from 'react-icons/fa';
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from '../../assets/customcss/CustomCss';
import { useHistory } from 'react-router-dom';
const CourseListCard = (props) => {
  const history = useHistory();
  const { data } = props;
  console.log('data', data);
  const detailsPage = (course) => {
    history.push({
      pathname: '/course-details',
      state: { coursesData: course }, // Pass courses data in the state object
    });
    window.location.reload();
  };
  const paymentPage = (course) => {
    history.push({
      pathname: '/payment',
      state: { paymentData: course }, // Pass courses data in the state object
    });
    window.location.reload();
  };
  return (
    <div>
      {data.map((course, index) => (
        <Card
          key={index}
          className="mt-4"
          style={{
            borderColor: 'white',
            marginBottom: '30px',
          }}
        >
          <Row className="g-0">
            <Col xs={12} md={4}>
              <div className="position-relative">
                <Card.Img
                  src={course.course_image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray', height: '35vh' }}
                />
                <div>
                  <p
                    className="position-absolute top-0 mx-2 my-3 px-2 py-1"
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
                    className="position-absolute p-3 mb-5"
                    variant="danger"
                    style={titleTag}
                  >
                    facebook{' '}
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Card.Body>
                <div className=" d-flex pb-3">
                  <span className="category-tag" style={categoryTag}>
                    Category Name
                  </span>
                  <span className="category-tag" style={categoryTag}>
                    Category Name
                  </span>
                  <span className="category-tag" style={categoryTag}>
                    Other...
                    <FiInfo />
                  </span>
                </div>
                <div>
                  <h4 className="fw-bold ">
                    Explore our more popular courses... Explore our more popular
                    courses...
                  </h4>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: '#09B970' }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.courseStartsAt}</strong>
                  </div>
                  <div className="mx-3">
                    <span className="me-2">
                      <FiClock style={{ color: '#09B970' }} />
                    </span>
                    Schedule:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.schedule}</strong>
                  </div>
                </div>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="d-flex align-items-center mt-4">
                      <h4
                        className="fw-bold "
                        style={{ color: '#09B970', fontSize: '30px' }}
                      >
                        ${course.total_price}
                      </h4>
                      <span className="ms-3">
                        × {course.payment_options} Payments
                      </span>
                      <span className="ms-2">
                        <FiInfo />
                      </span>
                    </div>
                  </Col>
                  <Col xs={12} md={6} className="text-end">
                    <div className="d-flex align-items-center justify-content-md-end mt-4">
                      <div className="me-2">
                        <Button
                          className="w-100 btn-lg "
                          variant="info"
                          style={{
                            background: '#fff',
                            fontSize: '16px',
                            fontWeight: 650,
                            padding: '12px 25px 12px 25px',
                            borderColor: '#1B17201A',
                            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                          }}
                          onClick={() => detailsPage(course)}
                        >
                          {/* <FiInfo className="me-2" /> */}
                          More Info
                        </Button>
                      </div>
                      <div>
                        <Button
                          className="w-100 btn-lg px-4"
                          variant="success"
                          style={{
                            background: 'rgba(4, 201, 119, 1)',
                            padding: '10px',
                            fontSize: '18px',
                          }}
                          onClick={() => paymentPage(course)}
                        >
                          <FiShoppingCart className="me-2" />
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
};

export default CourseListCard;
