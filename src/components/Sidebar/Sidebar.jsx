import React from 'react';
import "./Sidebar.css";
import { MenuItems } from './MenuItems';
import {Link} from "react-router-dom";

export const Sidebar= ({sidebar,showSidebar}) => {

  return (
    <>
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className='sidebar-items' onClick={showSidebar}>
          <li className='navbar-display'>
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
                <Link to="/logout" onClick={() => alert("Cerró sesión correctamente")} >
                  <i className="fas fa-arrow-right-from-bracket"></i>
                  <span>Salir</span>
                </Link>
              </li>
        </ul>
      </nav>
    </>
  )
}