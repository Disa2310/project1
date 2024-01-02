import logo from './logo.svg';
import './App.css';
import './all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
// import Banner from './components/Banner';
// import Product from './components/Product';
// import Probanner from './components/Probanner';
// import Farm_product from './components/Farm_product';
// import World from './components/world';
// import Team from './components/Team';
// import Fruit from './components/Fruit';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import React from "react";
// import Slider from "react-slick";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/esm/Container';
// import { FaRegStar } from "react-icons/fa";
// import Blog from './components/Blog';
// import Sponcer from './components/Sponcer';
// import News from './components/News';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Aboutpage from './components/Aboutpage';
import Gallary from './components/Gallary';
import Contect from './components/contect';
import Shop from './components/Shop';




// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   speed: 2000,
//   autoplaySpeed: 2000,
//   cssEase: "linear"
// };
function App() {
  return (
     <>
     <Header></Header>
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Aboutpage' element={<Aboutpage/>}/>
      <Route path='/Gallary' element={<Gallary/>}/>
      <Route path='/Contect' element={<Contect/>}/>
      <Route path='/Shop' element={<Shop/>}/>
     </Routes>
      
  
    
      
      {/* <Banner></Banner>
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
            <Card.Img  className='flex'variant="top"  src={require('./image/asset 29.jpeg')}/>
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
        <img src={require('./image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('./image/asset 31.png')}/>
         </div>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card>
            <div className='flex p-3 card-padding'>
            <Card.Img  className='flex'variant="top"  src={require('./image/asset 32.jpeg')}/>
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
        <img src={require('./image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('./image/asset 31.png')}/>
         </div>
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
          <Card >
            <div className='flex p-3'>
            <Card.Img  className='flex'variant="top"  src={require('./image/asset 33.jpeg')}/>
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
        <img src={require('./image/asset 30.png')}/>Continually Onceptualizef Technically invs Professionally
         monetizeturkeyf Testingdu Frofessionally oe-enablfunctaizede-come 
         rce Onceptualize Technically initiatives.
         <div  className='coma flex'>
         <img src={require('./image/asset 31.png')}/>
         </div>
         
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          
        </Slider>
    
        </div>
        </Container>
    <Blog></Blog>
    <Sponcer></Sponcer>
    <News></News>     */}
    {/* <Footer></Footer>  */}
   
      </>
    
  );
}

export default App;
