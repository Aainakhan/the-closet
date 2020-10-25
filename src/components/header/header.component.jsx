import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from '../../firebase/firebase.utils';

import {createStructuredSelector} from 'reselect';

import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({ currentUser,hidden }) => (
  <div className='header'>

    <div className='container-logo'>
      <Link to='/'>
        <Logo className='logo' />
      </Link>
    </div>
    <div className='header-items'>
      <Link to='/shop' className='option'>Shop</Link>
      <Link to='/contact' className='option'>Contact</Link>

      {
        currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )}

      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown/> }
    

  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);