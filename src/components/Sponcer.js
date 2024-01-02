import Container from "react-bootstrap/esm/Container";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
   
    infinite: true,
    speed: 2000,
    autoplaySpeed:2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true
  };


const Sponcer=()=>{
    return(
        <>
        <div className="spacer">
            <Container>
                <div className="main-sponcer">
                    <div className="sponcer-slider">
                    <Slider {...settings}>
          <div>
            <div className="sponcer-item">
                <div className="sponcer-img">
                <img src={require('../image/asset 37.png')}/>
                </div>
            </div>
          </div>
          <div>
          <div className="sponcer-item">
                <div className="sponcer-img">
                <img src={require('../image/asset 38.png')}/>
                </div>
            </div>
          </div>
          <div>
          <div className="sponcer-item">
                <div className="sponcer-img">
                <img src={require('../image/asset 39.png')}/>
                </div>
            </div>
          </div>
          <div>
          <div className="sponcer-item">
                <div className="sponcer-img">
                <img src={require('../image/asset 40.png')}/>
                </div>
            </div>
          </div>
          <div>
          <div className="sponcer-item">
                <div className="sponcer-img">
                <img src={require('../image/asset 41.png')}/>
                </div>
            </div>
          </div>
          
        </Slider>
                    </div>
                </div>
            </Container>
        </div>
        </>
    )
}
export default Sponcer;