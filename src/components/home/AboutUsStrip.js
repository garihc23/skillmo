import React from 'react';
import bgImage from '../../assets/images/Rectangle 103035.png';
import '../../assets/css/home/AboutUsStrip.css';

const AboutUsStrip = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center bg-img"
        style={{
          /* height: '272px', */
          backgroundImage: { bgImage },
          /* backgroundSize: 'cover', */
          backgroundColor: 'rgba(27, 14, 53, .9)',
        }}
      >
        <div className="container">
          <div className="row h-100">
            <div className="col-md-3 ">
              <h2 className="fw-bold" style={{ color: 'white' }}>
                Our Numbers Tell More About Us
              </h2>
            </div>
            <div className="col-md-3">
              <h1
                className="fw-bold"
                style={{ color: ' rgba(16, 211, 130, 1)' }}
              >
                1000
              </h1>
              <p style={{ color: 'white' }}>Courses on the platform</p>
            </div>
            <div className="col-md-3">
              <h1
                className="fw-bold"
                style={{ color: ' rgba(16, 211, 130, 1)' }}
              >
                50
              </h1>
              <p style={{ color: 'white' }}>Lead industry companies</p>
            </div>
            <div className="col-md-3">
              <h1
                className="fw-bold"
                style={{ color: ' rgba(16, 211, 130, 1)' }}
              >
                80K+
              </h1>
              <p style={{ color: 'white' }}>
                Students who study on the platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsStrip;
