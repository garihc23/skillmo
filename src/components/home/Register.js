import React from 'react';
import pic101 from '../../assets/images/pic101.png';
import { Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/home/Register.css';
const Register = () => {
  return (
    <div>
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{
            backgroundColor: 'rgba(57, 18, 140, 1)',
            color: 'white',
            paddingLeft: '130px',
            height: '504px',
          }}
        >
          <div style={{ width: '60%' }}>
            <h5
              style={{
                marginBottom: '100px',
                marginTop: '40px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '4px',
              }}
            >
              LEARN AND PRACTICE
            </h5>
            <h3 className="fw-bold mb-3">Become a Student</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
              dolor sit amet, consectetur adipiscing e
            </p>
            <button className="btn rounded reg-bttn">Register</button>
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          style={{
            backgroundColor: 'gray',
            backgroundImage: `url(${pic101})`,
            backgroundSize: 'cover',
            color: 'white',
            paddingLeft: '130px',
            height: '504px',
          }}
        >
          <div style={{ width: '60%' }}>
            <h5
              style={{
                marginBottom: '100px',
                marginTop: '40px',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '4px',
              }}
            >
              START SELLING COURSES
            </h5>
            <h3 className="fw-bold mb-3">Become a Partner</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
              dolor sit amet, consectetur adipiscing e
            </p>
            <button className="btn rounded reg-bttn">Register</button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
