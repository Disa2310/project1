import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaPhone,FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";
import News from "./News";


const Contect=()=>{
    return(
        <>
        {/* about bg========================= */}
            <div className="about-bg">
            <div className="about-img"><></>
            <div className="about-content">
                <h2>Agricul Farm About us</h2>
               <ul className="d-flex justify-content-center" >
                <li>Home</li>/
                <li>contect</li>
               </ul>
            </div>
    
             </div>
        </div>

        {/* content-section==========================  */}
        <div className="spacer">
            <div className="contect-top">
            <Container>
                <Row>
                <Col >
                        <div className="content-contect mb-5 flex">
                        <div className="contect-icon">
                            <li><FaLocationDot></FaLocationDot></li>
                        </div>
                        <div className="px-5">
                        <p>Sector # 48,123 Street,Melbourn City Australia.</p>
                            
                        </div>
                        </div>
                        
                            
                        
                    </Col>
                    <Col >
                        <div className="content-contect flex">
                        <div className="contect-icon">
                            <li><FaPhone></FaPhone></li>
                        </div>
                        <div className="px-5">
                        <p>
+88978-658-125, 0078-98-954 012-859-6510003.</p>
                            
                        </div>
                        </div>
                        
                            
                        
                    </Col>
                    <Col >
                        <div className="content-contect flex">
                        <div className="contect-icon">
                            <li><BsEnvelopeFill></BsEnvelopeFill></li>
                        </div>
                        <div className="px-5">
                        <p>chashi@gmail.com www,chashi@gmail.com</p>
                            
                        </div>
                        </div>
                        
                            
                        
                    </Col>
                    
                </Row>
                <div className="flex">
                    <Row>
                        <Col>
                            <div>
                                
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.196916271655!2d-1.657454217075487!3d35.17664428729331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78e3322b78fb17%3A0xfc46c0d61f7880c9!2sRestaurant%20%26%20Cafeteria%20khezzari!5e0!3m2!1sen!2sin!4v1697488751105!5m2!1sen!2sin" className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                            <div>
                            <Form className="map px-4">
                                <Row className="mb-4">
                                    <Col>
                                    <Form.Control className="border-redius" placeholder="Name*" />
                                    </Col>
                                    <Col>
                                    <Form.Control  className="border-redius"placeholder="Email*" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col>
                                    <Form.Control className="border-redius" placeholder="Subject*" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col>
                                    <Form.Control as="textarea" className="message" placeholder="Message*" rows={3} />
                                    </Col>
                                </Row>
                                <button className='contect-btn'><a href=''> About us  </a></button>
                                


                                </Form> 
                                
                            
                            </div>
                        </Col>
                        
                    </Row>
                </div>

                

                
            </Container>


            </div>
            

            
            
        </div>

        {/* news section=========================== */}


        <News></News>

        
        {/* footer section===================== */}
        <Footer></Footer>
        </>
    )
}
    
export default Contect;
