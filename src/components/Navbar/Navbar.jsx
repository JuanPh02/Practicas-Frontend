import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo.png";
import { Container } from 'reactstrap';

export default function Navbar() {

    return (
        <div className='navbar'>
            <Container>
                <a href="/" className='navbar-logo'>
                    <img src={udemLogo} alt="UdeM-logo" />
                </a>
                <h3 className='title'>postúlate udem</h3>
            </Container>
        </div>
    )
}
