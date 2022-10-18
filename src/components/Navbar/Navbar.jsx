import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo2.png";
import { Container } from 'reactstrap';
import { Sidebar } from '../Sidebar/Sidebar';


export default function Navbar() {

const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='navbar'>
            <Container>
                <a href="/" className='navbar-logo'>
                    <img src={udemLogo} alt="UdeM-logo" />
                </a>
                <h3 className='title'>Postúlate UdeM</h3>
                <FaIcons.FaListOl onClick={showSidebar} style={{ color: "#000" , fontSize: 34}} />
            </Container>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        </div>
    )
}
