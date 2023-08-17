import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Field, ErrorMessage } from 'formik';
import {
  Container,
  Row,
  Form,
  Col,
  Button,
  Modal,
  Image,
} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import validationSchema from '../components/regForm/validationSchema.js';
import '../assets/css/RegFormFormik.css';
import logo from '../assets/images/Layer 1 (1).png';
import avatar from '../assets/images/avatar.png';
import leftArrow from '../assets/images/arrow-to-left.svg';
import rightArrow from '../assets/images/arrow-to-right.svg';
import { RiAlignJustify } from 'react-icons/ri';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useUserStore } from '../store';
const RegFormFormik = () => {
  const history = useHistory();
  const { users, fetchUsers, addUser } = useUserStore();
  // Initial form values
  const initialValues = {
    email_id: '',
    first_name: '',
    last_name: '',
    password: '',
    // confirm_password: '',
    account_type: '',
    country_code: '',
    mobile: '',
  };

  // Handle form submission
  const onSubmit = async (values) => {
    console.log('Form submitted:', values);
    await addUser(values);
    alert('Form submitted successfully');
    history.push('/');
    // toast.success('Create User success!', {
    // position: toast.POSITION.TOP_RIGHT,
    // });
    window.location.reload();
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 1;

  const customerReviews = [
    {
      name: 'Customer Name 1',
      review:
        'Customer Review 1. Customer Review 1. Customer Review 1. Customer Review 1.',
    },
    {
      name: 'Customer Name 2',
      review:
        'Customer Review 2. Customer Review 2. Customer Review 2. Customer Review 2.',
    },
    {
      name: 'Customer Name 2',
      review:
        'Customer Review 2. Customer Review 2. Customer Review 2. Customer Review 2.',
    },
    {
      name: 'Customer Name 2',
      review:
        'Customer Review 2. Customer Review 2. Customer Review 2. Customer Review 2.',
    },
    // Add more reviews if you have them
  ];

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return customerReviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  const validatePassword = (values) => {
    const errors = {};

    if (values.password !== values.confirm_password) {
      errors.confirm_password = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <>
      <Container className="reg-form-container">
        <Row className="p-3">
          <Col md={6} className="p-4 reg-form-left">
            <div className="reg-form-header p-3"> Sign Up</div>
            <div className="">
              <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={onSubmit}
                // validate={validatePassword}
              >
                {({ isSubmitting, handleSubmit }) => (
                  <Form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column form-struct"
                  >
                    <Row className=" ">
                      <Col md={12}>
                        <Form.Group className="mb-3 ">
                          <Form.Label htmlFor="email_id">Email</Form.Label>
                          <Field
                            type="email"
                            name="email_id"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email_id"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="first_name">
                            First Name
                          </Form.Label>
                          <Field
                            type="text"
                            name="first_name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="first_name"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="last_name">Last Name</Form.Label>
                          <Field
                            type="text"
                            name="last_name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="last_name"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3 ">
                          <Form.Label htmlFor="password">Password</Form.Label>
                          <Field
                            type="password"
                            name="password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      {/* <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="confirm_password">
                          Confirm Password
                        </Form.Label>
                        <Field
                          type="password"
                          name="confirm_password"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col> */}
                      <Col md={12}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="account_type">
                            Account Type
                          </Form.Label>
                          <Field
                            as="select"
                            name="account_type"
                            className="form-control"
                          >
                            <option value="">Select Account Type</option>
                            <option value="user">User</option>
                            <option value="firm">Firm</option>
                          </Field>
                          <ErrorMessage
                            name="account_type"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="country_code">
                            Country
                          </Form.Label>
                          <Field
                            type="text"
                            name="country_code"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="country_code"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={9}>
                        <Form.Group className="mb-3">
                          <Form.Label htmlFor="mobile_number">
                            Mobile Number
                          </Form.Label>
                          <Field
                            type="text"
                            name="mobile"
                            className="form-control"
                            inputMode="numeric"
                            maxLength="10" //
                            pattern="[0-9]*"
                          />
                          <ErrorMessage
                            name="mobile"
                            component="div"
                            className="text-danger"
                          />
                        </Form.Group>
                      </Col>

                      {/* <Col md={12}>
                      <Button className='form-cancel-btn' variant="secondary" onClick={() => setShowModal(false)}
                      style={{
                        backgroundColor: '#5c636a',
                        color: '#',
                        fontWeight:700,
                        fontSize:'16px',
                        padding: '15px 25px',
                        border: 'none',
                        borderRadius: '8px',
                      }}>
                        CANCEL
                      </Button> 
                    </Col> */}
                      <Col md={9}>
                        <Button
                          className="reset-link-btn mt-2"
                          type="submit" /* disabled={isSubmitting} */
                          // disabled={isSubmitting}
                          onClick={() => handleSubmit}
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
                          Register
                        </Button>

                        <div
                          className="reset-text"
                          style={{
                            marginTop: '25px',
                            cursor: 'pointer',
                          }}
                          onClick={() => history.push('/')}
                        >
                          <svg
                            fill="#000000"
                            width="25px"
                            height="15px"
                            viewBox="0 0 200 250"
                            data-name="Layer 1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title />
                            <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z" />
                          </svg>
                          Back to home page
                        </div>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>

          <Col md={6} className="p-2 reg-form-right">
            <Row>
              <Col md={12}>
                <div className="reg-right-logo">
                  <img src={logo} alt="logo" />
                </div>
              </Col>
              <Col md={12}>
                <div className="reg-right-text">
                  <h3>Start developing your skills with us.</h3>
                  <p>
                    Learn from the top trainer and give yourself More Text Here
                    More Text Here More Text Here More Text Here More Text Here
                  </p>
                  {/* Customer Review Box */}
                  {getCurrentReviews().map((review, index) => (
                    <Row className="review-box" key={index}>
                      <Col md={4}>
                        <img
                          className="customer-img"
                          src={avatar}
                          alt="customer photo"
                        />
                        <p>{review.name}</p>
                      </Col>
                      <Col md={8}>
                        <p>{review.review}</p>
                      </Col>

                      {/* Pagination */}
                      <div className="pagination-container">
                        <ReactPaginate
                          previousLabel={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#fff"
                              fillOpacity={0.5}
                              width="18"
                              height="15"
                              viewBox="0 0 22.702 21.928"
                            >
                              <path d="M11.629,12.553c4.356.341,10.018,2.844,10.018,9.375h.979c.084-.925.693-8.982-3.653-13.74a10.506,10.506,0,0,0-7.344-3.352V0L0,9.044,11.629,18.1Z" />
                            </svg>
                          }
                          nextLabel={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#fff"
                              fillOpacity={0.5}
                              width="18"
                              height="15"
                              viewBox="0 0 22.703 21.928"
                            >
                              <path d="M1.056,21.928c0-6.531,5.661-9.034,10.018-9.375V18.1L22.7,9.044,11.073,0V4.836A10.5,10.5,0,0,0,3.729,8.188C-.618,12.946-.008,21,.076,21.928Z" />
                            </svg>
                          }
                          breakLabel={'...'}
                          breakClassName={'break-me'}
                          pageCount={Math.ceil(
                            customerReviews.length / reviewsPerPage
                          )}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={0}
                          onPageChange={({ selected }) =>
                            setCurrentPage(selected)
                          }
                          containerClassName={'pagination'}
                          subContainerClassName={'pages pagination'}
                          activeClassName={'active'}
                          pageClassName={'pagination-item'}
                        />
                      </div>
                    </Row>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <ToastContainer /> */}
      </Container>
    </>
  );
};

export default RegFormFormik;
