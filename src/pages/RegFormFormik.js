import React from 'react';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Field, ErrorMessage} from 'formik';
import { Container, Row, Form, Col, Button, Modal, Image } from 'react-bootstrap';
import validationSchema from '../components/regForm/validationSchema.js';
import '../assets/css/RegFormFormik.css';
import logo from '../assets/images/Layer 1 (1).png';
const RegFormFormik = () => {
  // Initial form values
  const initialValues = {
    email_id: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    account_type: '',
    country_code: '',
    mobile_number: '',
  };

  // Handle form submission
  const onSubmit = (values) => {
    console.log('Form submitted:', values);
  };

  const validatePassword = (values) => {
    const errors = {};

    if (values.password !== values.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }

    return errors;
  };

  return (
    <Container className='reg-form-container'  >
      <Row className=''>
        <Col md={6} className='p-4 reg-form-left'>
          <div className='reg-form-header p-3'> Sign Up</div>
          <div className=''>
            <Formik 
              initialValues={initialValues} 
              validationSchema={validationSchema} 
              onSubmit={onSubmit}
              validate={validatePassword}>
              {({ isSubmitting }) => (
                <Form className='d-flex flex-column form-struct' >
                  <Row className=' '>
                    <Col md={12}>
                      <Form.Group className="mb-3 " >
                        <Form.Label htmlFor="email_id">Email</Form.Label>
                        <Field type="email" name="email_id" className="form-control" required />
                        <ErrorMessage name="email_id" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  
                
                  
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="first_name">First Name</Form.Label>
                        <Field type="text" name="first_name" className="form-control" required />
                        <ErrorMessage name="first_name" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="last_name">Last Name</Form.Label>
                        <Field type="text" name="last_name" className="form-control" />
                        <ErrorMessage name="last_name" component="div" className="text-danger" required />
                      </Form.Group>
                    </Col>
                  
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Field type="password" name="password" className="form-control" required />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
                        <Field type="password" name="confirm_password" className="form-control" required />
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
              
                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="account_type">Account Type</Form.Label>
                        <Field as="select" name="account_type" className="form-control" required >
                          <option value="">Select Account Type</option>
                          <option value="individual">Individual</option>
                          <option value="business">Business</option>
                        </Field>
                        <ErrorMessage name="account_type" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>
                  
                    <Col md={3}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="country_code">Country</Form.Label>
                        <Field type="text" name="country_code" className="form-control" required />
                        <ErrorMessage name="country_code" component="div" className="text-danger" />
                      </Form.Group>
                    </Col>

                    <Col md={9}>
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="mobile_number">Mobile Number</Form.Label>
                        <Field
                          type="text"
                          name="mobile_number"
                          className="form-control"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          required 
                        />
                        <ErrorMessage
                          name="mobile_number"
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
                    <Col md={12}>
                      <Button className='form-submit-btn' type="submit" disabled={isSubmitting}
                      style={{
                        backgroundColor: '#10D382',
                        color: '#fafafa',
                        fontWeight:700,
                        fontSize:'16px',
                        padding: '15px 25px',
                        border: 'none',
                        borderRadius: '8px',
                      }}>
                        SUBMIT
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
        <Col md={6} className='p-5 reg-form-right'> 
          <Row>
            <Col md={12}>
              <div className='reg-right-logo'>
              <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col md={12}>
              <div className='reg-right-text'>
                <p>"Company Slogan Company Slogan Company Slogan"</p>
                <div>
                  <p> Why You Should Join Us Why You Should Join Us</p>
                  <p> Why You Should Join Us Why You Should Join Us</p>
                  <p> Why You Should Join Us Why You Should Join Us</p>
                  <p> Why You Should Join Us Why You Should Join Us</p>
                </div>
              </div>
            </Col>
          </Row>          
        </Col>
      </Row>
      
        
    </Container>
  );
};


export default RegFormFormik;
