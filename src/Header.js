import React from "react";
import {Link} from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
// import Checkout from "./Checkout";
// import Home from "./Home";
import "./Header.css";
import { useStateValue } from "./StateProvider";

  
 
function Header() {

  const[{basket},dispatch]= useStateValue();
   
  return (
    <div className="header"> 
      <Link to="/homecc">
      <img className="header_logo" src="netmeds-new-logo.svg" alt="netmeds-new-logo "/>
      </Link>

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon color="action" className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <Link to="/login">
        <div className="header_options">
          <ReceiptLongIcon  color="action" className="header_prescription"/>
          <span className="header_option1">Upload</span>
          {/* <span className="header_option2">Cart</span> */}
        </div>
        </Link>

        <div className="header_options">
          <AccountCircleRoundedIcon color="action" className="header_loginicon" />
          <span className="header_option2">Sign in/Sign Up</span>
          {/* <span className="header_option2">Cart</span> */}
        </div>
        
        <Link to="/checkout">
        <div className="header_options">
          <ShoppingCartRoundedIcon  color="action"  className="header_carticon" />
          <span className="header_option3">Cart</span>
          <span className="header_cartcount">
            {basket .length}
          </span>
          {/* <span className="header_option2">Cart</span> */}
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
