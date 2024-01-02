import logo from '.././logo.svg';
import '.././App.css';
import '.././all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Header from "./Header";
import Banner from "./Banner";
import Product from "./Product";
import Probanner from "./Probanner";
import Farm_product from "./Farm_product";
import World from "./world";
import Team from "./Team";
import Fruit from "./Fruit";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRegStar } from "react-icons/fa";
import { Routes, Route } from "react-router-dom"
import Blog from "./Blog";
import Sponcer from "./Sponcer";
import News from "./News";
import Footer from "./Footer";
import Sec_header from './sec_slider';

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



const Home=()=>{
    return(
        <>
        
        
        <Banner></Banner>
        <Product></Product>
        <Probanner></Probanner>
        <Farm_product></Farm_product>
        <World></World>
        <Team></Team>
        <Fruit></Fruit>
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
        <Sec_header></Sec_header>
        <Blog></Blog>
        <Sponcer></Sponcer>
        <News></News>
        <Footer></Footer>
       </>
    )
}
export default Home;