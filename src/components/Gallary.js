import Container from "react-bootstrap/esm/Container";
import Header from "./Header";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import News from "./News";
import Footer from "./Footer";

const Gallary=()=>{
    return(
            <>
                
                <div className="about-bg">
            <div className="about-img"><></>
            <div className="about-content">
                <h2>Agricul Farm About us</h2>
               <ul className="d-flex justify-content-center" >
                <li>Home</li>/
                <li>gallary</li>
               </ul>
            </div>
    
             </div>
        </div>

        {/* gallary image============= */}
        <div className="main-gallary spacer">
        <Container>
            <Row className="flex">
                <Col className="">
                <div className="gallary-img">
                    <img src={require('../image/asset 14.jpeg')}/>
                    
                </div>
                </Col>
                <Col>
                <div className="gallary-img">
                    <img src={require('../image/asset 15.jpeg')}/>
                    
                </div>

                </Col>
            </Row>
            <Row className="flex">
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 14.jpeg')}/>
                    
                </div>
                </Col>
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 15.jpeg')}/>
                    
                </div>

                </Col>
            </Row>
            <Row className="flex">
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 16.jpeg')}/>
                    
                </div>
                </Col>
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 17.jpeg')}/>
                    
                </div>

                </Col>
            </Row>
            <Row className="flex">
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 18.jpeg')}/>
                    
                </div>
                </Col>
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 19.jpeg')}/>
                    
                </div>

                </Col>
                
            </Row>
            <Row className="flex">
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 20.jpeg')}/>
                    
                </div>
                </Col>
                <Col className="py-4">
                <div className="gallary-img">
                    <img src={require('../image/asset 21.jpeg')}/>
                    
                </div>

                </Col>
                
            </Row>

        </Container>
        </div> 


         {/*news bar=====================================  */}
        <News></News>

        {/* footer page=================================== */}
        <Footer></Footer>
            </>
    )
}
export default Gallary;