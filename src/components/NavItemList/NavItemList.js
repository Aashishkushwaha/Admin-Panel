import React from 'react';
import classes from './NavItemList.module.css';


const NavItemList = props => {
  return (
    <div className={classes.NavItemsContainer}>
      {props.children}
    </div>
  )
}

export default NavItemList;