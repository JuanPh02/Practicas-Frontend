import React, { useState } from 'react';
import "./Sidebar.css";

export const Sidebar= ({sidebar,showSidebar}) => {

  return (
    <>
    
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className='sidebar-items' onClick={showSidebar}>
          <li className='navbar-display'>
          </li>
        </ul>
      </nav>
    </>
  )
}