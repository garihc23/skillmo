import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import validationSchema from '../components/regForm/validationSchema';
import logo from '../assets/images/Layer 1 (1).png';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email_id: '',
    password: '',
  };
  const { users, loginUser } = useUserStore();
  // Handle Login
  const onSubmit = async (values) => {
    console.log('Form submitted:', values);
    await loginUser(values);
    navigate('/');
    alert('Logged In');
    // window.location.reload();
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
    // window.location.reload();
  };

  const handleSignUpClick = () => {
    navigate('/register');
    // window.location.reload();
  };
  const homepage = () => {
    navigate('/');
    // window.location.reload();
  };

  return (
    <>
      <div className="bgColor1">
        <Container className="login-container">
          <Row>
            <Formik
              initialValues={initialValues}
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="loginCard">
                  <Row>
                    <Col md={12}>
                      {/* <div className="login-logo">
                    <img src={logo} alt="logo" />
                  </div> */}
                    </Col>
                    <Col
                      md={12}
                      className="container d-flex justify-content-center align-items-center"
                    >
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="email_id">Email</Form.Label>
                        <Field
                          type="email"
                          name="email_id"
                          className="form-control"
                          required
                        />
                        <ErrorMessage
                          name="email_id"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                    <Col
                      md={12}
                      className="container d-flex justify-content-center align-items-center"
                    >
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Password</Form.Label>
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

                    <Col
                      md={12}
                      className="container m-2 d-flex justify-content-center align-items-center"
                    >
                      <div
                        className="forgot-pass"
                        onClick={handleForgotPasswordClick}
                      >
                        Forgot Password?
                      </div>
                      <div
                        style={{ marginLeft: '20px' }}
                        className="forgot-pass"
                        onClick={handleSignUpClick}
                      >
                        Signup
                      </div>
                    </Col>

                    <Col md={9} xs={9}>
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
                          marginLeft: '50px',
                        }}
                      >
                        Login
                      </Button>

                      <div
                        className="reset-text"
                        style={{
                          marginTop: '25px',
                          cursor: 'pointer',
                        }}
                        onClick={() => homepage()}
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
