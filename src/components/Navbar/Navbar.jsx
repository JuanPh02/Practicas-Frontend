import React, { useState} from 'react';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo2.png";
import { Container } from 'reactstrap';
import { Sidebar } from '../Sidebar/Sidebar';

export default function Navbar() {

const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className= {sidebar ? "navbar slide" : "navbar"}>
            <Container>
                <a href="/" className='navbar-logo'>
                    <img src={udemLogo} alt="UdeM-logo" />
                </a>
                <h3 className='title'>Postúlate UdeM</h3>
                <FaIcons.FaBars onClick={showSidebar} style={{ color: "#FFF" , fontSize: 24}} />
            </Container>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        </div>
    )
}
