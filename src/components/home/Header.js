import React from 'react';
import { RiHomeLine } from 'react-icons/ri';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../assets/css/home/Header.css';

const Header = () => {
  return (
    <>
      <div className="header-container-fluid">
        <Container>
          <Row>
            {/* <div
              className="col col-sm-12 col-md-6 col-lg-6"
              style={{ marginLeft: '7%', marginTop: '5%' }}
            > */}
            <Col xs={12} md={6} lg={6} style={{ marginTop: '5%' }}>
              <h6 className="header-h6">
                <RiHomeLine className="home mx-1" />
                <b>HOME</b>
              </h6>
              <h1 className="header-h1">
                Find the Best Courses <br />
                and <span>Improve your Skills</span>
              </h1>
              <p className="header-h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Voluptatem consectetur libero ex distinctio nesciunt iusto.
              </p>
            </Col>
            {/* </div> */}
          </Row>
        </Container>
      </div>
      <div className="wrapper">
        <Container>
          <h4 className="title">Find the right course for you</h4>
          <form className="form">
            <div className="search">
              {/* <select class="form-select">
              <option selected>Choose Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select> */}
              <Form.Select>
                <option selected>Choose Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div class="text-form">
              <input
                type="text"
                class="form-control"
                placeholder="Key-Words"
                defaultValue={'Key-words: Write Key-words or Course name'}
              />
            </div>
            <div className="buttn">
              <button type="button" class="search-bttn btn-success">
                SEARCH
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Header;
