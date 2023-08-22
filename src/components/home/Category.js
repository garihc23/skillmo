import React, { useEffect, useState } from 'react';
import '../../assets/css/home/Category.css';
import firstImg from '../../assets/images/students-walk-downstairsdd-with-books-library 1 1.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCategoryStore } from '../../store';
const Category = () => {
  const navigate = useNavigate();
  const handleMouseEnter = (e) => {
    e.target.style.opacity = '1';
  };

  const handleMouseLeave = (e) => {
    e.target.style.opacity = '0';
  };

  const { category, fetchCategory } = useCategoryStore();
  useEffect(() => {
    async function fetchData() {
      await fetchCategory();
    }
    fetchData();
  }, []);
  console.log('category', category);

  const itemsPerPage = 6;
  const totalItems = 15; // Replace with your actual total number of courses
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = React.useState(1);

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

  // Calculate current page items
  const categorys = category.map((item) => item.course_category);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);
  console.log('CategoryData_______', currentItems);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleButtonClick = () => {
    navigate('/course-list');
    // window.location.reload();
  };
  return (
    <div>
      <Container className="category-container" style={{ marginTop: '100px' }}>
        <h6
          style={{
            color: '#39128C',
            fontFamily: 'Metropolis,sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '7px',
          }}
        >
          Top Categories
        </h6>
        <h3 className="fw-bold">Browse by popular Courses Categories</h3>
        <div className="mt-5">
          <Row>
            {currentItems.map((course, index) => (
              <Col key={index} xs={6} md={4} lg={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    borderRadius: '20px',
                    height: '100%',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <img
                      src={course.image}
                      className="card-img-top"
                      style={{
                        objectFit: 'cover',
                        width: '200px',
                        height: '250px',
                      }}
                    />
                    <div
                      className="card-img-overlay d-flex flex-column justify-content-end"
                      style={{
                        // background: 'rgba(0, 0, 0, 0.7)',
                        padding: '10px',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        position: 'absolute',
                      }}
                    >
                      <h5
                        className="card-title text-white text-center"
                        style={{
                          fontFamily: 'sans-serif,Metropolis',
                          fontSize: '16px',
                        }}
                      >
                        {course.lang_en}
                      </h5>
                    </div>
                    <div
                      className="card-img-overlay d-flex flex-column justify-content-center"
                      style={{
                        padding: '10px',
                        backgroundColor: 'rgba(4, 185, 110, 0.8)',
                        opacity: '0',
                        transition: 'opacity 0.3s',
                        borderRadius: '20px',
                      }}
                    >
                      <h5
                        className="card-title text-white text-center font-weight-bold"
                        style={{
                          fontFamily: 'Metropolis, sans-serif',
                        }}
                      >
                        {/* CHOOSE THE COURSE */}
                        {course.lang_roa}
                      </h5>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn "
              style={{
                border: '1px solid green',
                borderColor: '#04C977',
                borderRadius: '15px',
                backgroundColor: 'transparent',
                padding: '15px 20px',
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
                    style={{
                      /* backgroundColor: 'green', */
                      marginRight: '10px',
                    }}
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
                    style={{ /* backgroundColor: '' */ marginLeft: '10px' }}
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
