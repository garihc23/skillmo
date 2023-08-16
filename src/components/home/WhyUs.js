import React from 'react';
import {
    CiCreditCard1,
    CiTrophy
} from 'react-icons/ci';
import {
    MdSupportAgent
} from 'react-icons/md';
import {
    FaRegBuilding
} from 'react-icons/fa';


const WhyUs = () => {
    return <>
        <div className="container " style={{ paddingTop: "50px" }} >
            <h6 style={{ 
                color: "#39128C",
                fontFamily:'Metropolis, sans-serif',
                fontSize:'16px',
                lineHeight:'28px',
                fontWeight:600,
                letterSpacing:'4px' 
                }}>Why Us</h6>
            <div>

                <h3 className='fw-bold mt-4 mb-4'>One platform for all Constructing Courses</h3>
            </div>

            <div class="row">
                <div class="col-md-3 ">
                    <div >
                        <div className='d-flex justify-content-center ' style={{ width: "60px", height: "60px", background: "white", borderRadius: "15px", padding: "10px" }}><CiCreditCard1 style={{ color: "green" }} size={40} /></div>
                        <h6 className='fw-bold mt-3 mb-3' >Payment flexibility </h6 >
                        <p className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div >
                        <div className='d-flex justify-content-center ' style={{ width: "60px", height: "60px", background: "white", borderRadius: "15px", padding: "10px" }}> <MdSupportAgent style={{ color: "green" }} size={40} /></div>
                        <h6 className='fw-bold mt-3 mb-3'>24/7 support</h6 >
                        <p className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div >
                        <div className='d-flex justify-content-center ' style={{ width: "60px", height: "60px", background: "white", borderRadius: "15px", padding: "10px" }}> <FaRegBuilding style={{ color: "green" }} size={35} /></div>
                        <h6 className='fw-bold mt-3 mb-3'>Employment guarantees</h6 >
                        <p className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div >
                        <div className='d-flex justify-content-center ' style={{ width: "60px", height: "60px", background: "white", borderRadius: "15px", padding: "10px" }}> <CiTrophy style={{ color: " green" }} size={40} /></div>
                        <h6 className='fw-bold mt-3 mb-3'>Top companies speakers</h6 >
                        <p className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>

    </>;
};

export default WhyUs;
