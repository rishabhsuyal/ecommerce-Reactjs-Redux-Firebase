import React from 'react';
import "./header.scss";
import CartIcon from '../cart-icon/cart-icon';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from '../../firebase/firebase.utils';
import CartDropdown from "../cart-dropdown/cart-dropdown";

function Header({currentUser, hidden}) {
    console.log("ey",currentUser);
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="options" to="/shop">
                    SHOP
                </Link>
                <Link className="options" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser?
                    (<div className="options" onClick={()=>auth.signOut()}>SignOut</div>)
                    :
                    (<Link className="options" to="/login">SignIN</Link>)
                }
                <CartIcon />
            </div> 
            {
                hidden ? null:<CartDropdown/> 
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);
