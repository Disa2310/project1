import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import { BsFillClockFill,BsFillTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import React from "react";

import Slider from "react-slick";
import { FaLinkedinIn,FaTwitter,FaVimeoV } from "react-icons/fa6";
import Product from "./Product";
import Sponcer from "./Sponcer";
import Footer from "./Footer";


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


const Aboutpage=()=>{
    return(<>
    
        <div className="about-bg">
            <div className="about-img"><></>
            <div className="about-content">
                <h2>Agricul Farm About us</h2>
               <ul className="d-flex justify-content-center" >
                <li>Home</li>/
                <li>About</li>
               </ul>
            </div>
    
             </div>
        </div>
        {/* content section======================= */}
        <div className='content spacer sceen-bg'>
        <Container >
      <Row>
        <Col>
            <div className='left-image'>
            <img src={require('../image/asset 11.png')}/>
            </div>
        </Col>
        <Col>
            <div className='right-image-content'>
                <div className='sec-content'>
                    <div className='sec-header'>
                        <h2>We are Best Organic Products for Your Health.</h2>
                    </div>
                    
                    <div className="sec-con">
                        <h5>Powerful tool for your customer to help user find solution for build something great.</h5>
                        <p>Conveniently customize proactive web services for leveraged interfaces without
                             globally continually aggregate frictionlent without globally wellies richard.</p>
                             <p>Authoritatively plagiarize synergistic total linkage before cost effective 
                                leadership skills. Proactively innovate distributed be practices 
                                through seamless deliverables. Uniquely maximize granular 
                                benefits before exceptional deliverables.</p>
                    </div>
                    <div className='about-inner'>
                    <button className='btn about'><a href=''> About us  </a></button>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </Col>
        
      </Row>
      </Container>
        </div>

        {/* fruit section================= */}
        <div className="fruit-bg spacer">
            {/* <div className="background "> */}
            <Container>
                <Row>
                    <Col className="fruit-text">
                        <div className="text-center border-end">
                        <div>
                            <img src={require('../image/fruit1.png')}/>
                       <h3>5050</h3> 
                        <p>organic tomato</p>
                       
                        </div>
                        </div>
                    </Col>
                    <Col className="fruit-text">
                        <div className="text-center border-end">
                        <div>
                            <img src={require('../image/fruit2.png')}/>
                            <h3>6200</h3> 
                        <p>organic bluebarry</p>
                        
                        </div>
                        </div>
                    </Col>
                    <Col className="fruit-text">
                        <div className="text-center border-end">
                        <div>
                            <img src={require('../image/fruit3.png')}/>
                        
                            <h3>8100</h3> 
                        <p>organic orange</p>
                        </div>
                        </div>
                    </Col>
                    <Col className="fruit-text">
                        <div className="text-center">
                        <div>
                            <img src={require('../image/fruit4.png')}/>
                        
                            <h3>6300</h3> 
                        <p>organic carrot</p>
                        </div>
                        </div>
                    </Col>

                    
                </Row>
            </Container>
            {/* </div> */}
            
        </div>

        {/* heistory section =====================*/}

        <div className="history ">
        <Container>
            <div className="history-header text-start fw-bold">
                <h3>History</h3>
                <h3>25 Years Agricul Farm Traditions</h3>
            </div>
            <div className="history-wrapper">
                <div className="history-inner">
                    <div className="history-image">
                        <img src={require('../image/jcb.jpg')}/>
                    </div>
                    <div className="history-content d-flex">
                        <div className="history-left">
                            <h3>Since</h3>
                            <h2>1995</h2>
                        </div>
                        <div  className="history-right">
                        Continually productize compelling elated them setting up to website with all theme
                         imperdienttmolestieo continually productiz compellin quality for packedq for packed with 
                         all elated themes setting up to website and creating pages compellin quality for packed with 
                         all elated themes setting website.Continually productize compelling quality elated them website with all them imp
                         creating pages compelling quality for packed with all elated themes setting up to website .
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        </div>


        {/* agrical farm====================== */}
        <Container>
    <div className='sec-header-slider  spacer text-center'>
                    <div className='sec-h-content'>
                    <h2>What Client Say Our Agricul Farm.</h2>
                        <p>Conveniently customize proactive services leveraged interfaces without Globally.</p>
                    </div>
                        
                    
                    <Slider {...settings}>
                    <div>
          <Card >
            <div className='flex p-3'>
            <Card.Img  className='flex'variant="top"  src={require('../image/asset 29.jpeg')}/>
            <Card.Title>
              <h5 className='h5'>sahjahan sagor</h5>
              <h6 className='h6'>Founder & ceo</h6>
              <h6 className='h6'>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              </h6>
              
            </Card.Title>
            
            </div>
          <Card.Body>
      
        <Card.Text>
        <img src={require('../image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('../image/asset 31.png')}/>
         </div>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card>
            <div className='flex p-3 card-padding'>
            <Card.Img  className='flex'variant="top"  src={require('../image/asset 32.jpeg')}/>
            <Card.Title>
            <h5 className='h5'>Jeson Smith</h5>
              <h6 className='h6'>Founder & ceo</h6>
              <h6 className='h6'>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              </h6>
            </Card.Title>
            </div>
              
              
      <Card.Body>
      
        <Card.Text >
        <img src={require('../image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('../image/asset 31.png')}/>
         </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card >
            <div className='flex p-3'>
            <Card.Img  className='flex'variant="top"  src={require('../image/asset 33.jpeg')}/>
            <Card.Title>
            <h5 className='h5'>Alisha Kabir</h5>
              <h6 className='h6'>Founder & ceo</h6>
              <h6 className='h6'>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              <FaRegStar></FaRegStar>
              </h6>
            </Card.Title>
            </div>
          <Card.Body>
      
        <Card.Text>
        <img src={require('../image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('../image/asset 31.png')}/>
         </div>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          
        </Slider>
    
        </div>
        </Container>

        {/* sponcer slider section======================== */}

        <Sponcer></Sponcer>
        
        {/* footer section================== */}
        <Footer></Footer>
        </>
    )
      
                          
                           
                          

}
export default Aboutpage;