import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Blog=() =>{
    return(
        <>
        
            <div className="spacer blog">
                    <Container>
                    <div className="team-content sec-h-content">
                        <h2>our Agrical Farm Team </h2>
                        <p>Conveniently customize proactives interfaces without Globally</p>
                    </div>
                    <div className="blog-main-img">
                    <Row>
                        <Col className="blog-all">
                            <div className="blog-top">
                                <div className="blog-img">
                                    <img src={require('../image/asset 34.jpeg')}/>
                                </div>
                            </div>
                            <div className="blog-bottom text-center">
                                <div>
                                    <h5>Tips For Ripening Your Fruits &amp; Vegetable</h5>
                                </div>
                                <div>
                                    <p>Admin <span>Kh.rasel</span><span>10 comments</span></p>
                                    
                                </div>
                                <div>
                                    <a href="" className="border">Read More</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="blog-all">
                            <div className="blog-top">
                                <div className="blog-img">
                                    <img src={require('../image/asset 35.jpeg')}/>
                                </div>
                            </div>
                            <div className="blog-bottom text-center">
                                <div>
                                    <h5>Tips For Ripening Your Fruits &amp; Vegetable</h5>
                                </div>
                                <div>
                                    <p>Admin <span>Kh.rasel</span><span>10 comments</span></p>
                                    
                                </div>
                                <div>
                                    <a href="" className="border">Read More</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="blog-all">
                            <div className="blog-top">
                                <div className="blog-img">
                                    <img src={require('../image/asset 36.jpeg')}/>
                                </div>
                            </div>
                            <div className="blog-bottom text-center">
                                <div>
                                    <h5>Tips For Ripening Your Fruits &amp; Vegetable</h5>
                                </div>
                                <div>
                                    <p>Admin <span>Kh.rasel</span><span>10 comments</span></p>
                                    
                                </div>
                                <div>
                                    <a href="" className="border">Read More</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    </div>
                    
                    </Container>
                    
            </div>
        
        
        </>
    )
}
export default Blog;