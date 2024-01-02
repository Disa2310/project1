import Container from "react-bootstrap/esm/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Farm_product =() =>{
    return(
        <>
        <div className="main-farm-product spacer"> 
            <Container>
                <div className="farm-content">
                    <h3>Agricul Farm Organic Products</h3>
                    <p>Conveniently customize proactives into everaged interfaces without Globally</p>
                </div>

        <Navbar className="see-all">
        <Container>
         
          <Nav className="m-auto">
            <Nav.Link href="#">See All</Nav.Link>
            <Nav.Link href="#">Fruits</Nav.Link>
            <Nav.Link href="#">Wheat</Nav.Link>
            <Nav.Link href="#">vegitable</Nav.Link>
            <Nav.Link href="#">Milk</Nav.Link>
            <Nav.Link href="#">Honey</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Row className="flex fresh">
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 14.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 15.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 16.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>

        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 17.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 18.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 19.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 20.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 21.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>
        <Col className="fresh-fruit">
        <div className="prodct-fruit">
            <div className="produit-inner-fruit">
                <div className="product-thumb">
                    <img src={require('../image/asset 22.jpeg')}/>
                </div>
            </div>
        </div>
        </Col>

      </Row>

      </Container>
        </div>
        </>
    )
}
export default Farm_product;