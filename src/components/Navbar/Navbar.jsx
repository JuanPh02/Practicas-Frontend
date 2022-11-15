import React, { useState, useContext } from 'react';
import * as FaIcons from "react-icons/fa";
import "./Navbar.css";
import udemLogo from "../../assets/images/udem_logo2.png";
import { Container } from 'reactstrap';
import { Sidebar } from '../Sidebar/Sidebar';
import { UserContext } from '../../utils/UserContext';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [sidebar, setSidebar] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    setUser({...user, loggedIn: false })
  }

  return (
    <div className={sidebar ? "navbar slide" : "navbar"}>
      <Container>
        <a href="/" className='navbar-logo'>
          <img src={udemLogo} alt="UdeM-logo" />
        </a>
        <h3 className='title'>Postúlate UdeM</h3>
        {user.loggedIn && <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} style={{ color: "#FFF", fontSize: 24 }} />
          </Link>}
        {/* <FaIcons.FaBars onClick={showSidebar} style={{ color: "#FFF", fontSize: 24 }} /> */}
      </Container>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} logout={logout} />
    </div>
  )
}
