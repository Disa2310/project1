import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const News=()=>{
    return(
        <>
       <div>
            <div className=' news-latter spacer'>
                <Container>
                    <div className="news-content">
                    <Row>
                        <Col >
                        <div className="news-h2">
                            <h2>Subscribe Our Newsletter</h2>
                        </div>
                        </Col>
                        <Col>
                        <div >
                           <Form className="form flex">
                                <Form.Control type="text" placeholder="Enter  Your Email" className="form-end" />
                                <Button type="submit" className="form-btn bg-warning" > Submit</Button>
                        
                         </Form>
                        </div>
                        </Col>
                    </Row>

                    </div>
                </Container>
            </div>
    </div>
        </>
    )
}
export default News;