import React from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { FaRegStar } from "react-icons/fa";




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


const Sec_header=()=>{
    return(
        <>
        <Container>
    <div className='sec-header-slider  spacer text-align'>
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
        
        </>
    )
}
export default Sec_header;