import React, { useEffect, useRef, useState } from 'react'
import { Col, Navbar, Row } from 'react-bootstrap'
import Navbars from './Navbars'
import Sidebar from './Sidebar'
import './sidebar.css'

function LandingPage() {
   
    const[isSidebar,setSidebar]=useState(false)
    const handlesidebar=()=>{
        if(isSidebar){
        setSidebar(false)
        }
        else{
            setSidebar(true)
        }

    }
    
   
  return (
    <>
    <Navbars/>
    <div className=' ms-3 mt-2 mb-1' ><button className='btn btn-outline-dark' onClick={handlesidebar}>☰</button></div>
    <div className='d-flex fullbody' style={{height:'100%'}}>
        {isSidebar&&<div className='sidebarmain shadow ' style={{zIndex:'6'}} >
            <Sidebar/>
        </div>}
        <div className='bodycontent bg-light d-flex flex-column ' style={{width:'100%'}} >
        {/* <div className=' ms-3 mt-2' ><button className='btn btn-outline-dark' onClick={handlesidebar}>☰</button></div> */}

            <div className='head'>
                <div className='d-flex justify-content-center'style={{height:'100%',width:'100%'}}><h3 className='mt-1 ms-3 justify-content-center'>Choose a plan that's just right for you!</h3></div>
                
            </div>
            <div className='d-flex me-5 justify-content-end'>
                <div style={{width:'180px',height:'30px ',borderRadius:'16px'}} className='d-flex border justify-content-between '>
                    <div className='text-light bg-info text-center p-1' style={{width:'80px',borderRadius:'16px',height:'30px'}}> <a className='text-light' href="" style={{textDecoration:'none'}}>Monthly</a></div>
                    <div className='text-info text-center p-1' style={{width:'100px',borderRadius:'16px',height:'30px'}}> <a style={{textDecoration:'none'}} href=''>Annually<sup className='text-success'>-10%</sup></a> </div>
                    
                </div>
            </div>
            <Row className='d-flex justify-content-evenly mt-4'>
            <Col sm={12} lg={3} md={6} xl={3}>
                <div className='d-flex flex-column shadow rounded mb-5'>
                    <div className='ms-3'><h3 className='fw-bolder'>Basic</h3></div>
                    <div className='ms-3'><p><strike>$89.99/mo</strike></p></div>
                    <div className='ms-3'><h3>$9.99/mo</h3></div>
                    <div className='ms-3 mt-3'><button className='btn btn-warning text-light'>Get Started<i className=" ms-1 fa-solid fa-right-long fa-beat"></i></button></div>
                    <hr />
                    <div className='ms-3'><p>What you'll get:</p></div>
                    <div className='d-flex '><i className="fa-regular fa-user me-3 ms-2 mt-1"></i><p>Upto 25 Users</p></div>
                    <div className='d-flex '><i class="fa-solid fa-cloud-arrow-up ms-2 mt-1 me-3"></i><p>Upto 25gb Storage</p></div>
                    <div className='d-flex '><i class="fa-regular fa-envelope  ms-2 mt-1 me-3"></i><p>Email Support</p></div>
                    <div className='d-flex justify-content-center mb-3'><a href='' className='text-dark' >EXPLORE FEATURES <i className="fa-solid fa-arrow-right-to-bracket ms-1"></i></a></div>
                </div>
            </Col>
            <Col sm={12} lg={3} md={6} xl={3}>
            <div className='d-flex flex-column shadow rounded mb-5'>
                    <div className='ms-3'><h3 className='fw-bolder'>Standard</h3></div>
                    <div className='ms-3'><p><strike>$189.99/mo</strike></p></div>
                    <div className='ms-3'><h3>$99.99/mo</h3></div>
                    <div className='ms-3 mt-3'><button className='btn btn-danger'>Get Started<i className=" ms-1 fa-solid fa-right-long fa-beat"></i></button></div>
                    <hr />
                    <div className='ms-3'><p>What you'll get:</p></div>
                    <div className='d-flex '><i className="fa-regular fa-user me-3 ms-2 mt-1"></i><p>Upto 50 Users</p></div>
                    <div className='d-flex '><i class="fa-solid fa-cloud-arrow-up ms-2 mt-1 me-3"></i><p>Upto 60gb Storage</p></div>
                    <div className='d-flex '><i class="fa-regular fa-envelope  ms-2 mt-1 me-3"></i><p>Email+Chat Support</p></div>
                    <div className='d-flex justify-content-center mb-3'><a href='' className='text-dark' >EXPLORE FEATURES<i className="fa-solid fa-arrow-right-to-bracket ms-1"></i></a></div>
                </div>
            </Col>
            <Col sm={12} lg={3} md={6} xl={3}>
            <div className='d-flex flex-column shadow rounded'>
                    <div className='ms-3'><h3 className='fw-bolder'>Premium</h3></div>
                    <div className='ms-3'><p><strike>$389.99/mo</strike></p></div>
                    <div className='ms-3'><h3>$199.99/mo</h3></div>
                    <div className='ms-3 mt-3'><button className='btn btn-primary'>Get Started<i className=" ms-1 fa-solid fa-right-long fa-beat"></i></button></div>
                    <hr />
                    <div className='ms-3'><p>What you'll get:</p></div>
                    <div className='d-flex '><i className="fa-regular fa-user me-3 ms-2 mt-1"></i><p>Upto 75 Users</p></div>
                    <div className='d-flex '><i class="fa-solid fa-cloud-arrow-up ms-2 mt-1 me-3"></i><p>Upto 100gb Storage</p></div>
                    <div className='d-flex '><i class="fa-regular fa-envelope  ms-2 mt-1 me-3"></i><p>Email+Chat+Whatsapp Support</p></div>
                    <div className='d-flex justify-content-center mb-3'><a href='' className='text-dark' >EXPLORE FEATURES<i className="fa-solid fa-arrow-right-to-bracket ms-1"></i></a></div>
                </div>
            </Col>
            </Row>



            <Row className='mt-5 d-flex justify-content-evenly ' >
                <Col sm={12} md={5} lg={5} xl={5} className='mb-5'>
                    <Row className='d-flex shadow rounded justify-content-between' style={{height:'100%'}}>
                        <Col sm={12} md={12} lg={6} xl={6}>
                        <div className='section-one d-flex flex-column'>
                            <div className='bg-success rounded ms-3 mt-3' style={{height:'25px',width:'100px'}}> <p className='text-center'>Free Forever</p></div>
                            <div className='mt-2 ms-3'><h2>Free Starter</h2></div>
                            <div className='mt-2 ms-3'>
                                <p>The quickest and easiest way to try Protocols with basic functionalities</p>

                            </div>
                            <div className='ms-3 mt-3'><button className='btn btn-success'>Get Started<i className=" ms-1 fa-solid fa-right-long fa-beat"></i></button></div>


                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                        <div className='section-two d-flex flex-column'>
                        <div className='ms-3 mt-3'><p>What you'll get:</p></div>
                    <div className='d-flex ms-3 '><i className="fa-regular fa-user me-3 ms-2 mt-1"></i><p>Upto 8 Users</p></div>
                    <div className='d-flex ms-3 '><i class="fa-solid fa-cloud-arrow-up ms-2 mt-1 me-3"></i><p>Upto 3gb Storage</p></div>
                    <div className='d-flex ms-3'><i class="fa-regular fa-envelope  ms-2 mt-1 me-3"></i><p>Email Support</p></div>
                    <div className='d-flex ms-3'><i class="fa-solid fa-check-double  ms-2 mt-1 me-3"></i><p className='d-flex justify-content-center'>Basic of Documents,Task Flow,<br /> Voting,Accounting,Banking,<br />Notes,Investor,Director and Team management included</p></div>
                      
                        </div>
                        </Col>

                    </Row>
                </Col>

                 <Col sm={12} md={5} lg={5} xl={5} className='mb-5'>
                    <Row className='d-flex shadow rounded justify-content-between' style={{height:'100%'}}>
                        <Col sm={12} md={12} lg={6} xl={6}>
                        <div className='section-one d-flex flex-column'>
                            <div className='bg-info rounded ms-3 mt-3' style={{height:'25px',width:'100px'}}> <p className='text-center'>Let's Connect</p></div>
                            <div className='mt-2 ms-3'><h2>Enterprise Plan</h2></div>
                            <div className='mt-2 ms-3'>
                                <p>Effortlessly customise and fine-tune services as your needs shift,ensuring the perfect tools for success</p>

                            </div>
                            <div className='ms-3 mt-3'><button className='btn btn-info text-light'>Get Started<i className=" ms-1 fa-solid fa-right-long fa-beat"></i></button></div>


                        </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                        <div className='section-two d-flex flex-column'>
                        <div className='ms-3 mt-3'><p>What you'll get:</p></div>
                    <div className='d-flex ms-3 '><i className="fa-regular fa-user me-3 ms-2 mt-1"></i><p>More than 75 Users</p></div>
                    <div className='d-flex ms-3'><i class="fa-solid fa-check-double  ms-2 mt-1 me-3"></i><p>Customization of all other features</p></div>
                      
                        </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
           
            
            
        </div>

    </div>
    </>
  )
}

export default LandingPage