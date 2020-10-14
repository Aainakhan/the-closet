import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => (
 <div className = 'header'>
  
  <div className = 'container-logo'>
   <Link to = '/'>
     <Logo className = 'logo'/>
   </Link>
  </div>
  <div className = 'header-items'>
  <Link to = '/shop' className = 'option'>Shop</Link>
  <Link to = '/contact' className = 'option'>Contact</Link>
 
  {
    currentUser 
    ?
    <div className = 'option' onClick = {()=> auth.signOut()}>Sign Out</div>
    :
    <Link to = '/signin'>Sign In</Link>
  }
  </div>

 </div>
)

export default Header;