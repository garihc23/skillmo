<<<<<<< HEAD
import React, { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import image from "../../assets/images/students-walk-downstairsdd-with-books-library 1 1.png";
=======
import React, { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import image from '../../assets/images/students-walk-downstairsdd-with-books-library 1 1.png';
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from "react-icons/fi";
import { FaFire, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
<<<<<<< HEAD
} from "../../assets/customcss/CustomCss";
import { Link } from "react-router-dom";
import "../../assets/css/home/Platform.css";
import { useHistory } from "react-router-dom";
import { useCourseStore } from "../../store";
=======
} from '../../assets/customcss/CustomCss';
import { Link } from 'react-router-dom';
import '../../assets/css/home/Platform.css';
import { useNavigate } from 'react-router-dom';
import { useCourseStore } from '../../store';
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
const platform = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
<<<<<<< HEAD
    history.push("/course-list");
=======
    navigate('/course-list');
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
    window.location.reload();
  };

  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    async function fetchData() {
      await fetchCourses();
    }
    fetchData();
  }, []);
<<<<<<< HEAD
  console.log("HomeCourse", courses);
=======
  console.log('HomeCourse', courses);
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e

  return (
    <div className="container " style={{ paddingTop: "50px" }}>
      <h6
        style={{
          color: "#39128C",
          fontFamily: "Metropolis, sans-serif",
          fontSize: "16px",
          lineHeight: "28px",
          fontWeight: 600,
          letterSpacing: "4px",
        }}
      >
        New on the platform
      </h6>
      <div>
        <h3 className="fw-bold mt-4 mb-4" style={{ width: "60%" }}>
          Choose from more then 100 000 online courses about construction from
          well-known industry leaders
        </h3>
      </div>
      <div className="row my-4">
<<<<<<< HEAD
      {courses.map((course, index) => (
        <div className="col-md-3">
          
=======
        {courses.map((course, index) => (
          <div className="col-md-3">
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
            <Card key={index}>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
<<<<<<< HEAD
                  style={{ backgroundColor: "gray" }}
=======
                  style={{ backgroundColor: 'gray' }}
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                />
                <div>
                  <p
                    className="position-absolute top-0  my-3 px-2 py-1"
                    variant="danger"
                    style={subNewTag}
                  >
                    <FaFire className="me-1" />
<<<<<<< HEAD
                    {"  "}
=======
                    {'  '}
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                    New
                  </p>
                  <p
                    className="position-absolute top-0  m-3 px-2 py-1"
                    variant="success"
                    style={subCertifiedTag}
                  >
                    <FiCheckCircle className="me-1" />
<<<<<<< HEAD
                    {"  "} Certified
=======
                    {'  '} Certified
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                  </p>
                  <p
                    className="position-absolute top-0  my-3 px-2 py-1"
                    variant="warning"
                    style={subTopRatedTag}
                  >
                    <FiStar className="me-1" />
<<<<<<< HEAD
                    {"  "}
=======
                    {'  '}
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                    Top Rated
                  </p>
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4 title-tag"
                    variant="danger"
                    style={titleTag}
                  >
<<<<<<< HEAD
                    facebook{" "}
=======
                    facebook{' '}
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                  </h5>
                </div>
              </div>
              <Card.Body>
                <div className=" d-flex ">
                  <span style={categoryTag}>
                    {course.course_category.lang_en}
                  </span>
                  <span style={categoryTag}>
                    {course.trades_category.lang_en}
                  </span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    {/* Explore our more popular courses... */}
                    {course.keyword}
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
<<<<<<< HEAD
                      <FiCalendar style={{ color: "#09B970" }} />
                    </span>
                    <span style={{ fontSize: "14px" }}>Starting:</span>
=======
                      <FiCalendar style={{ color: '#09B970' }} />
                    </span>
                    <span style={{ fontSize: '14px' }}>Starting:</span>
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.courseStartsAt}</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
<<<<<<< HEAD
                      <FiClock style={{ color: "#09B970" }} />
                    </span>
                    <span style={{ fontSize: "14px" }}>Schedule:</span>
=======
                      <FiClock style={{ color: '#09B970' }} />
                    </span>
                    <span style={{ fontSize: '14px' }}>Schedule:</span>
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.schedule}</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4
                    className="fw-bold mt-4 mb-4"
<<<<<<< HEAD
                    style={{ color: "#09B970" }}
=======
                    style={{ color: '#09B970' }}
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                  >
                    ${course.total_price}
                  </h4>
                  <span className="ms-3 text-secondary">
                    × {course.payment_options} Payments
                  </span>
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
<<<<<<< HEAD
                        background: "#fff",
                        padding: "10px 12px",
                        fontWeight: "700",
                        fontSize: "14px",
                        borderColor: "#f1f1fe",
                        shadowColor: "#000",
=======
                        background: '#fff',
                        padding: '10px 12px',
                        fontWeight: '700',
                        fontSize: '14px',
                        borderColor: '#f1f1fe',
                        shadowColor: '#000',
>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                      }}
                    >
                      {/* <FiInfo className="me-1" /> */}
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
<<<<<<< HEAD
          
        </div>
        ))}
      </div>

      
      
=======
          </div>
        ))}
      </div>

>>>>>>> 079843eb0bb0d91b939ec5762547c4ec27834a0e
      <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
        <button
          className="btn "
          style={{
            border: "1px solid green",
            borderColor: "#04C977",
            borderRadius: "10px",
            backgroundColor: "transparent",
            padding: "12px 20px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          onClick={handleButtonClick}
        >
          SHOW ALL COURSES
        </button>
      </div>
      {/* Repeat the above code for the remaining cards */}
      {/* <div className='row'> */}
      <div className="dark_strip2 d-flex p-5 mt-5 row">
        <div className="new-info col-md-4 text-center text-sm-start">
          <h4 className="content">
            Do Tou Want To Get More Info<br></br>About New Constructing Courses?
          </h4>
          <p className="demo_text">Subscribe to stay up to date with Skillmo</p>
        </div>
        <div class="text-info col-md-5">
          <input
            type="email"
            class="platform-form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="buttn mt-2  ">
          <button type="button" class="bttn btn-success">
            SUBSCRIBE
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default platform;
