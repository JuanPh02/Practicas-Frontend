import React, {useContext} from 'react';
import "./Sidebar.css";
import { MenuItems } from './MenuItems';
import { Link } from "react-router-dom";
import { UserContext } from '../../utils/UserContext';

export const Sidebar = ({ sidebar, showSidebar, logout }) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className='sidebar-items' onClick={showSidebar}>
          <li className='navbar-display'>
            <p className='name'>{user.name}</p>
          </li>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
          <li className="nav-text" >
            <Link to="/" onClick={logout} >
              <i className="fas fa-arrow-right-from-bracket"></i>
              <span>Salir</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}