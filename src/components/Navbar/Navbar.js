import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import "./Navbar.css";

function MyNavbar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="centerNavbar">
                    <Navbar.Brand href='' className="navbrandstyle">
                        <img
                            alt=""
                            src="android-chrome-192x192.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        {"Simple URL Shortener by "}
                        <a href='https://github.com/akshitamohil' className='git-link'>Akshita </a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;