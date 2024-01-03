import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Fruit=()=>{
    return(
        <div className='content spacer'>
        <Container >
      <Row className='flex align-items'>
       
        <Col>
            <div className='right-image-content'>
                <div className='sec-content'>
                    <div className='sec-header-fruit'>
                        <h1>Fresh Fruit Agricul </h1>
                        <h2>in Our Store</h2>
                        <p>Conveniently customize proactiv web services globally nterfaces
                             without globally continually aggregate without globally .</p>
                    </div>
                    
                    <div className='about-inner'>
                    <button className='btn'><a href=''> Buy Now </a></button>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </Col>
        <Col>
            <div className='left-image'>
            <img src={require('../image/asset 28.png')}/>
            </div>
        </Col>
        
      </Row>
      
      </Container>
        </div>
    )
}
export default Fruit;