import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"

import './header.styles.scss';

const Header = () => (
 <div className = 'header'>
  
  <div className = 'container-logo'>
   <Link to = '/'>
     <Logo className = 'logo'/>
   </Link>
  </div>
  <div className = 'header-items'>
  <Link to = '/shop' className = 'option'>Shop</Link>
  <Link to = '/contact' className = 'option'>Contact</Link>
  </div>

 </div>
)

export default Header;