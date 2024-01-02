import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaPhone,FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

const Footer =() =>{
    return(
        <>
        <footer className="footer ">
            <Container>
                <Row>
                    <Col>
                        <div className="footer1-logo">
                            <img src={require('../image/asset 0.png')}/>
                        </div>
                        <div className="footer1-p">
                        Conveniently customizec web services aggregate frictionle internet withouevs Conveniently customizec.
                        </div>
                        <div>
                            <p>aggregate frictionle without aggregate Conveniently customizec efrictionle.</p>
                        </div>
                    </Col>
                    <Col>
                       <div className="footer2">
                            <h4>Keep In Touch</h4>
                       </div>
                       <div>
                            <ul className="footer2-li">
                                <li className="flex">
                                    <div className="f-icon"><FaLocationDot></FaLocationDot></div>
                                    <div>Sector # 48,123 Vokte Street, Melborn city, Australia</div>
                                </li>
                                <li className="flex">
                                    <div className="f-icon"><FaPhone></FaPhone></div>
                                    <div>+88978-658-125, 0078-98-954, +1655-456-523 </div>
                                </li>
                                <li className="flex">
                                    <div className="f-icon"><BsEnvelopeFill></BsEnvelopeFill></div>
                                    <div> Chashi@gmail.com</div>
                                </li>
                            </ul>
                       </div>
                    </Col>
                    <Col>
                    <div className="footer2  ">
                            <h4>Chashi Product</h4>
                       </div>
                       <div>
                            <ul className="footer2-li py-4">
                                <li className="flex footer3-img">
                                    <img src={require('../image/asset 34.jpeg')}/>
                                    <div className="footer3-con">
                                    <p>Fruits &Vegetable</p>
                                        <h6>$24.99</h6>
                                    </div>
                                    
                                </li>
                                <li className="flex footer3-img py-4">
                                    <img src={require('../image/asset 35.jpeg')}/>
                                    <div className="footer3-con">
                                    <p>Natural &Honey</p>
                                        <h6>$25.99</h6>
                                    </div>
                                    
                                </li>
                               
                               
                            </ul>
                       </div>
                    </Col>
                    <Col>
                    <div className="footer2  ">
                            <h4>Chashi Product</h4>
                    </div>
                    <Row className="d-flex py-4">
                       <Col className="footer3-img">
                       <a href=""><img src={require('../image/asset 42.jpeg')} className="me-1 ms-1"/></a>
                       <a href=""><img src={require('../image/asset 43.jpeg')} className="me-1 ms-1"/></a>
                       <a href=""><img src={require('../image/asset 44.jpeg')} className="me-1 ms-1"/></a>
                       </Col>
                      <div className="py-2"> 
                      <Col className="footer3-img">
                       <a href=""><img src={require('../image/asset 45.jpeg')} className="me-1 ms-1"/></a>
                       <a href=""><img src={require('../image/asset 46.jpeg')} className="me-1 ms-1"/></a>
                       <a href=""><img src={require('../image/asset 47.jpeg')} className="me-1 ms-1"/></a>
                       </Col>
                      </div>
                     </Row>   
                    </Col>

                </Row>
                <hr></hr>
            </Container>
        </footer>
        </>
    )
}
export default Footer;