import React, { useEffect, useState } from 'react';
import { RiHomeLine } from 'react-icons/ri';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../assets/css/home/Header.css';
import { useLocationStore } from '../../store';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const {location, fetchLocation}=useLocationStore();

  useEffect(() => {
    async function fetchLocationData() {
      await fetchLocation();
    }
    fetchLocationData();
  }, []);

  const [keywordData, setKeyword] = useState("");
  const [selectedLocationData, setSelectedLocationData] = useState(null); // Initialize with null or an appropriate initial value

  const handleLocationChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const otherValue = selectedOption.getAttribute("value");
    
    setSelectedLocationData(otherValue);
  };

  console.log(`location`, location);
  console.log(`selectedLocationData`, selectedLocationData);
  console.log(`keywordData`, keywordData);

  const onSubmit =async (values)=>{
      navigate('/course-list', {
        state: {
          location_id: selectedLocationData,
          keyword: keywordData,
        },
      });
  }
  return (
    <>
      <div className="header-container-fluid">
        <Container>
          <Row>
            <Col
              xs={12}
              md={10}
              lg={6}
              className="header-text"
              style={{ marginTop: '5%' }}
            >
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
        <Container className="dark-strip">
          <h4 className="title">Find the right course for you</h4>
          <form className="form">
            <div className="search col-lg-5 m-3">
            <Form.Select onChange={handleLocationChange}>
              <option value="choose" disabled>Choose Location</option>
              {location?.map((loc) => (
                <option 
                  key={loc.id}
                  value={loc.id}
                  /* data-othervalue={loc.name} */
                >
                  {loc.name}
                </option>
              ))}
            </Form.Select>
              
            </div>
            <div class="text-form col-lg-5 m-3">
              <input
                type="text"
                class="form-control"
                placeholder="Key-Words"
                defaultValue={'Key-words: Write Key-words or Course name'}
                value = {keywordData}
                onChange={(e)=> setKeyword(e.target.value)}
              />
            </div>
            <div className="buttn">
              <button 
                type="button" 
                class="search-bttn btn-success"
                onClick={() => onSubmit()}
                >
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
