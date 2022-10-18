import React from "react";
import {Link} from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

import "./Header.css";

  

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="https://www.netmeds.com/assets/gloryweb/images/netmeds-new-logo.svg" />

      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon color="action" className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <div className="header_options">
          <ReceiptLongIcon  color="action" className="header_prescription"/>
          <span className="header_option1">Upload</span>
          {/* <span className="header_option2">Cart</span> */}
        </div>

        <Link to="home">
        <div className="header_options">
          <AccountCircleRoundedIcon color="action" className="header_loginicon" />
          <span className="header_option2">Sign in/Sign Up</span>
          {/* <span className="header_option2">Cart</span> */}
        </div>
        </Link>

        <div className="header_options">
          <ShoppingCartRoundedIcon  color="action"  className="header_carticon" />
          <span className="header_option3">Cart</span>
          <span className="header_cartcount">0</span>
          {/* <span className="header_option2">Cart</span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
