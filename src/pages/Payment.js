import React, { useState } from 'react';
import { Card, Row, Col, Button, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import {
  format,
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
} from 'date-fns'; /* for date calculations*/
import 'react-datepicker/dist/react-datepicker.css';
import '../assets/css/CourseList.css';
import {
  categoryTag,
  subCertifiedTag,
  subNewTag,
  titleTag,
  subTopRatedTag,
} from '../assets/customcss/CustomCss';
import '../assets/css/Payments.css';
import {
  FiCheckCircle,
  FiStar,
  FiShoppingCart,
  FiCalendar,
  FiInfo,
  FiClock,
} from 'react-icons/fi';

const Payment = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  /* Date Picker calculations */
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isOutsideCurrentMonth = (date, currentDate) => {
    return !isSameMonth(date, currentDate);
  };

  const dateClassName = (date) => {
    if (isOutsideCurrentMonth(date, selectedDate)) {
      return 'text-muted'; // Apply the grey color for dates outside the current month
    }
    return '';
  };

  return (
    <div className="payment-container my-5">
      <h2 onClick={handleShowModal} id="open">
        open
      </h2>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        dialogClassName="custom-modal"
      >
        <Modal.Header /* closeButton */ style={{ display: 'none' }}>
          <Modal.Title>{/* Registration To The Course */}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {/* Place your payment form or content here */}
          <div className="payment-card ">
            <div className="row payment-card-body">
              <div className="col-md-7 payment-card-left">
                <h3 className="fw-bold py-4"> Registration To The Course</h3>
                <h5
                  className="card-title fw-bold "
                  style={{ marginBottom: '10px' }}
                >
                  Personal info
                </h5>
                <div className="payment-form-group row mt-3">
                  <div className="col-6">
                    <label
                      htmlFor="name"
                      style={{
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 700,
                      }}
                    >
                      {' '}
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      /*  style={{ width:'100%'}} */ id="name"
                    />
                  </div>
                  <div className="col-6">
                    <label
                      htmlFor="name"
                      style={{
                        fontSize: '12px',
                        color: 'grey',
                        fontWeight: 700,
                      }}
                    >
                      {' '}
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      /* style={{ width:'45%' }} */ id="name"
                    />
                  </div>
                </div>
                <div className="payment-form-group mt-3">
                  <label
                    htmlFor="phone"
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      fontWeight: 700,
                    }}
                  >
                    Phone{' '}
                  </label>
                  {/* <div className="d-flex align-items-center">
                    <i className={`fas fa-flag ${selectedCountry ? 'me-2' : ''}`} /> */}
                  <input type="text" className="form-control" id="phone" />
                </div>
                <div>
                  {' '}
                  <h5 className="fw-bold my-4">Course details</h5>
                </div>
                <div className="payment-form-group">
                  <label
                    htmlFor="location"
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      fontWeight: 700,
                    }}
                  >
                    Location
                  </label>
                  <select className="form-control" id="location ">
                    {/* Options for locations */}
                    <option value="Choose Location">Choose Location</option>
                    <option value="Location 1">Location 1</option>
                    <option value="Location 2">Location 2</option>
                  </select>
                </div>
                <div className="payment-form-group row">
                  <label
                    className="col-12 mt-3"
                    htmlFor="date"
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      fontWeight: 700,
                    }}
                  >
                    {' '}
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control date-control"
                    id="date"
                  />
                  {/* <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="form-control mx-2 "
                      id="date"
                      dateFormat="dd.MM.yyyy"
                      calendarClassName="custom-calendar"
                      popperPlacement="bottom"
                      popperModifiers={{
                        offset: {
                          enabled: true,
                          offset: '0, 10px',
                        },
                        preventOverflow: {
                          enabled: true,
                          escapeWithReference: false,
                          boundariesElement: 'viewport',
                        },
                      }}
                      highlightDates={[
                        {
                          "highlight-custom-rule": (date) => isOutsideCurrentMonth(date, new Date()),
                          "highlight-custom-date": new Date(),
                          "highlight-custom-day": true,
                        },
                      ]}
                    /> */}
                </div>
              </div>
              <div className="col-md-5 payment-card-right">
                <Card.Body className="">
                  <div className="d-flex">
                    <span className=" category-tag" style={categoryTag}>
                      Category Name
                    </span>
                    <span className=" category-tag" style={categoryTag}>
                      Other...
                      <FiInfo />
                    </span>
                  </div>
                  {/* </Col> */}
                  {/* <Col> */}
                  <div>
                    <h5 className="fw-bold my-2 mx-3">
                      Course Headline Course Headline Course Headline
                    </h5>
                  </div>
                  <Row className="mt-3 mx-1">
                    <Col>
                      <div className="d-flex align-items-center">
                        <span
                          className="me-2 fw-bold"
                          style={{
                            fontSize: '14px',
                          }}
                        >
                          The Course is Designed:&nbsp;
                        </span>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <h6
                          className=" fw-bold mt-2 "
                          style={{
                            color: 'blue',
                            textAlign: 'right',
                          }}
                        >
                          facebook
                        </h6>
                      </div>
                    </Col>
                  </Row>
                  <hr className="border-top custom-separator-line" />
                  <Row>
                    <Col>
                      <div className="payment-breakup-col1"> Accreditation</div>
                    </Col>
                    <Col>
                      <div className="payment-breakup-col2"> PASM</div>
                    </Col>
                  </Row>
                  <hr className="border-top custom-separator-line-dotted" />
                  <Row>
                    <Col>
                      <div className="payment-breakup-col1"> Lessons</div>
                    </Col>
                    <Col>
                      <div className="payment-breakup-col2"> 10</div>
                    </Col>
                  </Row>
                  <hr className="border-top custom-separator-line-dotted " />
                  <Row>
                    <Col>
                      <div className="payment-breakup-col1"> Hours</div>
                    </Col>
                    <Col>
                      <div className="payment-breakup-col2"> 40</div>
                    </Col>
                  </Row>
                  <hr className="border-top custom-separator-line-dotted " />
                  <Row>
                    <Button className="payments-dropdown-btn ">
                      Payments
                      <span>
                        <span className="" style={{ fontWeight: 700 }}>
                          $284
                        </span>
                        <span style={{ color: 'grey' }}> x 3</span> {/* icon */}
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="#09B970"
                            stroke-width="1.3"
                            stroke-linecap="round"
                          />
                        </svg>
                      </span>
                    </Button>
                  </Row>
                  <Row>
                    <Col>
                      <div
                        className="payment-breakup-col1 "
                        style={{
                          fontWeight: 700,
                          fontSize: '16px',
                          color: 'black',
                        }}
                      >
                        {' '}
                        Course Price
                      </div>
                    </Col>
                    <Col>
                      <div
                        className="payment-breakup-col2"
                        style={{
                          fontWeight: 700,
                          fontSize: '16px',
                          color: 'black',
                        }}
                      >
                        {' '}
                        $3452.34
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-end">
                      <div className="d-flex align-items-center justify-content-center mt-4">
                        <div className="me-2"></div>
                        <div>
                          <Button
                            className="w-100 btn-lg px-4"
                            variant="success"
                            style={{
                              background: 'rgba(4, 201, 119, 1)',
                              padding: '10px',
                              fontSize: '18px',
                              borderColor: '#04c977',
                            }}
                            onClick={handleShowModal}
                          >
                            Continue to Payment
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <div className="terms-and-conditions my-2">
                      <label>
                        <input
                          className="checkbox-custom"
                          type="checkbox"
                          /* checked={checked}
                          onChange={handleCheckboxChange} */
                        />
                        I have read and accept <span>Terms and Conditions</span>
                      </label>
                    </div>
                  </Row>
                </Card.Body>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Payment;
