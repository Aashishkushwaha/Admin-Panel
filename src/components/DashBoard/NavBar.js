import React from "react";
import classes from "./DashBoard.module.css";
import Hamberger from "../UI/Hamberger";
import { DropdownButton, Dropdown } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div className={classes.NavBar}>
      <Hamberger />
      <div>
        <DropdownButton
          className={classes.ActionButton}
          id="dropdown-basic"
          title="Dropdown"
        >
          <div className={classes.actionItemsContainer}>
            <a href={'#'}>Profile</a>
            <a href={'#'}>Logout</a>
          </div>
        </DropdownButton>
      </div>
    </div>
  );
};

export default NavBar;
