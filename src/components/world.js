import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const World=()=>{
    return(
        <>
         <div className="world spacer">
         <Container>
           <div className="world-content">
           <Row>
                     <Col>
                        <div className="world-left">
                            <div className="world-image">
                                <img src={require('../image/asset 23.png')}/>
                            </div>
                        </div>
                     </Col>
                    <Col>
                    <div className="world-right">
                            <div className="world-r-content">
                               <h3>Huge Agricul Farm We Are On The World.</h3>
                               <p>Conveniently customize proactive the web services globally
                                 interfaces without globally continually aggregat
                                  few month without globally wellies richard</p>
                                <button className='btn read'><a href=''>Read More  </a></button>
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
export default World;