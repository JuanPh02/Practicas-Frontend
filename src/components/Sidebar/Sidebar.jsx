import React from 'react';
import "./Sidebar.css";
import { MenuItems } from './MenuItems';

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
                <a href='/'>
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </a>
              </li>
            )
          })}
              <li className="nav-text" >
                <a href="/" >
                  <i className="fas fa-arrow-right-from-bracket"></i>
                  <span>Salir</span>
                </a>
              </li>
        </ul>
      </nav>
    </>
  )
}