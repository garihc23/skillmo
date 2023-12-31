import React, { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import image from '../../assets/images/students-walk-downstairsdd-with-books-library 1 1.png';
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from '../../assets/customcss/CustomCss';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/home/Platform.css';
import { useCourseStore } from '../../store';


function Platform() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/course-list');
    // window.location.reload();
  };

  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    async function fetchData() {
      await fetchCourses();
    }
    fetchData();
  }, []);

  const filterNew=courses.filter(item=>item.is_new=true);

  console.log('courses', courses);
  return (
    <div className="container " style={{ paddingTop: '50px' }}>
      <h6
        style={{
          color: '#39128C',
          fontFamily: 'Metropolis, sans-serif',
          fontSize: '16px',
          lineHeight: '28px',
          fontWeight: 600,
          letterSpacing: '4px',
        }}
      >
        New on the platform
      </h6>
      <div>
        <h3 className="fw-bold mt-4 mb-4" style={{ width: '60%' }}>
          Choose from more then 100 000 online courses about construction from
          well-known industry leaders
        </h3>
      </div>
      <div className="row my-4">
        {filterNew?.map((course, index) => (
          <div className="col-md-3 my-2">
            <Card key={index}>
              <div className="position-relative">
                <Card.Img
                  src={image}
                  alt="Card image"
                  style={{ backgroundColor: 'gray' }}
                />
                <div>
                  {course.is_new && (
                    <p
                      className="position-absolute top-0  my-3 px-2 py-1"
                      variant="danger"
                      style={subNewTag}
                    >
                      <FaFire className="me-1" />
                      {'  '}
                      New
                    </p>
                  )}

                  {course.is_certified && (
                    <p
                      className="position-absolute top-0  m-3 px-2 py-1"
                      variant="success"
                      style={subCertifiedTag}
                    >
                      <FiCheckCircle className="me-1" />
                      {'  '} Certified
                    </p>
                  )}
                  {course.is_top_rated && (
                    <p
                      className="position-absolute top-0  my-3 px-2 py-1"
                      variant="warning"
                      style={subTopRatedTag}
                    >
                      <FiStar className="me-1" />
                      {'  '}
                      Top Rated
                    </p>
                  )}
                </div>
                <div>
                  <h5
                    className="position-absolute mb-n3 p-4 title-tag"
                    variant="danger"
                    style={titleTag}
                  >
                    {course.title_en}
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
                <div className='platform-card-desc'>
                  <h4 className="fw-bold mt-4 mb-4" style={{fontSize: '18px'}}>
                    {/* Explore our more popular courses... */}
                    {course.short_desc_en.slice(0, 35) + '...'}
                  </h4>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiCalendar style={{ color: '#09B970' }} />
                    </span>
                    <span style={{ fontSize: '14px' }}>Starting:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.courseStartsAt}</strong>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <span className="me-2">
                      <FiClock style={{ color: '#09B970' }} />
                    </span>
                    <span style={{ fontSize: '14px' }}>Schedule:</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>{course.schedule}</strong>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <h4
                    className="fw-bold mt-4 mb-4"
                    style={{ color: '#09B970' }}
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
                      onClick={() => {
                        navigate('/course-details', {
                          state: {
                            coursesData: course,
                          },
                        });
                      }}
                    >
                      {/* <FiInfo className="me-1" /> */}
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
        <button
          className="btn "
          style={{
            border: '1px solid green',
            borderColor: '#04C977',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
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
}

export default Platform;
