import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Field, ErrorMessage } from 'formik';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import validationSchema from '../components/regForm/validationSchema';
import '../assets/css/login/ResetPassword.css';

const ResetPassword = () => {
  const initialValues = {
    password: '',
    confirm_password: '',
  };

  // Handle Login
  const onSubmit = (values) => {
    console.log(':', values);
  };

  return (
    <Container className="reset-password-container">
      <Row>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Row>
              {/* <Col md={12}>
                                <div className='login-logo'>
                                  <img src={logo} alt="logo" />
                                </div>
                            </Col> */}
              <Col md={9}>
                {/* <h3 className='fw-bold mb-4'>Lost your Password?</h3> */}
                {/* <div className='reset-text '>
                                    
                                </div> */}
              </Col>
              <Col md={9}>
                <Form.Group className="mb-3 ">
                  <Form.Label htmlFor="password">New Password</Form.Label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </Col>

              <Col md={9}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="confirm_password">
                    Confirm Password
                  </Form.Label>
                  <Field
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    className="text-danger"
                  />
                </Form.Group>
              </Col>

              <Col md={9}>
                <Button
                  className="reset-link-btn mt-2"
                  type="submit" /* disabled={isSubmitting} */
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
                  Reset Password
                </Button>

                {/* <div className='reset-text' style={{
                                    marginTop:'25px',
                                }}>
                                    <svg fill="#000000" width="25px" height="15px" viewBox="0 0 200 250" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/>
                                        <path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z"/>
                                    </svg>
                                    Back to home page
                                </div> */}
              </Col>
            </Row>
          </Form>
        </Formik>
      </Row>
    </Container>
  );
};

export default ResetPassword;
