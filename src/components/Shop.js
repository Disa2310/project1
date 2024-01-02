import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from "react-bootstrap/esm/Col";


const Shop=()=>{
    return(
        <>

        {/* about content================================= */}
        <div className="about-bg">
            <div className="about-img"><></>
            <div className="about-content">
                <h2>Agricul Farm About us</h2>
               <ul className="d-flex justify-content-center" >
                <li>Home</li>/
                <li>Blog single page</li>
               </ul>
            </div>
    
             </div>
        </div>


        {/* shop-cart section============================== */}
        <div className="shop-cart spacer">
            <Container>
                <div className="shop-section">
                    <div className="card-top">
                        <Table responsive="sm">
                          
                            
                          
        <thead>
          <tr >
            <th>Product</th>
            <th>Price</th>
            <th>Quality</th>
            <th>Total</th>
            <th>Edit</th>
            
          </tr>
         
        </thead>
        
        <tbody>
          <tr>
            <td className="td flex align-items-center">
            <img src={require('../image/shop2.jpg')}/>
            <div>
                <p className="mb-0" >Product text Hear</p>
            </div>
            </td >
            <td>$ 250</td>
            <td>
               <div>
               <button>-</button>
               <button>3</button>
               <button>+</button>

              </div>
              </td>
            <td>$ 750</td>
            <td><img src={require('../image/del.png')}/></td>
            
          </tr>

          <tr>
            <td className="td flex">
            <img src={require('../image/shop1.jpg')}/>
            <div>
                <p className="mb-0" >Product text Hear</p>
            </div>
            </td>
            <td>$ 250</td>
            <td>
               <div>
               <button>-</button>
               <button>2</button>
               <button>+</button>

              </div>
              </td>
            <td>$ 500</td>
            <td><img src={require('../image/del.png')}/></td>
            
          </tr>
          <tr>
            <td className="td flex">
            <img src={require('../image/shop3.jpg')}/>
            <div>
                <p className="mb-0" >Product text Hear</p>
            </div>
            </td>
            <td>$ 50</td>
            <td>
               <div>
               <button>-</button>
               <button>2</button>
               <button>+</button>

              </div>
              </td>
            <td>$ 100</td>
            <td><img src={require('../image/del.png')}/></td>
            
          </tr>
          <tr>
            <td className="td flex">
            <img src={require('../image/shop4.jpg')}/>
            <div>
                <p className="mb-0" >Product text Hear</p>
            </div>
            </td>
            <td>$ 100</td>
            <td>
               <div>
               <button>-</button>
               <button>2</button>
               <button>+</button>

              </div>
              </td>
            <td>$ 200</td>
            <td><img src={require('../image/del.png')}/></td>
            
          </tr>
          <tr>
            <td className="td flex">
            <img src={require('../image/shop5.jpg')}/>
            <div>
                <p className="mb-0" >Product text Hear</p>
            </div>
            </td>
            <td>$ 200</td>
            <td>
               <div>
               <button className="shop-btn">-</button>
               <button className="shop-btn">2</button>
               <button className="shop-btn">+</button>

              </div>
              </td>
            <td>$ 400</td>
            <td><img src={require('../image/del.png')}/></td>
            
          </tr>
        </tbody>
    </Table>
                        
                        
                        
                    </div>
                </div>
            </Container>
        </div>



        {/* card-bottom================================== */}
        <Container>
          <Row>
          <Col>
          <div className="card-bottom">
            <div className="card-checkbox">
            <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
            </div>

          </div>
          </Col>
          </Row>
          
          
        </Container>
        </>
    )
}
export default Shop;
