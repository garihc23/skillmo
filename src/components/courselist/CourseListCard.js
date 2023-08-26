import React, { useEffect, useState } from "react";
import {
  Form,
  Row,
  Col,
  Dropdown,
  FormControl,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import image from "../../assets/images/students-walk-downstairsdd-with-books-library.png";
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from "react-icons/fi";
import {
  FaFire,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaMapMarkerAlt,
  FaBullseye,
} from "react-icons/fa";
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from "../../assets/customcss/CustomCss";
import './CourseListCard.css'
import { useNavigate } from "react-router-dom";

const CourseListCard = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  console.log("Listdata", data);

  // const detailsPage = (course) => {
  //   navigate({
  //     pathname: '/course-details',
  //     state: { coursesData: course }, // Pass courses data in the state object
  //   });
  //   // window.location.reload();
  // };

  // const paymentPage = (course) => {
  //   navigate({
  //     pathname: '/payment',
  //     state: { paymentData: course }, // Pass courses data in the state object
  //   });
  //   // window.location.reload();
  // };

  return (
    <div>
      {data?.map((course, index) => (
        <Card
          key={index}
          className="mt-4"
          style={{
            borderColor: "white",
            marginBottom: "30px",
          }}
        >
          <Row className="g-0 my-2">
            <Col xs={12} md={4}>
              <div className="position-relative card-image">
                <Card.Img
                  src={course.course_image}
                  alt="Card image"
                />
                <div className='px-2'>
                  {course.is_new && (
                    <p
                      className="position-absolute top-0 mx-2 my-3 px-2 py-1 subNewTag"
                      variant="danger"
                      /* style={subNewTag} */
                    >
                      <FaFire className="me-1" />
                      {"  "}
                      New
                    </p>
                  )}
                  {course.is_certified && (
                    <p
                      className="position-absolute top-0 my-3 mx-4 px-2 py-1 subCertifiedTag"
                      variant="success"
                      /* style={subCertifiedTag} */
                    >
                      <FiCheckCircle className="me-1" />
                      {"  "} Certified
                    </p>
                  )}
                  {course.is_top_rated && (
                    <p
                      className="position-absolute top-0 my-3 mx-1 px-2 py-1 subTopRatedTag"
                      variant="warning"
                      /* style={subTopRatedTag} */
                    >
                      <FiStar className="me-1" />
                      {"  "}
                      Top Rated
                    </p>
                  )}
                </div>
                <div>
                  <h5
                    className="position-absolute p-3 mb-5 title-tag"
                    variant="danger"
                    /* style={titleTag} */
                  >
                    {course.title_en}
                  </h5>
                </div>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <Card.Body>
                <div className="d-flex pb-3">
                  <span className="category-tag categoryTag" /* style={categoryTag} */>
                    {course.course_category.lang_en}
                  </span>
                  <span className="category-tag categoryTag"/*  style={categoryTag} */>
                    {course.trades_category.lang_en}
                  </span>
                  <span className="category-tag categoryTag" /* style={categoryTag} */>
                    {course.trades_sub_category.lang_en}
                    <FiInfo />
                  </span>
                </div>
                <div>
                  <h4 className="fw-bold short-desc"> {course.short_desc_en}</h4>
                </div>
                <div className="d-flex align-items-center mt-3 course-schedule">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: "#09B970" }} />
                    </span>
                    Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.courseStartsAt}</strong>
                  </div>
                  <div className="mx-3">
                    <span className="me-2">
                      <FiClock style={{ color: "#09B970" }} />
                    </span>
                    Schedule:&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.schedule}</strong>
                  </div>
                </div>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="d-flex align-items-center  course-payment">
                      <h4
                        className="fw-bold course-price"
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
                    <div className="d-flex align-items-center justify-content-md-end ">
                      <div className="me-2">
                        <Button
                          className="w-100 btn-lg payment-buttons"
                          variant="info"
                          style={{
                            background: "#fff",
                            fontSize: "16px",
                            fontWeight: 650,
                            padding: "12px 25px 12px 25px",
                            borderColor: "#1B17201A",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                          }}
                          onClick={() => {
                            navigate("/course-details", {
                              state: {
                                coursesData: course,
                              },
                            });
                          }}
                        >
                          {/* <FiInfo className="me-2" /> */}
                          More Info
                        </Button>
                      </div>
                      <div>
                        <Button
                          className="w-100 btn-lg px-4 payment-buttons"
                          variant="success"
                          style={{
                            background: "rgba(4, 201, 119, 1)",
                            padding: "10px",
                            fontSize: "18px",
                          }}
                          onClick={() => {
                            navigate("/payment", {
                              state: {
                                paymentData: course,
                              },
                            });
                          }}
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
