import React from 'react';
import "./Header.css" ; 
import { HashLink } from "react-router-hash-link";

function Header() {

return (
    <div className="header-container">
       
        <ul className="menu-ul">
          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#geography">Geography
                </HashLink></li>
          
          <li className="header-menu-item">
           <HashLink className="header-menu-item-link" to="/#about">About
          </HashLink> </li>
          
          <li className="header-menu-item">
              <HashLink className="header-menu-item-link" to="/#culture">Culture
              </HashLink>
            </li>

          <li className="header-menu-item">
            <HashLink className="header-menu-item-link" to="/#history">History
            </HashLink>

            <li className="header-menu-item">
              <HashLink className="header-menu-item-link" to="/#events">Events
               </HashLink>
            </li>

          </li>
          </ul>
    
   </div> 
)
}
  

export default Header ;