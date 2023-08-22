import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import pic from '../../assets/images/Group 1000002457.png';
import pic1 from '../../assets/images/Group 1000002461.png';
import pic2 from '../../assets/images/Group 1000002462.png';
import '../../assets/css/home/Testimonials.css';
import { useNavigate } from 'react-router-dom';
const Testimonials = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/course-list');
    // window.location.reload();
  };
  return (
    <>
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
          Testimonials
        </h6>
        <div className="mb-3">
          <h3 className="fw-bold mt-4 mb-4">
            Here’s what our client are saying
          </h3>
        </div>
        <div>
          <Row className="testimonials-row">
            <Col>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card
                style={{
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)',
                  marginBottom: '25px',
                }}
              >
                <Card.Body>
                  <Row>
                    <Col xs={3}>
                      <div className="mb-3">
                        <img
                          src={pic}
                          alt="pic"
                          style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            background: 'gray',
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={7}>
                      <h5 className="fw-bold ">Green Heading</h5>
                      <h6 style={{ color: 'green' }}>Black Heading</h6>
                    </Col>
                    <Col xs={2}>
                      <h4 style={{ color: 'green' }}>
                        <FaQuoteLeft />
                      </h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card. This is a paragraph that
                        represents the content of the second row in the card.
                        This is a paragraph that represents the content of the
                        second row in the card.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <div className="fade-overlay"></div>
          </Row>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
          <button
            className="btn rounded bttn"
            style={{
              border: '2px solid green',
              backgroundColor: 'green',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
            }}
            onClick={handleButtonClick}
          >
            SHOW ALL COURSES
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
