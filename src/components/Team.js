import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaBehance,FaInstagram,FaLinkedinIn,FaTwitter,FaVimeoV } from "react-icons/fa";




const Team=()=>(
    <>
        <Container>
            <div className="spacer">
                <div className="team-content">
                    <h2>our Agrical Farm Team </h2>
                    <p>Conveniently customize proactives interfaces without Globally</p>
                </div>
                <div className="team-box">
                    <Row className="team-row">
                        <Col>
                            <div className="team-item">
                                <div className="team-inner">
                                    <div className="team-img">
                                        <img src={require('../image/asset 24.jpeg')}/>
                                    </div>
                                    <div className="team-text">
                                        <a href='' className="team-link">
                                            <h5>Jeson Roy</h5>
                                            <p>Manager</p>
                                        </a>
                                        <div className="team-icon">
                                        <FaTwitter className="twitter"></FaTwitter>
                                        <FaBehance></FaBehance>
                                        
                                        <FaInstagram></FaInstagram>
                                        <FaVimeoV></FaVimeoV>
                                        <FaLinkedinIn></FaLinkedinIn>
                                     
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="team-item">
                                <div className="team-inner">
                                    <div className="team-img">
                                    <img src={require('../image/asset 25.jpeg')}/>
                                    </div>
                                    <div className="team-text">
                                        <a href='' className="team-link">
                                            <h5>Sahjahan Sagor</h5>
                                            <p>Founder & Ceo</p>
                                        </a>
                                        <div className="team-icon">
                                        <FaTwitter className="twitter"></FaTwitter>
                                        <FaBehance></FaBehance>
                                        
                                        <FaInstagram></FaInstagram>
                                        <FaVimeoV></FaVimeoV>
                                        <FaLinkedinIn></FaLinkedinIn>
                                     
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="team-item">
                                <div className="team-inner">
                                    <div className="team-img">
                                    <img src={require('../image/asset 26.jpeg')}/>
                                    </div>
                                    <div className="team-text">
                                        <a href='' className="team-link">
                                            <h5>Alisha Kabir</h5>
                                            <p>Marketer</p>
                                        </a>
                                        <div className="team-icon">
                                        <FaTwitter className="twitter"></FaTwitter>
                                        <FaBehance></FaBehance>
                                        
                                        <FaInstagram></FaInstagram>
                                        <FaVimeoV></FaVimeoV>
                                        <FaLinkedinIn></FaLinkedinIn>
                                     
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="team-item">
                                <div className="team-inner">
                                    <div className="team-img">
                                        <img src={require('../image/asset 27.jpeg')}/>
                                    </div>
                                    <div className="team-text">
                                        <a href='' className="team-link">
                                            <h5>Jeson Smith</h5>
                                            <p>Farmer</p>
                                        </a>
                                        <div className="team-icon">
                                        <FaTwitter className="twitter"></FaTwitter>
                                        <FaBehance></FaBehance>
                                        
                                        <FaInstagram></FaInstagram>
                                        <FaVimeoV></FaVimeoV>
                                        <FaLinkedinIn></FaLinkedinIn>
                                     
                                        </div>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    
                </div>
            </div>
            
    
        </Container>
        
    </>
)
export default Team;