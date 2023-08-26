import React, { useEffect, useState } from "react";
import CourseListCard from "../components/courselist/CourseListCard";
import { FaAngleDown } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { IoIosTarget } from "react-icons/io";
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
import "../assets/css/CourseList.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import image from "../assets/images/students-walk-downstairsdd-with-books-library.png";
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
} from "../assets/customcss/CustomCss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCourseStore, useCourseByLocationStore} from "../store";
import { useLocation } from "react-router-dom";
import { fetchCourseByLocation } from "../api/courseByLocationApi";

const CourseList = () => {
  const location = useLocation();
  console.log('location state',location.state);
  console.log('location state id',location.state.location_id);

  const [range, setRange] = useState([0, 100]);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [selectedFilterOption, setSelectedFilterOption] = useState("");
  const [isFilterBtnVisible, setFilterBtnVisible] = useState(true);

  const { courses, fetchCourses } = useCourseStore();
  const { coursesByLocation, fetchCourseByLocation} = useCourseByLocationStore();
  /* const coursesByLocationData= location?.state?.location_id;
  console.log('location22:',coursesByLocation); */
  useEffect(() => {
    async function fetchCourseByLocationData() {
      await fetchCourseByLocation(location.state.location_id);
    }
    fetchCourseByLocationData();
  }, []);
  console.log('location_id: ',coursesByLocation);
  
  /* useEffect(() => {
    async function fetchData() {
      await fetchCourses();
    }
    fetchData();
  }, []);
  console.log(
    `Course`,
    courses?.map((course) => course.id)
  );
 */
  /* filter Section Area */
  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const closeFilterDropdown = () => {
    setFilterVisible(false);
  };

  const handleScreenResize = () => {
    if (window.innerWidth <= 991) {
      setFilterBtnVisible(true);
    } else {
      setFilterBtnVisible(false);
      setFilterVisible(true);
    }
  };

  // Attach the resize event listener when the component mounts
  React.useEffect(() => {
    handleScreenResize();
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  /* Filter Section End */

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  const trackStyle = { backgroundColor: "rgba(9, 185, 112, 1)" }; // Custom track color
  const handleStyle = {
    backgroundColor: "rgba(9, 185, 112, 1)", // Custom handle color
    borderColor: " rgba(9, 185, 112, 1)", // Custom handle border color
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [categories, setCategories] = useState([
    { name: "Category 1", checked: false },
    { name: "Category 2", checked: false },
    { name: "Category 3", checked: false },
    { name: "Category 2", checked: false },
    { name: "Category 3", checked: false },
    // Add more categories as needed
  ]);

  const [trades, setTrades] = useState([
    {
      name: "Category 1",
      checked: false,
      subcategories: [
        { name: "Subcategory 1", checked: false },
        { name: "Subcategory 2", checked: false },
        { name: "Subcategory 3", checked: false },
      ],
    },
    {
      name: "Category 2",
      checked: false,
      subcategories: [
        { name: "Subcategory 4", checked: false },
        { name: "Subcategory 5", checked: false },
      ],
    },
    {
      name: "Category 3",
      checked: false,
      subcategories: [{ name: "Subcategory 6", checked: false }],
    },
    // Add more categories as needed
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].checked = !updatedCategories[index].checked;
    setCategories(updatedCategories);
  };

  const handleCategoryCheckboxChange = (categoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].checked =
      !updatedCategories[categoryIndex].checked;
    setTrades(updatedCategories);
  };

  const handleSubcategoryCheckboxChange = (categoryIndex, subcategoryIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].subcategories[subcategoryIndex].checked =
      !updatedCategories[categoryIndex].subcategories[subcategoryIndex].checked;
    setTrades(updatedCategories);
  };

  const radioLabelStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  // State to keep track of whether each category's subcategories should be shown or hidden
  const [categoryStates, setCategoryStates] = useState(
    trades?.map(() => false)
  );

  const handleCategoryClick = (categoryIndex) => {
    setCategoryStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[categoryIndex] = !prevStates[categoryIndex];
      return updatedStates;
    });
  };

  return (
    <div>
      {isFilterVisible && <div className="background-div"></div>}
      <Navbar></Navbar>
      <div className="banner-course-list">
        <Container fluid className="p-5">
          <Row>
            <h6 className="header-h6 mt-4 mb-3 mx-5">
              <RiHomeLine className="home mx-1" />
              <b>Home</b>&nbsp;&nbsp;/&nbsp;&nbsp;<b>Catalog</b>
            </h6>
            <div>
              <h2 className="header-h6 mt-4 mb-0 mx-5">
                &nbsp;Find the right course for you
              </h2>
            </div>
          </Row>
          <Row className="banner-options-course-list p-5">
            <Col xs={12} md={4} lg={5} className="custom-column ">
              <div className="search">
                <select className="form-select custom-input">
                  <option selected>Choose Location</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </Col>
            <Col xs={12} md={4} lg={5} className="custom-column ">
              <div className="text-form">
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Write Keywords or course name"
                />
              </div>
            </Col>
            <Col className="custom-column">
              <button type="button" class="search-bttn btn-success custom-btn">
                SEARCH
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <div className="filter-btn-div">
            {isFilterBtnVisible && (
              <button className="filter-btn" onClick={toggleFilter}>
                Filter Options
              </button>
            )}
          </div>
          {isFilterVisible && (
            <Col
              xs={12}
              md={12}
              lg={3}
              className="p-4 mt-5 dropdown filter-dropdown-overlay"
              style={{
                backgroundColor: "#fafafa",
                borderRadius: "20px",
                padding: "2.5%",
                height: "100%",
              }}
            >
              <div className="filter-dropdown-content">
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    className="close-filter-button"
                    onClick={closeFilterDropdown}
                  >
                    X
                  </button>
                </div>
                <div>
                  <p
                    style={{
                      padding: "5px",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    Filter by:
                  </p>
                  {/* distance section */}
                  <div className="d-flex">
                    <h5 className="fw-bold" style={{ paddingRight: "68%" }}>
                      Distance
                    </h5>
                    <div>
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div className="d-flex my-3">
                    <span
                      style={{
                        paddingRight: "26%",
                        color: "#777779",
                        letterSpacing: "2px",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      Current Location:
                    </span>
                    <div className="d-flex">
                      <h6 className="fw-bold">London</h6>
                      <div>
                        <FaBullseye
                          style={{
                            color: "#09B970",
                            marginLeft: "80%",
                            marginTop: "-48%",
                          }}
                        ></FaBullseye>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px dotted #000" }}></div>
                  <div className="d-flex my-4">
                    <div className="me-2 w-75">
                      <Button
                        className="w-100 btn-lg px-4 "
                        variant="info"
                        style={{
                          background: "#fafafafa",
                          fontSize: "18px",
                          borderColor: "#1B17201A",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                          padding: "13px 0px 20px 25px",
                          height: "54px",
                          textAlign: "left",
                        }}
                      >
                        <strong>{range[0]} miles</strong>
                      </Button>
                    </div>
                    <div className="me-2 w-35 ">
                      <Button
                        className="w-100 btn-lg "
                        variant="info"
                        style={{
                          background: "#fafafafa",
                          fontSize: "18px",
                          borderColor: "#09B970",
                          borderWidth: "2px",
                          height: "54px",

                          //padding:  '15px 45px 15px 45px',
                        }}
                      >
                        <strong>OK</strong>
                      </Button>
                    </div>
                  </div>
                  <div className="container">
                    <Slider
                      range
                      min={0}
                      max={100}
                      value={range}
                      onChange={handleRangeChange}
                      trackStyle={[trackStyle, trackStyle]} // Pass an array for both tracks in the range slider
                      handleStyle={[handleStyle, handleStyle]}
                    />
                  </div>
                  <div
                    style={{ borderTop: "1px dotted #000", marginTop: "20px" }}
                  ></div>
                  {/* price section */}
                  <div className="d-flex">
                    <h5
                      className="fw-bold mt-3 mb-1"
                      style={{ paddingRight: "78%" }}
                    >
                      Price
                    </h5>
                    <div>
                      <FaMinus className="mt-4 mb-1"></FaMinus>
                    </div>
                  </div>
                  <div className="d-flex my-4">
                    <div className="me-2 w-30">
                      <Button
                        className="w-100 btn-lg px-3 mx-2"
                        variant="info"
                        style={{
                          background: "#fafafafa",
                          fontSize: "18px",
                          borderColor: "#1B17201A",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                          height: "54px",
                        }}
                      >
                        <strong>${range[0]}</strong>
                      </Button>
                    </div>
                    &nbsp;
                    <div className="py-2">
                      <FaMinus></FaMinus>
                    </div>
                    <div className="me-2 w-30">
                      <Button
                        className="w-100 btn-lg px-3 mx-2"
                        variant="info"
                        style={{
                          background: "#fafafafa",
                          fontSize: "18px",
                          borderColor: "#1B17201A",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                          height: "54px",
                        }}
                      >
                        <strong>${range[1]}</strong>
                      </Button>
                    </div>
                    <div className="me-2 w-25">
                      <Button
                        className="w-100 btn-lg px-3 mx-2"
                        variant="info"
                        style={{
                          background: "#fafafafa",
                          fontSize: "18px",
                          borderColor: "#09B970",
                          borderWidth: "2px",
                          height: "54px",
                        }}
                      >
                        <strong>OK</strong>
                      </Button>
                    </div>
                  </div>
                  <div className="container">
                    <Slider
                      range
                      min={0}
                      max={100}
                      value={range}
                      onChange={handleRangeChange}
                      trackStyle={[trackStyle, trackStyle]} // Pass an array for both tracks in the range slider
                      handleStyle={[handleStyle, handleStyle]}
                    />
                  </div>
                  <div
                    style={{ borderTop: "1px dotted #000", marginTop: "20px" }}
                  ></div>
                  {/* categories section start here */}
                  <div className="d-flex my-4">
                    <h5 className="fw-bold" style={{ paddingRight: "55%" }}>
                      Categories
                    </h5>
                    <div>
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div>
                    <Form>
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        {categories?.map((category, index) => (
                          <div className="col-md-12">
                            <Form.Check
                              key={index}
                              type="checkbox"
                              label={`Category name ${index + 1}`} // Modify the label to include the category name and number
                              checked={category.checked}
                              onChange={() => handleCheckboxChange(index)}
                              style={{
                                color: category.checked ? "#09B970" : "inherit",
                                marginLeft: "-30px",
                                paddingBottom: "30px",
                                transform: "scale(1.1)", // Increase checkbox size
                                borderColor: "#fff",
                                borderWidth: "10px",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </Form>
                  </div>

                  <div
                    style={{ borderTop: "1px dotted #000", marginTop: "20px" }}
                  ></div>
                  {/* company section start here */}
                  <div className="d-flex my-4">
                    <h5 className="fw-bold" style={{ paddingRight: "55%" }}>
                      Company
                    </h5>
                    <div>
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div>
                    <Form>
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        {categories?.map((category, index) => (
                          <div className="col-md-12">
                            <Form.Check
                              key={index}
                              type="checkbox"
                              label={`Company name ${index + 1}`} // Update the label to include "Company name"
                              checked={category.checked}
                              onChange={() => handleCheckboxChange(index)}
                              style={{
                                color: category.checked ? "#09B970" : "inherit",
                                marginLeft: "-30px",
                                paddingBottom: "30px",
                                transform: "scale(1.1)", // Increase checkbox size
                                borderColor: "#fff",
                                borderWidth: "10px",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </Form>
                  </div>
                  <div
                    style={{ borderTop: "1px dotted #000", marginTop: "20px" }}
                  ></div>
                  {/* Trades section start from here */}
                  <div className="d-flex my-4">
                    <h5 className="fw-bold" style={{ paddingRight: "65%" }}>
                      Trades
                    </h5>
                    <div>
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div className="px-4">
                    <Form
                      className="row"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                      }}
                    >
                      {trades?.map((category, categoryIndex) => (
                        <div
                          className="col-md-12 trade-category-index "
                          key={categoryIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column ",
                            alignItems: "left",
                            /* marginLeft: '-40px', */
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "left",
                              cursor: "pointer",
                              paddingBottom: "20px",
                            }}
                            onClick={() => handleCategoryClick(categoryIndex)}
                          >
                            <Form.Check
                              type="checkbox"
                              id={`category-checkbox-${categoryIndex}`}
                              label={`Category of Trades ${categoryIndex + 1}`} // Updated label for categories
                              checked={category.checked}
                              onChange={() =>
                                handleCategoryCheckboxChange(categoryIndex)
                              }
                            />
                            <span style={{ marginLeft: "15px" }}>
                              {categoryStates[categoryIndex] ? "▼" : "►"}
                            </span>
                          </div>

                          {categoryStates[categoryIndex] && (
                            <div style={{ marginLeft: "50px" }}>
                              {" "}
                              {category.subcategories?.map(
                                (subcategory, subcategoryIndex) => (
                                  <div key={subcategoryIndex}>
                                    <Form.Check
                                      type="checkbox"
                                      id={`subcategory-checkbox-${categoryIndex}-${subcategoryIndex}`}
                                      label={`Trades name ${
                                        subcategoryIndex + 1
                                      }`} // Updated label for subcategories
                                      checked={subcategory.checked}
                                      onChange={() =>
                                        handleSubcategoryCheckboxChange(
                                          categoryIndex,
                                          subcategoryIndex
                                        )
                                      }
                                      style={{
                                        color: subcategory.checked
                                          ? "#09B970"
                                          : "inherit",
                                        transform: "scale(1.1)",
                                        marginLeft: "-30px",
                                        paddingBottom: "30px",
                                        borderColor: "#fff",
                                        borderWidth: "10px",
                                      }}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </Form>
                  </div>

                  <div
                    style={{ borderTop: "1px dotted #000", marginTop: "20px" }}
                  ></div>
                  {/* sechudele section */}
                  <div className="d-flex my-4">
                    <h5 className="fw-bold" style={{ paddingRight: "65%" }}>
                      Schedule
                    </h5>
                    <div>
                      <FaMinus></FaMinus>
                    </div>
                  </div>
                  <div>
                    <div style={radioLabelStyle}>
                      <input
                        type="radio"
                        value="Option 1"
                        checked={selectedOption === "Option 1"}
                        onChange={handleOptionChange}
                        style={{
                          color: "#09B970",
                          margin: "10px",
                          padding: "5px",
                          transform: "scale(1.1)", // Increase checkbox size
                        }}
                      />
                      <label>Weekday</label>
                    </div>
                  </div>
                  <div style={radioLabelStyle}>
                    <input
                      type="radio"
                      value="Option 2"
                      checked={selectedOption === "Option 2"}
                      onChange={handleOptionChange}
                      style={{
                        color: "#09B970",
                        margin: "10px",
                        padding: "5px",
                        transform: "scale(1.2)", // Increase checkbox size
                      }}
                    />
                    <label>Weekend</label>
                  </div>
                  <div style={radioLabelStyle}>
                    <input
                      type="radio"
                      value="Option 3"
                      checked={selectedOption === "Option 3"}
                      onChange={handleOptionChange}
                      style={{
                        color: "#09B970",
                        margin: "10px",
                        padding: "5px",
                        transform: "scale(1.2)", // Increase checkbox size
                      }}
                    />
                    <label>Both</label>
                  </div>
                  <div
                    style={{
                      borderTop: "1px dotted #000",
                      marginTop: "20px",
                      marginBottom: "30px",
                    }}
                  ></div>
                </div>
              </div>
            </Col>
          )}

          {/* Right section */}
          <Col
            xs={12}
            lg={9}
            className="right-section"
            style={{ paddingLeft: "30px" }}
          >
            <div className="mt-5 ">
              <Row>
                <div className="col-md-6">
                  <h4 className="fw-bold">Suitable Constructing Courses</h4>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    Showing results for “Architecture Courses”
                  </p>
                </div>
                <div className="col-md-6">
                  <div className=" d-flex justify-content-end">
                    <div
                      style={{
                        color: "grey",
                        fontSize: "12px",
                        paddingRight: "15px",
                        paddingTop: "15px",
                        alignContent: "center",
                      }}
                    >
                      {" "}
                      Sort By Price:{" "}
                    </div>
                    <Dropdown data-bs-theme="light">
                      <Dropdown.Toggle
                        className="custom-dropdown "
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                        style={{
                          fontWeight: 700,
                          padding: "10px 70px 10px 25px",
                          borderRadius: "10px",
                          backgroundColor: "#f1f3f9",
                          /* justifyContent: 'right', */
                        }}
                      >
                        Relevant
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" active>
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Row>
            </div>
            <div>
              {/* You can find card code at the bottom */}
              <CourseListCard data={courses}></CourseListCard>
            </div>
            <div></div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default CourseList;

/* 


<Card className="mt-4"
                    style={{
                      borderColor:'white',
                      marginBottom: '30px',
                    }}
              >
                <Row className="g-0">
                  <Col xs={4}>
                    <div className="position-relative">
                      <Card.Img
                        src={image}
                        alt="Card image"
                        style={{ backgroundColor: 'gray', height: '35vh' }}
                      />
                      <div>
                        <p
                          className="position-absolute top-0 mx-2  my-3 px-2 py-1"
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
                          className="position-absolute top-0  my-3 px-2 py-1"
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
                  <Col xs={8}>
                    <Card.Body>
                      <div className=" d-flex pb-3">
                        <span className=' category-tag' style={categoryTag}>Category Name</span>
                        <span className=' category-tag' style={categoryTag}>Category Name</span>
                        <span className=' category-tag' style={categoryTag}>Other...<FiInfo /></span>
                      </div>
                      <div>
                        <h4 className="fw-bold ">
                          Explore our more popular courses... Explore our more
                          popular courses...
                        </h4>
                      </div>
                      <div className="d-flex  align-items-center mt-3">
                        <div>
                          <span className="me-2">
                            <FiCalendar style={{ color: '#09B970' }} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                          </span>
                          Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                          <strong>20 Feb 2023</strong>
                        </div>
                        <div className="mx-3">
                          <span className="me-2">
                            <FiClock style={{ color: '#09B970' }} />
>>>>>>> 0106fa5ea55a5ca66faa41169ffac89f0086f9f4
>>>>>>> 92c8f7f0384bf3c4cf73cf7368e206743316ba78
                          </span>
                          Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                          <strong>20 Feb 2023</strong>
                        </div>
<<<<<<< HEAD
                        <div className="mx-3">
                          <span className="me-2">
                            <FiClock style={{ color: '#09B970' }} />
=======
<<<<<<< HEAD
                        <div className="mx-3">
                          <span className="me-2">
                            <FiClock style={{ color: '#09B970' }} />
>>>>>>> a44a3066f1711add444749c8e4d8b4b89a450109
>>>>>>> 92c8f7f0384bf3c4cf73cf7368e206743316ba78
                          </span>
                          Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                          <strong>20 Feb 2023</strong>
                        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        <div className="mx-3">
                          <span className="me-2">
                            <FiClock style={{ color: '#09B970' }} />
                          </span>
                          Starting:&nbsp;&nbsp;&nbsp;&nbsp;
                          <strong>20 Feb 2023</strong>
                        </div>
=======
=======
>>>>>>> 0106fa5ea55a5ca66faa41169ffac89f0086f9f4
>>>>>>> a44a3066f1711add444749c8e4d8b4b89a450109
>>>>>>> 92c8f7f0384bf3c4cf73cf7368e206743316ba78
                      </div>
                      <Row>
                        <Col>
                          <div className="d-flex align-items-center mt-4">
                            <h4
                              className="fw-bold "
                              style={{ color: '#09B970', fontSize: '30px' }}
                            >
                              $60
                            </h4>
                            <span className="ms-3">× 3 Payments</span>
                            <span className="ms-2">
                              <FiInfo />
                            </span>
                          </div>
                        </Col>
                        <Col className="text-end">
                          <div className="d-flex align-items-center justify-content-end mt-4">
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
                              >
                                {/* <FiInfo className="me-2" /> }
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
<<<<<<< HEAD
              */
