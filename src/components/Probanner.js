import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Probanner=()=>{
    return(
        <div className='content spacer'>
        <Container >
      <Row>
        <Col>
            <div className='left-image'>
            <img src={require('../image/asset 11.png')}/>
            </div>
        </Col>
        <Col>
            <div className='right-image-content'>
                <div className='sec-content'>
                    <div className='sec-header'>
                        <h1>Agricul Farm Organic Products for Healthy living.</h1>
                        <p>Conveniently customize proactive web services for leveraged without globally wellies richard.</p>
                    </div>
                    <div className='about-inner flex'>
                        <div>
                            <img src={require('../image/asset 12.jpeg')}/>
                        </div>
                        <div className='inner-content'>
                            <div>Certified Organic Standards</div>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                    <div className='about-inner flex'>
                        <div>
                            <img src={require('../image/asset 13.jpeg')}/>
                        </div>
                        <div className='inner-content'>
                            <div>Fair Prices For You</div>
                            <p>Continually aggregate frictionle interc without globally wellies richard.</p>
                        </div>
                    </div>
                    <div className='about-inner'>
                    <button className='btn m-5 discover'><a href=''> About us  </a></button>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </Col>
        
      </Row>
      </Container>
        </div>
    )
}

export default Probanner;