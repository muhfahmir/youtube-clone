import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import Fahmi from "./assets/images/fahmi.jpeg";

import "./Header.css";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      {/* top left */}
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="Logo Youtube"
          />
        </Link>
      </div>

      {/* middle */}
      <div className="header__input">
        <input
          type="text"
          placeholder="Search ..."
          value={inputSearch}
          onChange={(event) => setInputSearch(event.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      {/* top right */}
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar alt="Remy Sharp" src={Fahmi} />
      </div>
    </div>
  );
}

export default Header;
