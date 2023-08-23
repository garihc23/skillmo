import React, {useEffect} from 'react';
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
import { FaFire, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from '../../assets/customcss/CustomCss';
import '../../assets/css/home/Courses.css';
import { useNavigate } from 'react-router-dom';
import { useCourseStore } from '../../store';

const Courses = () => {
  const navigate = useNavigate();
  const itemsPerPage = 3;
  const totalItems = 5; // Replace with your actual total number of courses
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

  const { courses, fetchCourses } = useCourseStore();

  useEffect(() => {
    async function fetchData() {
      await fetchCourses();
    }
    fetchData();
  }, []);

  console.log('Popular_Course', courses);

  // Generate dummy course data
  const course = Array.from({ length: totalItems }, (_, index) => ({
    id: index + 1,
    title: `Course ${index + 1}`,
    image: `https://example.com/course${index + 1}.jpg`, // Replace with your course image URL
  }));

  // Pagination helper functions
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleButtonClick = () => {
    navigate('/course-list');
    // window.location.reload();
  };
  // Calculate current page items
  // const categorys = courses?.map((item) => item.courses);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courses.slice(indexOfFirstItem, indexOfLastItem);
  // console.log('PopularCourse',currentItems)
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
        Popular Courses
      </h6>
      <div>
        <h3 className="fw-bold mt-4 mb-4">Explore our more popular courses</h3>
      </div>
      <div className="row">
        {currentItems?.map((course) => (
          <div className="col-md-4" key={course.id}>
            <Card>
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
                  <span style={categoryTag}>{course.course_category.lang_en}</span>
                  <span style={categoryTag}>{course.trades_category.lang_en}</span>
                </div>
                <div>
                  <h4 className="fw-bold mt-4 mb-4">
                    {/* Explore our more popular courses... */}
                    {course.short_desc_en}
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
                    $60
                  </h4>
                  <span className="ms-3 text-secondary">× {course.payment_options} Payments</span>
                  <span className="ms-2">
                    <FiInfo />
                  </span>
                </div>

                <Row>
                  <Col>
                    <Button className="w-100 add-cart" variant="success">
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
                      {/* <FiInfo className="me-1" /> */}
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
        {/* <div className="col-md-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                src={image}
                alt="Card image"
                style={{ backgroundColor: 'gray' }}
              />
              <div>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="danger"
                  style={newTag}
                >
                  <FaFire className="me-1" />
                  {'  '}
                  New
                </p>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="success"
                  style={certifiedTag}
                >
                  <FiCheckCircle className="me-1" />
                  {'  '} Certified
                </p>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="warning"
                  style={topRatedTag}
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
                >Facebook </h5>
              </div>
            </div>
            <Card.Body>

              <div className=" d-flex ">
                <span style={categoryTag}>Category Name</span>
                <span style={categoryTag}>Category Name</span>
              </div>
              <div>
                <h4 className="fw-bold mt-4 mb-4">Explore our more popular courses...</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <span className="me-2">
                    <FiCalendar style={{ color: "#09B970" }} />
                  </span>
                  Starting:&nbsp;&nbsp;&nbsp;&nbsp;<strong>20 Feb 2023</strong>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <span className="me-2">
                    <FiClock style={{ color: "#09B970" }} />
                  </span>
                  Starting:&nbsp;&nbsp;&nbsp;&nbsp;<strong>20 Feb 2023</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <h4 className="fw-bold mt-4 mb-4" style={{ color: '#09B970' }}>$60</h4>
                <span className="ms-3">× 3 Payments</span>
                <span className="ms-2">
                  <FiInfo />
                </span>
              </div>
              <Row>
                <Col>
                  <Button className="w-100" variant="success">
                    <FiShoppingCart className="me-1" />
                    Add to Cart
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="w-100"
                    variant="info"
                    style={{ background: '#fafafafa' }}
                  >
                    <FiInfo className="me-1" />
                    More Info
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="position-relative">
              <Card.Img
                src={image}
                alt="Card image"
                style={{ backgroundColor: 'gray' }}
              />
              <div>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="danger"
                  style={newTag}
                >
                  <FaFire className="me-1" />
                  {'  '}
                  New
                </p>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="success"
                  style={certifiedTag}
                >
                  <FiCheckCircle className="me-1" />
                  {'  '} Certified
                </p>
                <p
                  className="position-absolute top-0  m-3 px-2 py-1"
                  variant="warning"
                  style={topRatedTag}
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
                >Facebook </h5>
              </div>

            </div>
            <Card.Body>
              <div className=" d-flex ">
                <span style={categoryTag}>Category Name</span>
                <span style={categoryTag}>Category Name</span>
              </div>
              <div>
                <h4 className="fw-bold mt-4 mb-4">Explore our more popular courses...</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <span className="me-2">
                    <FiCalendar style={{ color: "#09B970" }} />
                  </span>
                  Starting:&nbsp;&nbsp;&nbsp;&nbsp;<strong>20 Feb 2023</strong>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <span className="me-2">
                    <FiClock style={{ color: "#09B970" }} />
                  </span>
                  Starting:&nbsp;&nbsp;&nbsp;&nbsp;<strong>20 Feb 2023</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <h4 className="fw-bold mt-4 mb-4" style={{ color: '#09B970' }}>$60</h4>
                <span className="ms-3">× 3 Payments</span>
                <span className="ms-2">
                  <FiInfo />
                </span>
              </div>
              <Row>
                <Col>
                  <Button className="w-100" variant="success">
                    <FiShoppingCart className="me-1" />
                    Add to Cart
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="w-100"
                    variant="info"
                    style={{ background: '#fafafafa' }}
                  >
                    <FiInfo className="me-1" />
                    More Info
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div> */}
        <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
          {/* <button
            className="btn rounded"
            style={{
              border: '2px solid #09B970',
              backgroundColor: 'transparent',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
            onClick={handleButtonClick}
          >            
          </button> */}
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

          <nav className="d-flex justify-content-center">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  style={{ backgroundColor: '#09B970', marginRight: '10px' }}
                >
                  <FaChevronLeft />
                </button>
              </li>

              <li
                className={`page-item ${
                  currentPage === totalPages ? 'disabled' : ''
                }`}
              >
                <button
                  className="page-link"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  style={{ backgroundColor: '#09B970', marginLeft: '10px' }}
                >
                  <FaChevronRight />
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* Repeat the above code for the remaining two cards */}
      </div>
    </div>
  );
};

export default Courses;
