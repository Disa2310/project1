import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Product=()=>{
    return(
        <>
        
                <div className="main-product">
                <img src={require('../image/asset 1.png')}/>
             
                <Container> 
                    <div className="product-content ">
                        <h2>Agricul Farm Ecology Products</h2>
                        <p>Conveniently customize proactive services leveraged interfaces without Globally</p>
                    </div> 
                    <Container>
                    <Row>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 4.png')}/>
                                </div>
                            </Col>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 5.png')}/>
                                </div>
                            </Col>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 6.png')}/>
                                </div>
                            </Col>
                            
                            
                        </Row>
                        <Row>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 7.png')}/>
                                </div>
                            </Col>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 8.png')}/>
                                </div>
                            </Col>
                            <Col className="product-box flex">
                                <div className="box">
                                    <h3>fresh vegitable</h3>
                                    <p>Continually aggregate interfaces thout.</p>
                                </div>
                                <div className="img">
                                <img src={require('../image/asset 9.png')}/>
                                </div>
                            </Col>
                            
                            
                        </Row>
                        
                    </Container>
                                    
                
              
            </Container>
                <div className="flex ">
                <img src={require('../image/asset 2.png')}/>
                <img src={require('../image/asset 3.png')}/>

                </div> 
                
       
                </div>
        </>
    )
}
export default Product;