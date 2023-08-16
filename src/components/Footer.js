import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import '../assets/css/Footer.css';
import logo from '../assets/images/Layer 1 (1).png';
const Footer = () => {
  return (
    <footer
      style={{ backgroundColor:'#1B1720', color: 'white', padding: '40px' }}
    >
      <div style={{ marginLeft: '30px' }}>
        <Row>
          <Col style={{ flexBasis: '35%' }}>
            <ul style={listStyle}>
              <li>
                <img src={logo} alt="Logo" style={logoStyle} />
              </li>
              <li>
                <p style={descriptionStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li style={subscribeStyle}>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control bg-transparent"
                    placeholder="Write your email"
                  />
                  <button
                    className="btn btn-outline-secondary bg-success text-white"
                    type="button"
                  >
                    SUBSCRIBE
                  </button>
                            
                </div>
              </li>
            </ul>
          </Col>
          <Col style={{ flexBasis: '20%' }}>
            <ul>
              <li className="fw-bold">Quick Links</li>
              <li className="green-bullet">Home</li>
              <li className="green-bullet">Courses</li>
              <li className="green-bullet">Partners</li>
              <li className="green-bullet">Contacts</li>
            </ul>
          </Col>
          <Col style={{ flexBasis: '20%' }}>
            <ul>
              <li className="fw-bold">About Us</li>
              <li className="green-bullet">Our Mission</li>
              <li className="green-bullet">Blog</li>
            </ul>
          </Col>
          <Col style={{ flexBasis: '20%' }}>
            <ul style={listStyle}>
              <li className="fw-bold mb-3">Follow Us</li>
              <li style={socialIconsStyle}>
                <FaTwitter style={iconStyle} />
                <FaLinkedinIn style={iconStyle} />
                <FaFacebookF style={iconStyle} />
                <FaYoutube style={iconStyle} />
              </li>
              <li style={partnerButtonStyle}>
                <Button variant="success" style={buttonStyle}>
                  BECOME A PARTNER
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const logoStyle = {
  width: '100px',
  height: '30px',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '16px',
  marginBottom: '20px',
};

const subscribeStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  padding: '8px',
  marginRight: '10px',
  borderRadius: '4px',
  border: 'none',
};

const buttonStyle = {
  borderRadius: '4px',
  width: '200px',
  height: '40px',
};
// const listStyle = {
//   listStyleType: 'none',
//   padding: 0,
// };

const socialIconsStyle = {
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  color: 'green',
  fontSize: '30px',
  marginRight: '10px',
  padding: '5px',
  backgroundColor: '#a8bfae',
  borderRadius: '5px',
  // boxShadow: '0 0 5px lightgreen',
};

const partnerButtonStyle = {
  marginTop: '20px',
};

export default Footer;
