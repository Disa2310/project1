import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header=()=>{
    return(
        <>
        
    <header>
        <Navbar bg="dark" data-bs-theme="dark">
             <Container>
         <img src={require('../image/asset 0.png')}/>
          <Nav className="main-menu ms-auto">
            <Link to="/Home" className='ms-5'>Home<i class="fa-solid fa-angle-down"></i>
               <Nav className="sub-menu">
                <Link to="">Agrical Farm</Link>
                <Link to="">Agrical Far2</Link>      
                <Link to="">Agrical Farm3</Link>
                <Link to="">Agrical Farm4</Link>
              </Nav> 
              </Link>
             <Link to="/Aboutpage" className='ms-5'>pages<i class="fa-solid fa-angle-down"></i>
                <Nav className="sub-menu">
                    <Link href="#">About page</Link>
                    <Link to="">Service page</Link>
                    <Link to="">Team page</Link>
                    <Link to="">Faq page</Link>
                    <Link to="">404 page</Link>
                </Nav>
                </Link>
            <Link to="/Gallary"  className='ms-5'>Gallary<i class="fa-solid fa-angle-down"></i>    
                <Nav className="sub-menu">
                        <Link to="">Gallary 2 grid</Link>
                        <Link to="">Gallary Massonery</Link>
                </Nav>
                </Link>
            <Link to="/Blog"  className='ms-5'>Blog<i class="fa-solid fa-angle-down"></i>
                <Nav className="sub-menu">
                        <Link to="">Blog rightsidebar</Link>
                        <Link to="">Blog left sidebar</Link>
                        <Link to="">Blog single page</Link>
                </Nav>
            </Link>
            <Link to=""  className='ms-5'>Shop<i class="fa-solid fa-angle-down"></i>
                <Nav className="sub-menu">
                        <Link to="">Product</Link>
                        <Link to="">Product single</Link>
                        <Link to="/shop">Blog single page</Link>
                </Nav>
            </Link>
            <Link to="/Contect"  className='ms-5'>Contect</Link>  
          </Nav>
         <button className='btn ms-5'><a href=''> get in touch</a></button> 
        </Container>
      </Navbar>
    </header>    
      </>  
    )
}
export default Header;